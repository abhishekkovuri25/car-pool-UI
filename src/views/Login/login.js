export default {
	data() {
		return {
			form: {
				email: '',
				password: '',
				confirmPassword: '',
				name: ''
			},
		}
	},
	methods:{
		onSubmit () {
			const user = {
				email: this.form.email,
				password: this.form.password
			}
			this.$store.dispatch('signInAction', user)
		},
		onReset() {
		// evt.preventDefault()
			this.form.email = ''
			this.form.password = ''
		}
	}	
}