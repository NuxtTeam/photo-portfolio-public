<script lang="ts" setup>
// const gallery = useMainPhotos();
useSeoMeta({
  title: 'Anastasiia Yablonska - Головна',
  description: 'Ласкаво просимо до мого портфоліо фотографій.'
});
</script>

<template>
  <header class="section_home-header">
    <div class="home-header_image-wrap">
      <NuxtImg
        src="/images/main_page/Anastasiia_Yablonska.jpg"
        :placeholder="[1000]"
      />
    </div>
  </header>

  <section class="section_work-list">
    <div class="work-list_wrapper">
      <div role="list" class="work-list_list">
        <div role="listitem" class="work-list_item">
          <NuxtLink
            aria-label="link to project"
            to="/work/burning-man"
            class="work-list_block w-inline-block"
            ><div class="work-list_content">
              <img
                src="/images/main_page/photo_3.jpg"
                alt="Yurii Lisovenko"
                sizes="100vw"
                class="work-list_image"
              />
              <div class="work-list_infos">
                <div class="padding-global">
                  <div class="work-list_infos-content">
                    <h2>Burning man</h2>
                    <div>Photography, Backstage</div>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div role="listitem" class="work-list_item">
          <a
            aria-label="link to project"
            href="/work/dan-alice"
            class="work-list_block w-inline-block"
            ><div class="work-list_content">
              <img
                src="/images/main_page/photo_8.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                class="work-list_image"
              />
              <div class="work-list_infos">
                <div class="padding-global">
                  <div class="work-list_infos-content">
                    <h2>Dan &amp; Alice</h2>
                    <div>Photography, Visuals</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div role="listitem" class="work-list_item">
          <a
            aria-label="link to project"
            href="/work/porto-waves"
            class="work-list_block w-inline-block"
          >
            <div class="work-list_content black-text">
              <img
                src="/images/main_page/photo_9.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                class="work-list_image"
              />
              <div class="work-list_infos">
                <div class="padding-global">
                  <div class="work-list_infos-content">
                    <h2>Porto waves</h2>
                    <div>Photography, Direction</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
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
