<template>
    <div class="wraper">
      <Sidebar/>
      <div class="main-content">
        <Header/>
        <MainContent @showloading = "showloading" @hideloading = 'hideloading'/>
      </div>
      <Form/>
      <div class="loading item-center" :class ="{'show':isLoad}">
        <div class="loader"></div>
      </div>
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
  data(){
    return {
      isLoad: false,
    }
  },
  methods:{
    showloading(){
      this.isLoad = true;
    },
    hideloading(){
      this.isLoad = false;
    }
  }
}
</script>
<style>
</style>