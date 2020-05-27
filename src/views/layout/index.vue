<template>
  <div class="g-container">
    <!-- <cmp-header></cmp-header> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <cmp-footer></cmp-footer> -->
  </div>
</template>

<script>
import cmpHeader from '@cmp/header/index'
import cmpFooter from '@cmp/footer/index'
export default {
  components: {
    cmpHeader,
    cmpFooter
  }
}
</script>