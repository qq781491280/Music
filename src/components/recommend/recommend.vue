<template>

  <div class="recommend" ref="recommend">
    <scrol ref="scroll" class="recommend-content" :data="hot_song_list">
      <div>
        <div class="recommend-list">
          <MySwiper :banners="bannerlist"/>
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in hot_song_list" class="item">
              <div class="icon">
                <img :src="item.coverImgUrl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name">{{item.name}}</h2>
                <p class="desc" v-html="cutTitle(item.description)"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container">
        <loading></loading>
      </div>
    </scrol>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MySwiper from "../../base/MySwiper/index"
  import Scrol from "../../base/scroll/scroll"
  export default {
    data() {
      return {
        bannerlist:[],
        hot_song_list:[]
      }
    },
    components:{
      MySwiper,
      Scrol
    },
    created() {
    },
    mounted(){
      this.$api.getbanners({
        type:1,
      }).then(res =>{
        this.bannerlist =res.data.banners
        console.log(this.bannerlist)
      })
      this.$api.getMusicList({
        limit:10
      }).then(res =>{
        this.hot_song_list = res.data.playlists
        console.log( this.hot_song_list)
      })
    },
    methods:{
      cutTitle(title){
        if(title.length>8){
          return title.substring(0,20)+"...";
        }else{
          return title;
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
