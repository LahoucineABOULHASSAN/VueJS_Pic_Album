<template>
  <header class="page-heading">
    <h2>Welcome! to our web app</h2>
    <p>
      We hope you enjoy my pictures album web app. Please if you have any
      feedback, don't forget to share it in the contact section.
    </p>
    <SearchForm @update:modelValue="$emit('handelSearch', $event)" />
  </header>
</template>
<script>
import SearchForm from "./photos/SearchForm";
export default {
  components: {
    SearchForm,
  },
};
</script>
<style>
.page-heading {
  width: 80%;
  margin: 2.5rem auto;
  text-align: center;
  border-radius: 15px;
  padding: 2rem;
  background: var(--primaryLighter);
}
.page-heading > * {
  margin-bottom: 1rem;
}
.page-heading .form-search {
  width: 100%;
  margin: 1rem 0;
}
.page-heading .form-search .input-search {
  width: 100%;
  border: none;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  background: var(--light);
}
@media screen and (max-width: 640px) {
  .page-heading {
    width: 90%;
  }
  .page-heading h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
  .page-heading p {
    display: none;
  }
  .page-heading .form-search {
    width: 100%;
  }
}
</style>
