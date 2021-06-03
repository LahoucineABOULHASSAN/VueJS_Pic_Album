<template>
  <form class="form-search" @submit.prevent="handleSubmit">
    <input
      class="input-search"
      type="text"
      placeholder="Search"
      v-model="item"
    />
  </form>
</template>

<script>
import filterData from "@/composables/filterData";
export default {
  name: "SearchForm",
  props: { options: Array },
  setup(props, { emit }) {
    const item = filterData(props, emit);
    return {
      item,
    };
  },
};
</script>
