<template>
  <section id="photo-details">
    <div v-if="data.success" className="photo-details flex flex-column">
      <PhotoDetailsHeader :photo="data.photo" />
      <PhotoDetailsDesc :photo="data.photo" />
    </div>
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </section>
</template>
<script>
import { useRoute } from "vue-router";
import getData from "@/composables/getData";
import { Loading, Error } from "@/components";
import PhotoDetailsDesc from "./photoDetails/PhotoDetailsDesc";
import PhotoDetailsHeader from "./photoDetails/PhotoDetailsHeader";
export default {
  components: { PhotoDetailsHeader, PhotoDetailsDesc, Loading, Error },
  setup() {
    const id = useRoute().params.id;
    const { data, error, fetchData } = getData();
    fetchData(process.env.VUE_APP_API_URL + "/" + id);
    return { id, data, error, fetchData };
  },
};
</script>
<style>
/* Photo Details style */
.photo-details {
  width: 90%;
  margin: 2rem auto;
}
.photo-details-header > *,
.photo-deatils-desc div > *:not(.flex-row *) {
  margin-bottom: 1rem;
}
</style>
