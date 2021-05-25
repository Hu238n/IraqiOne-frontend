<template>
  <div class="w-full">
    <nuxt-link v-if="$route.path !== '/'" class="text-white inline-block border border-white rounded mb-5 px-4 py-2" to="/">
      العودة الى الرئيسية
    </nuxt-link>
    <nuxt-link
      v-if="$route.path === '/'"
      class="text-white inline-block border border-white rounded float-left hover:bg-white hover:text-black mb-5 px-4 py-2"
      to="/add"
    >
      اضافة بيانات
    </nuxt-link>
    <div class="w-full">
      <img src="@/assets/images/logo.png" class="float-right" width="37" alt="logo" />
      <h2 class="text-white text-2xl inline-block mr-5 mt-2">ثورةـتشرين</h2>
    </div>
    <div v-if="$route.path === '/'" class="w-full text-white mt-5">
      <p>
        في الاول من تشرين ثار الشباب العراقي ضد الظلم والفساد خرجوا مطالبين بالاصلاح ومحاسبة السراق وانهاء سلطة الفاسدين على مفاصل الدولة فتمت
        مواجهتهم بالقمع والغاز المسيل للدموع والاطلاقات الحية ادت هذه الاجرائات القمعية الى استشهاد مئات الابطال واصابة الالاف منهم.
      </p>
      <p>
        لن ننساكم ودمائكم المقدسة سوف يخلدها التاريخ, فدماء الاحرار مهر لاسقاط الطواغيت.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style scoped></style>
