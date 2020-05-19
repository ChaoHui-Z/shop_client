<template>
  <div class="msite">
    <section>
      <!--首页头部-->
      <Header :title="geohash.name || '正在定位中...'">
        <a class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </a>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="'https://fuss10.elemecdn.com'+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <Shops/>
    </section>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import Shops from "../../components/Shops/Shops";
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    components: {Shops},
    computed: {
      ...mapState(['geohash', 'categorys']),
      categoryArr() {
        const arr = []
        let sArr = []
        const {categorys} = this
        categorys.forEach(i => {
          if (sArr.length === 0) {
            arr.push(sArr)
          }
          sArr.push(i)
          if (sArr.length === 8) {
            sArr = []
          }
        })
        return arr
      }
    },
    mounted() {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
    },
    watch: {
      categorys() {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
</style>
