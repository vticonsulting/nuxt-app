import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  },
  template: `<button v-on:click="hello" class="bg-red-400">
    <slot>Button</slot>
  </button>`
})

export default class BaseButton extends Vue {

  message = 'Hello World!'

  created() {
    console.log('created')
  }

  mounted() {
    console.log('mounted')
  }

  hello() {
    console.log('Hello World!')
  }
}
