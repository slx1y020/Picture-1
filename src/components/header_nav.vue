<template>
	<div id="nav">
		<div class="header">
      <img  class="logo" src="../assets/img/px.jpg" alt="">
      <!-- 导航左侧 -->
      <div class="header_left">
        <input class="search" type="text" placeholder="搜索" v-model="search" >
        <span class="next_search" @click.stop="pic_nav">照片</span>
          <div class="pic" v-show="pic"  ref="showPanel">
            <ul>
              <li><router-link to="/">图片</router-link></li>
              <li><router-link to="/">照片</router-link></li>
              <li><router-link to="/">矢量图</router-link></li>
              <li><router-link to="/">插画</router-link></li>
              <li><router-link to="/">视频</router-link></li>
            </ul>
            <router-link to="/">搜索选项➡</router-link>
          </div>
      </div>
      <!-- 导航右侧 -->
      <div class="header_right">
        <span class="explore" @click.stop="expl_nav">探索</span>
        <span class="autor" @click.stop="user_nav"><img src="../assets/img/yonghu.jpg" alt=""></span>
        <span class="upload"><router-link to="/">上传</router-link></span>
        <!-- 探索下的导航 -->
        <div class="expl" v-show="expl" ref="showPanel">
          <!-- 左边的侧边栏 -->
          <div class="zuo">
              <p>Media</p>
              <p><router-link to="/">照片</router-link></p>
              <p><router-link to="/">插画</router-link></p>
              <p><router-link to="/">向量</router-link></p>
              <p><router-link to="/">视频</router-link></p>
              <p class="hr"></p>
              <p><router-link to="/">小编精选</router-link></p>
              <p><router-link to="/">Popular Images</router-link></p>
              <p><router-link to="/">Popular Videos</router-link></p>
          </div>
          <!-- 中间的侧边栏 -->
          <div class="zhong">
              <p>Community</p>
              <p><router-link to="/">博客</router-link></p>
              <p><router-link to="/">论坛</router-link></p>
              <p><router-link to="/">Artists</router-link></p>
              <p><router-link to="/">相机</router-link></p>
          </div>
          <!-- 右边的侧边栏 -->
          <div class="you">
            <p>About</p>
            <p><router-link to="/">常见问题解答</router-link></p>
            <p><router-link to="/">服务条款</router-link></p>
            <p><router-link to="/">隐私政策</router-link></p>
            <p><router-link to="/">关于我们</router-link></p>
            <p><router-link to="/">API</router-link></p>
            <p><router-link to="/"> <img src="../assets/img/wangluo.png" style="vertical-align: middle">Language</router-link></p>
            <p class="hr"></p>
            <p class="tutu">
              <span><router-link to="/"><img src="../assets/img/lianshu.png" alt=""></router-link></span>
              <span><router-link to="/"><img src="../assets/img/instagram.png" alt=""></router-link></span>
              <span><router-link to="/"><img src="../assets/img/tuitetwitter43.png" alt=""></router-link></span>
            </p>
          </div>
        </div>
        <!-- 用户下的导航 -->
        <div class="user" v-show="user" ref="showPanel">
            <p><router-link to="/">我的资料</router-link></p>
            <p><router-link to="/">My media</router-link></p>
            <p><router-link to="/">上传</router-link></p>
            <p><router-link to="/">收藏</router-link></p>
            <p><router-link to="/">关注</router-link></p>
            <p><router-link to="/">消息</router-link></p>
            <p><router-link to="/">设置</router-link></p>
            <p class="hr"></p>
            <p><router-link to="/">质量检查</router-link></p>
            <p class="hr"></p>
            <p><router-link to="/">注销</router-link></p>
        </div>
      </div>
    </div>
	</div>
</template>

<style scoped>
  .header{
    position: relative;
    width: 100%;
    height: 60px;
    padding: 10px;
  }
  .header_left{
    background-color:#eee;
    padding: 5px;
    margin-left:30px ;
    position: absolute;
    top:10px;
    left:50px;
  }
  .logo{
    border-radius: 5px;
  }
  .search{
    width:500px;
    height: 30px;
    border:none;
    background:url("../assets/img/search.png") 2px no-repeat ;padding-left:25px;
  }
  .next_search{
    position: absolute;
    cursor:pointer;
    width: 50px;
    height: 30px;
    padding: 2px 10px;
    line-height: 30px;
    right: 10px;
    background:url("../assets/img/icon-down.png") 40px 10px no-repeat white;
  }
  /* 照片下的导航 */
  .pic{
  background-color: black;
  width: 150px;
  height: 250px;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top:60px;
  left:350px;
  z-index: 1000;
}
.pic>ul{
  border-bottom: 1px solid #9AA2B0;
}
.pic>a{
  padding: 2px 10px;
  display: inline-block;
  position: relative;
  top:20px;
  left:20px;
  color:#9AA2B0;
  height: 30px;
  line-height: 30px;
  margin: 5px;
}
.pic>a:hover{
  color:white;
  background-color:rgba(95, 89, 89, 0.3);
}
.pic>ul>li{
  height: 30px;
  margin: 5px;
  line-height: 30px;
}
.pic>ul>li:hover{
  background-color:rgba(95, 89, 89, 0.3);
}
.pic>ul>li>a:hover{
   color:white;
}
.pic>ul>li:first-child{
  padding: 0 0 0 10px;
}
.pic>ul>li:nth-child(2){
  padding: 0 0 0 20px;
}
.pic>ul>li:nth-child(3){
  padding: 0 0 0 30px;
}
.pic>ul>li:nth-child(4){
  padding: 0 0 0 20px;
}
.pic>ul>li:last-child{
  padding: 0 0 0 10px;
}
.pic>ul>li>a{
  color:#9AA2B0;
}
.header_right{
  position: absolute;
  top:18px;
  right: 40px;
}
.explore{
  width: 50px;
  height: 30px;
  padding: 5px 20px;
  background:url("../assets/img/icon-down.png") 50px 9px no-repeat;
}
.autor{
  margin: 0 30px;
}
.autor>img{
  border-radius: 50%;
  vertical-align: middle;
}
.upload{
  width: 60px;
  height: 30px; 
  background:url("../assets/img/shangchuan.png") 2px  no-repeat #02BE6E; padding: 5px 25px;
  border-radius: 15px;
}
.upload>a{
  color:white;
}
/* 探索下的导航 */
.expl{
  width: 540px;
  height: 354px;
  position: absolute;
  top:55px;
  left:-500px;
  background: #000;
  z-index: 1000;
}
.expl a:hover{
  color:white;
  background-color:rgba(95, 89, 89, 0.5);
}
.expl div:first-child{
  width: 180px;
  height: 354px;
  float: left;
}
.zuo{
  border-bottom: 1px solid #9AA2B0;
}
.hr{
  border-bottom:1px solid #9AA2B0;
  margin: 5px;
}
.zuo>p{
  margin: 18px;
  color:white;
}
.zuo>p>a{
  padding: 2px;
  color:#9AA2B0;
}
 .expl div:nth-child(2){ 
  width: 178px;
  height: 354px;
  float: left;
  border-left: 1px solid rgba(95, 89, 89, 0.5);
  border-right: 1px solid rgba(95, 89, 89, 0.5);
}
.zhong>p{
  margin: 18px;
  color:white;
}
.zhong>p>a{
   padding: 2px;
  color:#9AA2B0;
}
.expl div:last-child{
  width: 180px;
  height: 354px;
  float:left;
}
.you>p{
  margin: 18px;
  color:white;
}
.tutu>span{
  margin: 5px 15px;
}
.you>p>a{
   padding: 2px;
   color:#9AA2B0;
}
/* 用户下的导航 */
.user{
  width: 180px;
  height: 360px;
  background-color: black;
  position: absolute;
  top:55px;
  left:-50px;
  z-index: 1001;
}
.user>p{
  padding: 5px;
  margin: 5px;
}
.user>p>a{
  color:#9AA2B0;
}
.user>p>a:hover{
  color: white;
  background-color:rgba(95, 89, 89, 0.5);
}
</style>

<script>
  export default {
    data() {
      return {
        search: '',
       pic: false,
       expl:false,
       user:false,
      }
    },
    methods: {
        pic_nav(){
          if(!this.pic){
            this.pic=true;
          }else{
            this.pic = false;
          }
        },
        expl_nav(){
          if(!this.expl){
            this.expl=true;
          }else{
            this.expl = false;
          }
        },
        user_nav(){
          if(!this.user){
            this.user=true;
          }else{
            this.user = false;
          }
        }
    },
    created(){
    document.addEventListener('click',(e)=>{
       if(this.$refs.showPanel){
           let isSelf = this.$refs.showPanel.contains(e.target)
           if(!isSelf){
               this.pic = false;
               this.expl =false;
               this.user=false;
           }else{
             this.pic=true;
             this.expl=true;
             this.user=true;
           }
       }
   })
}
  
  }
</script>