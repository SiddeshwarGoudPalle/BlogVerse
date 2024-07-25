<script>
  let isWalletConnected = false;
  let walletAddress = "";
  let walletBalance = "0.00 ETH";
  let transactionHistory = [
    { id: 1, date: "2024-07-23", amount: "0.5 ETH", status: "Completed" },
    { id: 2, date: "2024-07-22", amount: "0.2 ETH", status: "Completed" },
    // Add more transactions as needed
  ];

  function connectWallet() {
    // Placeholder logic to connect the wallet
    isWalletConnected = true;
    walletAddress = "0x1234...abcd";
    walletBalance = "2.00 ETH";
  }
</script>

<div class="p-6 max-w-3xl mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
  <div class="flex items-center space-x-4">
    <!-- User SVG Icon -->
    <svg
      class="user-icon text-gray-900"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      />
    </svg>
    <div>
      <div class="text-gray-900 text-2xl font-bold">Username</div>
      <div class="text-gray-500">email@example.com</div>
    </div>
  </div>

  <div>
    {#if !isWalletConnected}
      <button
        class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        on:click={connectWallet}
      >
        Connect Wallet
      </button>
    {/if}

    {#if isWalletConnected}
      <div class="mt-4">
        <div class="flex items-center space-x-4">
          <!-- Wallet SVG Icon -->
          <svg
            class="wallet-icon text-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 7H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM7 9h14v10H7V9zm-1 8H3v-2h3v2z"
            />
          </svg>
          <div>
            <div class="text-gray-900">Wallet Address: {walletAddress}</div>
            <div class="text-gray-500">Balance: {walletBalance}</div>
          </div>
        </div>

        <div class="mt-4">
          <div class="text-gray-900 font-bold">Transaction History</div>
          <ul class="mt-2 space-y-2">
            {#each transactionHistory as transaction}
              <li class="border-b border-gray-200 pb-2">
                <div class="text-gray-900">Date: {transaction.date}</div>
                <div class="text-gray-500">Amount: {transaction.amount}</div>
                <div class="text-gray-500">Status: {transaction.status}</div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .user-icon,
  .wallet-icon {
    width: 50px;
    height: 50px;
  }
</style>
