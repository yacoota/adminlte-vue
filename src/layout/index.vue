<template>
  <div id="app" class="wrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="content-wrapper">
        <router-view />
      </div>
      <Footer></Footer>
      <ControlSide></ControlSide>
  </div>
</template>

<script>
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";
import Sidebar from "@/layout/components/Sidebar.vue";
import ControlSide from "@/layout/components/ControlSide.vue";

export default {
  name: "Layout",
  components: { Header, Footer, Sidebar, ControlSide  }
};
</script>
<style lang="scss">

</style>