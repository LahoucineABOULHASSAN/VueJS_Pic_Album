<template>
  <nav class="flex flex-row">
    <div class="nav-link nav-logo">
      <div class="nav-btn" @click="displayMenu">
        <i class="bars icon"></i>
      </div>
      <span>PicAlbum</span>
    </div>
    <div class="menu">
      <router-link class="nav-link" to="/" @click="() => scrollTo('#photos')"
        >Photos</router-link
      >
      <router-link class="nav-link" to="/documentation"
        >Documentation</router-link
      >
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
    </div>
  </nav>
</template>
<script>
import { displayMenu, scrollTo } from "../utilities/nav";
export default {
  setup() {
    return { displayMenu, scrollTo };
  },
};
</script>
<style>
nav {
  color: var(--light);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background: var(--dark);
}
.nav-link {
  padding: 1rem;
  display: inline-block;
}
.nav-link.nav-logo {
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}
.nav-link {
  color: var(--light);
}
.nav-link:hover {
  background: var(--secondary);
}
.nav-link.router-link-active {
  background: var(--primaryLight);
  color: var(--dark);
}
.nav-btn {
  display: none;
}
.nav-btn:hover {
  background: none;
  color: var(--primary);
}
/* Screen styles */
@media screen and (max-width: 640px) {
  nav .nav-btn {
    top: 0.7rem;
    left: 1rem;
    display: block;
    position: absolute;
  }
  nav.flex-row {
    flex-direction: column;
    width: 100%;
  }
  nav .nav-link.nav-logo {
    width: 100%;
    padding: 0.7rem 0;
    text-align: center;
    position: relative;
  }
  nav .menu {
    display: none;
  }
  .responsive .menu {
    display: block;
    width: 100%;
  }
  .responsive .menu .nav-link {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
