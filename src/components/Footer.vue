<template>
  <footer id="footer">
    <AboutUs />
    <section class="grid grid-2">
      <ContactUs />
      <Infos />
    </section>
  </footer>
</template>

<script>
import AboutUs from "./footer/AboutUs";
import ContactUs from "./footer/ContactUs";
import Infos from "./footer/Infos";
export default {
  components: {
    AboutUs,
    ContactUs,
    Infos,
  },
};
</script>

<style>
/* Footer style */
footer {
  color: var(--light);
  background: var(--dark);
}
footer > .grid-2 {
  grid-gap: 0;
}
/*  to top button */
.to-top {
  z-index: 2;
  right: 1rem;
  width: 38px;
  height: 38px;
  border: none;
  bottom: 1rem;
  display: flex;
  cursor: pointer;
  color: var(--dark);
  position: fixed;
  border-radius: 50%;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--primary);
}
</style>
