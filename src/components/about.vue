<template>
  <div class="about">
    <div class="container">
      <span class="tip">WHO AM I</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border one"></span>
      <div class="a_info">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <div contenteditable="true" class="text effect">您 在 找 前 端 工 程 师 ？？</div>
          </swiper-slide>
          <swiper-slide>
            <div contenteditable="true" class="text effect">您 真 的 来 对 了 ！！</div>
          </swiper-slide>
          <swiper-slide>
            <div contenteditable="true" class="text effect">我 就 是 一 名 热 爱 前 端 开 发 的 coder。</div>
          </swiper-slide>
          <swiper-slide>
            <div contenteditable="true" class="text effect">期 待 您 的 关 注 ~</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'about',
  data () {
    return {
      title: '自我简述',
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.effect {
    background: url("/static/img/jinx.png") 100% #333;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    animation: 10s infinite linear animate;
    font-size: 44px;
    font-weight: 900;
}
.effect:before {
    content:"";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background-color: #3ea7d8;
    z-index: -1;
}
@keyframes animate {
    0% {
        background-position:0;
    }
    100% {
        background-position:-1000px 0;
    }
}

.about {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
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
.a_info {
  font-size: 20px;
}
.swiper-container {
  width: 100%;
  height: 300px;
  line-height: 300px;
  overflow: hidden;
  text-align: center;
}
.swiper-pagination {
  top: 46%;
}
</style>
