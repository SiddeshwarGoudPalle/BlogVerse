<script lang="ts">
  import { onMount } from "svelte";
  import custom_axios from "../../axios/AxiosSetup";
  import { writable } from "svelte/store";

  export let form;
  let isWalletConnected = form?.success;
  let user = {
    username: "",
    email: "",
  };
  let userId = "";
  let inputEmail = "";
  let inputPassword = "";
  let transactionHistory = writable([]);

  async function fetchUserDetails() {
    try {
      const response = await custom_axios.get("/auth/details");
      user = response.data.user;
      userId = user.id;
      fetchUserPayments(userId);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  async function fetchUserPayments(userId: string) {
    try {
      const response = await custom_axios.get(`/payments/user/${userId}`);
      transactionHistory.set(response.data);
    } catch (error) {
      console.error("Error fetching user payments:", error);
    }
  }

  async function connectWallet() {
    try {
      const response = await custom_axios.post("/wallet/connect", {
        walletAddress: form?.address,
      });
      alertMessage(response.data.message, "green");
      isWalletConnected = true;
    } catch (error) {
      alertMessage("Error connecting wallet", "red");
    }
  }

  async function signupForWallet(email, password) {
    try {
      const response = await custom_axios.post("/auth/signup", {
        email,
        password,
      });
      alertMessage("Wallet Created Successfully", "green");
    } catch (error) {
      alertMessage("Error creating wallet", "red");
    }
  }

  function alertMessage(message: string, color: string) {
    const alertDiv = document.createElement("div");
    alertDiv.style.backgroundColor = color === "green" ? "#e6ffed" : "#ffe6e6";
    alertDiv.style.color = color === "green" ? "#256029" : "#8a2626";
    alertDiv.style.border = `1px solid ${color === "green" ? "#256029" : "#8a2626"}`;
    alertDiv.innerText = message;
    alertDiv.className = "p-4 mb-4 rounded fixed bottom-0 right-0 m-4 z-50";
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000); // Show alert for 3 seconds
  }

  function showSignupPopup() {
    const popup = document.createElement("div");
    popup.className =
      "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50";
    popup.innerHTML = `
      <div class="bg-gray-100 p-6 rounded shadow-lg max-w-sm w-full">
        <h2 class="text-lg font-bold mb-4">Sign Up for Wallet</h2>
        <label for="signup-email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="signup-email" class="block w-full px-3 py-2 border rounded mb-4" required>
        <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="signup-password" class="block w-full px-3 py-2 border rounded mb-4" required>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="submitSignup()">Submit</button>
        <button class="bg-red-500 text-white px-4 py-2 rounded mt-2" onclick="closePopup()">Cancel</button>
      </div>
    `;
    document.body.appendChild(popup);
  }

  function closePopup() {
    const popup = document.querySelector(".fixed.inset-0");
    if (popup) popup.remove();
  }

  async function submitSignup() {
    const email = (document.getElementById("signup-email") as HTMLInputElement).value;
    const password = (document.getElementById("signup-password") as HTMLInputElement).value;
    if (email && password) {
      await signupForWallet(email, password);
      closePopup();
    } else {
      alertMessage("Please fill out all fields", "red");
    }
  }

  onMount(() => {
    fetchUserDetails();
  });
</script>
<section id="profile" class="bg-gray-100 py-8">
<div class="p-6 max-w-3xl mx-auto bg-yellow-300 rounded-xl shadow-md space-y-6 mt-12 ">
  <div class="flex items-center space-x-4">
    <svg
      class="user-icon w-12 h-12 text-gray-900"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      />
    </svg>
    <div>
      <div class="text-gray-900 text-2xl font-bold">{user.username}</div>
      <div class="text-gray-500">{user.email}</div>
    </div>
  </div>

  <div class="mt-4">
    <div class="text-gray-900 text-xl font-semibold">
      Enter Neucron Wallet Credentials to connect the Wallet
    </div>
    <form method="POST" action="?/login" class="mt-4">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email font "
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 transition-transform transform hover:scale-105">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <button
          on:click={connectWallet}
          type="button"
          class="bg-white text-black font-bold mt-5 ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Connect Wallet
        </button>
      </div>
    </form>
    <div class="mt-2 text-sm">
      Didn't SignUp for the Wallet?
      <a href="#" on:click={showSignupPopup} class="text-blue-500 underline">SignUp</a>
    </div>
  </div>


  {#if isWalletConnected}
    <div class="mt-4">
      <div class="flex items-center space-x-4">
        <svg
          class="wallet-icon w-12 h-12 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 7H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM7 9h14v10H7V9zm-1 8H3v-2h3v2z"
          />
        </svg>
        <div>
          <div class="text-gray-900">Wallet Address: {form?.address}</div>
          <div class="text-gray-500">Wallet Balance: {form?.balance}</div>
        </div>
      </div>
    </div>
  {/if}

  <div class="mt-4">
    <div class="flex items-center space-x-4">
      <svg
        class="history-icon w-6 h-6 text-gray-900"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 3a9 9 0 0 0-9 9H1l4.39 4.38L9 12H5a7 7 0 1 1 7 7V21a9 9 0 0 0 1-17.93z"
        />
      </svg>
      <div class="text-gray-900 font-bold text-xl">List of Payments</div>
    </div>
    <ul class="mt-4 space-y-2">
      {#each $transactionHistory as payment}
        <li class="p-2 bg-gray-200 rounded">
          <div><b>Blog Title:</b> {payment.blogTitle}</div>
          <div><b>Author Name:</b> {payment.author}</div>
          <div><b>Amount:</b> {payment.amount}</div>
          <div><b>Date:</b> {payment.createdAt}</div>
        </li>
      {/each}
    </ul>
  </div>
</div>
</section>

<style>
  .user-icon,
  .wallet-icon {
    width: 50px;
    height: 50px;
  }
  .history-icon {
    height: 1.5em; /* Adjust height to match text */
  }
  /* Additional Styles */
  .fixed.inset-0 {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>