import { mapGetters } from 'vuex'
export default {
  data () {
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
    }
  },
  computed: {
    ...mapGetters([
      'userName'
  ])
  }
}
