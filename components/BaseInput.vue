<template>
  <input ref="input" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InputFocus extends Vue {
  $refs!: {
    input: HTMLInputElement
  }

  mounted() {
    this.$refs.input.focus()
  }
}
</script>
