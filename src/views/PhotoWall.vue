<template>
  <div class="container">
      <p>{{hello}}</p>
  </div>
</template>
<script>
export default {
  created() {
    this.getAll();
  },
  components: {},
  data() {
    return {
      hello: "",
    };
  },
  methods: {
    getAll() {
      this.$http
        .get("/hello")
        .then((res) => {
          var data = res.data;
          // console.log(data);
          this.hello = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
</style>
