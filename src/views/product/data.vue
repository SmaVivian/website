<template>
  <!-- 大数据平台 -->
  <div class="g-main page-data">
    <div class="section section1">
      <div class="info">
        <h1 class="mb-30">政务、业务、观众大数据智慧监管</h1>
        <p class="desc">省域博物馆大数据平台融合博物馆政务大数据、业务大数据（藏品、展陈、社教、研究、文创）、观众大数据、实现对博物馆全方面管理。</p>
        <el-button class="g-btn-try mt-30" type="primary" round>免费试用</el-button>
      </div>
      <div class="pic-box">
        <img src="~@images/test.jpg" alt>
      </div>
    </div>

    <div class="section section2">
      <div class="box pic-box">
        <img src="~@images/test.jpg" alt>
      </div>
      <div class="box info">
        <h1 class="mb-30">政务、业务、观众大数据智慧监管</h1>
        <p class="desc">省域博物馆大数据平台融合博物馆政务大数据、业务大数据（藏品、展陈、社教、研究、文创）、观众大数据、实现对博物馆全方面管理。</p>
        <el-button class="g-btn-try mt-30" type="primary" round>免费试用</el-button>
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
.page-data {
  .section {
    padding: 30px 0;
    display: flex;
    .box {
      padding-right: 30px;
      &:last-child {
        padding-right: 0;
      }
    }
    .info {
      flex: 1;
      h1 {
        font-size: $fontTitleMax;
        color: $fontTitle;
        font-weight: bold;
      }
      .desc {
        font-size: $fontMain;
        color: $colorMain;
      }
    }
    .pic-box {
      width: 600px;
      img {
        width: 100%;
      }
    }
  }
}
</style>


