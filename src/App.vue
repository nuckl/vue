<template>
  <div id="app">
    <button @click="inCount(2)">+</button>
    <h1>{{ count }}</h1>
    <!-- <p>{{ todos }}</p> -->
    <!-- <p>{{ newTodos }}</p> -->
    <button @click="f">huoqu</button>
  </div>
</template>

<script>
// { } 表示解构
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  // methods: {
  //   inCount(m) {
  //     this.$store.commit("inCount", m);
  //   }
  // },
  // methods: mapMutations(["inCount"]),
  components: {},
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   newTodos() {
  //     return this.$store.getters.newTodos;
  //   }
  // }
  computed: mapGetters(["count", "newTodos"]),
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
  methods: {
    inCount(m) {
      this.$store.dispatch("inCountAs", m);
    },
    f() {
      this.$store.dispatch("f");
    }
  }
};
</script>

<style>
</style>
