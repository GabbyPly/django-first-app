import { createRouter, createWebHistory } from "vue-router";
import UniversitiesView from "../views/UniversitiesView.vue";
import HomeView from "../views/HomeView.vue";
import BlogPostView from "../views/BlogPostView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog-post",
    name: "BlogPost",
    component: BlogPostView,
  },
  {
    path: "/universities",
    name: "universities",
    component: UniversitiesView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
