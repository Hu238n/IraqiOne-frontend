<template>
  <div class="bg-gray-200 h-screen overflow-y-scroll">
    <div class="w-full bg-white p-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <h2>لوحة التحكم</h2>
        </div>
        <div class="w-full md:w-1/2">
          <ul class="inline-block float-left">
            <li class="float-right"><nuxt-link class="text-black p-4" to="/admin/martyrs">تدقيق البيانات</nuxt-link></li>
            <li class="float-right"><nuxt-link class="text-black p-4" to="/admin/comments">التعليقات</nuxt-link></li>
            <li class="float-right"><nuxt-link class="text-black p-4" to="/admin/reports">الابلاغات</nuxt-link></li>
            <li class="float-right"><nuxt-link class="text-black p-4" to="/admin">اضافة بيانات</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <nuxt />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Careem', sans-serif;
}
</style>
