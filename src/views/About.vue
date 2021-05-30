<template>
  <section class="about-section">
    <h1>More about me and my projects</h1>
    <section class="about-me">
      <ul class="flex flex-column">
        <li
          class="flex about-tag active-tag"
          @click="(event) => handleTags(event, false)"
        >
          <i class="cloud icon"></i>
        </li>
        <li class="flex about-tag" @click="(event) => handleTags(event, true)">
          <i class="user icon"></i>
        </li>
      </ul>
      <article>
        <transition class="flex flex-column" appear name="article-work"
          ><Work v-if="!me"
        /></transition>
        <transition class="flex flex-column" appear name="article-me"
          ><Me v-if="me"
        /></transition>
      </article>
    </section>
  </section>
</template>
<script>
import { ref } from "vue";
import Me from "./about/Me";
import Work from "./about/Work";
import { isActive } from "../utilities/nav";
export default {
  components: { Me, Work },
  setup() {
    const me = ref(false);
    const handleTags = (event, val) => {
      me.value = val;
      isActive(event);
    };
    return { me, handleTags };
  },
};
</script>
<style>
.about-section {
  background: #eee;
}
.about-section h1 {
  text-align: center;
  text-transform: capitalize;
}
.about-section #about {
  padding: 0;
}
.about-section #about.grid-2 {
  grid-gap: 0;
}
.about-me {
  grid-gap: 0;
  display: grid;
  grid-template-columns: 75px auto;
}
.about-section .about-me {
  margin-top: 0;
}
.about-me > ul {
  width: fit-content;
  justify-content: flex-start;
}
.about-me > ul li {
  width: 75px;
  height: 75px;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  background: var(--grey);
  justify-content: center;
}
.about-me .active-tag {
  background: var(--red);
  color: var(--dark);
}
.about-me > ul li i.icon {
  margin: 0;
  font-size: 1.3rem;
}
/* arcticle style */
article {
  overflow: hidden;
}
.article-work-enter-active {
  animation: slide-in 0.8s forwards;
  -webkit-animation: slide-in 1s forwards;
}
.article-work-leave-active {
  animation: slide-out 0.8s forwards;
  -webkit-animation: slide-out 1s forwards;
}
.article-me-enter-active {
  animation-delay: 0.4;
  animation: slide-to-bottom 1s ease-out;
}
.article-me-leave-active {
  animation: slide-to-top 1s ease-out;
}
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@-webkit-keyframes slide-in {
  0% {
    -webkit-transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
  }
}
@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(100%);
  }
}
@keyframes slide-to-top {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@-webkit-keyframes slide-to-top {
  0% {
    -webkit-transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(0%);
  }
}
@keyframes slide-to-bottom {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@-webkit-keyframes slide-to-bottom {
  0% {
    -webkit-transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100%);
  }
}
article > div {
  padding: 1.9rem;
  background: #fff;
  border: 1px solid #cfcfcf;
}
article div h2 {
  color: var(--red);
  font-size: 1.6rem;
  word-spacing: 8px;
  letter-spacing: 2px;
  text-transform: capitalize;
}
article div > * {
  margin-bottom: 1.5rem;
}
article div p {
  text-align: justify;
  color: var(--grey);
}
article div img {
  float: left;
  display: block;
  max-width: 200px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
article div p a {
  color: var(--green);
  text-transform: capitalize;
}
article div p a:hover {
  text-decoration: underline;
}
article div h4 {
  width: 100%;
  color: var(--grey);
  padding: 0.5rem 1rem;
  background: var(--lessLighter);
}
article div ul {
  width: 100%;
  line-height: 1.6;
  padding: 0 1rem;
}
</style>
