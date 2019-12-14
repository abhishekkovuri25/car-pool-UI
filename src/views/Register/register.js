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
	methods: {
		onSubmit() {
			if(this.form.password === this.form.confirmPassword) {
				const user = {
					email: this.form.email,
					password: this.form.password
				}
			this.$store.dispatch('signUpAction', user)
			}
		},
		onReset() {
		// evt.preventDefault()
			this.form.email = ''
			this.form.name = ''
		}
	}
}