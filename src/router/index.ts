import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
const files = import.meta.glob("../views/**/**/index.vue");

function translateRoute(fileRouter: any) {
  let routers: Array<RouteRecordRaw> = [];
  Object.keys(fileRouter).forEach((key: string) => {
    let name = key.replace(/^(\.\.\/views)(.*)?(\/index.vue)$/, "$2");
    routers.push({
      name: name.replace(/^\//, "") == "" ? "home" : name.replace(/^\//, ""),
      path: name == "" ? "/" : name,
      component: fileRouter[key],
      meta: {
        title: name.replace(/^\//, "") == "" ? "home" : name.replace(/^\//, ""),
      },
    });
  });
  return routers;
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: translateRoute(files),
});
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});
export default router;

