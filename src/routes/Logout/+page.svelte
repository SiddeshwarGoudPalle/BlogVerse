<!-- <script>
    import { goto } from '$app/navigation';
    import { session } from '../../stores/session'; // Ensure the path is correct
  
    const logout = () => {
      session.set(null);
      goto('/auth/login');
    };
  </script>
  
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg">
        My Blog Site
      </div>
      <div class="flex space-x-4">
        <a href="/" class="text-white">Home</a>
        <a href="/blogs" class="text-white">Blogs</a>
        <button on:click={logout} class="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  </nav>
   -->