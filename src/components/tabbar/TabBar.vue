<template>
    <div>
        <van-tabbar  @change="onChange_fn" v-model="active" active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分销</van-tabbar-item>
            <van-tabbar-item icon="friends-o">购物</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";

import {ref} from "vue"
import {useRouter} from "vue-router"
let active =ref(0)
let router=useRouter()
// 点击事件函数
let onChange_fn:(index?:number | string)=>void=function(index?:number | string){
    console.log(index)
    switch(index){
        case 0:router.push("/");break
        case 1:router.push("/fen");break
        case 2:router.push("/cart");break
        case 3:router.push("/mine");break
    }
}
</script>

<style lang="scss" scoped>

</style>>
