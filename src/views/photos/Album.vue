<template>
  <div id="photos" class="photos">
    <a
      v-for="(photo, index) in photos"
      :key="index"
      :href="`/photos/${photo.id}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="photo.url" :alt="photo.title" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    photos: Array,
  },
};
</script>
<style>
.photos {
  width: 90%;
  line-height: 0;
  column-count: 4;
  column-gap: 6px;
  margin: 2rem auto;
}
.photos img {
  cursor: pointer;
  margin-top: 3px;
  transition: 0.3s;
  margin-bottom: 3px;
  border-radius: 10px;
}
.photos img:hover {
  opacity: 0.85;
}
@media screen and (max-width: 1000px) {
  .photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media screen and (max-width: 800px) {
  .photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media screen and (max-width: 400px) {
  .photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
</style>
