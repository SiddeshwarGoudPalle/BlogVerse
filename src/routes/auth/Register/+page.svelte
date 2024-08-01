<script>
  import { navigate } from 'svelte-routing';
  import { ApiConstants } from '../../../api/apiConstants'; // Adjust the path as needed
  import custom_axios from '../../../axios/AxiosSetup';
  import { goto } from '$app/navigation';

  let username = '';
  let email = '';
  let password = '';
  let message = '';

  async function register() {
    try {
      const response = await custom_axios.post(ApiConstants.Auth.REGISTER, {
        username,
        email,
        password
      });
      message = 'Registration successful!';
      setTimeout(() => goto('/auth/Login'), 1000); // Redirect to login after 1 second
    } catch (error) {
      console.error('Error details:', error); // Log error details
      message = 'Registration failed: ' + (error.response ? error.response.data.message : error.message);
    }
  }
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="bg-yellow-300 p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
    {#if message}
      <p class={message === 'Registration successful!' ? 'text-green-500 mb-4 text-center' : 'text-red-500 mb-4 text-center'}>{message}</p>
    {/if}
    <form on:submit|preventDefault={register} class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          bind:value={username}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform transform hover:scale-105"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform transform hover:scale-105"
          required
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform transform hover:scale-105"
          required
        />
      </div>

      </div>
    </form>
  </div>
</div>

<style>
  .min-h-screen {
    min-height: 100vh;
  }
</style>

