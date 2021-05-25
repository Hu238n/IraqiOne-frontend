<template>
  <div class="container text-black mx-auto pb-10">
    <h1 class="text-2xl">اضافة بيانات</h1>
    <div>
      <div class="mt-2">
        <label class="block mb-2">الاسم الكامل</label>
        <input v-model="form.Name" type="text" class="w-full rounded p-2 text-black border border-gray-400" placeholder="احمد علي" />
      </div>
      <div class="mt-2">
        <v-datepicker v-model="form.DoB" label="تاريخ الولادة"></v-datepicker>
      </div>
      <div class="mt-2">
        <label class="block mb-2">نوع الحالة</label>
        <select v-model="form.Type" class="w-full rounded p-3 text-black border border-gray-400 mb-2">
          <option value="1">شهيد</option>
          <option value="2">مفقود</option>
          <option value="3">جريح</option>
        </select>
      </div>
      <div class="mt-2">
        <label class="block mb-2">المحافظة</label>
        <select v-model="form.PoK" class="w-full rounded p-3 text-black border border-gray-400 mb-2">
          <option v-for="(item, index) in cites" :key="index" :value="item.governorateName">{{ item.governorateName }} </option>
        </select>
      </div>
      <div>
        <v-datepicker v-if="form.Type == 1" v-model="form.Dok" label="تاريخ الاستشهاد"></v-datepicker>
      </div>
      <div>
        <v-datepicker v-if="form.Type == 2" label="تاريخ الخطف"></v-datepicker>
      </div>
      <div>
        <v-datepicker v-if="form.Type == 3" label="تاريخ الاصابة"></v-datepicker>
      </div>
      <div class="mt-2">
        <label class="mb-2 block">صور (يمكنك تحديد اكثر من صور )</label>
        <input @change="handleImages()" type="file" class="bg-white w-full p-1" multiple />
      </div>

      <div class="mt-2">
        <label class="mb-2 block">القصة</label>
        <textarea v-model="form.Story" class="w-full text-black p-2" rows="10"></textarea>
      </div>

      <button @click="submit" class="w-full bg-blue-700 text-white p-3 mt-5">
        أضافة
      </button>
    </div>
  </div>
</template>

<script>
import VDatepicker from '@/components/VDatepicker'
export default {
  layout: 'admin',
  components: { VDatepicker },
  data() {
    return {
      cites: [
        {
          id: 1,
          governorateName: 'بغداد'
        },
        {
          id: 2,
          governorateName: 'البصرة'
        },
        {
          id: 3,
          governorateName: 'نينوى'
        },
        {
          id: 4,
          governorateName: 'ميسان'
        },
        {
          id: 5,
          governorateName: 'أربيل'
        },
        {
          id: 6,
          governorateName: 'الديوانية'
        },
        {
          id: 7,
          governorateName: 'ديالى'
        },
        {
          id: 8,
          governorateName: 'الانبار'
        },
        {
          id: 9,
          governorateName: 'بابل'
        },
        {
          id: 10,
          governorateName: 'كربلاء'
        },
        {
          id: 11,
          governorateName: 'كركوك'
        },
        {
          id: 12,
          governorateName: 'واسط'
        },
        {
          id: 13,
          governorateName: 'ذي قار'
        },
        {
          id: 14,
          governorateName: 'دهوك'
        },
        {
          id: 15,
          governorateName: 'السليمانية'
        },
        {
          id: 16,
          governorateName: 'المثنى'
        },
        {
          id: 17,
          governorateName: 'صلاح الدين'
        },
        {
          id: 18,
          governorateName: 'النجف'
        }
      ],
      form: {
        Name: '',
        DoB: '',
        Gov: '',
        Dok: '',
        PoK: '',
        Type: '',
        Story: '',
        Images: null
      }
    }
  },
  methods: {
    submit() {
      const formData = new FormData()
      for (const key in this.form) {
        if (this.form[key] !== '') formData.append(key, this.form[key])
      }
      this.$axios
        .post('/Person/Add', formData)
        .then(() => {
          this.$alert
            .fire({
              icon: 'success',
              title: 'تمت الاضافة',
              timer: 1700,
              showConfirmButton: false
            })
            .then(() => {
              this.$router.push('/')
            })
        })
        .catch(() => {
          this.$alert.fire({
            icon: 'error',
            title: 'هنالك مشكلة!, يرجى التأكد من المعلومات المدخلة',
            timer: 1700,
            showConfirmButton: false
          })
        })
    },
    handleImages() {
      this.form.Images = event.target.files[0]
    }
  }
}
</script>

<style scoped></style>
