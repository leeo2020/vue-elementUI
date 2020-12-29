<template>
	<div>
	<h2>Home</h2>
	<input type="text" name="" v-model="txt" @keypress.enter="txtDisplay(txt)">
	<ul>
		<li :key="elem.id" v-for="elem in list" >
			<span v-text="elem.id"></span>
			<span>. -----></span>
			<span v-text="elem.name"></span>
		</li>
	</ul>
	</div>
</template>
<script>
	export default {
	data:function(){
	return {
	list:[
	{id:1,name:'张三'},
	{id:2,name:'李四'},
	{id:3,name:'刘二'}
	],
	txt:''
}
},
	name:'Home',
	methods:{
	txtDisplay(txt){
	console.log(txt)
}
}
}
</script>
<style lang="scss">
	li{
		list-style-type: none;
	}
</style>