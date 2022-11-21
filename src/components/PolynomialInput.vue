<template>
  <div>
    <h1>Enter polynomial equation</h1>
    <p class="lead">in the form of ax^2 + bx + c = 0</p>
    <div class="polynomial-solver">
      <input
        type="text"
        class="polynomial-solver__input mt-2"
        v-model="equation"
      />
      <small class="polynomial-solver__error" v-if="!isEquationValid">
        {{ error }}
      </small>
    </div>
    <p class="lead mt-5">
      <button
        class="btn btn-lg btn-secondary fw-bold border-white bg-white"
        @click="solve"
      >
        Calculate
      </button>
    </p>
    <PolynomialSolver ref="solver" />
  </div>
</template>

<script>
import PolynomialSolver from "@/components/PolynomialSolver.vue";
import splitEquation from "@/utils/equation-splitter";
import parseTerm from "@/utils/term-matcher";

export default {
  name: "PolynomialInput",
  components: {
    PolynomialSolver,
  },
  data() {
    return {
      equation: "",
      error: "",
    };
  },
  methods: {
    parseEquation() {
      const splittedEquation = splitEquation(this.equation);

      const parsedEquation = splittedEquation.map((term, index) => {
        if (term === "=") {
          return false;
        }
        const parsedTerm = parseTerm(term);
        if (index > splittedEquation.indexOf("=")) {
          parsedTerm.coefficient *= -1;
        }
        return parsedTerm;
      });

      return parsedEquation.filter(
        (term) => term !== false && term.coefficient !== 0
      );
    },
    solve() {
      this.error = "";
      try {
        const parsedEquation = this.parseEquation();
        this.$refs.solver.solve(parsedEquation);
      } catch (e) {
        this.error = e.message;
      }
    },
  },
  computed: {
    isEquationValid() {
      return this.error.length === 0;
    },
  },
};
</script>

<style lang="css" scoped>
.btn:disabled {
  background-color: #ccc;
  border-color: #ccc;
  color: #a0a0a0;
}

.polynomial-solver {
  display: flex;
  flex-direction: column;
}

.polynomial-solver__input {
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 2rem;
}

.polynomial-solver__input:focus {
  outline: none;
}

.polynomial-solver__error {
  color: #f00;
  text-align: left;
  margin-top: 8px;
  margin-left: 3px;
}
</style>
