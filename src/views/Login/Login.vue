<template>
	<div>
		<b-container>
			<b-row align-h="center">
				<b-col cols="5" class="login">
					<b-form @submit="onSubmit" @reset="onReset">
						<b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
							<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
							<b-form-input type="password" id="input-2" v-model="form.password" required placeholder="Enter Password"></b-form-input>
						</b-form-group>

						<b-button type="submit" variant="primary">Submit</b-button>
						<b-button type="reset" variant="danger">Reset</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script src="./login.js"></script>
<style scoped=true>
	.login {
		background-color: white;
		opacity: 0.9;
	}
</style>