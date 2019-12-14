import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
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
  },
  components: {
    Login,
    Register
  }
}