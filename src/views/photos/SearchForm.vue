<template>
  <form class="form-search" @submit.prevent="handleSubmit">
    <input
      class="input-search"
      list="datalistOptions"
      id="exampleDataList"
      type="search"
      placeholder="Search your favourite photos"
      aria-label="Search"
      v-model="searchItem"
      @change="
        (event) => {
          $emit('handelSearch', event.target.value);
        }
      "
    />
    <datalist id="datalistOptions">
      <option
        v-for="option in options"
        :value="option.title ? option.title : option.name"
        :key="option.id"
      />
    </datalist>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  props: { options: Array },
  setup() {
    const searchItem = ref("");
    return { searchItem };
  },
};
</script>
