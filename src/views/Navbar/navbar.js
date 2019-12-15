import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			page: ''
		}
	},
	created() {
		this.page = "Login"
	},
	methods: {
		reset() {
			this.$store.commit('setUserName', '')
			this.$store.commit('setUserDetails', {})
			this.$store.commit('setUserId', '')
			
		},
		callMyProfile() {
			this.$store.dispatch('myProfile', this.userId)
		},
		callHistory() {
			let payload = {
				userId : this.userId
			}
			this.$store.dispatch('callHistory', payload)
		},
		callUpcoming() {
			let payload = {
				userId : this.userId
			}
			this.$store.dispatch('callUpcoming', payload)
		},
		callVehicles() {
			this.$store.dispatch('getVehicleList', this.userId)
		}
	},
	computed: {
		...mapGetters([
			'userId',
			'userName'
		])
	}
}
