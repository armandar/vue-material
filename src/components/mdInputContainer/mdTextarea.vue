<template>
  <textarea
    class="md-input"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :readonly="readonly"
    :v-validate="vValidate"
    :data-vv-as="dataVvAs"
    :data-vv-delay="dataVvDelay"
    :data-vv-name="dataVvName"
    :data-vv-value-path="dataVvValuePath"
    :data-vv-validate-on="dataVvValidateOn"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"></textarea>
</template>

<script>
  import autosize from 'autosize';
  import common from './common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    mixins: [common],
    props: {
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
    watch: {
      value() {
        this.$nextTick(() => {
          autosize.update(this.$el);
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

        if (!this.parentContainer) {
          this.$destroy();

          throw new Error('You should wrap the md-textarea in a md-input-container');
        }

        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();

        if (!this.$el.getAttribute('rows')) {
          this.$el.setAttribute('rows', '1');
        }

        autosize(this.$el);
      });
    },
    beforeDestroy() {
      autosize.destroy(this.$el);
    }
  };
</script>
