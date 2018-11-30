import Vue from "vue";
import Router from "vue-router";

import News from "@/components/new"; //消息中心
import My from "@/components/My"; //我的个人中心
import Search from "@/components/Search"; //搜课程
import Index from "@/components/Index"; //首页
import system from "@/components/system"; //系统消息
import Customer from "@/components/Customer"; //客服

Vue.use(Router);
var router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/Index"
    },
    {
      path: "/Index",
      name: "Index",
      component: Index
    },
    {
      path: "/My",
      name: "My",
      component: My
    },
    {
      path: "/News",
      name: "News",

      component: News
    },
    {
      path: "/Search",
      name: "Search",
      component: Search
    }, {
      path: '/Customer',
      component: Customer,
      name: "Customer"
    }, {
      path: '/system',
      component: system,
      name: "system"
    }
  ]
});

export default router;
