<script lang="ts">
  import { onMount } from 'svelte';
  import custom_axios from '../../axios/AxiosSetup';

  type Blog = {
    id: string;
    title: string;
    content: string;
    price: number;
    category: string;
  };

<<<<<<< HEAD
  const recentBlogs: Blog[] = [
    {
      id: 1,
      title: "Recent Blog 1",
      summary: "Summary 1",
      price: 10,
      popularity: 5,
      category: "Tech",
    },
    {
      id: 2,
      title: "Recent Blog 2",
      summary: "Summary 2",
      price: 15,
      popularity: 7,
      category: "Health",
    },
    {
      id: 3,
      title: "Recent Blog 3",
      summary: "Summary 3",
      price: 20,
      popularity: 8,
      category: "Finance",
    },
  ];

  const popularBlogs: Blog[] = [
    {
      id: 4,
      title: "Popular Blog 1",
      summary: "Summary 4",
      price: 20,
      popularity: 10,
      category: "Finance",
    },
    {
      id: 5,
      title: "Popular Blog 2",
      summary: "Summary 5",
      price: 25,
      popularity: 12,
      category: "Travel",
    },
    {
      id: 6,
      title: "Popular Blog 3",
      summary: "Summary 6",
      price: 30,
      popularity: 15,
      category: "Tech",
    },
  ];

=======
  let recentBlogs: Blog[] = [];
  let filteredBlogs: Blog[] = [];
>>>>>>> 64d0335445d48ddbcede105db68d1935de4d48f2
  const categories = ["Tech", "Health", "Finance", "Travel"];
  const notifications = ["Notification 1", "Notification 2"];
  let selectedCategory: string | null = null;
  const limit = 3; // Define the number of recent blogs you want to display

  // Fetch recent blogs on component mount
  onMount(async () => {
    try {
      const response = await custom_axios.get('/api/blogs/'); // Fetch all recent blogs
      recentBlogs = response.data.slice(0, limit); // Limit the number of blogs on the frontend
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
    }
  });

  // Fetch blogs by genre
  async function fetchBlogsByGenre(genre: string) {
    try {
      const response = await custom_axios.get(`/api/blogs/search/genre?genre=${genre}`);
      filteredBlogs = response.data;
      if (filteredBlogs.length === 0) {
        // If no blogs found, you can set a message to be displayed
        filteredBlogs = [];
      }
    } catch (error) {
      console.error(`Error fetching blogs by genre (${genre}):`, error);
    }
  }

  function handleCategoryClick(category: string) {
    selectedCategory = category;
    fetchBlogsByGenre(category);
  }
</script>

<div class="flex min-h-screen bg-gray-50">
  <!-- Sidebar -->
  <aside class="w-1/4 bg-yellow-300 text-white p-6 shadow-lg  hover:shadow-xl rounded-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
    <ul>
      {#each categories as category}
<<<<<<< HEAD
        <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
          {category}
=======
        <li class="mb-4">
          <button 
            class="w-full px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-left"
            on:click={() => handleCategoryClick(category)}
            type="button"
          >
            {category}
          </button>
>>>>>>> 64d0335445d48ddbcede105db68d1935de4d48f2
        </li>
      {/each}
    </ul>

    <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-800">Notifications</h2>
    <ul>
      {#each notifications as notification}
<<<<<<< HEAD
        <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
          {notification}
=======
        <li class="mb-4">
          <div class="px-3 py-2 bg-gray-700 rounded">
            {notification}
          </div>
>>>>>>> 64d0335445d48ddbcede105db68d1935de4d48f2
        </li>
      {/each}
    </ul>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Recent Blogs -->
      <section class="bg-yellow-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Recent Blogs</h2>
        <ul>
          {#each recentBlogs as blog}
<<<<<<< HEAD
            <li class="mb-4 bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p class="text-gray-800">{blog.summary}</p>
=======
            <li class="mb-4 bg-white p-4 rounded shadow">
              <h3 class="text-lg font-semibold">{blog.title}</h3>
              <p>{blog.content}</p>
>>>>>>> 64d0335445d48ddbcede105db68d1935de4d48f2
              <p class="text-sm text-gray-600">Price: ${blog.price}</p>
            </li>
          {/each}
        </ul>
      </section>

<<<<<<< HEAD
      <!-- Popular Blogs -->
      <section class="bg-yellow-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Popular Blogs</h2>
        <ul>
          {#each popularBlogs as blog}
            <li class="mb-4 bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p class="text-gray-800">{blog.summary}</p>
              <p class="text-sm text-gray-600">Price: ${blog.price}</p>
            </li>
          {/each}
        </ul>
=======
      <!-- Filtered Blogs by Genre -->
      {#if selectedCategory}
      <section class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Blogs in {selectedCategory}</h2>
        {#if filteredBlogs.length === 0}
          <p>No blogs found in this category. </p>
        {:else}
          <ul>
            {#each filteredBlogs as blog}
              <li class="mb-4 bg-white p-4 rounded shadow">
                <h3 class="text-lg font-semibold">{blog.title}</h3>
                <p>{blog.content}</p>
                <p class="text-sm text-gray-600">Price: ${blog.price}</p>
              </li>
            {/each}
          </ul>
        {/if}
>>>>>>> 64d0335445d48ddbcede105db68d1935de4d48f2
      </section>
      {/if}
    </div>
  </main>
</div>

<style>
  /* Add any additional custom styles here */
</style>
