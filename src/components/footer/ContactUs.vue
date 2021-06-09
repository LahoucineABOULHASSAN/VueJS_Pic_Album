<template>
  <div id="contact-us" class="contact flex flex-column">
    <h2>Contact Us</h2>
    <form
      class="flex flex-column"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
      novalidate="true"
      name="picalbum_contact"
      method="POST"
      action="/"
    >
      <input type="hidden" name="form-name" value="picalbum_contact" />
      <input
        type="text"
        v-model="mail.name"
        @click="reset"
        name="name"
        placeholder="Enter Full Name"
        required
      />
      <input
        type="email"
        name="email"
        @click="reset"
        v-model="mail.email"
        placeholder="Enter Your E-Mail Here"
        required
      />
      <input
        type="text"
        name="subject"
        @click="reset"
        v-model="mail.subject"
        placeholder="Enter The Subject"
      />
      <textarea
        v-model="mail.message"
        @click="reset"
        name="message"
        placeholder="Enter Your Message Here"
        rows="2"
        required
      ></textarea>
      <button type="submit" :disabled="disableButton">
        Submit
      </button>
    </form>
    <transition appear name="fade">
      <p v-if="isSucceed" class="isSucceed">
        Your request has been submitted, Thank you for contacting us
      </p>
    </transition>
    <transition appear name="slide">
      <div v-if="errors.length" class="error">
        <i @click="reset" class="close icon"></i>
        <p v-for="(error, i) in errors" :key="i">
          {{ error.error }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const mail = ref({});
    const errors = ref([]);
    const isSucceed = ref(false);
    const disableButton = ref(false);
    const validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const formValidation = () => {
      !mail.value.name &&
        errors.value.push({
          key: "name",
          error: "The name field is Required!.",
        });
      !mail.value.email
        ? errors.value.push({
            key: "email",
            error: "The email field is Required!.",
          })
        : !validEmail(mail.value.email) &&
          errors.value.push({
            key: "email",
            error: "This email is NOT Valide!.",
          });
      !mail.value.subject &&
        errors.value.push({
          key: "subject",
          error: "The subject field is Required!.",
        });
      !mail.value.message &&
        errors.value.push({
          key: "message",
          error: "The message field is Required!.",
        });
      disableButton.value = true;
      if (!errors.value.length) {
        return true;
      } else return false;
    };
    const reset = () => {
      errors.value = [];
      disableButton.value = false;
    };
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
    const postData = async (body) => {
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
        if (res.ok) {
          reset();
          mail.value = {};
          isSucceed.value = true;
          setTimeout(() => (isSucceed.value = false), 3000);
        } else {
          throw Error("Request fail to be sent. please try again later.");
        }
      } catch (err) {
        errors.value.push({
          key: "fail",
          error: err.message,
        });
      }
    };
    const handleSubmit = (event) => {
      if (formValidation()) {
        const data = mail.value;
        const body = encode({
          "form-name": event.target.getAttribute("name"),
          ...data,
        });
        postData(body);
      }
    };
    return {
      mail,
      errors,
      postData,
      isSucceed,
      disableButton,
      reset,
      validEmail,
      formValidation,
      handleSubmit,
    };
  },
};
</script>
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
.contact .isSucceed {
  background: #6ed3f9;
  text-align: center;
  padding: 0.8rem;
  color: var(--grey);
  font-weight: bold;
  border-radius: 5px;
}
.contact .fade-enter-active {
  animation: fadein 2s;
}
.contact .fade-leave-active {
  animation: fadeout 2s;
}
.contact .error {
  width: 100%;
  margin: 0.5rem 0;
  position: relative;
}
.contact .error p {
  margin: 5px 0;
}
.contact .error i.icon {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}
.contact .slide-enter-from,
.contact .slide-leave-to {
  transform: translateY(-200px);
}
.contact .slide-enter-active {
  transition: scale 3s ease;
  animation: slidedown 2s;
}
.contact .slide-leave-active {
  transition: scale 3s ease;
  animation: slideup 2s;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes slidedown {
  0% {
    transform: translateY(-100%);
    z-index: -1;
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    z-index: 0;
    opacity: 1;
  }
}
@keyframes slideup {
  0% {
    transform: translateY(0);
    z-index: 0;
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    z-index: -1;
    opacity: 0;
  }
}
</style>
