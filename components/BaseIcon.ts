import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseIcon extends Vue {
  @Prop({ default: 'question-mark-cirlce' }) readonly name!: string
}
