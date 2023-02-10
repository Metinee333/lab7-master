<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/news">ข่าว </router-link></a>
            <a class="nav-link" href="#"><router-link to="/plan">แผนการเรียน </router-link></a>
            <a class="nav-link" href="#"><router-link to="/adddrop">เพิ่มถอนรายวิชา </router-link></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

