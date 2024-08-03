<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
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
  let genreOption: string = "";

  // Fetch all blogs on component mount
  async function fetchBlogs() {
    try {
      const response = await custom_axios.get(
        "http://localhost:3000/api/blogs"
      );
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
          "http://localhost:3000/api/blogs/search/title",
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
          "http://localhost:3000/api/blogs/sorted-by-price",
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

  // Filter blogs by genre
  async function filterBlogsByGenre() {
    try {
      if (genreOption) {
        const response = await custom_axios.get(
          "http://localhost:3000/api/blogs/search/genre",
          {
            params: { genre: genreOption },
          }
        );
        blogs = response.data;
      } else {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error filtering blogs by genre:", error);
    }
  }

  // Navigate to the blog detail page
  function goToBlogPage(blogId: string) {
    goto(`/blogpage/${blogId}`);
  }

  // Fetch blogs initially
  onMount(() => {
    fetchBlogs();
  });
</script>

<section id="browse-blogs" class="bg-gray-100 p-8">
  <div class="container mx-auto px-4 max-w-3xl">
    <div
      class="bg-yellow-300 p-6 shadow-lg mb-8 flex flex-col md:flex-row items-center hover:shadow-xl"
    >
      <h1 class="text-3xl font-bold mb-4 text-gray-800 text-center w-full">
        Browse Blogs
      </h1>
    </div>

    <div class="flex flex-col md:flex-row items-center mb-6 gap-4">
      <input
        type="text"
        placeholder="Search by title..."
        class="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={searchQuery}
        on:input={searchBlogs}
      />
      <select
        class="shadow appearance-none border rounded w-full md:w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={sortOption}
        on:change={sortBlogs}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Price (Lowest to Highest)</option>
        <option value="desc">Price (Highest to Lowest)</option>
      </select>
      <select
        class="shadow appearance-none border rounded w-full md:w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={genreOption}
        on:change={filterBlogsByGenre}
      >
        <option value="">Filter by Genre</option>
        <option value="Tech">Tech</option>
        <option value="Health">Health</option>
        <option value="Finance">Finance</option>
        <option value="Travel">Travel</option>
      </select>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {#if blogs.length === 0}
        <p class="text-center col-span-full">No blogs found.</p>
      {/if}
      {#each blogs as blog}
        <a
          href="javascript:void(0)"
          class="bg-yellow-300 p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 hover:shadow-xl"
          on:click={() => goToBlogPage(blog.id)}
        >
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">
            {blog.title}
          </h2>
          <p class="text-gray-700 mb-4">
            {blog.content.substring(0, 100)}{blog.content.length > 100
              ? "..."
              : ""}
          </p>
          <p class="text-indigo-600 font-bold">Price: {blog.price} ETH</p>
          <p class="text-gray-500">Genre: {blog.genre}</p>
          <p class="text-indigo-600 underline">Read More</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Add any custom styles if needed */
</style>
