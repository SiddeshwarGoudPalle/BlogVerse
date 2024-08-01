<!-- <script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import custom_axios from '../../axios/AxiosSetup';
  
    let blogId: string;
    let blog: {
      id: string;
      title: string;
      content: string;
      price: number;
      genre: string;
    } | null = null;
  
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
  
    onMount(() => {
      fetchBlogDetails();
    });
  </script>
  
  <div class="p-8 rounded-lg shadow-md my-2">
    {#if blog}
      <div class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl">
        <h1 class="text-3xl font-bold mb-6 antialiased text-center">
          {blog.title}
        </h1>
        <div class="mb-6">
          <p class="text-gray-700 mb-4">{blog.content}</p>
          <p class="text-indigo-600 font-bold">Price: {blog.price} ETH</p>
          <p class="text-gray-500">Genre: {blog.genre}</p>
        </div>
      </div>
    {:else}
      <p class="text-center">Loading blog details...</p>
    {/if}
  </div>
  
  <style>
    /* Add any custom styles if needed */
  </style>
   -->