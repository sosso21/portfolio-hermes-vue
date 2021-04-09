<template>
  <div class="sticky">
  <b-navbar toggleable="lg" type="dark">
  
 
 <NuxtLink to="/home" class="navbar-brand" >
  <strong class="nav-title">
  <i class="bi bi-code-slash"></i>
  {{data.title}}
  </strong>
  </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="w-100 d-flex justify-content-center">
      <li v-for="i in  data.navLink" class="mx-1 nav-item">
          <NuxtLink    :to="i.href" class="nav-link"><i :class="i.svg"></i> {{i.name}}</NuxtLink>
      </li> 
      
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
  
</template>
<script>
export default {
    
  data() {
    return {
      data: this.$store.state.vfr.data
    }
  },
}
</script>
<style  scoped>
    .nav-title{
    font-size: inherit;
    line-height: inherit;
    white-space: inherit;
        margin-bottom:inherit;
    font-weight: inherit;
    }

.sticky{
  position: sticky;
  top: 0;
}
</style>