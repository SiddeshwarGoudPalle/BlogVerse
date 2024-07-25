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
      { id: 1, title: 'Recent Blog 1', summary: 'Summary 1', price: 10, popularity: 5, category: 'Tech' },
      { id: 2, title: 'Recent Blog 2', summary: 'Summary 2', price: 15, popularity: 7, category: 'Health' },
      { id: 2, title: 'Recent Blog 2', summary: 'Summary 2', price: 15, popularity: 7, category: 'Health' }
      // Add more recent blogs
    ];
  
    const popularBlogs: Blog[] = [
      { id: 3, title: 'Popular Blog 1', summary: 'Summary 3', price: 20, popularity: 10, category: 'Finance' },
      { id: 4, title: 'Popular Blog 2', summary: 'Summary 4', price: 25, popularity: 12, category: 'Travel' },
      { id: 4, title: 'Popular Blog 2', summary: 'Summary 4', price: 25, popularity: 12, category: 'Travel' }
      // Add more popular blogs
    ];
  
    const categories = ['Tech', 'Health', 'Finance', 'Travel'];
    const notifications = ['Notification 1', 'Notification 2'];
  </script>
  
  <style>
    /* Add any additional custom styles here */
   
  </style>
  
  <div class="flex min-h-screen ">
    <!-- Sidebar -->
    <aside class="w-1/4 bg-gray-100 text-white p-6">
      <h2 class="text-xl font-bold mb-6 text-stone-950">Categories</h2>
      <ul>
        {#each categories as category}
          <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">{category}</li>
        {/each}
      </ul>
  
      <h2 class="text-xl font-bold mt-10 mb-6 text-stone-950">Notifications</h2>
      <ul>
        {#each notifications as notification}
          <li class="mb-4 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">{notification}</li>
        {/each}
      </ul>
    </aside>
  
    <!-- Main Content -->
    <main class="flex-1 p-6">
      <div class="grid grid-cols-2 gap-6">
        <!-- Recent Blogs -->
        <section class="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Recent Blogs</h2>
          <ul>
            {#each recentBlogs as blog}
              <li class="mb-4 bg-white p-4 rounded shadow">
                <h3 class="text-lg font-semibold">{blog.title}</h3>
                <p>{blog.summary}</p>
                <p class="text-sm text-gray-600">Price: ${blog.price}</p>
              </li>
            {/each}
          </ul>
        </section>
  
        <!-- Popular Blogs -->
        <section class="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Popular Blogs</h2>
          <ul>
            {#each popularBlogs as blog}
              <li class="mb-4 bg-white p-4 rounded shadow">
                <h3 class="text-lg font-semibold">{blog.title}</h3>
                <p>{blog.summary}</p>
                <p class="text-sm text-gray-600">Price: ${blog.price}</p>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </main>
  </div>
  