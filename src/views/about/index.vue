<template>
  <!-- 关于我们 -->
  <div class="page-about">
    <div class="banner">
      <img src="~@images/test.jpg" alt>
      <el-button class="g-btn-try" type="primary" size="small" round>免费试用</el-button>
    </div>

    <div class="g-title-box tc mt-30">
      <h1 class="mb-10">关于我们</h1>
      <!-- <p>一面是监管信息化程度低带来的管理效率压力，一面是提升省域博物馆综合服务水平的压力，我们应该如何应对各种挑战</p> -->
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
.page-about {
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
}
</style>


