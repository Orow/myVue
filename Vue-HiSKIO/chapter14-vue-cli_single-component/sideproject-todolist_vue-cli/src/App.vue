<script>
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push(text);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<template>
  <div>
    <TodoInput @submit="addTodo"/>
    <ul>
      <TodoItem 
        v-for="(todo, index) in todos"
        :data="todo"
        :key="index"
        @click.native="removeTodo(index)"/>
    </ul>
  </div>
</template>

<style>
</style>