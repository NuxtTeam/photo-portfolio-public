<script setup lang="ts">
const works = ref<WorkCard[] | null>(null);
const route = useRoute();
const slug = route.params.slug as string;
const work = ref<WorkCard | null>(null);

const nextWork = computed(() => {
  const slugs = works.value?.map((w) => w.slug) || [];
  if (slugs.length === 0) return null;

  const currentIndex = slugs.indexOf(slug);
  return works.value?.[(currentIndex + 1) % slugs.length] || null;
});

onMounted(async () => {
  works.value = await fetch('/work.json').then((res) => res.json());
  work.value = works.value?.find((w: WorkCard) => w.slug === slug) || null;
});
</script>
<template>
  <section class="section_still-header">
    <div class="padding-section-medium is-mobile-big"></div>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container-medium w-container">
        <div class="content-align-center">
          <div class="text-align-center capitalize">
            <h1>{{ work?.slug }}</h1>
          </div>
          <div class="spacer-xsmall"></div>
          <div class="work-infos_component">
            <!-- <div>Photography, Backstage</div> -->
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
            :src="work?.images.at(-1).url"
            class="still-header_image"
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
              v-for="image in work?.images"
            >
              <div class="work-image-wrap">
                <img
                  loading="lazy"
                  :src="image.url"
                  alt=""
                  class="work-image aspect-ratio-landscape"
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
                :to="nextWork?.path"
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
                    <div class="display-inline"><span>Next work - </span></div>
                    <div class="display-inline capitalize">
                      {{ nextWork?.slug }}
                    </div>
                  </div>
                </div>

                <img
                  :src="nextWork?.images.at(-1).url"
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
