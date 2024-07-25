

<style>
    .sidebar {
        min-width: 250px;
    }
    .main-content {
        flex: 1;
        padding: 20px;
    }
    .footer {
        background-color: #f8f9fa;
        padding: 20px;
        text-align: center;
        border-top: 1px solid #e7e7e7;
    }
</style>

<div class="flex flex-col h-screen">
    <!-- Navbar -->
    <nav class="bg-blue-500 p-4 text-white flex items-center justify-between">
        <div class="text-2xl font-bold">BlogVerse</div>
        <ul class="flex space-x-6">
            <li><a href="/create-blog" class="hover:underline">Create Blog</a></li>
            <li><a href="/browse-blogs" class="hover:underline">Browse Blogs</a></li>
            <li><a href="/profile" class="hover:underline">Profile</a></li>
            <li><a href="/settings" class="hover:underline">Settings</a></li>
        </ul>
    </nav>

    <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="sidebar bg-gray-200 p-4">
            <h2 class="text-xl font-semibold mb-4">Categories</h2>
            <!-- Categories list -->
            <ul>
                <li><a href="#" class="block py-2 hover:bg-gray-300 rounded">Category 1</a></li>
                <li><a href="#" class="block py-2 hover:bg-gray-300 rounded">Category 2</a></li>
                <li><a href="#" class="block py-2 hover:bg-gray-300 rounded">Category 3</a></li>
            </ul>

            <h2 class="text-xl font-semibold mt-8 mb-4">Notifications</h2>
            <!-- Notifications list -->
            <ul>
                <li class="py-2">Notification 1</li>
                <li class="py-2">Notification 2</li>
                <li class="py-2">Notification 3</li>
            </ul>
        </aside>

        <!-- Main content -->
        <main class="main-content bg-gray-100">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- Recent Blogs -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold mb-4">Recent Blogs</h2>
                    <!-- Recent blogs content -->
                    <p>No recent blogs available.</p>
                </div>

                <!-- Popular Blogs -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold mb-4">Popular Blogs</h2>
                    <!-- Popular blogs content -->
                    <p>No popular blogs available.</p>
                </div>
            </div>
        </main>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 BlogVerse. All rights reserved.</p>
    </footer>
</div>
