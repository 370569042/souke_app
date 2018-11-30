<template>
  <div class="footer_tab">
    <div class="margin_20 userinfo">
      <router-link
        class="container tab_itme"
        :to="item.path"
        v-for="(item, index) in nav"
        :key="index"
      >
        <div @click="routerLink(index, item.path)" class="text-box">
          <img :src="navIndex === index ? item.img_show:item.img">
          <p :class="navIndex === index ? 'item-cn item-cn-active' : 'item-cn'">{{ item.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer_tab",
  data() {
    return {
      nav: [
        {
          title: "首页",
          img: "/static/ionc_homepage.png",

          img_show: "/static/ionc_homepage_bg.png",
          path: "Index"
        },
        {
          title: "搜课",
          img: "/static/ionc_searchcourse.png",
          img_show: "/static/ionc_searchcourse_bg.png",
          path: "Search"
        },
        {
          title: "消息",
          img: "/static/ionc_news.png",
          img_show: "/static/ionc_news_bg.png",
          path: "News"
        },
        {
          title: "我的",
          img: "/static/ionc_my.png",
          img_show: "/static/ionc_my_bg.png",
          path: "My"
        }
      ],
      navIndex: 0
    };
  },
  methods: {
    routerLink(index, path) {
      // 点击哪个路由就赋值给自定义的下标
      this.navIndex = index;
      console.log(index);
      console.log(this.navIndex);
      // 路由跳转
      this.$router.push(path);
    }
  }
};
</script>
