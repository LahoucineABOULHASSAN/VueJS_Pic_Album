import { createRouter, createWebHistory } from "vue-router";
import { Photos, About, Contact, PhotoDetails, Documentation } from "../views";

const routes = [
  {
    path: "/",
    name: "photos",
    component: Photos,
  },
  {
    path: "/photos/:id",
    name: "photo",
    component: PhotoDetails,
  },
  {
    path: "/documentation",
    name: "documentation",
    component: Documentation,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
