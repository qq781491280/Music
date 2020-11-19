<template>
    <div>
      <swiper  :options="swiperOption">
        <swiper-slide v-for = "(item,index) in banners" :key="index">
          <img :src="item.pic" alt="" style="width: 100%"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "MySwiper",
      data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            },
            loop : true,
        autoplay: {
        delay: 3000,
          disableOnInteraction: false,
  }
          }
        }
      },
      props:{
        banners:{
          type:Array,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
