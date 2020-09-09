<template>
	<div>
		<My_search></My_search>
		<Index></Index>
		<My_foot></My_foot>
	</div>
</template>

<script>
	import My_search from '../components/My_search'
	import My_foot from '../components/My_foot.vue'
	import Index from '../components/Index.vue'
	export default{
		components:{
			My_search,
			My_foot,
			Index
		}
	}
</script>

<style>
</style>