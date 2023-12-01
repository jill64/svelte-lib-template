<script>
  import { page } from '$app/stores'
</script>

{#if $page}
  <svelte:component this={$page.data.ref} />
{:else}
  <h1>404</h1>
{/if}
