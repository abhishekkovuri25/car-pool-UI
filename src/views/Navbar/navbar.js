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
		}
	},
	computed: {
		...mapGetters([
			'userId',
			'userName'
		])
	}
}
