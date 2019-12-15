<template>
	<div>
		<b-container>
			<b-row align-h="center">
				<h2>Signup</h2>
			</b-row>
			<b-row align-h="center">
				<b-col cols="12" class="register">
					<b-form class="card" @submit="onSubmit" @reset="onReset">
						<b-row>
							<b-col cols="6">
								<b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
									<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
								</b-form-group>
							</b-col>
							<b-col cols="6">
								<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
									<b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row>
							<b-col cols="6">
								<b-form-group id="input-group-3" label="Your DOB:" label-for="input-2">
									<b-form-input id="input-3" type="date" v-model="form.DOB" required placeholder="Enter Your DOB"></b-form-input>
								</b-form-group>
							</b-col>
							<b-col cols="6">
								<b-form-group id="input-group-4" label="Your Phone Number:" label-for="input-2">
									<b-form-input id="input-4" v-model="form.phone" type="number" required placeholder="Enter Phone number"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row>
							<b-col cols="6">
								<b-form-group id="input-group-5" label="Your Organisation Name:" label-for="input-2">
									<b-form-input id="input-5" v-model="form.Org" required placeholder="Enter Organisation"></b-form-input>
								</b-form-group>
							</b-col>
							<b-col cols="6">
								<b-form-group id="input-group-6" label="Your Employee ID:" label-for="input-2">
									<b-form-input id="input-6" v-model="form.Id" required placeholder="Enter Emp.Id"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row>
							<b-col cols="6">
								<b-form-group id="input-group-7" label="Your Password:" label-for="input-3">
									<b-form-input id="input-7" type="password" v-model="form.password" required placeholder="Enter Password"></b-form-input>
								</b-form-group>
							</b-col>	
							<b-col cols="6">
								<b-form-group id="input-group-8" label="Confirm Your Password:" label-for="input-4">
									<b-form-input id="input-8" type="password" v-model="form.confirmPassword" required placeholder="Confirm Password"></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row class="mt-3">
							<b-col cols="2" offset="4">
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
<script src="./register.js"></script>
<style scoped="true">
	.card{
		background-color: #5cb8c9 !important;;
		opacity: 0.95;
		padding: 25px;
	}
</style>