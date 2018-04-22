// 名称
// 选手个数
// 裁判个数
// 返回一个随机码
<template>
  <v-container grid-list-xs text-xs-center class="Ccontainer">
    <v-layout row wrap mt-5 class="Clayout">
      <v-flex xs10 offset-xs1>
        <form class="Cform">
          <v-text-field
            label="Title"
            v-model="title"
            :counter="10"
            :error-messages="titleErrors"
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Dancer"
            v-model="dancer"
            :error-messages="dancerErrors"
            @input="$v.dancer.$touch()"
            @blur="$v.dancer.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Judgement"
            v-model="judgement"
            :error-messages="judgementErrors"
            @input="$v.judgement.$touch()"
            @blur="$v.judgement.$touch()"
            required
          ></v-text-field>
          <v-checkbox
            label="Are you sure?"
            v-model="checkbox"
            :error-messages="checkboxErrors"
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
            required
          ></v-checkbox>
          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    title: { required, maxLength: maxLength(10) },
    dancer: { required },
    judgement: { required },
    checkbox: { required }
  },

  data: () => ({
    title: '',
    dancer: '',
    judgement: '',
    checkbox: false
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.required && errors.push('You must agree to continue!')
      return errors
    },
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title must be at most 10 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    dancerErrors () {
      const errors = []
      if (!this.$v.dancer.$dirty) return errors
      !this.$v.dancer.required && errors.push('The number of dancer is required.')
      return errors
    },
    judgementErrors () {
      const errors = []
      if (!this.$v.judgement.$dirty) return errors
      !this.$v.judgement.required && errors.push('The number of judgement is required.')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.dancer = ''
      this.judgement = ''
      this.checkbox = false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
