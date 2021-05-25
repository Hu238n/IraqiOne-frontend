<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-2">
    <div class="bg-white w-full text-center rounded relative overflow-hidden p-4 mt-2">
      <div v-if="category == 1" class="black-sad"></div>
      <img :src="`${imageUrl}${data.imageName[0]}`" class="w-32 h-32  rounded-full object-cover border border-gray-200 mx-auto" alt="" />
      <h2 class="text-black mt-5">{{ data.name }}</h2>
      <p class="text-gray-700 text-xs mt-2">
        <template v-if="data.doB.split('T')[0] === '0001-01-01'"> تاريخ الولادة: غير معروف </template>
        <template v-else> تاريخ الولادة: {{ data.doB.split('T')[0] }} </template>
        |
        <template v-if="data.doK.split('T')[0] === '0001-01-01'"> تاريخ الوفاة: غير معروف </template>
        <template v-else> تاريخ الوفاة: {{ data.doK.split('T')[0] }} </template>
      </p>
      <nuxt-link
        :to="`/${data.id}`"
        class="text-black text-sm  inline-block rounded-full hover:bg-black hover:text-white hover:shadow-lg mt-5 py-2 px-5"
      >
        <i class="icon-eye relative" style="top:2px"></i>
        <span class="mr-2">معاينة</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'MCard',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    category: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      imageUrl: config.imageUrl
    }
  }
}
</script>

<style>
.black-sad {
  -webkit-transform: rotate(131deg);
  transform: rotate(131deg);
  width: 15rem;
  height: 20px;
  left: -60px;
  top: 50px;
  position: absolute;
  z-index: 9;
  background: black;
}
</style>
