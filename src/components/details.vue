<template>
    <div>
      <headerNav></headerNav>
       <!-- 右侧侧边栏 -->
        <div class="inside">
          <div class="once">
            <a href="#"><img src="../assets/img/autor.webp" alt=""></a>
            <a>PIRO4D/2501张照片</a>
            <p class="once_1">
              <el-button type="success" round size="mini">咖啡</el-button>
              <el-button type="info" round size="mini">关注</el-button>
            </p>
          </div>
          <div class="two">
            <el-button type="primary" round size="mini"><img src="../assets/img/dianzan-shixin.png" alt="">42</el-button>
            <el-button type="primary" round size="mini"><img src="../assets/img/xingxing.png" alt="">12</el-button>
            <el-button type="info" round  size="mini"><img src="../assets/img/fenxiang.png" alt=""></el-button>
          </div>
          <div class="three">
            <img src="../assets/img/1525189943-38523.png" alt="">
            <span>
               <a href="">Limited time offer: Get 10 free Adobe Stock images.</a>
               <a href="">ADS VIA CARBON</a>
            </span>
          </div>
          <div class="four"><el-button  type="success" round size="medium" icon="el-icon-download">免费下载</el-button></div>
          <div class="five">
            <a href="">Pixabay License</a>
            <div>可以做商业用途<br>不要求署名</div>
          </div>
          <div class="six">在Facebook上赞一下Pixabay</div>
          <div class="seven">
            <p>近期图像</p>
            <img v-for="(item,index) of data" :key="index" :src="item" alt="">
          </div>
          <div class="eight">
            <table>
              <tr>
                <th>图片类型</th>
                <td>JPG</td>
              </tr>
              <tr>
                <th>解析度</th>
                <td>5976×3992</td>
              </tr>
              <tr>
                <th>已上传</th>
                <td>Separable，2022</td>
              </tr>
              <tr>
                <th>类别</th>
                <td><a href="">自然风景</a></td>
              </tr>
              <tr>
                <th>视图</th>
                <td>4884</td>
              </tr>
               <tr>
                <th>下载量</th>
                <td>2640</td>
              </tr>
            </table>
          </div>
        </div>  

         <!-- 内容区域开始 -->
      <div id="media_show">
        <div class="left">
          <img src="../assets/img/mountains-5544365_1280.webp" alt="">
          <div class="hidden">
            <span v-for="(item,index) of list" :key="index"><a href="">{{item}}</a></span>
          </div>
          <div><span>广告图片</span><span><a href="">LIMITED DEAL: 20% off with PIXABAY20 coupon</a></span></div>
          
          </div>
        </div>
   </div>
</template>
<style scoped>
.main{
  position: relative;
  background-color: #eee;
  padding: 10px;
}
.main::before{
  content: "";
}
.inside{
  width: 25%;
  float: right;
  margin-right: 2%;
}
.once{
  border-bottom: 1px solid #9AA2B0;
}
.once>a>img{
  margin-right:5PX ;
  border-radius: 50%;
  vertical-align: middle;
}
.once_1{
  margin: 5px 0 15px 80px;
}
.two{
  border-bottom: 1px solid #9AA2B0;
  margin: 10px;
  padding-bottom: 10px;
}
.two>button{
  padding: 5px 20px;
}
.three{
  background-color: rgba(0,0,0,.1);
  padding: 5px;
  position: relative;
}
.three>img{
  width: 130px;
  height: 100px;
}
.three>span{
  position: absolute;
  top:0;
  padding: 10px;
}
.three>span>a{
  display: block;
  margin: 5px;
}
.four>button{
  width: 100%;
  margin: 20px 0;
}
.five{
  background-color: rgba(0,0,0,.1);
  height: 100px;
  padding: 20px;
}
.six{
  background-color: rgba(0,0,0,.1);
  line-height:50px;
  height: 50px;
  margin: 15px 0 5px;
  padding: 5px 15px;
}
.seven>p{
  height:30px;
  line-height: 30px;
  background-color:  rgba(0,0,0,.1);
  margin: 15px 0 5px;
  padding: 5px 15px;
}
.seven>img:nth-child(odd){
   width: 45%;
   margin-bottom: 5px;
   padding:8px;
}
.seven>img:nth-child(even){
  width: 45%;
  margin-bottom:5px;
}
.eight{
  background-color:#E5E5E5;
  padding: 10px;
}
.eight>table{
  width: 100%;
}
.eight>table>tr{
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
.erght>table>tr>td{
  margin-left: 100px;
}

#content{
  margin-top: 20px;
  width: 100%;
}
#media_show{
  width: 100%;
}
.left{
  position: relative;
  width:65%;
  margin-left: 5%;
  float: left;
}
.left:hover .hidden{
  display: block;
}
.left>img{
  width: 100%;
  border-radius: 5px;
  height: auto;
}
.hidden{
  position: absolute;
  top:0;
  left:0;
  display: none;
}
.hidden>span>a{
  margin: 5px 10px;
  color:white;

}

</style>
<script>
import headerNav from"./header_nav"
export default {
    components:{
      headerNav
    },
    data(){
      return{
        content:"",
        checked:"",
         data:[
        require("../assets/img/1.webp"),
        require("../assets/img/2.webp"),
        require("../assets/img/3.webp"),
        require("../assets/img/4.jpg"),
        require("../assets/img/5.webp"),
        require("../assets/img/6.webp"),
      ],
      list:['云','海','自然','宇宙','日落','水','山','黄昏','蓝色的天空','天空'],
    }
   },
   methods:{
     show(){
       console.log("你好啊!")
    }
   }
}
</script>