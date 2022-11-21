<template>
  <p v-if="equation.length > 0">
    <span v-for="(term, index) in equation" :key="index">
      <span
        v-if="
          term.coefficient > 1 || term.coefficient < -1 || term.exponent === 0
        "
      >
        <template v-if="index === 0">
          {{ term.coefficient }}
        </template>
        <template v-else>
          {{ abs(term.coefficient) }}
        </template> </span
      ><span v-if="term.exponent > 0"
        >x<sup v-if="term.exponent > 1">{{ term.exponent }}</sup></span
      >
      <span v-if="index < equation.length - 1" class="mx-1">
        {{ isPositive(equation[index + 1].coefficient) ? "+" : "-" }}
      </span>
    </span>
    = 0
  </p>
</template>

<script>
export default {
  name: "PolynomialComponent",
  props: {
    equation: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isPositive(num) {
      return num > 0;
    },
    abs(num) {
      return num > 0 ? num : -num;
    },
  },
};
</script>
