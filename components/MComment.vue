<template>
  <div class="w-full bg-white rounded mt-2 p-4">
    {{ comment.comment }}
    <small class="block w-full">{{ comment.commentDate.split('T')[0] }}</small>
  </div>
</template>

<script>
export default {
  name: 'MComment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
