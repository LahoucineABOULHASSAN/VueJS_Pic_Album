import { createRouter, createWebHistory } from "vue-router";
import { Photos, About, Contact, PhotoDetails } from "../views";

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
