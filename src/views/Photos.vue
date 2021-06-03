<template>
  <section>
    <Header @handelSearch="item = $event.toLowerCase()" />
    <Album v-if="data.success" :photos="filterResults" />
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
    <Pages
      v-if="data.success"
      :num="Math.ceil(data.totale_photos / 12)"
      @changePage="handlePagination($event)"
    />
  </section>
  <Footer />
</template>
<script>
import { ref, computed, watch } from "vue";
import Album from "./photos/Album";
import Pages from "./photos/Pages";
import getData from "../composables/getData";
import { Header, Loading, Error, Footer } from "../components";
export default {
  components: { Header, Album, Loading, Error, Footer, Pages },
  setup() {
    const item = ref("");
    const currentPage = ref(1);
    const { data, error, fetchData } = getData();
    const handlePagination = (p) => {
      currentPage.value = p;
    };
    fetchData(process.env.VUE_APP_API_URL + `?page=${currentPage.value}`);
    watch(currentPage, (currentValue) => {
      fetchData(process.env.VUE_APP_API_URL + `?page=${currentValue}`);
      console.log("call");
    });
    const filterResults = computed(() =>
      data.value.photos.filter((photo) =>
        photo.title.toLowerCase().includes(item.value)
      )
    );
    return {
      item,
      currentPage,
      data,
      error,
      handlePagination,
      fetchData,
      filterResults,
    };
  },
};
</script>
