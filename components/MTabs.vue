<template>
  <div>
    <div class="border border-gray-500 rounded-full hidden md:inline-block">
      <button
        @click="category = 1"
        :class="{
          'bg-red-700': category === 1,
          'rounded-full': category === 1
        }"
        class="p-2 px-8 hover:cursor-pointer hover:text-gray-200 focus:text-white"
      >
        الشهداء
      </button>
      <button
        :class="{
          'bg-red-700': category === 2,
          'rounded-full': category === 2
        }"
        @click="category = 2"
        class="p-2 px-8 hover:cursor-pointer hover:text-gray-200 focus:text-white"
      >
        المفقودين
      </button>
      <button
        :class="{
          'bg-red-700': category === 3,
          'rounded-full': category === 3
        }"
        @click="category = 3"
        class="p-2 px-8 hover:cursor-pointer hover:text-gray-200 focus:text-white"
      >
        الجرحى
      </button>
    </div>
    <div class=" rounded-full md:hidden">
      <div class="flex flex-wrap">
        <button
          :class="{
            'bg-red-700': category === 1,
            'rounded-full': category === 1
          }"
          @click="category = 1"
          class="w-1/3 py-3 hover:cursor-pointer hover:text-gray-200 text-sm focus:text-white"
        >
          الشهداء
        </button>
        <button
          :class="{
            'bg-red-700': category === 2,
            'rounded-full': category === 2
          }"
          @click="category = 2"
          class="w-1/3 py-3 hover:cursor-pointer hover:text-gray-200 text-sm focus:text-white"
        >
          المفقودين
        </button>
        <button
          :class="{
            'bg-red-700': category === 3,
            'rounded-full': category === 3
          }"
          @click="category = 3"
          class="w-1/3 py-3 hover:cursor-pointer hover:text-gray-200 text-sm focus:text-white"
        >
          الجرحى
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MTabs',
  data() {
    return {
      category: 1
    }
  },
  watch: {
    category() {
      this.$emit('input', this.category)
    }
  }
}
</script>

<style scoped></style>
