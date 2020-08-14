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
        <!-- <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{ news.categoryName }}]</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.data }}</span>
        </div> -->
        <template class="py-2" v-for=" item in category">
          <div v-for="(news,i) in item.newsList" :key="i">
          <span>[{{ news.categoryName }}]</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.data }}</span>
          </div>
        </template>
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

export default {
  data(){
    return{
      swiperOption: {
          pagination: {
            el: ".pagination-home",
          }
        },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: '这是热门这是热门这是热门',
            data: '06/01'
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '新闻',
            title: '这是新闻这是新闻这是新闻',
            data: '06/01'
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '公告',
            title: '这是公告这是公告这是公告',
            data: '06/01'
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '活动',
            title: '这是活动这是活动这是活动',
            data: '06/01'
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: '赛事',
            title: '这是赛事这是赛事这是赛事',
            data: '06/01'
          }))
        },
        
      ]
    }
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
