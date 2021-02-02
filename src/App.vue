<template>
  <div class="container">
    <div class="header">
      <h2>Todo App</h2>
    </div>

    <div class="main">
      <TodoAdd />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

export default {
  components: {
    TodoAdd,
    TodoList,
  },
  setup() {
    return {
      TodoAdd,
      TodoList,
    };
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  height: 100vh;
  background-color: #ccede4;
}

.header {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header > h2 {
  font-size: 2em;
}

.main {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
