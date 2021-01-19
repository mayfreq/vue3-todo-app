<template>
  <div class="container">
    <div class="header">
      <h2>Todo App</h2>
    </div>
    <div class="main">
      <div class="todo-add">
        <input type="text" name="" id="" />
        <button>Add</button>
      </div>
      <div class="todo-list">
        <ul>
          <TodoItem text="Hell yeah brother" @checkedChange="den"/>
        </ul>
      </div>
      <div class="option">
        <span>33 items left</span>
        <span>All</span>
        <span>Active</span>
        <span>Complated</span>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";

export default {
  components: {
    TodoItem,
  },
  setup(){
    const den = (checked) => {
      console.log(checked.value);
    };

    return {
      den,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  height: 100vh;
  background-color: #36adf7;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  widows: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.todo-add > button {
  width: 60px;
  border: 0;
  height: 30px;
}

.todo-add > button:active {
  border: 1px solid #000;
}

.todo-add > input[type="text"] {
  width: 300px;
  height: 30px;
  border: 0;
}

ul {
  list-style: none;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 360px;
}

li {
  border-bottom: 1px solid #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
}

li > input[type="checkbox"] {
  flex: 1;
}

li > label {
  flex: 8;
}

li > input[type="button"] {
  flex: 1;
  margin-right: 10px;
  border: 0;
  background-color: red;
}

li > input[type="button"]:active {
  background-color: rgb(168, 112, 112);
}

li:last-child {
  border-bottom: 0;
}

.option {
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 0.9em;
  color: White;
}

.option > span {
  cursor: default;
}

.option > span:nth-child(1) {
  flex: 5;
}

.option > span:nth-child(2) {
  flex: 1;
}

.option > span:nth-child(3) {
  margin-left: 8px;
  flex: 2;
}

.option > span:nth-child(4) {
  flex: 1;
}
</style>
