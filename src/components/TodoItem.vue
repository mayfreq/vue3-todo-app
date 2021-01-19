<template>
  <li>
    <input type="checkbox" v-model="checked" @change="changeState"/>
    <label>{{ text }}</label>
    <input type="button" value="X" @click="deleteTodo" />
  </li>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    text: String,
  },
  setup(props, context) {
      const checked = ref(false);

    const changeState = () => {
      context.emit("checkedChange",checked);
    };

    const deleteTodo = () => {};

    return {
      changeState,
      deleteTodo,
      checked,
    };
  },
};
</script>

<style>
</style>