<template>
    <div class="wraper">
      <Sidebar/>
      <div class="main-content">
        <Header/>
        <MainContent/>
      </div>
      <Form/>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import MainContent from "@/components/MainContent.vue";
import Form from "@/components/Form.vue";
import "./assets/style/Common.css";
export default {
  components:{
    Header, Sidebar, MainContent,Form,
  }, 
}
</script>
<style>
</style>