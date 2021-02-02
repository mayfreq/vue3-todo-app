<template>
  <li :style="style">
    <input type="checkbox" v-model="changed" @change="changeState(TodoItem)" />
    <span>{{ TodoItem.text }}</span>
    <span class="delete material-icons" @click="deleteTodo(TodoItem)"
      >clear</span
    >
  </li>
</template>

<script>
import { reactive, toRefs } from "vue";
import store from "@/store";

export default {
  props: {
    TodoItem: Object,
  },
  setup(props) {
    const { TodoItem } = toRefs(props);
    const style = reactive({
      backgroundColor: TodoItem.value.state ? "green" : "blue",
    });

    const changeState = (TodoItem) => {
      TodoItem.state = TodoItem.state ? false : true;
      if (TodoItem.state) {
        style.backgroundColor = "green";
      } else {
        style.backgroundColor = "blue";
      }
    };

    const deleteTodo = (TodoItem) => {
      store.dispatch("deleteTodo", TodoItem);
    };

    return {
      changeState,
      deleteTodo,
      changed: TodoItem.value.state,
      style,
    };
  },
};
</script>

<style>
li {
  border-bottom: 1px solid #000;
  display: flex;
  padding: 10px;
}

li > input[type="checkbox"] {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
}

li > span {
  margin-left: 5px;
  font-size: 1.2em;
  width: auto;
  height: auto;
}

.delete {
  margin-left: auto;
  font-size: 25px;
}

li:last-child {
  border-bottom: 0;
}

.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
