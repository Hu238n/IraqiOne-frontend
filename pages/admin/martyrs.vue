<template>
  <div class="container mx-auto">
    <template v-if="martyrs.length === 0">
      <div class="w-full bg-white text-center rounded mt-2 p-4">
        لا يوجد بيانات
      </div>
    </template>
    <template v-else>
      <div class="flex flex-wrap -mx-2">
        <div v-for="item in martyrs" :key="item.id" class="w-full h-full md:w-1/2 lg:w-1/3 px-2 mt-2">
          <div class="rounded bg-white overflow-hidden shadow-lg ">
            <img :src="`${imageUrl}${item.imageName[0]}`" class="w-full h-64 object-contain" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ item.name }}</div>
              <p class="text-gray-700 text-xs mt-2">
                <template v-if="item.doB.split('T')[0] === '0001-01-01'"> تاريخ الولادة: غير معروف </template>
                <template v-else> تاريخ الولادة: {{ item.doB.split('T')[0] }} </template>
                |
                <template v-if="item.doK.split('T')[0] === '0001-01-01'"> تاريخ الوفاة: غير معروف </template>
                <template v-else> تاريخ الوفاة: {{ item.doK.split('T')[0] }} </template>
              </p>

              <p class="text-gray-700 text-base">
                {{ item.story }}
              </p>
            </div>
            <div class="px-6 py-4">
              <button @click="accept(item.id)" class="bg-green-500 text-white px-4 py-2 rounded">قبول</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import config from '@/config'
export default {
  layout: 'admin',
  data() {
    return {
      imageUrl: config.imageUrl
    }
  },
  computed: {
    martyrs() {
      return this.$store.state.martyrs.unapproved
    }
  },
  beforeCreate() {
    this.$store.dispatch('martyrs/getUnapproved')
  },
  methods: {
    accept(id) {
      this.$store.dispatch('martyrs/accept', id).then(() => {
        this.$alert.fire({
          icon: 'success',
          title: 'تم قبول البيانات',
          timer: 1700,
          showConfirmButton: false
        })
      })
    }
  }
}
</script>

<style scoped></style>
