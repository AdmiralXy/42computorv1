<script setup>
import PolynomialSolver from "./components/PolynomialInput.vue";
</script>

<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">computorv1</h3>
      <nav
        class="nav nav-masthead justify-content-center float-md-end py-4 py-md-0"
      >
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a
          class="nav-link"
          href="https://github.com/AdmiralXy/42computorv1"
          target="_blank"
          >Github</a
        >
      </nav>
    </div>
  </header>

  <main class="px-3">
    <PolynomialSolver />
  </main>

  <footer class="mt-auto text-white-50">
    <p>{{ new Date().getFullYear() }}</p>
  </footer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
