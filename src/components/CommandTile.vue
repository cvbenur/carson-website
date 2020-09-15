<template>
  <v-container fluid class="pa-0">
    <v-card
      color="#820F54"
      :elevation="3"
      @click="onClick"
      :ripple="false"
    >
      <v-card-title class="white--text command">
        <v-icon color="white" class="mr-2 pr-2" size="12px">
          {{ !expand ? 'fas fa-chevron-right' : 'fas fa-chevron-down' }}
        </v-icon>

        <span>
          <strong>
            {{ '-' + commandName }}
          </strong>
           <span v-if="args.length > 0">
            <span
              v-for="(arg, i) in args.length"
              :key="i"
            >
              [{{ arg }}]<span v-if="i !== args.length-1">, </span>
            </span>
          </span>
        </span>
      </v-card-title>

      <v-expand-transition>
        <div v-show="expand">
          <v-card-text class="white--text pt-0 ml-5 command-description">
            {{ description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component({})
export default class Command extends Vue {
  public expand: boolean = false;

  @Prop({ required: true })
  id!: number;

  @Prop({ required: true })
  commandName!: string;

  @Prop({ required: true })
  usage!: string;

  @Prop({ required: false, default: null })
  args!: Array<string>;

  @Prop({ required: true })
  description!: string;

  onClick() {
    this.expand = !this.expand;
    this.submit();
  }

  @Emit('clicked')
  submit() {
    return {
      id: this.id,
      open: this.expand,
    };
  }
}
</script>

<style scoped>
.command {
  font-size: 1.3rem;
}
.command-description {
  font-size: 1rem;
}
</style>
