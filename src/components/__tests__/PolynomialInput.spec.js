import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PolynomialInput from "../PolynomialInput.vue";

describe("PolynomialInput", () => {
  it("renders properly", () => {
    const wrapper = mount(PolynomialInput);
    expect(wrapper.text()).toContain("Enter polynomial equation");
  });
});
