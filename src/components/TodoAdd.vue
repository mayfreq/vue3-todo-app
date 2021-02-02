<template>
  <div class="add-form">
    <input
      class="add-todo-text"
      v-model="newTodoText"
      placeholder="Add Todo"
      type="text"
    />
    <button class="add-todo-btn" @click="addTodo">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { uuid } from "vue-uuid";
import store from "@/store";

export default {
  setup() {
    const newTodoText = ref("");

    const addTodo = () => {
      if (newTodoText.value) {
        const todoItem = {
          id: uuid.v4(),
          state: false,
          text: newTodoText.value,
        };
        store.dispatch("addTodo", todoItem);
        newTodoText.value = "";
      }
    };

    return {
      newTodoText,
      addTodo,
    };
  },
};
</script>

<style scoped>
.add-form {
  width: 450px;
  height: 30px;
  display: flex;
}

.add-todo-btn {
  outline: 0;
  border: 0;
  width: 60px;
  height: 30px;
}

.add-todo-btn:active {
  border: 1px solid #000;
}

.add-todo-text {
  width: 390px;
  height: 30px;
  border: 0;
  outline: 0;
  font-size: 1em;
  padding: 5px;
}
</style>
