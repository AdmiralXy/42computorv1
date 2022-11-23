<template>
  <div v-if="isSolving" class="polynomial-solve shadow">
    <p class="polynomial-solve__step">Reduced form:</p>
    <Polynomial :equation="simplifiedEquation" />
    <p class="polynomial-solve__step">Polynomial degree:</p>
    <p>{{ polynomialDegree }}</p>
    <template v-if="solution.formula">
      <p class="polynomial-solve__step">
        Get roots by using the following formula:
      </p>
      <p>{{ solution.formula }}</p>
    </template>
    <template v-if="solution.formulaApplied">
      <p class="polynomial-solve__step">Solve:</p>
      <p>{{ solution.formulaApplied }}</p>
    </template>
    <template v-if="solution.sign">
      <p class="polynomial-solve__step">Root sign:</p>
      <p>{{ solution.sign }}</p>
    </template>
    <template v-if="solution.explanation">
      <p class="polynomial-solve__step">Explanation:</p>
      <p>{{ solution.explanation }}</p>
    </template>
    <template v-if="solution.roots">
      <p class="polynomial-solve__step">Roots:</p>
      <p
        v-for="root in solution.roots"
        :key="`(${root}-${Math.random()})`"
        class="polynomial-solve__root"
      >
        <template v-if="root.isIrrational">
          x = {{ root.fractional }}
        </template>
        <template v-else> x = {{ root.real }} </template>
      </p>
    </template>
  </div>
</template>

<script>
import Polynomial from "@/components/PolynomialComponent.vue";
import simplifyEquation from "@/utils/equation-simplify";
import solveEquation from "@/utils/equation-solver";

export default {
  name: "PolynomialSolver",
  components: {
    Polynomial,
  },
  data() {
    return {
      isSolving: false,
      simplifiedEquation: [],
      polynomialDegree: 0,
      solution: {},
    };
  },
  methods: {
    solve(equation) {
      this.isSolving = true;
      this.simplifiedEquation = simplifyEquation(equation);
      this.polynomialDegree = this.simplifiedEquation[0].exponent;
      this.solution = solveEquation(this.simplifiedEquation);
    },
  },
};
</script>

<style lang="css" scoped>
.polynomial-solve {
  background: #4e4e4e36;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  text-align: left;
}

.polynomial-solve__step {
  margin-bottom: 4px;
  font-weight: 500;
  color: #afa9a9;
}
</style>
