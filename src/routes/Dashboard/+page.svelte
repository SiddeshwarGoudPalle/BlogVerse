<script lang="ts">
  type Blog = {
    id: number;
    title: string;
    summary: string;
    price: number;
    popularity: number;
    category: string;
  };

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

  const categories = ["Tech", "Health", "Finance", "Travel"];
  const notifications = ["Notification 1", "Notification 2"];
</script>

<div class="flex min-h-screen bg-gray-50">
  <!-- Sidebar -->
  <aside class="w-1/4 bg-yellow-300 text-white p-6 shadow-lg  hover:shadow-xl rounded-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
    <ul>
      {#each categories as category}
        <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
          {category}
        </li>
      {/each}
    </ul>

    <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-800">Notifications</h2>
    <ul>
      {#each notifications as notification}
        <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
          {notification}
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
            <li class="mb-4 bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p class="text-gray-800">{blog.summary}</p>
              <p class="text-sm text-gray-600">Price: ${blog.price}</p>
            </li>
          {/each}
        </ul>
      </section>

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
      </section>
    </div>
  </main>
</div>

<style>
  /* Add any additional custom styles here */
</style>
