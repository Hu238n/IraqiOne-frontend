<template>
  <div class="py-4">
    <div v-if="reports.length === 0" class="w-full bg-white text-center p-4">
      لا يوجد بيانات
    </div>
    <div v-for="report in reports" :key="report.id" class="w-full bg-white text-right mt-2 p-4">
      <b>{{ report.note }}</b>
      <p>الحساب : {{ report.name }}</p>
      <p>في تاريخ : {{ report.createDate.split('T')[0] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    reports() {
      return this.$store.state.reports.list
    }
  },
  mounted() {
    this.$store.dispatch('reports/get', 1)
  }
}
</script>

<style scoped></style>
