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
  width: auto;
  height: auto;
  padding: 2rem;
  margin: 1rem 0;
  max-width: 100%;
  overflow: scroll;
  max-height: 370px;
  color: var(--light);
  background: var(--dark);
}
pre code {
  width: 100%;
}
@media screen and (max-width: 640px) {
  pre {
    padding: 2rem 0.5rem;
  }
}
</style>
