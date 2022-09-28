<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../src/images/img_02.png"/>
      </div>
    </div>
    <h3>{{mount}}</h3>
    <!-- tabbar -->
   <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted} from "vue"
  import {home_http} from "@/api/httpHome"
// import { defineComponent,ref } from "vue";
import TabBar from "@/components/tabbar/TabBar.vue";
let mount=ref("hello seec1")
home_http().then(res=>console.log('-----22----',res))
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     TabBar
// },
// data(){
//   return{
//     mount:"seec"
//   }
// }
// setup(){
//   let mount=ref('hello')
//   return{
//     mount
//   }
// }
// });
</script>
<style lang="scss" scoped>
  .home{
    .nav{
      .pic{
        width: 375px;
        height: 296px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
