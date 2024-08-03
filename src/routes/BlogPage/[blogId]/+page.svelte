<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import custom_axios from "../../../axios/AxiosSetup";
  import { invalidate } from "$app/navigation";

  /** @type {import('./$types').ActionData} */
  export let form;

  let blogId: string;
  let userId: string;
  let blog: {
    id: string;
    title: string;
    content: string;
    price: number;
    genre: string;
    authorId: string;
    author: {
      id: string;
      username: string;
      walletAddress: string;
    };
  } | null = null;

  let hasPaid = false;
  let showPaymentForm = false;
  let amount: number;

  // Extract blogId from the URL
  $: {
    const unsubscribe = page.subscribe((value) => {
      blogId = value.params.blogId;
    });
    unsubscribe();
  }

  // Fetch user details
  async function fetchUserDetails() {
    try {
      const response = await custom_axios.get("/auth/details");
      userId = response.data.user.id;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  // Fetch blog details
  async function fetchBlogDetails() {
    try {
      const response = await custom_axios.get(
        `http://localhost:3000/api/blogs/${blogId}`
      );
      blog = response.data;
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  }

  // Check if user has paid for the blog
  async function checkPaymentStatus() {
    try {
      const response = await custom_axios.get(
        `http://localhost:3000/payments/user/${userId}`
      );
      hasPaid = response.data.some((payment) => payment.blogId === blogId);
    } catch (error) {
      console.error("Error checking payment status:", error);
    }
  }

  // Fetch blog details and payment status when the component mounts
  onMount(() => {
    fetchUserDetails();
    fetchBlogDetails().then(() => {
      if (blog && blog.price > 0) {
        checkPaymentStatus();
      }
    });
  });

  // Handle payment submission
  async function handlePayment(paymentAmount: number) {
    try {
      console.log("handle payment");
      await custom_axios.post("http://localhost:3000/payments/pay-to-view", {
        userId,
        blogId: blog?.id,
        amount: paymentAmount,
      });
      hasPaid = true;
      invalidate("form"); // Invalidate the form to reflect changes
    } catch (error) {
      console.error("Payment error:", error);
    }
  }

  // Watch for form success and call handlePayment if successful and blog is not null
  $: {
    if (form?.success && blog) {
      handlePayment(form?.amount);
    }
  }
</script>

<div class="container mx-auto p-8">
  {#if blog}
    <div class="blog-details bg-ywllow-300 p-8 rounded-lg shadow-lg">
      {#if form?.success}
        <h1>{form?.success}</h1>
      {/if}
      <h1 class="title text-4xl font-bold mb-6 text-center text-blue-900">
        {blog.title}
      </h1>
      <p class="author text-lg mb-4">
        <b>Author Name: </b>{blog.author.username}
      </p>
      <p class="wallet text-lg mb-4">
        <b>Author's Wallet Address: </b>{blog.author.walletAddress}
      </p>
      <div class="content mb-6 text-lg text-gray-800">
        {#if blog.price === 0 || (blog.price > 0 && (blog.authorId === userId || hasPaid))}
          <h1 class="title text-3xl font-bold mb-6 text-center text-blue-900">
            Enjoy the Blog !!
          </h1>
          <p class="mb-4">{blog.content}</p>
          {#if blog.price === 0 && blog.authorId !== userId}
            <form method="POST" action="?/pay">
              <div class="flex flex-wrap -mx-3 mb-2">
                <div
                  class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105"
                >
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                  />
                </div>
                <div
                  class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105"
                >
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                  />
                </div>
                <div
                  class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105"
                >
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="amount"
                  >
                    Amount
                  </label>
                  <input
                    name="amount"
                    bind:value={amount}
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="amount"
                    type="number"
                    min="0"
                    placeholder="Enter Tip Amount"
                  />
                </div>
                <input
                  type="hidden"
                  name="walletAddress"
                  value={blog.author.walletAddress}
                />
                <input type="hidden" name="blogTitle" bind:value={blog.title} />
                <button
                  type="submit"
                  class="bg-yellow-300 text-white font-bold mt-5 ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-yellow-400 transition-transform transform hover:scale-105"
                >
                  Tip Author
                </button>
              </div>
            </form>
          {/if}
        {:else if showPaymentForm}
          <form method="POST" action="?/pay">
            <div class="flex flex-wrap -mx-3 mb-2">
              <div
                class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105"
              >
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="text"
                  placeholder="Enter email"
                />
              </div>
              <div
                class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105"
              >
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="text"
                  placeholder="Enter password"
                />
              </div>
              <input
                type="hidden"
                name="walletAddress"
                value={blog.author.walletAddress}
              />
              <input type="hidden" name="amount" value={blog.price} />
              <input type="hidden" name="blogTitle" bind:value={blog.title} />
              <button
                type="submit"
                class="bg-white text-black font-bold mt-5 ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition-transform transform hover:scale-105"
              >
                Pay to View
              </button>
            </div>
          </form>
        {:else}
          <button
            on:click={() => (showPaymentForm = true)}
            class="btn btn-primary"
          >
            Pay {blog.price} Satoshis to View
          </button>
        {/if}
      </div>
    </div>
  {:else}
    <p class="text-center text-gray-700">Loading blog details...</p>
  {/if}
</div>

<style>
  .container {
    max-width: 800px;
  }

  .blog-details {
    background-color: #f8fafc;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }

  .title {
    color: #1e3a8a;
  }

  .author,
  .wallet {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  .content {
    font-size: 1rem;
    color: #334155;
  }

  .btn-primary {
    background-color: #3b82f6;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
  }

  .btn-primary:hover {
    background-color: #2563eb;
  }
</style>
