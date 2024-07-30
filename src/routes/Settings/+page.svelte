<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import axios from "../../axios/AxiosSetup";
  import { ApiConstants } from "../../api/apiConstants";
  import { onMount } from "svelte";
<<<<<<< HEAD
  import { logout } from '../../stores/user';
  import { goto } from '$app/navigation';
=======
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c

  let email = "";
  let username = "";
  let oldPassword = "";
  let newPassword = "";

  let showChangeEmail = false;
  let showChangeUsername = false;
  let showChangePassword = false;

  let emailAlert = "";
  let emailAlertSuccess = false;
  let usernameAlert = "";
  let usernameAlertSuccess = false;
  let passwordAlert = "";
  let passwordAlertSuccess = false;

  const dispatch = createEventDispatcher();

  function toggleChangeEmail() {
    showChangeEmail = !showChangeEmail;
    showChangeUsername = false;
    showChangePassword = false;
    emailAlert = "";
  }

  function toggleChangeUsername() {
    showChangeUsername = !showChangeUsername;
    showChangeEmail = false;
    showChangePassword = false;
    usernameAlert = "";
  }

  function toggleChangePassword() {
    showChangePassword = !showChangePassword;
    showChangeEmail = false;
    showChangeUsername = false;
    passwordAlert = "";
  }

  async function validateEmail() {
    try {
      const response = await axios.patch(ApiConstants.Auth.UPDATE_EMAIL, {
        newEmail: email,
      });
<<<<<<< HEAD
      emailAlert = "Email successfully updated! Please log in again to continue.";
      emailAlertSuccess = true;
      showChangeEmail = false;
      // Call handleLogout to log out the user and redirect to login page
      setTimeout(() => {
        handleLogout();
      }, 1000); // Delay to allow the user to see the alert message
=======
      emailAlert = response.data.message;
      emailAlertSuccess = true;
      showChangeEmail = false;
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
    } catch (error) {
      emailAlert = error.response?.data?.message || "Failed to update email";
      emailAlertSuccess = false;
    }
  }

  async function validateUsername() {
    try {
      const response = await axios.patch(ApiConstants.Auth.UPDATE_USERNAME, {
        newUsername: username,
      });
<<<<<<< HEAD
      usernameAlert = "Username successfully updated!";
      usernameAlertSuccess = true;
      showChangeUsername = false;
      alert("username updated successfully");
    } catch (error) {
      usernameAlert = error.response?.data?.message || "Failed to update username";
=======
      usernameAlert = response.data.message;
      usernameAlertSuccess = true;
      showChangeUsername = false;
    } catch (error) {
      usernameAlert =
        error.response?.data?.message || "Failed to update username";
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
      usernameAlertSuccess = false;
    }
  }

  async function validatePassword() {
    try {
      const response = await axios.patch(ApiConstants.Auth.UPDATE_PASSWORD, {
        oldPassword,
        newPassword,
      });
<<<<<<< HEAD
      passwordAlert = "Password successfully updated!";
      alert("password updated successfully");
      passwordAlertSuccess = true;
      showChangePassword = false;
    } catch (error) {
      passwordAlert = error.response?.data?.message || "Failed to update password";
=======
      passwordAlert = response.data.message;
      passwordAlertSuccess = true;
      showChangePassword = false;
    } catch (error) {
      passwordAlert =
        error.response?.data?.message || "Failed to update password";
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
      passwordAlertSuccess = false;
    }
  }

  onMount(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  });
<<<<<<< HEAD

  function handleLogout() {
    alert("email successfully updated . Please log in again with updated email.");
    logout();
    goto('/');
  }
=======
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
</script>

<div class="p-6 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md space-y-4 w-7/10">
  <div class="text-black text-2xl font-bold">Account Settings</div>
  
  <!-- Email Section -->
  <div>
    <button
      class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
      on:click={toggleChangeEmail}
    >
      Change Email
    </button>
    {#if showChangeEmail}
      <div class="mt-4">
        {#if emailAlert}
<<<<<<< HEAD
          <div class="alert {emailAlertSuccess ? 'success' : 'failure'}">
=======
          <div class="alert" class:success={emailAlertSuccess}>
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
            {emailAlert}
          </div>
        {/if}
        <input
          type="email"
          placeholder="Enter new email"
          bind:value={email}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          on:click={validateEmail}>Change Email</button>
      </div>
    {/if}
  </div>
  
  <!-- Username Section -->
  <div>
    <button
      class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
      on:click={toggleChangeUsername}
    >
      Change Username
    </button>
    {#if showChangeUsername}
      <div class="mt-4">
        {#if usernameAlert}
<<<<<<< HEAD
          <div class="alert {usernameAlertSuccess ? 'success' : 'failure'}">
=======
          <div class="alert" class:success={usernameAlertSuccess}>
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
            {usernameAlert}
          </div>
        {/if}
        <input
          type="text"
          placeholder="Enter new username"
          bind:value={username}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          on:click={validateUsername}>Change Username</button>
      </div>
    {/if}
  </div>
  
  <!-- Password Section -->
  <div>
    <button
      class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
      on:click={toggleChangePassword}
    >
      Change Password
    </button>
    {#if showChangePassword}
      <div class="mt-4">
        {#if passwordAlert}
<<<<<<< HEAD
          <div class="alert {passwordAlertSuccess ? 'success' : 'failure'}">
=======
          <div class="alert" class:success={passwordAlertSuccess}>
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
            {passwordAlert}
          </div>
        {/if}
        <input
          type="password"
          placeholder="Enter old password"
          bind:value={oldPassword}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter new password"
          bind:value={newPassword}
          class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          on:click={validatePassword}>Change Password</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .alert {
    padding: 10px;
    margin-bottom: 8px;
    text-align: center;
    border-left-width: 5px;
  }
  .alert.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-left-color: #28a745;
  }
  .alert.failure {
<<<<<<< HEAD
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-left-color: #dc3545;
=======
    background-color: #fdecea;
    color: #a94442;
    border: 1px solid #ebccd1;
    border-left-color: #a94442;
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
  }
</style>
