<template>
	<div class="pubu">
		<div class="img-item">
			<router-link :to="`/home`"><img src="../assets/content/01.jpg" alt=""></router-link>
		</div>
		<div class="img-item"><img src="../assets/content/02.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/03.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/04.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/05.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/06.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/07.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/08.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/09.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/010.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/011.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/012.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/013.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/014.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/015.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/016.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/017.jpg" alt=""></div>
		<div class="img-item"><img src="../assets/content/018.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/019.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/020.webp" alt=""></div>
		<div class="img-item"><img src="../assets/content/021.webp" alt=""></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
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
