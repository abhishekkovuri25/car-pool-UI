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
			this.$store.dispatch('signIn', {payload, success: this.onSuccessCall })
		},
		onSuccessCall() {
			this.$router.push({name: 'FindRide', path: '/find-ride'})
		},
		reset() {
			this.emailId = ''
			this.password = ''
		}
	}
}
