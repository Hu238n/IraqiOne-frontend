<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-5/6">
      <input v-model="comment" class="w-full text-black mt-2 p-3" placeholder="تعليق...." />
    </div>
    <div class="w-full lg:w-1/6">
      <button @click="addComment" class="w-full text-white bg-red-700 p-3 mt-2">
        اضافة تعليق
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddComment',
  data() {
    return {
      comment: null
    }
  },
  methods: {
    addComment() {
      this.$emit('addComment', this.comment)
      this.comment = null
    }
  }
}
</script>

<style scoped></style>
