<template>
  <!-- 文物局 -->
  <div class="page-cutural">
    <div class="banner">
      <img src="~@images/test.jpg" alt>
      <el-button class="g-btn-try" type="primary" size="small" round>免费试用</el-button>
    </div>

    <div class="g-main">
      <div class="section section1">
        <div class="g-title-box tc mb-30">
          <h1 class="mb-10">文物局在对博物馆管理时面临的业务挑战</h1>
          <p>一面是监管信息化程度低带来的管理效率压力，一面是提升省域博物馆综合服务水平的压力，我们应该如何应对各种挑战</p>
        </div>
        <div class="section1-items">
          <div class="section1-it tc" v-for="v in 4" :key="v">
            <img src="~@images/2.jpg" alt>
            <p class="desc mt-20">掌握全省藏品资源变动情况</p>
          </div>
        </div>
      </div>

      <div class="section section2">
        <div class="g-title-box tc mb-30">
          <h1 class="mb-10">如何通过博物馆大数据平台进行管理</h1>
        </div>
        <div class="section2-item">
          <h2>1 / 藏品动态登录</h2>
          <p>通过藏品动态登录，轻松掌握全省博物馆藏品资源变动情况，藏品数据概况、藏品详情、变动记录在系统中都可以清晰查询，随时调取。</p>
          <img src="~@images/test.jpg" alt>
        </div>

        <div class="section2-item">
          <h2>2 / 博物馆自定义任务上报</h2>
          <p>通过藏品动态登录，轻松掌握全省博物馆藏品资源变动情况，藏品数据概况、藏品详情、变动记录在系统中都可以清晰查询，随时调取。</p>
          <img src="~@images/test.jpg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-cutural {
  .banner {
    position: relative;
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .g-btn-try {
      position: absolute;
      left: 40%;
      bottom: 20px;
    }
  }
  .section {
    margin-top: 50px;
  }
  .section1 {
    .section1-items {
      display: flex;
      justify-content: center;
      .section1-it {
        width: 200px;
        // width: 25%;
        font-size: $fontMain;
        color: $colorMain;
        img {
          width: 140px;
          height: 140px;
        }
      }
    }
  }
  .section2 {
    font-size: $fontMain;
    color: $colorMain;
    .section2-item {
      margin-bottom: 30px;
      h2 {
        font-size: $fontTitleBig;
        color: $colorTitle;
        margin-bottom: 20px;
      }
      img {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
}
</style>


