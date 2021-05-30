<template>
  <div>
    <h2>{{ doc.heading }}</h2>
    <p>
      {{ doc.paragraph }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    doc: Object,
  },
};
</script>

<style></style>
