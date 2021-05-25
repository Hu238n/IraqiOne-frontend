<template>
  <div>
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-auto mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            اسم المستخدم
          </label>
          <input
            id="username"
            v-model="form.username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            كلمة المرور
          </label>
          <input
            id="password"
            v-model="form.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="login"
            class="bg-blue-500 w-full hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('admin/login', this.form)
    }
  }
}
</script>

<style scoped></style>
