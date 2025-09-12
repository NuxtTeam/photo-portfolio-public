<script lang="ts" setup>
// const gallery = useMainPhotos();
useSeoMeta({
  title: 'Anastasiia Yablonska - Головна',
  description: 'Ласкаво просимо до мого портфоліо фотографій.'
});
const workList = ref([]);
onMounted(async () => {
  workList.value = await fetch('/work.json').then((res) => res.json());
});
</script>

<template>
  <header class="section_home-header">
    <div class="home-header_image-wrap">
      <img
        src="/images/main_page/Anastasiia_Yablonska.jpg"
        alt="Anastasiia Yablonska"
      />
    </div>
  </header>

  <section class="section_work-list">
    <div class="work-list_wrapper">
      <div role="list" class="work-list_list">
        <div
          v-for="work in workList"
          :key="work"
          role="listitem"
          class="work-list_item"
        >
          <NuxtLink
            aria-label="link to project"
            :to="work.path"
            class="work-list_block w-inline-block"
          >
            <div class="work-list_content">
              <img
                :src="work.images.at(-1).url"
                :alt="work.slug"
                sizes="100vw"
                class="work-list_image"
              />
              <div class="work-list_infos">
                <div class="padding-global">
                  <div class="work-list_infos-content capitalize">
                    <h2>{{ work.slug }}</h2>
                    <!-- <div>Photography, Backstage</div> -->
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <div class="sections_home-footer">
    <footer class="section_home-cta">
      <div class="padding-global">
        <div class="home-cta_component">
          <div>For business inquiries</div>
          <NuxtLink
            data-w-id="6547d0a6-2fbb-4401-0e6d-dfbebc54424d"
            to="/contacts"
            class="button link"
          >
            <div class="button-text">Get in touch</div>
            <div class="button-hover-bg"></div
          ></NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped></style>
