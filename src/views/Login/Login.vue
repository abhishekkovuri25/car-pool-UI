<template>
	<div>
		<b-container>
			<b-row align-h="center">
				<h2>Login</h2>
			</b-row>
			<b-row align-h="center">
				<b-col cols="5" >
					<b-form class="login" @submit="onSubmit" @reset="onReset">
						<b-row>
							<b-col>
								<b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
									<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
									<b-form-input type="password" id="input-2" v-model="form.password" required placeholder="Enter Password"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row class="mt-3">
							<b-col cols="3" offset="3">
								<b-button type="submit" variant="success">Submit</b-button>
							</b-col>
							<b-col cols="6">
								<b-button type="reset" variant="danger">Reset</b-button>
							</b-col>
						</b-row>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script src="./login.js"></script>
<style scoped=true>
	.login {
		background-color: #5cb8c9 !important;
		opacity: 0.8;
		padding: 25px;
	}
</style>