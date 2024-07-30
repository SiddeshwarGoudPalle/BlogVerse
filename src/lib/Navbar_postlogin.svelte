<script>
  import { logout } from '../stores/user';
  import { goto } from '$app/navigation';

  function handleLogout() {
    logout();
    goto('/');
  }
</script>


<nav>
  <div class="container mx-auto flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center space-x-4">
  <img src="/Logo.png" alt="Logo" class="h-10 w-10">
  <span class="text-xl font-semibold text-slate-950">Blog Verse</span>
    </div>
    <!-- Navigation Links -->
    <div class="flex items-center space-x-8">
      <a href="../Dashboard" class="text-slate-950 hover:text-blue-700">Dashboard</a>
      <a href="../CreateBlog" class="text-slate-950 hover:text-blue-700">Create Blog</a>
      <a href="../BrowseBlogs" class="text-slate-950 hover:text-blue-700">Browse Blogs</a>
      <a href="../MyBlogs" class="text-slate-950 hover:text-blue-700">My Blogs</a>
      <a href="../Profile" class="text-slate-950 hover:text-blue-700">Profile</a>
      <a href="../Settings" class="text-slate-950 hover:text-blue-700">Settings</a>
      <button on:click={handleLogout} class="text-slate-950 hover:text-blue-700">Logout</button>
    </div>
  </div>
</nav>

