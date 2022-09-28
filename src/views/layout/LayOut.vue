<template>
    <div>
        <router-view></router-view>
        <tab-bar></tab-bar>
    </div>
</template>
<script lang="ts" setup>
import TabBar from '@/components/tabbar/TabBar.vue';
</script>