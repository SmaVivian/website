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
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/news">新闻资讯</el-menu-item>
        <el-menu-item index="/product">产品中心</el-menu-item>
        <el-menu-item index="/case">经典案例</el-menu-item>
        <el-menu-item index="/goin">走进科建</el-menu-item>
        <el-menu-item index="/download">下载APP</el-menu-item>
      </el-menu>
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
  .el-menu-item,
  /deep/ .el-submenu__title {
    height: $headerHeight;
    line-height: $headerHeight;
  }
}
</style>


