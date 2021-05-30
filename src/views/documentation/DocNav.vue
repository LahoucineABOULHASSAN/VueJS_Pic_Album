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
import { isDocNavActive } from "../../utilities/nav";
export default {
  setup() {
    return { isDocNavActive };
  },
};
</script>
<style>
.doc-nav {
  width: 80%;
  margin: 2rem auto;
  justify-content: center;
}
.doc-nav li {
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 3px;
  border: 1px solid;
  border-top-width: 2px;
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
.doc-nav li.doc-nav-active:nth-of-type(2n + 1),
.doc-nav li:nth-of-type(2n + 1):hover {
  background: #f740682c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 2),
.doc-nav li:nth-of-type(2n + 2):hover {
  background: #06bb572c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 3),
.doc-nav li:nth-of-type(2n + 3):hover {
  background: #ffca1b2c;
}
.doc-nav li.doc-nav-active:nth-of-type(2n + 4),
.doc-nav li:nth-of-type(2n + 4):hover {
  background: #1ae5ec2c;
}
.doc-nav li.active,
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
</style>
