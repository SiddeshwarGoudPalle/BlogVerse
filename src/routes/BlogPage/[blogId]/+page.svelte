<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import custom_axios from '../../../axios/AxiosSetup';

  let blogId: string;
  let blog: {
    id: string;
    title: string;
    content: string;
    price: number;
    genre: string;
  } | null = null;

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

  // Fetch blog details when the component mounts
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
        <p class="mb-4">{blog.content}</p>
        <div class="meta-info flex justify-between items-center mt-8">
          <span class="price text-indigo-600 font-bold">Price: {blog.price} ETH</span>
          <span class="genre text-gray-500">Genre: {blog.genre}</span>
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
</style>
