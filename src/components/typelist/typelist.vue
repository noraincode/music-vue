<template>
  <div class="typelist">
    <i class="info" :class="iconInfo"></i>
    <div class="typelist-detail">
      <span class="name">{{listName}}</span>
			<span class="count" v-show="showCount">({{listCount}})</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: String,
        default: '1'
      },
      iconinfo: {
        type: String
      },
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        isPlaying: false,
        iconInfo: '',
        listName: '',
        listCount: 0
      }
    },
    computed: {
      showCount () {
        return this.count !== 'none'
      }
    },
    created () {
      this.listName = this.name
      this.listCount = this.count
      this.iconInfo = this.iconinfo
    }
  }
</script>

<style lang="scss" scoped>
.typelist {
  height:50px;
  background:#f7f7f7;
  position:relative;
  &:active{
    background:#d5d5d5;
  }
  .info {
    font-size:20px;
    position:absolute;
    top:50%;
    color:#C62F2F;
    left:15px;
    transform:translate(0,-50%);
  }
  .typelist-detail {
    height:100%;
    line-height:50px;
    margin-left:50px;
    box-sizing:border-box;
    font-size:0;
    .name {
      color:#333;
      font-size:14px;
      margin-right:6px;
      vertical-align:middle;
    }
    .count {
      color:#aaa;
      font-size:10px;
      font-weight:400;
      vertical-align:middle;
    }
  }
}
</style>

