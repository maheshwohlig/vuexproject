<template>
  <div>
    <div v-for="(employee,index) in employees" :key="employee.id">
      <p>
        {{ employee.id }},{{ employee.name }}
        <button @click="dlet(index)">delete</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Home",

  computed: mapGetters(["employees"]),
  methods: {
    ...mapActions(["dletTodo"]),
    dlet(index) {
      this.dletTodo(index);
    },
  },
};
</script>
