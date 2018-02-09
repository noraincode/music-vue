<template>
  <div class="musicsheet">
    <div class="title">
      <i class="ion-ios-arrow-down" ref="toggleicon"></i>
      <div class="detail">
        <span class="name">{{data_item.name}}</span>
				<span class="count">({{data_item.count}})</span>
				<i class="setting ion-ios-gear-outline" @click.stop="showSheetMenu(data_item.name)"></i>
      </div>
    </div>
    <div v-show="showSheets" v-for="(list, listindex) in data_item.detail" :key="listindex" @click.stop="showSongSheet(list)">
      <div class="content">
        <img class="sheetimg" :src="list.info[0].img_url" alt="">
        <div class="detail">
          <p class="name">{{list.name}}</p>
          <p class="count">{{list.count}}首歌曲</p>
          <i class="setting ion-android-more-vertical" @click.stop="showMenu(list.name)"></i>
          <p v-show="data_item.detail.length != listindex + 1" class="border-1px"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      showSheets: true,
      data_item: {},
      data_index: {}
    }
  }
}
</script>

