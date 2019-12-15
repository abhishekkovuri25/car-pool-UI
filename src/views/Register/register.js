// import axios from 'axios'
export default {
	data() {
		return {
			emailId: '',
			password: '',
			fullName: '',
			dob: '',
			phoneNumber: '',
			organisationName: '',
			empId:'',
			confirmPassword: ''
		}
	},
	methods: {
		signUp() {
			if(this.password === this.confirmPassword) {
				let payload = {
					"userId": null,
					"requestContent":{
						"fullName": this.fullName,
						"emailId": this.emailId,
						"phoneNumber": this.phoneNumber,
						"password": this.password,
						"dob": this.dob,
						"empId": this.empId,
						"organisationName":this.organisationName
					}
				}
				this.$store.dispatch('getSignUp',payload)
			}
		},
		reset () {
			this.emailId = '',
			this.password = '',
			this.fullName = '',
			this.dob = '',
			this.phoneNumber = '',
			this.organisationName = '',
			this.empId = '',
			this.confirmPassword = ''
		}
	},
}