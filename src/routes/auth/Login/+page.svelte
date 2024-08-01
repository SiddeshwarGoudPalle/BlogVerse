<script>
  import { navigate } from 'svelte-routing';
  import { ApiConstants } from '../../../api/apiConstants'; // Adjust the path as needed
  import custom_axios from '../../../axios/AxiosSetup';
  import { goto } from '$app/navigation';
  import { checkAuthentication } from '../../../stores/user';

  let email = '';
  let password = '';
  let message = '';

  async function login() {
    try {
      const response = await custom_axios.post(ApiConstants.Auth.LOGIN, {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      message = 'Login successful!';
      setTimeout(() => goto('/Dashboard'), 1000);
      checkAuthentication(); 
      console.log(checkAuthentication);
    } catch (error) {
      console.error('Error details:', error);
      message = 'Login failed: ' + (error.response ? error.response.data.message : error.message);
    }
  }
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="bg-yellow-300 p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
    {#if message}
      <p class={message === 'Login successful!' ? 'text-green-500 mb-4 text-center' : 'text-red-500 mb-4 text-center'}>{message}</p>
    {/if}
    <form on:submit|preventDefault={login} class="space-y-4">
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

      <div class="flex justify-center">
        <button
          type="submit"
          class=" py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  .min-h-screen {
    min-height: 100vh;
  }
</style>
