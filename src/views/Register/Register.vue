<template>
	<div>
		<b-container>
			<b-row align-h="center">
				<b-col cols="5" class="register">
					<b-form class="card" @submit="onSubmit" @reset="onReset">
						<b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
							<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
							<b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-2" label="Your Password:" label-for="input-3">
							<b-form-input id="input-2" type="password" v-model="form.password" required placeholder="Enter Password"></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-2" label="Confirm Your Password:" label-for="input-4">
							<b-form-input id="input-2" type="password" v-model="form.confirmPassword" required placeholder="Confirm Password"></b-form-input>
						</b-form-group>


						<b-button type="submit" variant="success">Submit</b-button>
						<b-button type="reset" variant="danger">Reset</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script src="./register.js"></script>
<style scoped="true">
	.card{
		background-color: #5cb8c9 !important;;
		opacity: 0.95;
		padding: 25px;
	}
</style>