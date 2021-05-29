<template>
  <section>
    <Header @handelSearch="item = $event.toLowerCase()" />
    <Album v-if="data.success" :photos="filterResults" />
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </section>
  <Footer />
</template>
<script>
import { ref, computed } from "vue";
import Album from "./photos/Album";
import getData from "../composables/getData";
import { Header, Loading, Error, Footer } from "../components";
export default {
  components: { Header, Album, Loading, Error, Footer },
  setup() {
    const item = ref("");
    const { data, error, fetchData } = getData(process.env.VUE_APP_API_URL);
    fetchData();
    const filterResults = computed(() =>
      data.value.photos.filter((photo) =>
        photo.title.toLowerCase().includes(item.value)
      )
    );
    return { item, data, error, fetchData, filterResults };
  },
};
</script>
