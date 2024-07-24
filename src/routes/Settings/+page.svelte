<script>
  import { createEventDispatcher } from "svelte";

  let email = "";
  let username = "";
  let oldPassword = "";
  let newPassword = "";

  let showChangeEmail = false;
  let showChangeUsername = false;
  let showChangePassword = false;

  let emailAlert = "";
  let usernameAlert = "";
  let passwordAlert = "";

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

  function validateEmail() {
    // Placeholder validation logic
    if (email === "existing@example.com") {
      emailAlert = "This email is connected to an existing account";
    } else {
      emailAlert = "";
      // dispatch the change email event
      dispatch("changeEmail", email);
    }
  }

  function validateUsername() {
    // Placeholder validation logic
    if (username === "existinguser") {
      usernameAlert = "This Username already exists! Use another one";
    } else {
      usernameAlert = "";
      // dispatch the change username event
      dispatch("changeUsername", username);
    }
  }

  function validatePassword() {
    // Placeholder validation logic
    if (oldPassword !== "correctpassword") {
      passwordAlert = "Wrong Password";
    } else if (oldPassword === newPassword) {
      passwordAlert = "Old password and new password can't be the same";
    } else {
      passwordAlert = "";
      // dispatch the change password event
      dispatch("changePassword", { oldPassword, newPassword });
    }
  }
</script>

<div
  class="p-6 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md space-y-4 w-7/10"
>
  <div class="text-black text-2xl font-bold">Account Settings</div>
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
          <div class="alert">{emailAlert}</div>
        {/if}
        <input
          type="email"
          placeholder="Enter new email"
          bind:value={email}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          on:click={validateEmail}>Change Email</button
        >
      </div>
    {/if}
  </div>

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
          <div class="alert">{usernameAlert}</div>
        {/if}
        <input
          type="text"
          placeholder="Enter new username"
          bind:value={username}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          on:click={validateUsername}>Change Username</button
        >
      </div>
    {/if}
  </div>

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
          <div class="alert">{passwordAlert}</div>
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
          on:click={validatePassword}>Change Password</button
        >
      </div>
    {/if}
  </div>
</div>

<style>
  .alert {
    background-color: #fdecea;
    color: #a94442;
    border: 1px solid #ebccd1;
    padding: 10px;
    border-left-width: 5px;
    border-left-color: #a94442;
    margin-bottom: 8px;
    text-align: center;
  }
</style>
