<template>
  <div id="app">
    <div class="header"></div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐音乐</mt-tab-item>
      <mt-tab-item id="2">热歌榜</mt-tab-item>
      <mt-tab-item id="3">搜 索</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <commend></commend>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        我是热歌榜
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        我是搜 索
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import commend from './component/commend_component'
export default {
  name: 'app',
  data () {
    return {
      selected: '1'
    }
  },
  components:{
    commend,
  }
}
</script>

<style src="./css/base.scss" lang="scss" scoped></style>
<style src="./css/index.scss" lang="scss" scoped></style>
