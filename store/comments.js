export const state = () => ({
  list: [],
  unapproved: []
})

export const mutations = {
  SET_COMMENTS: (state, data) => (state.list = data),
  SET_UNAPPROVED: (state, data) => (state.unapproved = data),
  ADD_COMMENT: (state, data) => state.list.push(data),
  REMOVE_ALL: (state, data) => (state.list = []),
  REMOVE_COMMENT: (state, id) => {
    state.unapproved = state.unapproved.filter((c) => c.id !== id)
  }
}

export const actions = {
  async get({ commit }, { id, page }) {
    commit('REMOVE_ALL')
    const start = (page - 1) * 10
    const end = page * 10
    const { data } = await this.$axios.get(`/Comment/Comments/${id}/${start}/${end}`)
    commit('SET_COMMENTS', data)
  },
  add({ commit }, { id, comment }) {
    return this.$axios.post(`Comment/AddComment/${id}?comments=${comment}`)
  },
  async getUnapproved({ commit }, page) {
    const start = (page - 1) * 10
    const end = page * 10
    const { data } = await this.$axios.get(`/Admin/Comment/${start}/${end}`)
    // eslint-disable-next-line no-console
    console.log(data)
    commit('SET_UNAPPROVED', data)
  },
  async accept({ commit }, id) {
    const { data } = await this.$axios.put(`/Admin/Comment/${id}/true`)
    commit('REMOVE_COMMENT', id)
    return data
  },
  async reject({ commit }, id) {
    const { data } = await this.$axios.put(`/Admin/Comment/${id}/false`)
    commit('REMOVE_COMMENT', id)
    return data
  }
}
