<template>
  <ul class="flex flex-row doc-nav">
    <li
      class="doc-nav-item doc-nav-active"
      @click="
        (event) => {
          $emit('docNav', 'intro');
          isDocNavActive(event);
        }
      "
    >
      <i class="map signs icon"></i>Get Started
    </li>
    <li
      class="doc-nav-item"
      @click="
        (event) => {
          $emit('docNav', 'install');
          isDocNavActive(event);
        }
      "
    >
      <i class="cloud download down icon"></i>Installation
    </li>
    <li
      class="doc-nav-item"
      @click="
        (event) => {
          $emit('docNav', 'api');
          isDocNavActive(event);
        }
      "
    >
      <i class="box icon"></i>API
    </li>
    <li
      class="doc-nav-item"
      @click="
        (event) => {
          $emit('docNav', 'resources');
          isDocNavActive(event);
        }
      "
    >
      <i class="archive icon"></i>Resource
    </li>
  </ul>
</template>
<script>
import { onMounted } from "vue";
import { isDocNavActive, stick } from "../../utilities/nav";
export default {
  setup() {
    onMounted(() => (window.onscroll = () => stick()));
    return { isDocNavActive, stick };
  },
};
</script>
<style>
.doc-nav {
  width: 80%;
  margin: 2rem auto;
  justify-content: center;
}
.doc-nav.sticky {
  left: 0;
  right: 0;
  top: 56px;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  position: fixed;
}
.doc-nav li {
  padding: 1rem;
  margin: 0 1rem;
  color: var(--dark);
  border-radius: 3px;
  border: 1px solid;
  border-top-width: 2px;
}
.doc-nav.sticky li:not(li.doc-nav-active) {
  color: var(--light);
  background: #000000b4;
}
.doc-nav li:hover {
  cursor: pointer;
  background: var(--primaryLighter);
}
.doc-nav li i.icon {
  margin-right: 1rem;
}
.doc-nav li:nth-of-type(2n + 1) {
  border-color: #f740682c;
  border-top-color: var(--red);
}
.doc-nav li:nth-of-type(2n + 2) {
  border-color: #06bb572c;
  border-top-color: var(--green);
}
.doc-nav li:nth-of-type(2n + 3) {
  border-color: #ffca1b2c;
  border-top-color: var(--yellow);
}
.doc-nav li:nth-of-type(2n + 4) {
  border-color: #1ae5ec2c;
  border-top-color: var(--primaryLight);
}
/* elements */
.doc-nav.sticky li:nth-of-type(n):hover {
  color: var(--dark);
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 1),
.doc-nav li:nth-of-type(2n + 1):hover,
.doc-nav.sticky li:nth-of-type(2n + 1):hover {
  background: #f740682c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 2),
.doc-nav li:nth-of-type(2n + 2):hover,
.doc-nav.sticky li:nth-of-type(2n + 2):hover {
  background: #06bb572c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 3),
.doc-nav li:nth-of-type(2n + 3):hover,
.doc-nav.sticky li:nth-of-type(2n + 3):hover {
  background: #ffca1b2c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 4),
.doc-nav li:nth-of-type(2n + 4):hover,
.doc-nav.sticky li:nth-of-type(2n + 4):hover {
  background: #1ae5ec2c;
}
/* content */
.doc-nav li:nth-of-type(2n + 1) i.icon {
  color: var(--red);
}
.doc-nav li:nth-of-type(2n + 2) i.icon {
  color: var(--green);
}
.doc-nav li:nth-of-type(2n + 3) i.icon {
  color: var(--yellow);
}
.doc-nav li:nth-of-type(2n + 4) i.icon {
  color: var(--primaryLight);
}
@media screen and (max-width: 640px) {
  .doc-nav {
    width: 100%;
    justify-content: space-around;
  }
  .doc-nav li {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin: 2px;
  }
  .doc-nav li > i.icon {
    margin: 0;
    margin-bottom: 5px;
  }
}
</style>
