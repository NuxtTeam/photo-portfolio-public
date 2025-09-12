<script setup lang="ts">
const isOpenedNavBarLinks = ref(false);
</script>

<template>
  <nav class="navbar">
    <div class="padding-global">
      <div class="container-full">
        <div class="navbar_component">
          <NuxtLink to="/" class="navbar_logo-wrap w-inline-block">
            Anastasiia Yablonska
          </NuxtLink>
          <div class="navbar_links" :class="{ active: isOpenedNavBarLinks }">
            <NuxtLink
              to="/"
              class="navbar_link"
              @click.stop="isOpenedNavBarLinks = false"
              >Works</NuxtLink
            >
            <NuxtLink
              class="navbar_link"
              @click.stop="isOpenedNavBarLinks = false"
              to="/about"
              >About</NuxtLink
            >
            <NuxtLink
              class="navbar_link"
              @click.stop="isOpenedNavBarLinks = false"
              to="/gallery"
              >Gallery</NuxtLink
            >
            <NuxtLink
              class="navbar_link"
              @click.stop="isOpenedNavBarLinks = false"
              to="/contacts"
              >Contacts</NuxtLink
            >
          </div>
          <div
            class="navbar_hamburger-wrap"
            @click="isOpenedNavBarLinks = !isOpenedNavBarLinks"
          >
            <div
              class="navbar_hamburger"
              :class="{ active: isOpenedNavBarLinks }"
            >
              <div class="navbar_hamburger-line _1" style=""></div>
              <div class="navbar_hamburger-line _2" style=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <slot />

  <footer class="site-footer">
    <p>&copy; 2023 Anastasia Yablonska. All rights reserved.</p>
  </footer>
</template>
<style lang="css" scoped>
.mob {
  display: none;
}
@media screen and (max-width: 767px) {
  .navbar_links {
    /* display: none; */
  }
  .navbar_links.active {
    /* display: flex; */
  }
}

.navbar_hamburger ._1 {
  transition: all 0.3s ease;
}
.navbar_hamburger.active ._1 {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
