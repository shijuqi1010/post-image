<template>
  <div class="share-body">
    <div class="share-header">
      <img class="back-btn" onclick="back" src="../assets/demoIcon/箭头@3x.png" alt="">
      <!-- <span class="title">个人中心</span> -->
    </div>

    <div class="des-info">
      <ul class="photo-list-info">
        <li class="user-info">
          <img class="user-image" :src="searchInfo.userImg" alt="头像">
          <div class="content-right">
            <span class="user-name">{{searchInfo.userName}}</span>
            <div class="content-text">{{searchInfo.dataList.contentText}}</div>
            <ul class="content-photo">
              <li v-for="photo in searchInfo.dataList.photoList">
                <img class="photo" :src="photo" alt="图片">
              </li>
            </ul>
          </div>
          <div class="content-bottom">
            <img class="praise" src="../assets/demoIcon/转发@3x.png" alt="点赞">
          </div>
        </li>
      </ul>
    </div>

    <div class="share-info">
      <p class="title">照片将上传到社区与其他业主一起分享您生活的点滴</p>
      <p class="explain-title">获赞前十名可获得礼品</p>
      <p class="active-rule">活动规则</p>
      <ul class="explain">
        <li>1.每个社区点赞数前十名可获得豪礼</li>
        <li>2.业主可邀请微信好友为自己点赞助力</li>
        <li>3.在活动主页搜索我的幸运码为我点赞</li>
        <li>4.活动时间为2018年09月22日至2018年10月21日</li>
        <li>5.奥园物业保留法律范围内允许的对活动的解释权</li>
      </ul>
    </div>
    
  </div>
</template>

<style scoped lang="less">
.share-body{
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
  background: greenyellow;
  .share-header{
    z-index: 1000px;
    position: relative;
    height: 40px;
    text-align: center;
    border: 1px solid gold;
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
  .des-info{
    border: 1px solid darkblue;
    margin-top: 80px;
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
          display: inline-block;
          border: 1px solid blue;
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
                border:1px solid #4C618E;
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
          border: 1px solid darkmagenta;
          position: relative;
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
  .share-info{
    border: 1px solid gray;
    text-align: center;
    .title{
      font-size: 14px;
      color: #FFD100;
      line-height: 20px;
    }
    .explain-title{
      font-size: 14px;
      color: #FFD100;
      padding: 6px 0;
    }
    .active-rule{
      color: #333333;
    }
    .explain{
      text-align: left;
      color: #666666;
      font-size: 12px;

    }
  }
}
</style>

<script>
import { XCircle, XButton, Previewer } from 'vux'
export default {
  components: {
    XCircle,
    XButton,
    Previewer
  },
  data () {
    return {
      searchInfo: {
        userImg: 'http://t12.baidu.com/it/u=3593073884,2369230742&fm=173&app=25&f=JPEG?w=500&h=455&s=2AA2C04D041327C61A99F08A03006011',
        userName: 'dou',
        dataList: {
          photoId: 1,
          contentText: '身体和灵魂总有一个在路上，享受旅行的快乐!',
          photoNum: 3,
          photoList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533894496710&di=8ce5f26e0bcb137b336802a460e27af8&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151217%2Ftooopen_sy_151850658381.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533894604290&di=f9ba7e5fdcc4dbf00e7cba78b7b5b45b&imgtype=0&src=http%3A%2F%2Fpic41.nipic.com%2F20140517%2F8540194_144107346109_2.jpg'
          ]
        }
      }
    }
  },
  computed: {
    percent () {
      if (this.isDonated) {
        return 0
      } else {
        return this.totalSteps / 50000 * 100
      }
    },
    goalPercent () {
      return this.totalSteps / 200000 * 100
    }
  },
  methods: {
    donateSteps () {
      this.isDonated = true
      // demo of ajax
      const Axios = require('axios')
      Axios.get('http://localhost:8080/package.json')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    delContent () {
      alert('delContent')
    }
  }
}
</script>

