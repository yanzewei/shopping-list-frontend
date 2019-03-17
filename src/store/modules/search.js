const state = {
    search_text : ''
}

// getters
const getters = {}


// mutations
const mutations = {
    setSearchText (state, search_text) {
        state.search_text = search_text
    }
}

// actions
const actions = {
    setSearchText({ commit }, title) {
        commit('setSearchText', title)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}