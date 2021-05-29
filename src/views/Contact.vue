<template>
  <section id="contact-us">
    <p class="contact-text">
      Please, if you have any questions or comments, don't hesitate to contact
      us, in the form below. Your feedback is very important to us.<br />Thank
      you.
    </p>
    <ContactUs />
    <Features />
  </section>
</template>

<script>
import Features from "./contact/Features";
import { ContactUs } from "../components";
export default {
  components: { ContactUs, Features },
};
</script>

<style>
.contact-text {
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
  word-spacing: 3px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 15px;
  background: var(--lessLighter);
}
</style>
