<template>
  <div>
    <header>
      <nav>
        <router-link to="/bits">Bits</router-link>
        <!-- <router-link to="/comedians">Comedians</router-link>
        <router-link to="/podcasts">Podcasts</router-link>
        <router-link to="/tourdates">Tour Dates</router-link> -->
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background-color: #f9f9f9;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

router-link {
  text-decoration: none;
  color: #333;  
  padding: 0.5em 1em;
  border-radius: 0.5em;
  transition: background-color 0.2s;
}

router-link:hover {
  background-color: #f5f5f5;
}

router-link.active {
  background-color: #e0e0e0;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
</style>
