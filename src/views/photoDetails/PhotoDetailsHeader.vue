<template>
  <div className="photo-details-header flex flex-column">
    <h1>{{ photo.title }}</h1>
    <ul className="flex flex-row">
      <li v-for="(category, index) in photo.categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <img
      :src="
        photo.url ||
          'https://via.placeholder.com/1080x720?text=Couldn%27t+upload+the+image'
      "
      :alt="photo.title"
    />
  </div>
</template>

<script>
export default {
  props: { photo: Object },
};
</script>

<style>
.photo-details-header h1 {
  word-spacing: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--secondary);
}
.photo-details-header li {
  margin: 0 0.7rem;
}
</style>
