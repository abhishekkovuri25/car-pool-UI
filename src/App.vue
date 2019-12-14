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
		background-image: url('../src/assets/carpooling.png');
		background-size: cover;
		min-height: 100%;
		width: 100%;
		position: fixed
	}
	.ui-view {
		margin-top:2%;
	}
</style>