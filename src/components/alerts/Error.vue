<template>
  <div id="error" role="alert">
    <h1>Error :(</h1>
    <p class="error">{{ error }}</p>
  </div>
</template>
<script>
export default {
  name: "Error",
  props: { error: String },
};
</script>
<style>
#error {
  width: 80%;
  margin: 4rem auto;
  text-align: center;
}
#error h1 {
  font-size: 2rem;
  word-spacing: 15px;
  letter-spacing: 3px;
  margin-bottom: 2rem;
}
.error {
  padding: 2rem;
  font-size: 1.3rem;
  border-radius: 15px;
  background: #e28c9cbf;
}
</style>
