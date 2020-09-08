<template>
	<div>
		<div class="My_foot">
			<div class="footItem">
				<!-- 脚左边内容 -->
				<div class="footleft">
					<ul>
						<li>关于我们</li>
						<li>联系我们</li>
						<li>商务合作</li>
						<li>App</li>
					</ul>
					<div class="footText">
						<span><img src="../assets/img/jianguan.png"></span>
						<span>昌平区市场监督管理局龙泽园所投诉举报电话：010-81748909 营业执照</span>
						<p>Copyright © 北京达内金桥科技有限公司版权所有 京ICP备12003709号-3 京公网安备 11010802029572号</p>
					</div>
				</div>
				<!-- 脚右边内容 -->
				<div class="footRight"></div>
			</div>
		</div>
	</div>
</template>
<style>
	.My_foot{
		width: 100%;
		height: 200px;
		background-color: #282c30;
	}
	.footItem{
		width: 1200px;
		height: 80%;
		margin: 0 auto;
		border-bottom:1px solid #ccc ;
	}
	/* foot左右部分公共样式 */
	.footleft,.footRight{
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		float: left;
	}
	/* 左边列表 */
	.footleft ul{
		width: 88%;
		height: 40%;
	}
	.footleft li{
		text-align: center;
		box-sizing: border-box;
		color: #999;
		float: left;
		width: 25%;
		margin-top: 10%;
	}
	.footleft>ul>li:nth-child(n+2){
		border-left: 1px solid #999;
	}
	.footText span:first-child{
		padding: 2px;
	}
	.footText>span{
		color: #fff;
		padding-left: 5px;
		font-size: 12px;
	}
	.footText p{
		width: 100%;
		font-size: 10px;
		color: #999;
	}
	/* /////////////////////////////////////////// */
</style>