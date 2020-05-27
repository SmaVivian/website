<template>
  <!-- 客户案例 -->
  <div class="g-main page-case">
    <!-- <h1>客户案例</h1>
    <router-link to="/case/detail">详情</router-link>-->

    <div class="g-title-box tc mb-30">
      <h1 class="mb-10">在各个文博单位，让进步发生</h1>
      <p>从文物局到博物馆，超过 XX家单位都在使用探景提供的产品和技术</p>
    </div>

    <div class="items">
      <router-link
        tag="a"
        :to="{path: 'case/detail', query: {id: 1}}"
        class="it"
        v-for="v in 4"
        :key="v"
      >
        <h2>吉林省博物院</h2>
      </router-link>
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
.page-case {
  .items {
    display: flex;
    flex-wrap: wrap;
    .it {
      width: 350px;
      height: 500px;
      border: solid 1px $border;
      border-radius: 5px;
      margin-right: 60px;
      margin-bottom: 20px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>


