<template>
	<div>
		<navbar></navbar>
		<div class="ui-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script src="./app.js"></script>
<style scoped>
	.ui-view {
		margin-top:2%;
	}
</style>