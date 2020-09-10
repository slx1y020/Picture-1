<template>
  <div class="bg_img">
    <img src="../assets/img/download.webp" alt />
      <div class="login">
        <!-- 登入  注册 -->
        <div class="dengru tanxing">
          <a href="#">登入</a>
          <a href="#">注册</a>
        </div>
          <!-- QQ  微信 -->
        <div class="xuanze">
          <a href="#">QQ</a>
          <a href="#">微信</a>
        </div>
          <!-- 账号输入框 -->
        <form action=".">
          <input type="text" placeholder="请输入账号" class="username">
          <input type="password" placeholder="请输入密码" class="password">
          <input type="submit" value="登入" class="btn">
        </form>
        <!-- 找回密码 -->
        <div class="forget">
          <p>
           <a href="#">忘记密码</a>
          </p>
        </div>
      </div>
  </div>
</template>
<style scoped>
.bg_img {
  position: relative;
  width: 100vh;
  height: 100vh;
}
img {
  position: fixed;
  left: -23%;
  z-index: -1;
  height: 100vh;
  transform: scale(1);
	filter: blur(6px)
}
.tanxing{
    display: flex;
  justify-content: center;
  align-items: center;
}
.login {
    position:fixed; 
     left:40%;
     top: 18%;
     width: 337px;
     height: 378px;
     background-color: #ffffff;
     z-index: 0;
     border-radius:5px ;
     padding:20px 25px ;
}
.dengru{
  width: 337px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  border-bottom: 1px solid #f0f1f4 ;
  /* margin-bottom: 20px; */
}
.dengru a{
  display: block;
  margin: 0 15px;
  font-size: 20px;
  color: #71767a;
  text-decoration:none;
  padding:0 5px;
}
 .dengru a:hover{
   color:#0a88d3;
   border-bottom:2px solid #0a88d3;
 }
 /* 登入DIV */
 .xuanze{
   display: flex;
   justify-content:center;
   width:  337px;
   height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #f0f1f4 ;
  padding: 20px 0;
 }
 /* 登入按钮样式 */
 .xuanze a{
   /* display:block; */
   width: 43%;
    text-decoration: none;
    border-radius: 50px;
    text-align: center;
    background-color: #d73d32;
    margin: 0 5px;
    color:#fff;
    border: 0  transparent;
    font-size: 100%;
    cursor: pointer;
 }
 .xuanze a:nth-child(2){
   background-color: #3b5998;
 }
 /* 登入样式 */
 .username,.password{
  box-shadow: inset 0 1px 3px #dddddd;
 }
 .username,.password,.btn{
   margin-top: 15px;
   padding: 12px;
   width: 100%;
   border: 1px solid #ccc;
   box-sizing:border-box;
   color: #555;
   border-radius: 2px;
   outline: none;
   font-size: 16px;
 }
 .btn{
   border-radius: 25px;
   background-color:#02be6e ;
   color: #fff;
   cursor: pointer;
 }
 .btn:hover{
   background-image: linear-gradient(#02be6e, #9198e5);
 }
.forget{
  text-align: center;
  padding: 20px 25px;
}
.forget a{
  font-size:13px;
  text-decoration: none;
  color: #0a88d3;
}
</style>