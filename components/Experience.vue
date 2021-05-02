<template>
    <section class="w-100 bg-light text-dark">
        <h2 class="fs-3 text-center my-4 font-weight-bold">{{(data.title).toUpperCase()}} </h2>
        <div class="container d-flex justify-content-between flex-wrap">
        <span>
        <h3 class="fs-2 border-title-exp border-dark font-weight-bold">{{(data.education.title).toUpperCase()}}:</h3>
        </span>
        <div class="w-75">
        <span v-for="i in data.education.items">
        <h4 class="fs-2 my-2 font-weight-bold">{{i.title}} </h4>
        <p>{{i.description}} </p> 
 <hr>
        </span>
        </div>
        <div class="w-100 container d-flex justify-content-between flex-wrap">
        <span>
        <h3 class="fs-2 border-title-exp border-dark font-weight-bold">{{(data.techno.title).toUpperCase() }} :</h3>
        </span>
         <div class="text-wrap w-75">
         <i class="my-2">
        {{data.techno.text}}
         </i>
        <ul class="list-bareme">
        <li v-for="i in data.techno.bareme" :class="'text-'+ data.techno.class[i.note]">{{i.remarque}} </li>
        </ul>
         <ul class="list-technos">
         <li v-for="i in data.techno.items" :class="'mx-4 my-4 d-flex justify-content-start align-items-start flex-wrap text-'+ data.techno.class[i.note]"><h4 class="font-weight-light"> {{(i.name).toUpperCase() }}</h4>
<nuxt-img v-if="i.img" v-for="img in i.img" class="img-small-techno" :src="img" :alt="i.name" />
         </li>
         </ul>
         
        </div>

        </div>
        </div>
    </section>
</template>
<script>

export default {
    data(){
        return{
      data: this.$store.state.vfr.data.pages.experience
        }

    }
}
</script>
<style scoped>
    .border-title-exp{
        padding: 0.75rem 0.5rem;
        border-bottom: 0.25rem  solid ;
    }

    .list-bareme {
  list-style-type: square;
  display: flex;
  justify-content: space-between; 
}
 
    .list-technos {
  list-style-type: none;
  display: flex;
  justify-content: space-between; 
  align-items:center ;
  align-content: center;
  flex-wrap: wrap;
}
.img-small-techno{
widows: auto;
height: 2rem;  
margin:0 1rem;

}
</style>