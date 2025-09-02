<script setup lang="ts">
const images = ref<Record<string, any>[]>([]);
const route = useRoute();
const slug = route.params.slug as string;
const firstImage = computed(() => images.value[slug]?.[5].url);
const nextSlug = computed(() => {
  const slugs = Object.keys(images.value);
  const currentIndex = slugs.indexOf(slug);
  return slugs[(currentIndex + 1) % slugs.length];
});
onMounted(async () => {
  images.value = await fetch('/work.json').then((res) => res.json());
});
</script>
<template>
  <section class="section_still-header">
    <div class="padding-section-medium is-mobile-big"></div>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container-medium w-container">
        <div class="content-align-center">
          <div class="text-align-center">
            <h1>{{ slug }}</h1>
          </div>
          <div class="spacer-xsmall"></div>
          <div class="work-infos_component">
            <div>Photography, Backstage</div>
          </div>
          <div class="spacer-huge"></div>
        </div>
        <div
          data-w-id="dcf2070a-6112-a610-c960-a879de4be75c"
          class="still-header_image-wrap"
        >
          <img
            alt="Lorem ipsum"
            loading="lazy"
            :src="firstImage"
            class="still-header_image"
            style="
              will-change: transform;
              transform: translate3d(0px, 0px, 0px) scale3d(1.17596, 1.17596, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
          />
        </div>
      </div>
    </div>
  </section>
  <section class="section_still-intro">
    <div class="padding-section-medium"></div>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container-tiny w-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
    </div>
    <div class="padding-section-medium"></div>
  </section>

  <section class="section_still">
    <div class="padding-global">
      <div class="w-layout-blockcontainer container-medium w-container">
        <div class="still_wrapper w-dyn-list">
          <div role="list" class="still_list w-dyn-items">
            <div
              role="listitem"
              class="still_item w-dyn-item w-dyn-repeater-item"
              v-for="image in images[slug]"
            >
              <div class="work-image-wrap">
                <img
                  loading="lazy"
                  :src="image.url"
                  alt=""
                  class="work-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section_work-next">
    <div class="padding-section-large"></div>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container-tiny w-container">
        <div class="work-next_wrapper w-dyn-list">
          <div role="list" class="work-next_list w-dyn-items">
            <div role="listitem" class="work-next_item w-dyn-item">
              <NuxtLink
                :to="`/work/${nextSlug}`"
                class="work-next_block w-inline-block"
              >
                <div class="work-infos_component">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f9c946f6c153fc3a405bae/66fd783225541a9354c0cc7a_icon-arrow.svg"
                    alt=""
                    class="work-infos_triangle"
                  />
                  <div>
                    <div class="display-inline">Next work -</div>
                    <div class="display-inline">
                      {{ nextSlug }}
                    </div>
                  </div>
                </div>

                <img
                  :src="images[nextSlug]?.[0].url"
                  loading="lazy"
                  alt="Lorem ipsum"
                  class="work-next_image"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="padding-section-large"></div>
  </section>
</template>
