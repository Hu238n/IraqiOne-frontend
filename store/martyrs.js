export const state = () => ({
  list: [],
  unapproved: []
})
export const mutations = {
  SET_MARTYRS: (state, data) => (state.list = data),
  PUSH_MARTYRS: (state, data) => data.forEach((d) => state.list.push(d)),
  SET_UNAPPROVED: (state, data) => (state.unapproved = data),
  REMOVE_MARTYR: (state, id) => (state.unapproved = state.unapproved.filter((m) => m.id !== id)),
  REMOVE_LIST: (state) => (state.list = [])
}

export const actions = {
  async get({ commit }, page = 1) {
    const start = (page - 1) * 10
    const end = page * 10
    const { data } = await this.$axios.get(`/Person/GetByType/${start}/${end}/1`)
    commit('SET_MARTYRS', data)
  },
  async getUnapproved({ commit }, page = 1) {
    const start = (page - 1) * 10
    const end = page * 10
    const { data } = await this.$axios.get(`/Admin/All/${start}/${end}`)
    commit('SET_UNAPPROVED', data)
  },
  async getByType({ commit }, { page, type, loadMore = false }) {
    const start = (page - 1) * 10
    const end = page * 10
    if (!loadMore) commit('REMOVE_LIST')
    const { data } = await this.$axios.get(`/Person/GetByType/${start}/${end}/${type}`)
    if (loadMore) {
      commit('PUSH_MARTYRS', data)
    } else {
      commit('SET_MARTYRS', data)
    }
  },
  async accept({ commit }, id) {
    const { data } = await this.$axios.put(`/Admin/UpdatePerson/${id}/2`)
    commit('REMOVE_MARTYR', id)
    return data
  }
}
