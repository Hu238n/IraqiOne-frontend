export const actions = {
  login(context, { username, password }) {
    // eslint-disable-next-line no-console
    console.log(username)
    this.$auth
      .loginWith('local', {
        data: {
          username,
          password
        }
      })
      .then(() => {
        this.$auth.redirect('/admin')
      })
  }
}
