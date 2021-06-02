<template>
  <span class="to-up hide-btn" @click="toTop">
    <i class="arrow alternate up icon" />
  </span>
</template>

<script>
import { toTop } from "@/utilities/nav";
export default {
  setup() {
    return { toTop };
  },
};
</script>

<style>
.to-up {
  position: absolute;
  right: 0;
  z-index: 2;
  width: 56px;
  height: 56px;
  bottom: 10px;
  border: none;
  cursor: pointer;
  line-height: 56px;
  text-align: center;
  background: var(--dark);
}
.fix {
  position: fixed;
}
.hide-btn {
  display: none;
}
.to-up .icon.arrow {
  margin: 0;
  font-size: 17px;
  color: var(--red);
}
.to-up:hover .icon.arrow {
  font-size: 22px;
  color: var(--error);
}
</style>
