import prompts from "../src/data/prompts.json";
import { createExcuse } from "../src/util/createExcuse";

test("all prompts have related terms", () => {
  prompts.forEach((prompt, index) => {
    expect(createExcuse(index).includes("{{")).toBeFalsy();
  });
});
