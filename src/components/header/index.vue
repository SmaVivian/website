<template>
  <div class="cmp-header">
    <!-- <h1>博物馆智慧协同平台</h1> -->
    <div class="header">
      <div class="logo">
        <img src="~@images/logo.png" alt>
      </div>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router="router"
      >
        <el-submenu index="2">
          <template slot="title">产品</template>
          <el-submenu index="2-1">
            <template slot="title">省域博物馆大数据平台</template>
            <el-menu-item index="/product/data">政务管理</el-menu-item>
            <el-menu-item index="2-1-2">业务上报</el-menu-item>
            <el-menu-item index="2-4-2">统一参观预约</el-menu-item>
            <el-menu-item index="2-4-2">公众服务</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">博物馆智慧协同平台</template>
            <el-menu-item index="/product/oa">工作台</el-menu-item>
            <el-menu-item index="2-2-2">藏品管理</el-menu-item>
            <el-menu-item index="2-4-2">展陈项目管理</el-menu-item>
            <el-menu-item index="2-4-2">数字资产管理</el-menu-item>
            <el-menu-item index="2-4-2">社教活动管理</el-menu-item>
            <el-menu-item index="2-4-2">OA 审批</el-menu-item>
            <el-menu-item index="2-4-2">参观预约</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">文保单位GIS数据管理平台</template>
            <el-menu-item index="/product/gis">不可移动文物管理</el-menu-item>
            <el-menu-item index="2-4-2">三维模型展示</el-menu-item>
            <el-menu-item index="2-4-2">点云模型展示</el-menu-item>
            <el-menu-item index="2-4-2">BIM 模型展示</el-menu-item>
            <el-menu-item index="2-4-2">地理位置标注</el-menu-item>
            <el-menu-item index="2-4-2">文物数据管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2-4">
            <template slot="title">在线虚拟博物馆</template>
            <el-menu-item index="/product/virtual">360°全景漫游</el-menu-item>
            <el-menu-item index="2-4-2">虚拟展厅制作</el-menu-item>
          </el-submenu>
          <el-submenu index="2-5">
            <template slot="title">三维数据采集</template>
            <el-menu-item index="/product/collect">可移动文物数据采集</el-menu-item>
            <el-menu-item index="2-4-2">不可移动文物数据采集</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="/solution/cutural">
          <template slot="title">解决方案</template>
          <el-menu-item index="/solution/cutural">文物局解决方案</el-menu-item>
          <el-menu-item index="/solution/museum">博物馆解决方案</el-menu-item>
          <el-menu-item index="/solution/relic-unit">文保单位解决方案</el-menu-item>
        </el-submenu>
        <el-menu-item index="/case">客户案例</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-menu>
      <el-button class="g-btn-try" type="primary" size="small" round>免费试用</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      router: true,
      defaultActive: '/'
    }
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key
      window.console.log(this.isShow)
    }
  }
}
</script>

<style lang="scss" scoped>
.cmp-header {
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
  // padding-left: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: #fff;
  // background-color: #404560;
  // color: #fff;
}
.header {
  position: relative;
  display: flex;
  // justify-content: space-between;
  align-content: center;
  // width: 1240px;
  margin: 0 auto;
  height: $headerHeight;
  //background-color: #fff;

  .logo {
    width: 200px;
    padding: 10px;
    img {
      width: 100%;
      line-height: $headerHeight;
    }
  }
  .g-btn-try {
    position: absolute;
    top: 10px;
    right: 30px;
  }
  .el-menu-item,
  /deep/ .el-submenu__title {
    height: $headerHeight;
    line-height: $headerHeight;
  }
}
</style>


