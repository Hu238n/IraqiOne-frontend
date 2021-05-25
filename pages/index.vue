<template>
  <div class="text-white mt-4">
    <div class="w-full text-left mb-4 mt-10">
      <m-tabs v-model="category"> </m-tabs>
    </div>
    <div class="flex flex-wrap -mx-2">
      <template v-if="loading">
        <loading-card v-for="i in 3" :key="i"></loading-card>
      </template>
      <template v-else>
        <div v-if="martyrs.length === 0" class="w-full text-center p-4">
          لا يوجد بيانات
        </div>
        <m-card :category="category" v-else v-for="martyr in martyrs" :key="martyr.id" :data="martyr"></m-card>
      </template>
    </div>
  </div>
</template>

<script>
import MCard from '../components/MCard'
import LoadingCard from '../components/LoadingCard'
import MTabs from '../components/MTabs'
export default {
  auth: false,
  meta: {
    title: 'ثورة تشرين'
  },
  components: { MTabs, LoadingCard, MCard },
  data() {
    return {
      loading: true,
      category: 1,
      canLoadMore: true,
      page: 1
    }
  },
  computed: {
    martyrs() {
      return this.$store.state.martyrs.list
    }
  },
  watch: {
    category() {
      this.canLoadMore = true
      this.loading = true
      this.$store
        .dispatch('martyrs/getByType', {
          page: 1,
          type: this.category
        })
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  },
  mounted() {
    window.onscroll = function() {
      if (document.body.scrollHeight - 400 <= window.scrollY + window.innerHeight && !this.loading) {
        if (this.martyrs.length >= 10 && this.canLoadMore) {
          this.page += 1
          this.$store
            .dispatch('martyrs/getByType', {
              page: this.page,
              type: this.category,
              loadMore: true
            })
            .then(() => {
              if (this.martyrs.length < 10) this.canLoadMore = false
              this.loading = false
            })
            .catch(() => {
              this.canLoadMore = false
              this.loading = false
            })
        }
      }
    }.bind(this)
  },
  beforeCreate() {
    this.$store.dispatch('martyrs/get').then(() => {
      this.loading = false
    })
  }
}
</script>
