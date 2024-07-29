<!-- <script>
  import { onMount } from 'svelte';
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  import NavbarPostlogin from "$lib/Navbar_postlogin.svelte";
  import { writable } from 'svelte/store';

</script>

<Navbar/>
<slot />
<Footer /> -->


<script>
  import { onMount } from 'svelte';
  import { createAuthContext, getAuthContext } from '../stores/authcontext';
  import Navbar from '$lib/Navbar.svelte';
  import NavbarPostlogin from '$lib/Navbar_postlogin.svelte';
  import Footer from '$lib/Footer.svelte';
  import "../app.css";

  createAuthContext();

  const { isAuthenticated } = getAuthContext();
  /**
   * @type {any}
   */
  let authState;

  $: isAuthenticated.subscribe((/** @type {any} */ value) => {
    authState = value;
  });
</script>

{#if authState}
  <NavbarPostlogin />
{:else}
  <Navbar />
{/if}
<slot />
<Footer />s
















