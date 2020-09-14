<template>
	<!-- 评论框 -->
          <div>
			      <div class="form-group">
				      <img src="../assets/img/profile_image_dummy.svg" alt=""><textarea @focus="out" class="form-control"  
							  placeholder="添加您的评论..." v-model="content"></textarea>
			      </div>
            <div class="show" v-show="show">
			        <div> <el-checkbox v-model="checked"> 有新帖时请通过电子邮件通知我</el-checkbox></div>
              <div><el-button type="success" round size="small" @click="add">提交</el-button></div>
           </div>
					 <div class="meun" v-for="(item,index) of list" :key="index">
						 <p><span><img class="autor" :src="item.autor" alt=""></span> <span>{{item.user}}</span>{{item.id}}<span></span></p>
						 <p>{{item.content}}</p>
					 </div>
		      </div>
      <!-- 评论框结束 -->
</template>
<style scoped>
	.form-group>img{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  vertical-align: top;
  margin-top:6px;
  margin-right: 35px;
}
.form-group>textarea{
  width: 90%;
  height: 62px;
  resize:none;
}
.show{
  padding: 10px;
	margin: 10px 70px 0;
}
.show>div:last-child{
	margin: 10px;
}
.meun{
	width: 100%;
	border-top:1px solid #eee;
	padding: 10px;
}
.autor{
	border-radius: 50%;
	vertical-align: middle;
}
.meun>p:last-child{
	margin-left: 40px;
}
</style>
<script>

	
	export default{
		data(){
			return{
				show:false,
				checked:"",
				content:"",
				list:[
					{id:Date().toString() ,autor:require("../assets/img/yonghu.jpg"),user:"李白",content:"天生我才必有用"},
					{id:Date.now(),autor:require("../assets/img/yonghu.jpg"),user:"大白",content:"千金散尽还复来"},
					{id:Date.now(),autor:require("../assets/img/yonghu.jpg"),user:"鲁班",content:"检测到您的智商250"},
					{id:Date.now(),autor:require("../assets/img/yonghu.jpg"),user:"妲己",content:"天妲己陪你玩"}
				]
			}
		},
		methods:{
			out(){
				if(!this.show){
					this.show=true;
				}
			},
			add(){
			var comment={id:Data.now(),autor:this.autor,user:this.user,content:this.content};
			var list=JSON.parse(localstorage.getItem("cmts") || "[]");
			list.unshift(comment)
			localstorage.setItem('cmts',JSON.stringify(list))
			this.user=this.content=this.autor=this.id="";
			this.loadComents()
			},
		 loadComents(){
			var list=JSON.parse(localstorage.getItem("cmts") || "[]");
			this.list=list;
		},
		created(){
			this.loadComents()
		}
	 }
	}
</script>