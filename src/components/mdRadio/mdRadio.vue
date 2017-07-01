<template>
  <div class="md-radio" :class="[themeClass, classes]">
    <div class="md-radio-container" @click="toggleCheck">
      <input type="radio" :name="name" :id="id" :disabled="disabled" :value="value"
        :v-validate="vValidate"
        :data-vv-as="dataVvAs"
        :data-vv-delay="dataVvDelay"
        :data-vv-name="dataVvName"
        :data-vv-value-path="dataVvValuePath"
        :data-vv-validate-on="dataVvValidateOn">
      <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    </div>

    <label :for="id || name" class="md-radio-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdRadio.scss">
  .error-remover{
    background-color: inherit;
  }
</style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      name: String,
      id: String,
      value: [String, Boolean, Number],
      mdValue: {
        type: [String, Boolean, Number],
        required: true
      },
      disabled: Boolean,
      vValidate: {
        type: String | Object | Array | Boolean | Function
      },
      dataVvAs: {
        type: String | Object | Array | Boolean | Function
      },
      dataVvDelay: {
        type: String | Object | Array | Boolean | Function
      },
      dataVvName: {
        type: String | Object | Array | Boolean | Function
      },
      dataVvValuePath: {
        type: String | Object | Array | Boolean | Function
      },
      dataVvValidateOn: {
        type: String | Object | Array | Boolean | Function
      }
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-checked': typeof this.value !== 'undefined' && this.mdValue.toString() === this.value.toString(),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck($event) {
        if (!this.disabled) {
          this.$emit('change', this.mdValue, $event);
          this.$emit('input', this.mdValue, $event);
        }
      }
    }
  };
</script>
