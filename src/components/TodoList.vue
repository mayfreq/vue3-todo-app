<template>
  <div>
    <ul v-if="5">
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :text="todo.text"
        :TodoItem="todo"
      />
    </ul>
  </div>

  <div class="option">
    <span class="op1">33 items left</span>
    <span class="op2" @click="allList">All</span>
    <span class="op3" @click="activeList">Active</span>
    <span class="op4" @click="complatedList">Complated</span>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import store from "@/store";
import { computed, reactive, ref } from "vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  setup() {
    const state = ref(0);
    const todoList = computed(() => store.getters.get(state.value));

    const allList = () => {
      state.value = 0;
    };

    const activeList = () => {
      state.value = 1;
    };

    const complatedList = () => {
      state.value = 2;
    };
    return {
      TodoItem,
      todoList,
      todoLenght: store.getters["getLength"],
      allList,
      activeList,
      complatedList,
    };
  },
};
</script>

<style scoped>
ul {
  width: 450px;
  list-style: none;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.option {
  display: flex;
  width: 450px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}

.op2 {
  cursor: grab;
  margin-left: auto;
}

.op3 {
  cursor: grab;
  margin-left: auto;
}
.op4 {
  cursor: grab;
  margin-left: auto;
}
</style>
