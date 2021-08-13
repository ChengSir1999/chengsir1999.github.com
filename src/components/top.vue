<template>
  <div class="top">
    <div class="container">
      <slot></slot>
      <div class="banner">
        <div class="avator">
          <img src="../common/images/avator.jpg" alt="" />
        </div>
        <div class="info">
          <h5 class="hello">Hello</h5>
          <h1>{{ info.name }}</h1>
          <h6 class="text_hidden">{{ info.job }}</h6>
          <ul>
            <li class="text_hidden">
              <b>出生年月</b> <span>{{ info.birth }}</span>
            </li>
            <li class="text_hidden networkLink" :style="{zIndex:1000}">
              <b>电子邮箱</b> <a href="#">{{ info.email }}</a>
            </li>
            <li class="text_hidden networkLink" :style="{zIndex:1000}">
              <b>手机号码</b> <a href="tel://19862827985">{{ info.phone }}</a>
            </li>
            <li class="text_hidden">
              <b>联系地址</b> <span>{{ info.address }}</span>
            </li>
            <li class="text_hidden networkLink" :style="{zIndex:1000}">
              <b>个人网站</b> <a href="https://chengsir1999.github.io/">{{ info.website }}</a>
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      info: {
        name: 'I’m 程子昊',
        job: 'h5 Developer and Web Engineer',
        birth: '1999-04-12',
        email: 'chengsir1999@163.com',
        phone: '19862527985',
        address: '青岛市 李沧区',
        website: ' ' + 'https://chengsir1999.github.io/'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  width: 100%;
  height: auto;
  background: url("../common/images/banner.jpg") no-repeat center 0px;
  background-size: cover;
  color: #fff;
}
.container {
  width: 100%;
  height: auto;
  background: url("../common/images/dott.png") repeat;
  position: relative;
}
.banner {
  max-width: 1200px;
  padding: 10% 0;
  margin: 0 auto;
}
.avator {
  float: left;
  width: 40%;
  text-align: center;
  position: relative;
  z-index: 10;
}
.avator img {
  width: 74%;
  border: 5px solid rgba(255, 255, 255, 0.68);
}
.info {
  float: right;
  width: 60%;
  text-align: left;
}
.info .hello {
  position: relative;
  display: inline-block;
  padding: 4px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #03a9f4;
  font-family: "Overlock", cursive;
  vertical-align: top;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/*小三角*/
.info .hello:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 6px;
  bottom: -4px;
  content: "";
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: #03a9f4 transparent;
}
a{
  color: white;
  text-decoration: none;
}
a:hover{
  color: #03a9f4;
}
h1 {
  font-size: 34px;
  font-family: "Overlock", cursive;
}
h6 {
  margin-top: 6px;
  font-size: 14px;
  font-family: "Overlock", cursive;
  color: #c7c7c7;
  letter-spacing: 4px;
}
.info ul {
  margin-top: 10px;
  border-top: 1px solid #fff;
}
.info ul li {
  font-size: 20px;
  margin-top: 26px;
}
.info b {
  display: inline-block;
  font-family: "Overlock", cursive;
  margin-right: 10px;
}
.info ul li span:hover {
  color: #03a9f4;
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.networkLink{
  float:inherit;
  position: relative;
  display: flex;
  overflow: inherit;
}
</style>
