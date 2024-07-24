<script>
  let name = "";
  let email = "";
  let password = "";
  let signupSuccess = false;

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log("Form submitted", { name, email, password });
    signupSuccess = true;
    name = "";
    email = "";
    password = "";
  };
</script>

<section
  class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
>
  <h1
    class="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
  >
    Create Your Account
  </h1>
  <p
    class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
  >
    Sign up today and start sharing your stories with the world!
  </p>

  {#if signupSuccess}
    <div
      class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
      role="alert"
    >
      <p class="font-bold">Success!</p>
      <p>Ohooo! Your signup is successful. Welcome to BlogVerse!</p>
    </div>
  {/if}

  <div
    class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 max-w-lg mx-auto"
  >
    <form
      class="bg-yellow-300 p-6 rounded-lg shadow-md"
      on:submit|preventDefault={handleSubmit}
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
          >Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
          id="name"
          type="text"
          bind:value={name}
          placeholder="Your Name"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
          id="email"
          type="email"
          bind:value={email}
          placeholder="Your Email"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
          id="password"
          type="password"
          bind:value={password}
          placeholder="Your Password"
          required
        />
      </div>
      <div class="text-center">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</section>
