<template>
  <main class="main-app">
    <Nav />
    <router-view />
    <CopyRights />
  </main>
</template>
<script>
import Nav from "./Nav";
import CopyRights from "./CopyRights";
export default {
  components: { Nav, CopyRights },
};
</script>
