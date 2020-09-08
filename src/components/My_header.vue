<template>
  <div class="home">
    <a href="#">
      <img
        alt="Vue logo"
        src="../assets/pixoboy.jpg"
        style="margin-left:20px;margin-top:10px;float:left;"
      />
    </a>
    <div id="left">
      <a href="#">背景</a>
      <a href="#">自然</a>
      <a href="#">学校</a>
      <a href="#">商业</a>
      <a href="#">食品</a>
      <a href="#">办公</a>
      <a href="#">科技</a>
      <a href="#">爱情</a>
      <a href="#">金钱</a>
      <a href="#">天空</a>
      <a href="#">鲜花</a>
      <a href="#">狗</a>
    </div>

    <div id="right">
      <a href="#">
        探索
        <img src="../assets/_20200908202413.png" />
      </a>
      <a href="#">
        登录
        <span>|</span>
      </a>
      <a href="#">加入</a>
      <button>
        <img src="../assets/_20200908201834.png" />上传
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
div > a:nth-child(2) > p {
  margin-left: 60px;
}
.home {
  width: 100%;
  height: 50px;
}
#left {
  float: left;
  margin-top: 13px;
  margin-left: 50px;
}
#left > a {
  width: 60px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
}

#right {
  float: right;
  margin-top: 5px;
  margin-right: 70px;
}
#right > a {
  width: 80px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
}
#right > a:nth-child(2) > span {
  font-size: 30px;
  color: #eeeeee;
  margin-left: 20px;
}
#right > a > img {
  width: 20px;
  position: relative;
  top: 5px;
  left: 3px;
}
#right > button {
  border: none;
  outline: none;
  width: 105px;
  height: 38px;
  background: #02be6e;
  border-radius: 30px;
  color: white;
  font-size: 14px;
}
#right > button:hover {
  background: #02b468;
}
#right > button > img {
  width: 20px;
  position: relative;
  top: 5px;
  right: 5px;
}
</style>