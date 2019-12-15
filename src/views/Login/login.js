export default {
	data() {
		return {
			emailId: '',
			password: ''
		}
	},
	methods:{
		signIn () {
			let payload = {
				"userId": null,
				"requestContent":{
					"emailId": this.emailId,
					"password": this.password,
				}
			}
			this.$store.dispatch('signIn', payload)
		},

		reset() {
			this.emailId = ''
			this.password = ''
		}
	}	
}