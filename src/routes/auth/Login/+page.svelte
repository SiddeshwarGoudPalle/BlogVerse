<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
  
    let email = "";
    let password = "";
    let loginSuccess = false;
    let errorMessage = "";
  
    async function handleLogin(event) {
      event.preventDefault();
      try {
        if (!email || !password) {
          errorMessage = "All fields are required.";
          loginSuccess = false;
          return;
        }
  
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          loginSuccess = true;
          errorMessage = "";
          goto("/dashboard"); // Redirect to a dashboard or home page after successful login
        } else {
          loginSuccess = false;
          errorMessage = result.message || "Login failed. Please try again.";
        }
      } catch (error) {
        console.error("Login error:", error);
        loginSuccess = false;
        errorMessage = "An error occurred. Please try again later.";
      }
    }
  </script>
  
  <section class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 class="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Log In to Your Account
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Welcome back! Please log in to continue.
    </p>
  
    {#if loginSuccess}
      <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
        <p class="font-bold">Success!</p>
        <p>Welcome back! You have successfully logged in.</p>
      </div>
    {/if}
  
    <div class="bg-yellow-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 max-w-lg mx-auto">
      <form on:submit|preventDefault={handleLogin} class="flex flex-col items-center space-y-6 p-6 border border-gray-300 rounded-md shadow-md max-w-md mx-auto">
        <div class="flex flex-col w-full">
          <label for="email" class="mb-2 text-lg font-semibold">Email</label>
          <input
            bind:value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-transform transform hover:scale-105"
          />
        </div>
  
        <div class="flex flex-col w-full">
          <label for="password" class="mb-2 text-lg font-semibold">Password</label>
          <input
            bind:value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-transform transform hover:scale-105"
          />
        </div>
  
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-transform transform hover:scale-105">
          Log In
        </button>
      </form>
  
      {#if errorMessage}
        <div class="text-red-500 mt-4">{errorMessage}</div>
      {/if}
    </div>
  </section>
  