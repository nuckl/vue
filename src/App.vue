<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <!-- <p>{{ todos }}</p> -->
    <p>{{ newTodos }}</p>
  </div>
</template>

<script>
// { } 表示解构
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  components: {},
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   newTodos() {
  //     return this.$store.getters.newTodos;
  //   }
  // }
  computed: mapGetters(["count", "newTodos"])
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
  // computed: mapState({
  //   todos: state => state.todos,
  //   count: state => state.count
  // })
  // computed: mapState(["count", "todos"])
};
</script>

<style>
</style>
