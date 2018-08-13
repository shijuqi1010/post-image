<template>
  <div class="happiness-body">
    <div class="happiness-header">
      <img class="back-btn" @click="back" src="../assets/demoIcon/箭头@3x.png" alt="">
      <img class="add-btn" @click="createPhoto" src="../assets/demoIcon/添加@3x.png" alt="">
    </div>

    <div class="search-form">
      <!-- <input v-modal="inputCode" class="search-input" placeholder="请输入四位搜索号码"> -->
      <input class="search-input" placeholder="请输入四位搜索号码">
      <img class="search-btn" @click="search" src="../assets/demoIcon/搜索@3x.png" alt="">
    </div>

    <div class="des-info" v-if="searchMode">
      <ul class="photo-list-info">
        <li class="user-info" v-for="(item, listIndex) in searchInfo.dataList">
          <img class="user-image" :src="searchInfo.userImg" alt="头像">
          <div class="content-right">
            <span class="user-name">{{searchInfo.userName}}</span>
            <div class="content-text">{{item.contentText}}</div>
            <ul class="content-photo">
              <!-- <li v-for="photo in item.photoList">
                <img class="photo" :src="photo" width="100" @click="show(index)" alt="图片">
              </li> -->
              <img class="photo" v-for="(previewItem, index) in item.previewerList" :src="previewItem.src" width="100" @click="preview(listIndex, index)">
              <div v-transfer-dom>
                <previewer :list="item.previewerList" ref="previewer" :options="options"></previewer>
              </div>
            </ul>
          </div>
          <div class="content-bottom">
            <span class="create-time">{{item.createTime}}</span>
            <img class="share" src="../assets/demoIcon/转发@3x.png" alt="转发">
            <img class="praise" src="../assets/demoIcon/转发@3x.png" alt="点赞">
          </div>
        </li>
      </ul>
    </div>
    <div class="des-info" v-else>
      <ul class="photo-list-info">
        <li class="user-info" v-for="(item, listIndex) in userInfo">
          <img class="user-image" :src="item.userImg" @click="jumpToPersonalCenter" alt="头像">
          <div class="content-right">
            <span class="user-name">{{item.userName}}</span>
            <div class="content-text">{{item.contentText}}</div>
            <ul class="content-photo">
              <!-- <li v-for="photo in item.photoList">
                <img class="photo" :src="photo" alt="图片">
              </li> -->
              <img class="photo" v-for="(previewItem, index) in item.previewerList" :src="previewItem.src" width="100" @click="preview(listIndex, index)">
              <div v-transfer-dom>
                <previewer :list="item.previewerList" ref="previewer" :options="options"></previewer>
              </div>
            </ul>
          </div>
          <div class="content-bottom">
            <span class="create-time">{{item.createTime}}</span>
            <img class="share" src="../assets/demoIcon/转发@3x.png" alt="转发">
            <img class="praise" src="../assets/demoIcon/转发@3x.png" alt="点赞">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.happiness-body{
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  // bottom: 0;
  left: 0;
  right: 0;
  text-align: left;
  overflow: hidden;
  .happiness-header{
    z-index: 1000px;
    position: relative;
    height: 40px;
    // border: 1px solid red;
    .back-btn{
      position: absolute;
      width: 20px;
      height: 20px;
      margin: 10px;
      left: 10px;
    }
    .add-btn{
      position: absolute;
      width: 20px;
      height: 20px;
      right: 10px;
      margin: 10px;
    }
  }
  .search-form{
    text-align: center;
    // border: 1px solid black;
    // box-sizing: border-box;
    position: relative;
    margin: 20px 20px 0 20px;
    line-height: 28px;
    color:rgba(122,121,123,1);
    .search-input{
      width: 100%;
      margin: auto;
      border-radius:5px;
      height: 28px;
      font-size: 12px;
      outline: 0;
      border: none;
      background:rgba(129,129,129,0.09);
      text-rendering: auto;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      padding-left: 5px;
      margin: 0em;
    }
    .search-btn{
      display: inline-block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      right: 8px;
      margin: 7px;
      border: none;
      color: #d1dadb;
      text-align: center;
      // background: hsla(0,0%,100%,0);
      -webkit-appearance: none;
      cursor: pointer;
    }
  }
  .des-info{
    // border: 1px solid red;
    text-align: left;
    list-style: none;
    display: flex;
    justify-content: space-between;
    .photo-list-info{
      margin: 10px 20px 20px 20px;
      // border: 1px solid pink;
      list-style: none;
      .user-info{
        position: relative;
        // border: 1px solid green;
        // margin: 10px 20px 20px 20px;
        // flex: 1;
        // justify-content: convert;
        overflow: hidden;
        padding: 15px 0 20px 0;
        border-bottom: 1px solid #CECECE;
        .user-image{
          position: absolute;
          // margin-right: 15px;
          width: 35px;
          height: 35px;
          vertical-align: top;
          // border:1px solid aqua;
        }
        .content-right{
          position: relative;
          margin-left: 50px;
          display:inline-block;
          // border:1px solid blue;
          font-size: 12px;
          .user-name{
            line-height: 17px;
            color: #4C618E;
          }
          .content-text{
            line-height: 20px;
            color: #333333;
            margin-bottom: 12px;
          }
          .content-photo{
            // height: 90px;
            list-style: none;
            // display: flex;
            li{
              display: inline-block;
              // flex: 1;
              // justify-content: flex-start;
              overflow: hidden;
              // border: 0.1px solid aqua;
              .photo{
                height: 68px;
                width: auto;
                // border:1px solid #4C618E;
              }
            }
            li:nth-child(2){
              margin: 0 3px;
            }
          }
        }
        .content-bottom{
          margin-left: 50px;
          margin-bottom: 10px;
          // border: 1px solid yellowgreen;
          position: relative;
          .create-time{
            position: absolute;
            font-size: 10px;
            color: #666666;
          }
          .share{
            width: 14px;
            height: 14px;
            position: absolute;
            right: 30px;
          }
          .praise{
            width: 14px;
            height: 14px;
            position: absolute;
            right: 0px;
          }
        }
      }
    }
  }
}
</style>

<script>
import { Previewer, TransferDom } from 'vux'
import Axios from 'axios'

export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  data () {
    return {
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.photo')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      },
      searchMode: false,
      searchInfo: '',
      userInfo: [],
      inputCode: ''
    }
  },
  mounted () {
    Axios.get('src/happiness/data.json').then(res => {
      this.userInfo = res.data.userInfo
      this.userInfo.forEach(item => {
        let previewerList = []
        item.photoList.forEach(photoUrl => {
          let previewer = {}
          previewer.msrc = photoUrl
          previewer.src = photoUrl
          previewer.w = 800
          previewer.h = 400
          previewerList.push(previewer)
        })

        item.previewerList = previewerList
      })
    })
  },
  computed: {
    goalPercent () {
      return this.totalSteps / 200000 * 100
    }
  },
  methods: {
    preview (listIndex, index) {
      this.$refs.previewer[listIndex].show(index)
    },
    search () {
      this.searchMode = true
      // let url = `src/happiness/data.json?${this.inputCode}`
      Axios.get('src/happiness/data.json').then(res => {
        this.searchInfo = res.data.searchInfo
        this.searchInfo.dataList.forEach(item => {
          let previewerList = []
          item.photoList.forEach(photoUrl => {
            let previewer = {}
            previewer.msrc = photoUrl
            previewer.src = photoUrl
            previewer.w = 800
            previewer.h = 400
            previewerList.push(previewer)
          })

          item.previewerList = previewerList
        })
      })
    },
    createPhoto () {
      this.$router.push({path: '/editPhoto'})
    },
    back () {
      alert(1)
    },
    jumpToPersonalCenter () {
      this.$router.push({path: '/personalCenter'})
    }
  }
}
</script>

