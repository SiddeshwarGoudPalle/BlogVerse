<script>
  import { navigate } from 'svelte-routing';
  import { ApiConstants } from '../../../api/apiConstants'; // Adjust the path as needed
  import custom_axios from '../../../axios/AxiosSetup';
  import { goto } from '$app/navigation';

  let username = '';
  let email = '';
  let password = '';
  let walletAddress = '';
  let message = '';

  async function register() {
    try {
      const response = await custom_axios.post(ApiConstants.Auth.REGISTER, {
        username,
        email,
        password,
        walletAddress
      });
      message = 'Registration successful!';
      setTimeout(() => goto('/auth/Login'), 1000); // Redirect to login after 2 seconds
    } catch (error) {
      console.error('Error details:', error); // Log error details
      message = 'Registration failed: ' + (error.response ? error.response.data.message : error.message);
    }
  }
</script>

<div class="flex justify-center items-center h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6">Register</h2>
    {#if message}
      <p class={message === 'Registration successful!' ? 'text-green-500 mb-4' : 'text-red-500 mb-4'}>{message}</p>
    {/if}
    <form on:submit|preventDefault={register} class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          bind:value={username}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <!-- <div>
        <label for="walletAddress" class="block text-sm font-medium text-gray-700">Wallet Address</label>
        <input
          type="text"
          id="walletAddress"
          bind:value={walletAddress}
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div> -->

      <div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>
