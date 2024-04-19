<template>
  <div class="div-input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" v-model="model" :placeholder="placeholder" @input="updateModel" />
    <small v-if="isRequired && !model" class="error-message">Campo obrigatório</small>
  
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    id: { type: String, required: true },
    label: { type: String, default: '' },
    type: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    modelValue: { required: true }
  },
  computed: {
    
    model: {
      get() {
      return this.modelValue;
    },
    set(newValue) {
      this.$emit('update:modelValue', newValue);
    }
    },
    isRequired() {
      return this.errorMessage && !this.modelValue;
    }
  },
  methods: {
    updateModel(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>
@import './input.css';
</style>
