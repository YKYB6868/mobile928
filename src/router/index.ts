import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayOut from "@/views/layout/LayOut.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LayOut,
    redirect:{name: "home"},
    children:[
      {
        path:"/home",
        name:"home",
        component:HomeView
      }
    ]
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
  {
    path:"/fen",
    name:"fenxiao",
    component: LayOut,
    redirect:{name: "fen"},
    children:[
      {
        path:"/fen",
        name:"fenxiao",
        component:()=>import("@/views/FenXiao.vue")
      }
    ]
  },
  {
    path:"/cart",
    name:"mycart",
    component: LayOut,
    redirect:{name: "shop"},
    children:[
      {
        path:"/cart",
        name:"mycart",
        component:()=>import("@/views/MyCart.vue")
      }
    ]
   
  },
  {
    path:"/mine",
    name:"mine",
    component: LayOut,
    redirect:{name: "home"},
    children:[
      {
        path:"/mine",
        name:"mine",
        component:()=>import("@/views/MineView.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
