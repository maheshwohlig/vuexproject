<template>
  <div>
    <input
      type="text"
      placeholder="Enter new Todo"
      name="todo"
      v-model="newTodo"
    />
    <button @click="add">Add new Todo</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "addtodos",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions(["addnewTodo"]),
    add(e) {
      e.preventDefault();
      this.addnewTodo(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>