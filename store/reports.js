export const state = () => ({
  list: []
})

export const mutations = {
  SET_REPORTS: (state, data) => (state.list = data)
}

export const actions = {
  async get({ commit }, page) {
    const start = (page - 1) * 10
    const end = page * 10
    const { data } = await this.$axios.get(`/Admin/Report/${start}/${end}`)
    commit('SET_REPORTS', data)
  }
}
