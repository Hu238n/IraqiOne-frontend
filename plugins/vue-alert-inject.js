import Vue from 'vue'
import Swal from 'sweetalert2'

Swal.mixin({
  customClass: {
    confirmButton: 'bg-green-600',
    cancelButton: 'bg-red-600'
  },
  buttonsStyling: false
})

Vue.prototype.$alert = Swal
