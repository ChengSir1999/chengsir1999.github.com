<template>
  <div class="project" :style="{background:'#25c1f1'}">
    <div class="container">
      <span class="tip">WHAT I DO</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border"></span>
      <ul>
        <li><a href="https://bbscloud.com/"><img src="../common/images/web1.png" alt="项目1" /></a></li>
        <li><a href="https://www.sibuzyn.com/"><img src="../common/images/web2.png" alt="项目2" /></a></li>
        <!-- <li><img src="../common/images/web3.png" alt="项目3" /></li>
        <li><img src="../common/images/web4.png" alt="项目4" /></li> -->
        <div class="clearfix"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      title: '我的项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4% 0;
}
.tip {
  display: inline-block;
  position: relative;
  padding: 6px 20px;
  margin: 0 auto 10px;
  font-size: 20px;
  background: #03a9f4;
  color: #fff;
}
.tip:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 42%;
  bottom: -10px;
  content: "";
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #03a9f4 transparent;
}
.title {
  padding: 6px 0 10px;
  font-family: "Overlock", cursive;
  color: #2f2c06;
  font-size: 36px;
}
.border {
  display: block;
  width: 20%;
  height: 1px;
  position: relative;
  margin: 0 auto 30px;
  background: #8c8989;
}
.border:after {
  position: absolute;
  top: 0;
  left: 30%;
  content: " ";
  width: 40%;
  height: 5px;
  margin-top: -2px;
  background: #03a9f4;
}

ul {
  width: 100%;
  padding: 4% 0;
  display: flex;
  justify-content: center;
}
ul li {
  float: left;
  width: 20%;
  margin-right: 5%;
  height: 80%;
  box-sizing: border-box;
  transition: transform 0.25s ease;
}
ul li img {
  width: 100%;
  display: block;
}
ul li:hover {
  z-index: 100;
  -webkit-transform: scale(1.1);
  transform: scale(1.2);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
