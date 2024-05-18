<script>
  import { isAuthenticated, user } from "../../store";
  import auth from "../../auth.service";
  import { onMount } from "svelte";
  import axios from "axios";



  let quotes = []; // Variable zum Speichern des Zitats

  onMount(() => {
    getapi("https://zenquotes.io/api/quotes/");
  });

  async function getapi(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      quotes = data; // Speichert die Daten in der Svelte-Variable
      console.log(data); // Loggt die Daten zur Überprüfung
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  }
</script>

<h1>MyAccount Details</h1>

{#if $isAuthenticated}
  <p><img src={$user.picture} alt="" srcset="" /></p>
  <p><b>Name:</b> {$user.name}</p>
  <p><b>Nickname:</b> {$user.nickname}</p>
  <p><b>First Name:</b> {$user.given_name}</p>
  <p><b>Last Name:</b> {$user.family_name}</p>
  <p><b>Email:</b> {$user.email}</p>
  <!-- Show roles only if user has at least one role -->
  {#if $user.user_roles && $user.user_roles.length > 0}
    <p><b>Roles:</b> {$user.user_roles}</p>
  {/if}
{:else}
  <p>Not logged in</p>
{/if}

{#if quotes.length > 0}
  <div class="quotes">
    {#each quotes as quote}
      <div class="quote">
        <p>"{quote.q}"</p>
        <cite>- {quote.a}</cite>
      </div>
    {/each}
  </div>
{:else}
  <p>Loading quotes...</p>
{/if}

