import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
	userId: null,
	userName: null,
    status: null,
    error: null

  },
  mutations: {

    setUserId (state, payload) {
      state.userId = payload
	},

	setUserName (state, payload) {
		state.userName = payload
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
    getSignUp ({commit},payload) {
		let path = "https://corporate-car-pool.herokuapp.com/api/users/signup"
		axios.post(path, payload)
			.then(function (response) {
				commit('setUserId',response.data.responseContent.userId)
				if(response.data.responseContent.signUpSuccess) {
					alert('sign Up successful')
					// alert(this.$route)
					// this.$route.push({ name: 'Login', query: { redirect: '/login' } })
				}
			})
			.catch(function () {
				alert('signing up failed')
		})
    },

	signIn ({commit},payload) {
		let path = "https://corporate-car-pool.herokuapp.com/api/users/login"
		axios.post(path, payload)
			.then(function (response) {
				commit('setUserName',response.data.responseContent.username)
			})
			.catch(function () {
				alert('signing in failed')
			})
	},
	
    signInAction ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
          commit('setError', null)
          alert('success')
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
          alert('errorr on login')
        })
    },

    signOutAction ({ commit }) {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
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
  
    error (state) {
      return state.error
    }
  }
})