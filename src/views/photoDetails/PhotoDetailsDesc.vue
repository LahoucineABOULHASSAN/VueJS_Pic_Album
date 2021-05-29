<template>
  <div class="photo-deatils-desc">
    <div>
      <div class="flex flex-row">
        <p>
          <span>owner:</span>
          <a
            :href="`/user/${photo.owner}`"
            class="btn-link photo-details-owner"
          >
            {{ photo.owner }}
          </a>
        </p>
        <div class="stars" :style="`--rating:${photo.rating};`"></div>
      </div>
      <p><span>posted:</span>{{ moment(photo.posted_time).fromNow() }}</p>
    </div>
    <div class="flex flex-column">
      <h3>Image's Description</h3>
      <p>{{ photo.description }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: { photo: Object },
  components: {},
  setup() {
    return { moment };
  },
};
</script>

<style>
/* rating */
.stars {
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; /* make sure ★ appears correctly */
  line-height: 1;
}
.stars::before {
  content: "★★★★★";
  letter-spacing: 1px;
  background: linear-gradient(
    90deg,
    var(--star-background) var(--percent),
    var(--star-color) var(--percent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* -------- */
.photo-deatils-desc {
  width: 100%;
  padding: 1rem;
  background: var(--lessLight);
}
.photo-deatils-desc p {
  text-transform: capitalize;
  text-align: justify;
}
.photo-deatils-desc span:not(.vue-star-rating *) {
  margin-right: 1rem;
}
.photo-deatils-desc svg.vue-star-rating-star {
  display: block;
}
.photo-deatils-desc .rates p {
  text-align: right;
}
.photo-deatils-desc .photo-details-owner,
.photo-deatils-desc .photo-details-posted {
  color: var(--red);
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-style: oblique;
}
</style>
