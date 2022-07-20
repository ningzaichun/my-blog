<template>
  <div id="about-header">
    <div class="about-top">
      <div class="menu-container">
        <ul class="menu">
          <li class="menu-item">
            <a @click="goto('/crush/home', 'Home')">首页</a>
          </li>
          <li class="menu-item">
            <a @click="goto('/crush/about', 'About')">关于</a>
          </li>
          <li class="menu-item">
            <a @click="goto('/crush/photo', 'PhotoWall')">照片</a>
          </li>
          <li class="menu-item">
           <a @click="goto('/crush/friend', 'FriendChain')">链接</a>
          </li>
          <li class="menu-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://milj.taobao.com"
              >店铺</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- END .about-top -->
    <div class="about-content">
      <div id="logolink">
        <a href="https://imshu.cc/"
          ><img
            src="../../assets/psb.jpg"
        /></a>
      </div>
      <!--博主描述-->
      <h1>青冬栗</h1>
      <p>涂鸦和日志</p>
    </div>
    <div class="about-bottom"></div>
  </div>
</template>

<script>
export default {
  created() {
    // this.getData();
    this.$router.push({
      path: "/crush/home",
      name: "Home",
    });
  },
  methods: {
    goto(path, name) {
      this.$router.push({
        path: path,
        name: name,
      });
    },
  },
};
</script>
<style scoped>
#about-header {
  position: relative;
  margin: 20px auto 0 auto;
  padding: 10px 0 0;
  width: 700px;
  word-wrap: break-word;
  text-align: center;
}
#about-header li {
  position: relative;
  display: inline-block;
  padding: 5px 0;
}
#about-header li a {
  display: block;
  padding: 0 15px;
  width: auto;
  color: #3d3d3d;
}
#about-header .about-top {
  position: relative;
  height: 55px;
  background: #fff
    url(https://imshu.cc/wp-content/themes/CelineDion/images/about-top.png) top
    no-repeat;
}
#about-header .about-top .menu {
  position: relative;
  top: 20px;
  color: #5a5a5a;
  font-size: 12px;
}

#about-header .about-content {
  padding: 30px 0 40px;
  background: #fff;
  text-align: center;
}
#about-header .about-content #logolink {
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
#about-header .about-content h1 {
  margin-top: 15px;
  font-weight: 600;
  font-size: 30px;
  color: #5a5a5a;
}
#about-header .about-content p {
  padding: 10px 0;
  color: #5a5a5a;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);
  line-height: 2em;
  font-size: 16px;
}
.about-content #logolink img {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

/*  选中的样式
 #about-header li.current-menu-item > a, #about-header li.current-menu-parent > a {
    color: #45B6F7;
} 
*/

#about-header li a:hover {
  color: #6ca6cd;
}
.about-bottom {
  margin-bottom: 20px;
}
</style>
