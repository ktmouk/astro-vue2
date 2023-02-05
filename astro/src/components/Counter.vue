<template>
  <div>
    <button v-on:click="handleClick">Vue2 counter: {{ value }}</button>
    <p>slot: <slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: this.defaultValue,
    };
  },
  methods: {
    handleClick() {
      return this.value++;
    },
  },
};
</script>
