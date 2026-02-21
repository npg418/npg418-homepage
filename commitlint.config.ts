import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "subject-case": [RuleConfigSeverity.Disabled, "always", "sentence-case"]
  }
} satisfies UserConfig;
