<template>
  <div v-if="loading">
    <Counter
    :year="2020"
    :month="11"
    :date="25"
    :hour="0"
    :minute="0"
    :second="0"
    :millisecond="0"
    />
    <div class="bg">
      <products></products>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/NavBar.vue";
import Products from "@/sections/Products";
import Counter from "@/components/Counter.vue";

export default {
  name: "home",
  components: {
    Products,
    Counter,
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
