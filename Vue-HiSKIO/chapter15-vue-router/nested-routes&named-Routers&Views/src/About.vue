<template>
  <div>
    <h1>About</h1>
    <!-- <router-link to="/about/us">AboutUs</router-link> -->
    <!-- <router-link to="/about/family">AboutFamily</router-link> -->

    <!-- 具名路由 Named Routes -->
    <router-link :to="{name:'us'}">Us</router-link>
    <router-link :to="{name: 'prods', params:{id:10}}">Mask</router-link>

    <!-- 具名路由 兩個都顯示 -->
    <router-link to="/about/both">Both</router-link>
    <!-- <router-view/> -->

    <!-- name="default"是預設 -->
    <router-view name="default"/>
    <router-view name="another"/>
  </div>
</template>
