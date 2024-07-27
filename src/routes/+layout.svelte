<script>
  import { onMount } from 'svelte';
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  import NavbarPostlogin from "$lib/Navbar_postlogin.svelte";

</script>

<Navbar/>
<slot />
<Footer />
