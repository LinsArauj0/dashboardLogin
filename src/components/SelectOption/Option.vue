<template>
  <div class="form-group">
    <label :for="label">{{ label }}</label>
    <select class="form-control" :id="label" v-model="selectedOption">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.value
    };
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    },
    selectedOption(newValue) {
      this.$emit('update:value', newValue);
    }
  }
};
</script>

<style scoped>
@import './styles.css';
</style>