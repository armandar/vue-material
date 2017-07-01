<template>
  <div class="md-checkbox" :class="[themeClass, classes]">
    <div class="md-checkbox-container" @click.stop="toggleCheck" tabindex="0">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value" :checked="checked"
            :v-validate="vValidate"
            :data-vv-as="dataVvAs"
            :data-vv-delay="dataVvDelay"
            :data-vv-name="dataVvName"
            :data-vv-value-path="dataVvValuePath"
            :data-vv-validate-on="dataVvValidateOn" 
            tabindex="-1">
      <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    </div>

    <label :for="id || name" class="md-checkbox-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdCheckbox.scss">
  .error-remover{
    background-color: inherit;
  }
</style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      name: String,
      value: [String, Boolean],
      id: String,
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
    data() {
      return {
        checked: this.value
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': this.checked,
          'md-disabled': this.disabled
        };
      }
    },
    watch: {
      value() {
        this.checked = !!this.value;
      }
    },
    methods: {
      toggleCheck($event) {
        if (!this.disabled) {
          this.checked = !this.checked;
          this.$emit('change', this.checked, $event);
          this.$emit('input', this.checked, $event);
        }
      }
    }
  };
</script>
