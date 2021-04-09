<template>
        <ul class="w-100 d-flex justify-content-around  align-content-around flex-wrap">
       <li v-for="i in data.social" class="mx-4 slide-left list-unstyled"> <a :href="i.link" :class="i.svg+ ' fs-8 scalit text-decoration-none text-light'" target="_blank"> </a> </li>
        </ul>
        
</template>
<script>

export default {
  data() {
    return {
      data: this.$store.state.vfr.data
    }
  }
    
}
</script>
<style  >

.scalit { display: block; transition: all .2s ease-in-out; }

.scalit:hover { transform: scale(1.2); opacity: 0.8 ; }


</style>