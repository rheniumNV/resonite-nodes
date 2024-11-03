import js from "@eslint/js";
import type { Linter } from "eslint";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
] satisfies Linter.Config[];
