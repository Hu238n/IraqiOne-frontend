<template>
  <div class="container mx-auto">
    <template v-if="comments.length === 0">
      <div class="w-full bg-white text-center rounded mt-2 p-4">
        لا يوجد بيانات
      </div>
    </template>
    <template v-else>
      <div v-for="item in comments" :key="item.id" class="w-full bg-white rounded mt-2 p-4">
        <div class="flex">
          <div class="w-1/2">
            {{ item.comment }}
            <small class="block"> على {{ item.name }} في تاريخ {{ item.commentDate.split('T')[0] }} </small>
          </div>
          <div class="w-1/2 text-left">
            <button @click="accept(item.id)" class="bg-green-400 text-white text-sm p-2">قبول</button>
            <button @click="reject(item.id)" class="bg-red-400 text-white text-sm p-2">رفض</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    comments() {
      return this.$store.state.comments.unapproved
    }
  },
  beforeCreate() {
    this.$store.dispatch('comments/getUnapproved', 1)
  },
  methods: {
    accept(id) {
      this.$store.dispatch('comments/accept', id)
    },
    reject(id) {
      this.$store.dispatch('comments/reject', id)
    }
  }
}
</script>

<style scoped></style>
