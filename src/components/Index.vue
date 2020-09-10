<template>
	<div class="pubu">
		<div class="img-item" v-for="(item,i) of imgArr" :key="i">
			<router-link :to="`/home`">
				<img :src="item.src" alt="">
				<!-- <img src="../assets/content/13.jpg" alt=""> -->
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: [],
			}
		},
		mounted() {
			this.axios.get('/picture').then((res) => {
				console.log(res.data.results)
				let imgSrc=res.data.results;
				imgSrc.forEach((item)=>{
					item.src=require('../assets/content/'+item.src);
					this.imgArr.push(item)
				})
				// console.log(this.imgArr)
			})
		},
		methods:{
			
		}

	}
</script>

<style>
	.pubu {
		/* width: 1200px; */
		display: flex;
		flex-wrap: wrap;
	}

	.pubu::after {
		content: '';
		flex-grow: 999;
	}

	.img-item {
		height: 200px;
		margin: 5px;
		flex-grow: 1;
		background-color: red;
	}

	.pubu img {
		height: 100%;
		/* min-width: 100%; */
	}
</style>
