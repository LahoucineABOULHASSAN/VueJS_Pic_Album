<template>
  <pre><code v-html="formatedStr"></code></pre>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/arta.css";
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
export default {
  props: {
    jsonStr: String,
  },
  setup({ jsonStr }) {
    const formatedStr = hljs.highlight(jsonStr, {
      language: "json",
    }).value;
    return { formatedStr };
  },
};
</script>

<style>
pre {
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  overflow: hidden;
  color: var(--light);
  background: var(--dark);
}
pre code {
  width: 100%;
}
</style>
