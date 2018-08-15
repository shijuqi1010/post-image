<template>
  <div class="share-body">
    <div class="des-info">
      <ul class="photo-list-info">
        <li class="user-info">
          <img class="user-image" :src="searchInfo.userImg" alt="头像">
          <div class="content-right">
            <span class="user-name">{{searchInfo.userName}}</span>
            <div class="content-text">{{searchInfo.dataList.contentText}}</div>
            <!-- <ul class="content-photo">
              <li v-for="photo in searchInfo.dataList.photoList">
                <img class="photo" :src="photo" alt="图片">
              </li>
            </ul> -->
            <flexbox class="content-photo" :gutter="2">
              <flexbox-item v-for="(photo, index) in searchInfo.dataList.photoList" :key="index">
                <img class="photo" :src="photo" style="width:100%" @click="url = photo"/>
              </flexbox-item>
            </flexbox>
          </div>

        </li>
        <div class="content-bottom">
          <img class="praise" src="../assets/demoIcon/heart.png" alt="点赞">
          <span>123</span>
        </div>
      </ul>
    </div>

    <div class="share-info">
      <div class="download-title">
        <img src="../assets/demoIcon/pink-heart.png" alt="">
        <div class="download-text">下载奥悦家为好友点赞</div>
      </div>
      <div class="luck-container">
        <img src="../assets/demoIcon/bg-luck-code.png" alt="">
        <div class="luck-code">
          <p class="code">幸运码</p>
          <p>9999</p>
        </div>
        <div class="radius"></div>
      </div>
      <div class="active-rule">
        <p class="rule-title">活动规则</p>
        <ul class="explain">
          <li>1.每个社区点赞数前十名可获得豪礼</li>
          <li>2.业主可邀请微信好友为自己点赞助力</li>
          <li>3.活动时间为2018年09月22日至2018年10月21日</li>
          <li>4.奥园物业保留法律范围内允许的对活动的解释权</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.share-body{
  // width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  // bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
  background-image: url(../assets/demoIcon/bg-share.jpg);
  background-size: 100% 100%;
  .des-info{
    // border: 1px solid darkblue;
    background: #FFFFFF;
    border-radius: 16px;
    margin: 204px 10px 0 10px;
    text-align: left;
    list-style: none;
    display: flex;
    justify-content: space-between;
    .photo-list-info{
      margin: 10px 15px 0 15px;
      width: 100%;
      // border: 1px solid pink;
      list-style: none;
      .user-info{
        position: relative;
        // border: 1px solid green;
        overflow: hidden;
        padding-top: 15px;
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
          // border: 1px solid blue;
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
            list-style: none;
            .photo{
              // height: 80px;
              width: auto;
            }
            // li{
            //   display: inline-block;
            //   overflow: hidden;
            //   .photo{
            //     height: 90px;
            //     width: auto;
            //   }
            // }
            // li:nth-child(2){
            //   margin: 0 3px;
            // }
          }
        }
      }
      .content-bottom{
        float: right;
        margin-bottom: 20px;
        font-size: 12px;
        // border: 1px solid darkmagenta;
        .praise{
          width: 15px;
          height: 13px;
          vertical-align: middle;
          margin-right: 4px;
        }
        span{
          right: 0px;
        }
      }
    }
  }
  .share-info{
    // border: 1px solid gray;
    margin: 25px 10px 26px 10px;
    border-radius: 16px;
    text-align: center;
    background: #FFFFFF;
    .download-title{
      padding-top: 40px;
      font-size: 18px;
      color: #FCA5C2;
      // border: 1px solid red;
      img{
        position: absolute;
        width: 24px;
        height: 23px;
        vertical-align: middle;
        left: 30px;
        margin-top: 8px;
      }
      .download-text{
        margin: auto;
        display: inline-block;
        width: 200px;
        height: 36px;
        border-radius: 17px;
        border: 1px solid rgba(252,165,194,1);
        box-shadow: 2px 2px 2px #FCA5C2;
        line-height: 40px;
      }
    }
    .luck-container{
      position: relative;
      // border: 1px solid blueviolet;
      box-sizing: border-box;
      margin-top: 5px;
      img{
        width: 100%;
      }
      .luck-code{
        position: absolute;
        // border: 1px solid red;
        box-sizing: border-box;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        box-shadow: 0px 2px 19px 0px rgba(229,229,229,0.5);
        font-size: 14px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .code{
          margin-top: 22px;
        }
      }
      .radius{
        position: absolute;
        left: -30px;
        top: 40px;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background: linear-gradient(180deg,rgba(102,209,251,1),rgba(151,221,252,1));
      }
    }
    .active-rule{
      margin-top: 10px;
      font-size: 18px;
      color: #FCA5C2;
      // border: 1px solid red;
      .rule-title{
        margin: auto;
        display: inline-block;
        width: 200px;
        height: 36px;
        border-radius: 17px;
        border: 1px solid rgba(252,165,194,1);
        box-shadow: 2px 2px 2px #FCA5C2;
        line-height: 40px;
      }
      .explain{
        list-style: none;
        text-align: left;
        margin-left: 30px;
        margin-top: 20px;
        color: #666666;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 15px;
      }
    }
  }
}
</style>

<script>
import { XCircle, XButton, Previewer, Flexbox, FlexboxItem } from 'vux'
// import { Flexbox, FlexboxItem } from '../flexbox'
export default {
  components: {
    XCircle,
    XButton,
    Previewer,
    Flexbox,
    FlexboxItem
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

