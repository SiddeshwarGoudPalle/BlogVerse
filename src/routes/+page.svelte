<script>
    // Your script logic if any
</script>

<!-- Hero Section -->
<section class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 class="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to BlogVerse</h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Ready to revolutionize your blogging experience? Join Us Today!</p>
    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="http://localhost:5173/SignUp" class="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-105">
            Sign Up
        </a>
        <a href="http://localhost:5173/Login" class="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-105">
            Login
        </a>
    </div>
</section>

<!-- Key Features Section -->
<section class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Key Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <img src="/Feature1.png" alt="Feature 1" class="mb-4 mx-auto w-16 h-12">
            <h3 class="text-xl font-semibold mb-2 text-gray-700">Blockchain-Powered Payments:</h3>
            <p class="text-gray-500"> Secure and transparent transactions are facilitated through blockchain wallet connections.</p>
        </div>
        <div class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <img src="Feature2.png" alt="Feature 2" class="mb-4 mx-auto w-16 h-12">
            <h3 class="text-xl font-semibold mb-2 text-gray-700">Pay-to-View Model:</h3>
            <p class="text-gray-500"> Authors can set a price for their blogs, allowing them to earn directly from their content.</p>
        </div>
        <!-- Add more feature boxes as needed -->
    </div>
</section>

<!-- Customer Testimonials Section -->
<section class="bg-gray-50 py-8 px-4 mx-auto max-w-screen-xl text-center">
  <h2 class="text-3xl font-bold mb-6 text-gray-800">What Our Users Say</h2>
  <div class="flex flex-col space-y-6">
    <div class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <p class="text-gray-600 italic">
        "BlogVerse has transformed the way I share my content. The pay-to-view model is fantastic!"
      </p>
      <p class="mt-4 font-semibold text-gray-800">- Sitara</p>
    </div>
    <div class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <p class="text-gray-600 italic">
        "The blockchain payment system is secure and seamless. Highly recommend!"
      </p>
      <p class="mt-4 font-semibold text-gray-800">- Divya</p>
    </div>
  </div>
</section>

<!-- Call-to-Action Section -->
<section class="bg-blue-500 py-8 px-4 mx-auto max-w-screen-xl text-center text-white">
    <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
    <p class="mb-8 text-lg">Join the BlogVerse community today and start sharing your stories with the world!</p>
    <a href="http://localhost:5173/SignUp" class="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center bg-white text-blue-500 rounded-lg border border-blue-500 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-105">
        Sign Up Now
    </a>
</section>

<!-- Latest Blogs Section -->
<section class="bg-white py-8 px-4 mx-auto max-w-screen-xl">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Latest from BlogVerse</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md shadow-md transition-transform transform hover:scale-105">
            <h3 class="text-xl font-semibold mb-2 text-gray-700">Blockchain 2.0: What’s Next for Blockchain Technology?</h3>
            <p class="text-gray-500 mb-4">Explore the emerging trends and innovations in blockchain technology, including smart contracts, decentralized finance (DeFi), and new consensus algorithms.</p>
            <a href="https://www.ibm.com/blog/the-future-of-blockchain/" class="text-blue-500 hover:underline">Read More</a>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg shadow-md shadow-md transition-transform transform hover:scale-105">
            <h3 class="text-xl font-semibold mb-2 text-gray-700">How Remote Work is Changing the Modern Workplace</h3>
            <p class="text-gray-500 mb-4">Discover the advantages and challenges of remote work, and how businesses are adapting to this new work environment.</p>
            <a href="https://blog.hubspot.com/marketing/remote-work-trends" class="text-blue-500 hover:underline">Read More</a>
        </div>
    </div>
</section>

<!-- Newsletter Signup Section -->
<section class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl text-center pb-24">
  <!-- Added padding-bottom here -->
  <h2 class="text-3xl font-bold mb-6 text-gray-800">Stay Updated</h2>
  <p class="mb-8 text-lg">
    Sign up for our newsletter to receive the latest updates and blog posts directly to your inbox.
  </p>
  <form class="flex justify-center">
    <input
      type="email"
      placeholder="Your email address"
      class="py-2 px-4 rounded-l-lg border border-gray-300"
      required
    />
    <button
      type="submit"
      class="py-2 px-4 bg-blue-500 text-white rounded-r-lg border border-blue-500 hover:bg-blue-600"
      >Subscribe</button>
  </form>
</section>

<style>
  /* Combine all your custom styles here */
  * {
    /* Your combined styles */
  }
</style>

