<template>
  <section class="w-100 vh-100 text-light bg-dark bg-laptop bg-img">
    <NavBar />
    <div
      class="w-100 h-100 container d-flex justify-content-around align-items-center flex-column text-center"
    >
      <h1 class="title-anim shadow fs-16 font-weight-bold">
        {{ data.title.toUpperCase() }}
      </h1>
      <p class="w-75">{{ data.description }}</p>
      <Social />
      <NuxtLink
        to="/about"
        class="bi bi-chevron-compact-down fs-8 my-4 btn text-light"
      ></NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      data: this.$store.state.vfr.data
    };
  }
};
</script>
<style scoped>
.bg-laptop {
  background-image: url("@/static/laptop.jpg");
}
.shadow {
  text-shadow: darkslategreyi 1rem 1rem 1rem;
}

.title-anim {
  animation: bounce-in 1s linear;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  1% {
    transform: translateX(5rem);
  }
  2% {
    transform: rotate(45deg);
  }
  50% {
    transform: scale(1.5);
  }
  
  98% {
    transform: scale(1);
  }
  99% {
    transform: translateX(0);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
