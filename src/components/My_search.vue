<template>
	<div>
		<div class="searchImg">
			<div class="searchContent">
				<!-- 搜索框上面的标题文字 -->
				<div class="searchText">
					<span>令人惊叹的免费图片和免版税库存</span>
					<span>我们的才华横溢的社区分享了超过180万种高品质的图片和视频。</span>
				</div>
				<!-- 搜索框 -->
				<input type="text" placeholder="搜索图片" class="searchInput">
				<!-- 搜索框下面的分类 -->
				<div class="searchAssortment">
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
					<span>流行图片：</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.searchImg {
		height: 528px;
		/* 背景图片居中 */
		background-position: center center;
		/* 设置背景图片 */
		background-image: url(../assets/img/12-48-41-329_1920x430.webp);
		/* 背景不重复 */
		background-repeat: no-repeat;
		/* 背景从满div */
		background-size: cover;
	}

	/* 内容区 */
	.searchContent {
		width: 1000px;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		border: 1px solid red;
	}

	/* 文字设置 */
	.searchText {
		margin-top: 30px;
	}

	.searchText span:first-child {
		font-size: 32px;
		font-weight: bold;
		color: #fff;
		display: block;
	}

	.searchText span:last-child {
		margin: 10px;
		font-size: 16px;
		color: #fff;
		display: block;
	}

	/* input 输入框*/
	.searchInput {
		width: 65%;
		height: 45px;
		border-radius: 5px;
		border: 0;
	}
</style>
