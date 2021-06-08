<template>
    <section class="bg-dark text-light w-100 height-box py-4">
    <div class="container">
        <h2 class="font-weight-bold fs-3 text-center my-4">{{(data.title).toUpperCase()}}</h2>
        <div class="w-100 d-flex justify-content-between flex-wrap">
          <nuxt-img class="img-avatar my-2" :src="data.avatar.src"  :alt="data.avatar.alt" />
       <Article>
       <h3 class="fs-3 font-weight-bold">{{data.contact.title}}:</h3>
       <address class="pre-wrap">
       {{data.contact.items.name}}
       <strong class="font-weight-light">{{data.contact.items.town}}</strong>
        <strong class="font-weight-light"> {{data.contact.items.state}} {{data.contact.items.cp}}
       {{data.contact.items.contry}} </strong>
       <a target="_blank" class="text-light" :href="'tel:'+ data.contact.items.phone"> {{data.contact.items.phone}}</a>
       <a target="_blank" class="d-block text-light" :href="'mailto:'+data.contact.items.email"> {{data.contact.items.email}}</a>
 
      
       </address>
       </Article>
       <div>
       <button @click="seeTarget = !seeTarget" :class="'btn btn-lg btn-'+ (seeTarget ? 'dark' : 'outline-dark')"><i v-if="seeTarget" class="bi bi-emoji-laughing-fill"></i><i v-else class="bi bi-emoji-smile-fill"></i> {{data.contact.joke.title}}</button>
       <transition name="bounce">
       <span v-if="seeTarget" class="d-block pre-wrap"> {{data.contact.joke.text}} </span>
       </transition>
       </div>
        </div>
    </div>
    </section>
</template>
<script>


export default {
    data(){
        return{
      data: this.$store.state.vfr.data.pages.about,
      seeTarget:false
        }

    }
}
</script>
<style scoped>

.img-avatar {
    width:15rem;
    height:15rem;
    border-radius: 50%;
}
.height-box{
    min-height: 50vh;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>