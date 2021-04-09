<template>
  <section class="w-100 mt-4 bg-light text-dark">
    <h2 class="fs-3 text-center my-4 font-weight-bold">
      {{ data.title.toUpperCase() }}
    </h2>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      indicators
      background="#ababab"
      img-width="100vw"
      img-height="100vh"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="i in data.items" :img-src="i.img">
        <button
          @click="showMsgOk(i)"
          class="btn btn-lg btn-dark rounded-pill my-4"
        >
          <p class="d-inline mx-4">{{ i.name }}</p>
          <i class="bi bi-info-circle-fill"></i>
        </button>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>
<script>
export default {
  data() {
    return {
      data: this.$store.state.vfr.data.pages.project,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    showMsgOk(i) {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("h4", {
        domProps: { innerHTML: i.name.toUpperCase() },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("article", { class: ["my-4"] }, [i.description]),
        i.github &&
          h(
            "b-link",
            {
              props: { href: i.github, target: "_blank" },
              class: "btn btn-link btn-block",
            },
            [
              h("i", { class: this.data.modal.github.svg }),
              this.data.modal.github.text,
            ]
          ),
        i.host &&
          h(
            "b-link",
            {
              props: { href: i.host, target: "_blank" },
              class: "btn btn-link btn-block",
            },
            [
              h("i", { class: this.data.modal.host.svg }),
              this.data.modal.host.text,
            ]
          ),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "md",
        centered: true,
        size: "md",
      });
    },
  },
};
</script>
<style scoped></style>
