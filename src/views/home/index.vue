<template>
  <!-- 首页 -->
  <div class="page-home">
    <h1>首页</h1>
    <div class="banner">
      <img src="~@images/test.jpg" alt>
      <el-button class="g-btn-try" type="primary" size="small" round>免费试用</el-button>
    </div>

    <div class="g-main">
      <div class="section section-product">
        <div class="sec-title tc mb-30">
          <h1 class="mb-10">全面、专业、高效的大数据产品</h1>
          <p>深钻文博行业业务本质，数据驱动管理与服务</p>
        </div>
        <img
          src="~@images/test.jpg"
          alt
          style="width:1000px;height:400px;margin:0 auto;display:block;"
        >

        <div class="bts" style="width:1000px;margin:20px auto;">
          <el-button>博物馆大数据平台</el-button>
          <el-button>免费试用</el-button>
          <el-button>免费试用</el-button>
          <el-button>免费试用</el-button>
        </div>
      </div>

      <div class="section section-solution">
        <div class="sec-title tc mb-30">
          <h1 class="mb-10">文博全行业的综合解决方案</h1>
          <p>针对文物局、博物馆、文保单位提供全套信息化产品</p>
        </div>

        <div class="solution-items">
          <div class="solution-it">
            <h2>文物局解决方案</h2>
          </div>
          <div class="solution-it">
            <h2>博物馆解决方案</h2>
          </div>
          <div class="solution-it">
            <h2>文保单位解决方案</h2>
          </div>
        </div>
      </div>

      <div class="section section-case">
        <div class="sec-title tc mb-30">
          <h1 class="mb-10">众多优秀博物馆的信赖之选</h1>
          <p>探景专注文博科技，我们每一次的改变、创新和进步，都想为您打造出更好用的产品</p>
        </div>

        <div class="case-tab">
          <a
            :class="{'active': item.value === activeCaseTab.value}"
            v-for="item in caseTabList"
            :key="item.value"
            @click="handleCaseTab(item)"
          >{{item.name}}</a>
        </div>

        <div class="case-items">
          <a
            :href="item.url"
            target="_blank"
            class="case-it"
            v-for="(item, index) in activeCaseTab.arr"
            :key="index"
          >
            <!-- <img src="~@images/1.jpg" alt> -->
            <img :src="item.pic" alt>
          </a>
        </div>

        <el-button class="g-btn-try" type="primary" size="small" round>查看更多客户案例</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCaseTab: {},
      caseTabList: [
        {
          name: '博物馆',
          value: '1',
          arr: [
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            },
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            },
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            },
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            },
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            },
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            }
          ]
        },
        {
          name: '文物局',
          value: '2',
          arr: [
            {
              pic: require('@images/1.jpg'),
              url: 'http://dev.tj720.com/'
            }
          ]
        },
        {
          name: '文物保护单位',
          value: '3',
          arr: [
            {
              pic: require('@images/1.jpg'),
              url: 'http://www.baidu.com'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleCaseTab(item) {
      this.activeCaseTab = item
    }
  },
  created() {
    this.activeCaseTab = this.caseTabList[0]
  }
}
</script>

<style lang="scss" scoped>
.page-home {
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
    margin-bottom: 50px;
    text-align: center;
    .sec-title {
      margin-top: 50px;
      color: $colorMain;
      font-size: $fontMain;
      h1 {
        color: $colorTitle;
        font-size: $fontTitleMax;
      }
    }
  }
  .section-solution {
    .solution-items {
      display: flex;
      justify-content: center;
      .solution-it {
        margin-left: 50px;
        width: 300px;
        height: 400px;
        border: solid 1px $border;
        border-radius: 5px;
        transition: all 0.5s;
        &:first-child {
          margin-left: 0;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  .section-case {
    .case-tab {
      a {
        position: relative;
        padding: 0 50px;
        font-size: $fontTitle;
        font-weight: bold;
        color: $colorMain;
        &.active {
          color: $colorTitle;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 3px;
          width: 1px;
          height: 16px;
          background: #757373;
        }
        &:last-child:after {
          display: none;
        }
      }
    }
    .case-items {
      padding: 0 100px;
      display: flex;
      flex-wrap: wrap;
      .case-it {
        width: 200px;
        height: 150px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>


