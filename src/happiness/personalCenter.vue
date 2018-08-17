<template>
  <div class="personal-body">
    <div class="personal-header">
      <img class="back-btn" @click="backHome" src="../assets/demoIcon/arrow.png" alt="">
      <span class="title">个人中心</span>
    </div>

    <div class="center-info">
      <img class="user-img" :src="personalInfo.userImg">
      <ul class="share-rank">
        <li class="share-code">
          <p>{{ personalInfo.searchCode }}</p>
          <p>幸运码</p>
        </li>
        <li class="rank">
          <p>{{ personalInfo.rank }}</p>
          <p>小区排名</p>
        </li>
      </ul>
    </div>
    
    <div class="des-info">
      <ul class="photo-list-info">
        <li class="user-info" v-for="(item, listIndex) in personalInfo.dataList">
          <img class="user-image" :src="personalInfo.userImg">
          <div class="content-right">
            <span class="user-name">{{ personalInfo.userName }}</span>
            <div class="content-text">{{ item.contentText }}</div>
            <flexbox class="content-photo" :gutter="2">
              <flexbox-item v-for="(photo, index) in item.photoList" :key="index">
                <img class="photo" v-if="item.photoNum === 1" :src="photo" style="width:60%" @click="preview(listIndex, index)"/>
                <img class="photo" v-else :src="photo" style="width:100%" @click="preview(listIndex, index)"/>
              </flexbox-item>
              <div v-transfer-dom>
                <previewer :list="item.previewerList" ref="previewer" :options="options"></previewer>
              </div>
            </flexbox>
          </div>
          <div class="content-bottom">
            <span class="create-time">{{ item.createTime }}</span>
            <span class="del-content" @click="showDeleteConfirm">删除</span>
            <div class="right">
              <img class="share" src="../assets/demoIcon/share.png" @click="share">
              <div class="praise-container">
                <img class="praise" src="../assets/demoIcon/heart.png" @click="praise">
                <span class="praise-number">{{ item.praiseNum }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped lang="less">
.personal-body{
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
  .personal-header{
    z-index: 1000px;
    position: relative;
    height: 40px;
    text-align: center;
    // border: 1px solid gold;
    .back-btn{
      position: absolute;
      width: 20px;
      height: 20px;
      margin: 10px;
      left: 10px;
    }
    .title{
      line-height: 40px;
    }
  }
  .center-info{
    // border: 1px solid red;
    // height: 144px;
    background: url("../assets/demoIcon/header-bg.png") center center no-repeat;
    background-size: cover;
    text-align: center;
    .user-img{
      // margin: 8px auto;
      margin-top: 8px; 
      width: 65px;
      height: 65px;
      border-radius: 50%;
      // border: 1px solid darkgreen;
      list-style: none;
    }
    .share-rank{
      list-style: none;
      position: relative;
      display: flex;
      justify-content: center;
      // border: 1px solid yellow;
      font-size: 20px;
      color: #FFFFFF;
      padding-bottom: 20px;
      top: -10px;
      li{
        display: inline-block;
        // position: absolute;
        p:nth-child(1){
          font-size: 20px;
        }
        p:nth-child(2){
          font-size: 10px;
        }
      }
      .share-code{
        text-align: center;
        padding-right: 120px; 
      }
      .rank{
        text-align: center;
      }
    }
  }
  .des-info{
    // border: 1px solid darkblue;
    text-align: left;
    list-style: none;
    display: flex;
    justify-content: space-between;
    .photo-list-info{
      margin: -10px 20px 10px 20px;
      // border: 1px solid pink;
      list-style: none;
      .user-info{
        position: relative;
        // border: 1px solid green;
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
            .photo{
              width: auto;
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
            line-height: 14px;
            color: #666666;
          }
          .del-content{
            font-size: 12px;
            line-height: 14px;
            position: absolute;
            color: #4C618E;
            left: 80px;
          }
          .share{
            width: 14px;
            height: 14px;
            position: absolute;
            right: 75px;
            vertical-align: middle;
          }
          .praise-container{
            display: inline-block;
            right: 0px;
            position: absolute;
            top: -6px;
            .praise{
              width: 15px;
              height: 14px;
              vertical-align: middle;
            }
            .praise-number{
              font-size: 12px;
              line-height: 14px;
              text-align: center;
              left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import { Previewer, TransferDom, Flexbox, FlexboxItem } from 'vux'
import Axios from 'axios'
export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: '',
      personalInfo: '',
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.photo')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      }
    }
  },
  mounted () {
    Axios.get('src/happiness/data.json').then(res => {
      this.personalInfo = res.data.personalInfo
      this.personalInfo.dataList.forEach(item => {
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
  methods: {
    showDeleteConfirm () {
      this.$vux.confirm.show({
        title: '提示',
        content: '确定删除吗？',
        onConfirm () {
          alert('数据已删')
          // axios.delete operation
        }
      })
    },
    share () {
      alert('分享')
      // axios.post operation
      // 调用app接口
    },
    praise () {
      alert('点赞')
      // axios.post operation
    },
    backHome () {
      this.$router.push({path: '/happiness'})
    },
    preview (listIndex, index) {
      this.$refs.previewer[listIndex].show(index)
    }
  }
}
</script>

