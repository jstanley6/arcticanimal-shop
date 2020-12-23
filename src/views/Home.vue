<template>
  <div class="home">
    <div class="bg">
      <products></products>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/NavBar.vue";
import Products from "@/sections/Products";

export default {
  name: "home",
  components: {
    Products,
    HelloWorld
  }
};
</script>

<style scoped lang="scss">
body, html {
  height: 100%;
}
.bg {
  background: url("../assets/wolf.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  margin-top: 0;
  background-position: center center;
}
</style>
