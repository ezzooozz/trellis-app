<template>
  <v-text-field
    v-model="text"
    auto-grow
    full-width
    :placeholder="$t('text_placeholder')"
    textarea
    :disabled="isQuestionDisabled"
    :append-icon="barcodeIcon"
    :append-icon-cb="doScan"
    />
</template>

<script>
  import QuestionDisabledMixin from '../mixins/QuestionDisabledMixin'
  import VuetifyValidationRules from '../mixins/VuetifyValidationRules'
  import ActionMixin from '../mixins/ActionMixin'
  import AT from '../../../static/action.types'
  import BarcodeMixin from '../mixins/BarcodeMixin'

  export default {
    name: 'text-question',
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    mixins: [QuestionDisabledMixin, VuetifyValidationRules, ActionMixin, BarcodeMixin],
    data () {
      return {
        newText: null,
        oldText: null
      }
    },
    computed: {
      text: {
        get () {
          return this.question.datum.data.length ? this.question.datum.data[0].val : ''
        },
        set (val) {
          this.debouncedAction(AT.set_text, {
            name: 'text',
            val: val
          })
        }
      }
    },
    methods: {
      async doScan () {
        this.text = await this.scan()
      }
    }
  }
</script>

<style scoped>

</style>
