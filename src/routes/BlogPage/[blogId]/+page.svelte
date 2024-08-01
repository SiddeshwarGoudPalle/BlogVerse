<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import custom_axios from '../../../axios/AxiosSetup';
  import { writable } from 'svelte/store';

  let blogId: string;
  let blog: {
    id: string;
    title: string;
    content: string;
    price: number;
    genre: string;
  } | null = null;

  let inputEmail = '';
  let inputPassword = '';
  let tipAmount = 0;
  let paymentAmount = 0;
  let isPaid = false;

  $: {
    const unsubscribe = page.subscribe(value => {
      blogId = value.params.blogId;
    });
    unsubscribe();
  }

  async function fetchBlogDetails() {
    try {
      const response = await custom_axios.get(`http://localhost:3000/api/blogs/${blogId}`);
      blog = response.data;
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  }

  async function handlePayment() {
    try {
      const response = await custom_axios.post('http://localhost:3000/api/payments/pay-to-view', {
        userId: inputEmail,
        blogId: blog?.id,
        amount: blog?.price
      });
      if (response.data.access.accessGranted) {
        isPaid = true;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }

  async function handleTip() {
    try {
      const response = await custom_axios.post('http://localhost:3000/api/payments/pay-to-view', {
        userId: inputEmail,
        blogId: blog?.id,
        amount: tipAmount
      });
      if (response.data.access.accessGranted) {
        isPaid = true;
      }
    } catch (error) {
      console.error('Error processing tip:', error);
    }
  }

  onMount(() => {
    fetchBlogDetails();
  });
</script>

<div class="container mx-auto p-8">
  {#if blog}
    <div class="blog-details bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 class="title text-4xl font-bold mb-6 text-center text-blue-900">
        {blog.title}
      </h1>
      <div class="content mb-6 text-lg text-gray-800">
        <p class="mb-4">{isPaid ? blog.content : blog.content.substring(0, 100) + '...'}</p>
        <div class="meta-info flex justify-between items-center mt-8">
          <span class="price text-indigo-600 font-bold">Price: {blog.price} ETH</span>
          <span class="genre text-gray-500">Genre: {blog.genre}</span>
        </div>
      </div>
    </div>

    {#if blog.price === 0}
      <div class="tip-form mt-8">
        <h2 class="text-2xl font-bold mb-4">Support the Author</h2>
        <input
          type="email"
          placeholder="Email"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={inputEmail}
        />
        <input
          type="password"
          placeholder="Password"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={inputPassword}
        />
        <input
          type="number"
          placeholder="Tip Amount"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={tipAmount}
        />
        <button class="bg-blue-500 text-white p-2 rounded" on:click={handleTip}>
          Pay Tip
        </button>
      </div>
    {:else}
      <div class="payment-form mt-8">
        <h2 class="text-2xl font-bold mb-4">Pay to View</h2>
        <input
          type="email"
          placeholder="Email"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={inputEmail}
        />
        <input
          type="password"
          placeholder="Password"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={inputPassword}
        />
        <input
          type="number"
          placeholder="Payment Amount"
          class="mb-4 p-2 border border-gray-300 rounded w-full"
          bind:value={paymentAmount}
        />
        <button class="bg-blue-500 text-white p-2 rounded" on:click={handlePayment}>
          Pay
        </button>
      </div>
    {/if}
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
    color: #1a202c;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .content {
    font-size: 1.125rem;
    color: #2d3748;
    margin-bottom: 1.5rem;
  }
  .meta-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }
  .price {
    color: #5a67d8;
    font-weight: 700;
  }
  .genre {
    color: #718096;
  }
</style>
