<template>
  <section class="copyrights flex flex-column">
    <p>
      <a
        href="https://www.linkedin.com/in/lahoucineaboulhassan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="linkedin icon"></i>
      </a>
      <a
        href="https://github.com/LahoucineABOULHASSAN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="github icon"></i>
      </a>
      <a
        href="https://www.instagram.com/my_in_id/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="instagram icon"></i>
      </a>
    </p>
    <p>
      <span>PicAlbum</span>, Copyrights &copy; {{ new Date().getFullYear() }} |
      by
      <a
        href="https://aboulhassan.netlify.app/"
        class="btn-link"
        target="_blank"
        rel="noopener noreferrer"
        >Lahoucine Aboulhassan</a
      >
    </p>
    <ToTop />
  </section>
</template>
<script>
import { onMounted } from "vue";
import ToTop from "./ToTop";
import { stick } from "@/utilities/nav";
export default {
  components: { ToTop },
  setup() {
    onMounted(() => (window.onscroll = () => stick()));
  },
};
</script>
<style>
/* Copyrights Style */
.copyrights {
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--dark);
  position: relative;
  background: var(--primaryLight);
}
.copyrights p {
  margin: 0.25rem 0;
  font-size: 1rem;
  font-weight: bold;
  word-spacing: 5px;
  letter-spacing: 2px;
}
.copyrights i.icon {
  margin: 0 0.8rem;
  font-size: 1.5rem;
  color: var(--secondary);
}
.copyrights span {
  cursor: pointer;
  color: var(--secondary);
  text-decoration: underline;
}
</style>
