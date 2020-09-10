<template>
	<div class="pubu">
		<div class="img-item" v-for="(item,i) of imgArr" :key="i">
			<router-link :to="`/home`">
				<img src="../assets/content/01.jpg" alt="">
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data:{},
				imgArr: [],
			}
		},
		mounted() {
			this.axios.get('/picture').then((res) => {
				this.imgArr=res.data.results;
				console.log(res.data.results)
				
			})
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
