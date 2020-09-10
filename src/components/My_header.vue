<template>
  <div class="home">
    <div id="left">
      <div>
        <a href="#">
          <img
            alt="Vue logo"
            src="../assets/pixoboy.jpg"
            style="float:left;
            "
          />
        </a>
      </div>
      <a href="#" style="margin-left:50px">背景</a>
      <a href="#">学校</a>
      <a href="#">商业</a>
      <a href="#">食品</a>
      <a href="#">办公</a>
      <a href="#">科技</a>
    </div>

    <div id="right">
      <a href="#">
        探索
        <img src="../assets/_20200908202413.png" />
      </a>
      <a href="#">
        登录
       
      </a>
       <span></span>
      <a href="#">加入</a>
      <button>
        <img src="../assets/_20200908201834.png" />上载
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
  width: 1800px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#left {
  width: 65%;
  float: left;
  margin-top: 13px;
}

#left > a {
  width: 80px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
  line-height: 40px;
}

#right {
  width: 35%;
  float: right;
  margin-top: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: nowrap;
}
#right > a {
  text-align: center;

  width: 80px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
}
#right > span {
  width: 2px;
  height: 25px;
  font-size: 30px;
  background-color: #eeeeee;
  
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
   position: relative;
  top: 5px;
 
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