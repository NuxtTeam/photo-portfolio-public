<template>
  <nav class="navbar">
    <div class="padding-global">
      <div class="container-full">
        <div class="navbar_component">
          <NuxtLink to="/" class="navbar_logo-wrap w-inline-block">
            Anastasiia Yablonska
          </NuxtLink>
          <div class="navbar_links" style="">
            <NuxtLink class="navbar_link" to="/">Works</NuxtLink>
            <NuxtLink class="navbar_link" to="/about">About</NuxtLink>
            <NuxtLink class="navbar_link" to="/gallery">Gallery</NuxtLink>
            <NuxtLink class="navbar_link" to="/contacts">Contacts</NuxtLink>
          </div>
          <div class="navbar_hamburger-wrap">
            <div class="navbar_hamburger">
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
<script setup lang="ts"></script>
