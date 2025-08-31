<script lang="ts" setup>
useSeoMeta({
  title: 'Anastasiia Yablonska - Головна',
  description: 'Ласкаво просимо до мого портфоліо фотографій.'
});
import headerImg from '~assets/images/IMG_3269_jLveJn.jpg';
import burningManImg from '~assets/images/IMG_2770.jpg';
</script>

<template>
  <header class="section_home-header">
    <div class="home-header_image-wrap">
      <img :src="headerImg" />
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
                :src="burningManImg"
                loading="lazy"
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
            <div class="work-list_content black-text w-condition-invisible">
              <img
                src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash-p-500.jpg   500w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash-p-800.jpg   800w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash-p-1080.jpg 1080w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash-p-1600.jpg 1600w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash-p-2000.jpg 2000w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd78c8b1b5ef1ce0c62fd6_jeremy-bishop-SWF2ccJB2aU-unsplash.jpg        2400w
                "
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
            </div></NuxtLink
          >
        </div>
        <div role="listitem" class="work-list_item">
          <a
            aria-label="link to project"
            href="/work/dan-alice"
            class="work-list_block w-inline-block"
            ><div class="work-list_content">
              <img
                src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-500.jpg   500w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-800.jpg   800w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-1080.jpg 1080w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-1600.jpg 1600w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-2000.jpg 2000w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash.jpg        2400w
                "
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
            <div class="work-list_content black-text w-condition-invisible">
              <img
                src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-500.jpg   500w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-800.jpg   800w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-1080.jpg 1080w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-1600.jpg 1600w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash-p-2000.jpg 2000w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7c09c30c6263991dabb4_jakob-owens-SiniLJkXhMc-unsplash.jpg        2400w
                "
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
            </div></a
          >
        </div>
        <div role="listitem" class="work-list_item">
          <a
            aria-label="link to project"
            href="/work/porto-waves"
            class="work-list_block w-inline-block"
            ><div class="work-list_content w-condition-invisible">
              <img
                src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-500.jpg   500w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-800.jpg   800w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-1080.jpg 1080w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-1600.jpg 1600w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-2000.jpg 2000w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1.jpg        2400w
                "
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
            <div class="work-list_content black-text">
              <img
                src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1.jpg"
                loading="lazy"
                alt="Lorem ipsum"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-500.jpg   500w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-800.jpg   800w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-1080.jpg 1080w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-1600.jpg 1600w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1-p-2000.jpg 2000w,
                  https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bce/66fd7cd3cf97b40e4143de52_1.jpg        2400w
                "
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
            </div></a
          >
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
<style scoped>
.button::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  z-index: 0;
  transition: height 0.5s ease;
}

.button:hover::before {
  height: 100%;
}

.button {
  position: relative; /* щоб текст був поверх псевдоелемента */
  z-index: 1;
  transition: color 0.5s ease;
}

.button:hover {
  color: #000;
}
</style>
