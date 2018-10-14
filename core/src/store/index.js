import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loadingState: false
}

const mutations = {
  set_loading_state: (state, status) => {
    state.loadingState = status
  }
}

const actions = {
  setLoading: ({commit}, state) => {
    commit('set_loading_state', state)
  }
}

const getters = {
  loadingState: state => state.loadingState
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
