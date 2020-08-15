<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/addd854f9673913edbc2a17417d30c13.jpeg">
      </swiper-slide>

      <swiper-slide>
        <img class="w-100" src="../assets/images/addd854f9673913edbc2a17417d30c13.jpeg">
      </swiper-slide>
      
      <swiper-slide>
        <img class="w-100" src="../assets/images/addd854f9673913edbc2a17417d30c13.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- 幻灯片结束 -->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>收起
      </div>
    </div>
    <!-- 导航菜单结束 -->

    

    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template v-slot:items="category">
        <template  v-for=" item in category">
          <div class="py-2 fs-lg d-flex" v-for="(news,i) in item.newsList" :key="i">
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date}}</span>
          </div>
        </template>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template v-slot:items="category">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <template  v-for=" item in category">
            <div class="p-2 text-center" style="width:20%" v-for="(hero,i) in item.heroList" :key="i">
              <img :src="hero.avatar" alt="" class="w-100">
              <div>{{hero.name}}</div>
            </div>
          </template>
        </div>
      </template>
    </m-list-card>

    <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="card-hero" title="精彩视频"></m-card>
    <m-card icon="card-hero" title="图文攻略"></m-card>



    <!-- <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-cc-menu-circle"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu"></i>
      </div>
      
    </div> -->

  </div>   
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data(){
    return{
      swiperOption: {
          pagination: {
            el: ".pagination-home",
          }
        },
      newsCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats(){
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },
  },
  created () {
    this.fetchNewsCats();
    this.fetchHeroCats();
  }
  
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active{
      background: map-get($colors,'info');
    }
  }
}

.nav-icons{
  border-top: 1px solid  $border-color;
  .nav-item{
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>
