<template>
  <div id="contact-us" class="contact flex flex-column">
    <h2>Contact Us</h2>
    <form class="flex flex-column">
      <input type="text" placeholder="Enter Full Name" required />
      <input type="email" placeholder="Enter Your E-Mail Here" required />
      <textarea placeholder="Enter Your Message Here" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<style>
/* ContactUs style */
.contact h2 {
  margin: 1rem;
}
.contact form {
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
}
.contact input,
textarea,
button {
  width: 100%;
  border: none;
  margin: 0.5rem 0;
  border-radius: 5px;
  color: var(--light);
  padding: 0.5rem 1rem;
  background: var(--dark);
}
.contact button {
  width: 50%;
  margin: 1rem auto;
  background: var(--primaryDarker);
}
</style>
