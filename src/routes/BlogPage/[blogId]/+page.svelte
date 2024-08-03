<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import custom_axios from '../../../axios/AxiosSetup';

  let blogId: string;
  let blog: {
    id: string;
    title: string;
    content: string;
    price: number;
    genre: string;
  } | null = null;
  let hasPaid: boolean = false;

  // Extract blogId from the URL
  $: {
    const unsubscribe = page.subscribe(value => {
      blogId = value.params.blogId;
    });
    unsubscribe();
  }

  // Fetch blog details
  async function fetchBlogDetails() {
    try {
      const response = await custom_axios.get(`http://localhost:3000/api/blogs/${blogId}`);
      blog = response.data;
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  }

  // Handle payment
  async function handlePayment() {
    if (blog && blog.price > 0) {
      try {
        // Implement payment logic here
        console.log(`Processing payment for ${blog.price} ETH`);
        
        // Simulate payment success
        hasPaid = true;

        // Assuming payment is successful, you might want to reload the blog content
        // fetchBlogDetails();
      } catch (error) {
        console.error('Error processing payment:', error);
      }
    } else {
      console.error('Invalid blog price or blog details.');
    }
  }

  // Fetch blog details when the component mounts
  onMount(() => {
    fetchBlogDetails();
  });
</script>

<div class="container mx-auto p-8 relative">
  {#if blog}
    <div class="blog-details bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 class="title text-4xl font-bold mb-6 text-center text-blue-900">
        {blog.title}
      </h1>
      <div class="content mb-6 text-lg text-gray-800">
        <div class="relative">
          {#if !isBlogFree(blog) && !hasPaid}
            <div class="overlay absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-10">
              <button on:click={handlePayment} class="pay-button bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                Pay to View
              </button>
            </div>
          {/if}
          <p class="mb-4">{#if hasPaid || isBlogFree(blog)}{blog.content}{:else}Content is locked. Please pay to view.{/if}</p>
          <div class="meta-info flex justify-between items-center mt-8">
            <span class="price text-indigo-600 font-bold">Price: {blog.price} ETH</span>
            <span class="genre text-gray-500">Genre: {blog.genre}</span>
          </div>
        </div>
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

  .overlay {
    backdrop-filter: blur(5px);
  }

  .pay-button {
    background-color: #38a169;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .pay-button:hover {
    background-color: #2f855a;
  }
</style>
