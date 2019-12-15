import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userId: null,
    userName: null,
    status: null,
	error: null,
	userDetails: {}
  },
  mutations: {

    setUserId (state, payload) {
      state.userId = payload
	},

	setUserName (state, payload) {
		state.userName = payload
	},


	setUserDetails (state, payload) {
		state.userDetails = payload
	},

    removeUser (state) {
      state.user = null
    },

    setStatus (state, payload) {
      state.status = payload
    },

    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    getSignUp ({commit},{payload, success}) {
		let path = "https://corporate-car-pool.herokuapp.com/api/users/signup"
		axios.post(path, payload)
			.then(function (response) {
				commit('setUserId',response.data.responseContent.userId)
        commit('setSignUpStatus',response.data.responseContent.signUpSuccess)
        if(success){success()}
			})
			.catch(function () {
				alert('signing up failed')
		})
    },

	signIn ({commit},{payload, success}) {
		let path = "https://corporate-car-pool.herokuapp.com/api/users/login"
		axios.post(path, payload)
			.then(function (response) {
        commit('setUserName',response.data.responseContent.username)
        commit('setUserId',response.data.responseContent.userId)
        if(success){success()}
			})
			.catch(function () {
				alert('signing in failed')
			})
	},

	myProfile({commit},payload) {
		let path = "https://corporate-car-pool.herokuapp.com/api/users/" + payload
		axios.get(path)
			.then(function (response) {
				commit('setUserDetails',response.data.responseContent)
				commit('setUserId',response.data.responseContent.userId)
			})
			.catch(function () {
				alert('My Profile API failure')
			})
	}
	
},

  getters: {
    status (state) {
      return state.status
    },

    userId (state) {
      return state.userId
    },

	userName (state) {
		return state.userName
	},

	userDetails (state) {
		return state.userDetails
	},
  
    error (state) {
      return state.error
    }
  }
})
