<template>
  <div class="bg-white w-full text-black shadow-lg mb-5 p-4">
    <div class="flex flex-wrap">
      <div class="w-1/2">
        لوحة التحكم
      </div>
      <div class="w-1/2">
        <ul class="float-left">
          <li class="float-right px-4"><nuxt-link class="hover:text-gray-400" to="/admin/martyrs">الشهداء</nuxt-link></li>
          <li class="float-right px-4"><nuxt-link class="hover:text-gray-400" to="/admin/comments">التعليقات</nuxt-link></li>
          <li class="float-right px-4"><nuxt-link class="hover:text-gray-400" to="/admin">اضافة شهيد</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ANavbar'
}
</script>

<style scoped></style>
