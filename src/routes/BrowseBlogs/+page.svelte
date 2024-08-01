<script lang="ts">
  import { onMount } from "svelte";
  import custom_axios from "../../axios/AxiosSetup";

  type Blog = {
    id: string;
    title: string;
    content: string;
    price: number;
    genre: string;
  };

  let blogs: Blog[] = [];
  let searchQuery: string = "";
  let sortOption: string = "";

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  // Fetch all blogs on component mount
  async function fetchBlogs() {
    try {
      const response = await custom_axios.get(`${VITE_BASE_URL}/blogs`);
      blogs = response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  // Search blogs by title
  async function searchBlogs() {
    try {
      if (searchQuery.trim()) {
        const response = await custom_axios.get(
          `${VITE_BASE_URL}/blogs/by-title`,
          {
            params: { title: searchQuery },
          }
        );
        blogs = response.data;
      } else {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error searching blogs:", error);
    }
  }

  // Sort blogs by price
  async function sortBlogs() {
    try {
      if (sortOption) {
        const response = await custom_axios.get(
          `${VITE_BASE_URL}/blogs/sorted-by-price`,
          {
            params: { order: sortOption },
          }
        );
        blogs = response.data;
      } else {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error sorting blogs:", error);
    }
  }

  // Fetch blogs initially
  onMount(() => {
    fetchBlogs();
  });
</script>

<section id="browseblogs" class="bg-gray-100 py-8">
  <div class="p-8 rounded-lg shadow-md my-2 bg-gray-100">
    <div class="bg-yellow-300 py-8 px-4 mx-auto max-w-screen-xl">
      <h1 class="text-3xl font-bold mb-6 text-center text-black">Browse Blogs</h1>
      <div class="flex flex-col md:flex-row items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          class="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-black border-yellow-300 focus:outline-none focus:ring-2 focus:ring-black"
          bind:value={searchQuery}
          on:input={searchBlogs}
        />
        <select
          class="shadow appearance-none border rounded w-full md:w-1/4 py-2 px-3 text-black border-yellow-300 focus:outline-none focus:ring-2 focus:ring-black"
          bind:value={sortOption}
          on:change={sortBlogs}
        >
          <option value="" disabled selected>Sort by</option>
          <option value="asc">Price (Lowest to Highest)</option>
          <option value="desc">Price (Highest to Lowest)</option>
        </select>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#if blogs.length === 0}
          <p class="text-center col-span-full text-gray-500">No blogs found.</p>
        {/if}
        {#each blogs as blog}
          <a
            href="#"
            class="bg-black p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 hover:shadow-xl border border-yellow-300"
          >
            <h2 class="text-2xl font-semibold mb-2 text-yellow-300">{blog.title}</h2>
            <p class="text-yellow-100 mb-4">{blog.content}</p>
            <p class="text-yellow-300 font-bold">Price: {blog.price} ETH</p>
            <p class="text-gray-400">Genre: {blog.genre}</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

