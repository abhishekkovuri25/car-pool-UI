<template>
	<div class="pooling">
		<navbar></navbar>
		<div class="ui-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script src="./app.js"></script>
<style scoped>
	.pooling {
		background-image: url('../src/assets/map1.jpg');
		/* background-size: cover; */
		background-repeat: no-repeat; 
		height: 100%;
		width: 100%;
		/*position: fixed*/
		position: absolute;
		overflow-x: scroll;
	}
	.ui-view {
		margin-top:1%;
	}
</style>