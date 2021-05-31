<template>
  <p class="alert">{{ alert }}</p>
</template>

<script>
export default {
  props: {
    alert: String,
  },
};
</script>
<style>
.alert {
  width: 100%;
  padding: 1rem;
  color: var(--dark);
  background: #ff0a0a2f;
}
</style>
