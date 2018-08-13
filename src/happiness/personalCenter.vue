<template>
  <div class="personal-body">
    <div class="personal-header">
      <img class="back-btn" @click="backHome" src="../assets/demoIcon/箭头@3x.png" alt="">
      <span class="title">个人中心</span>
    </div>

    <div class="center-info">
      <img class="user-img" :src="searchInfo.userImg" alt="头像">
      <!-- <div class="user-img">
        <img class="user-image" :src="searchInfo.userImg" alt="头像">
      </div> -->
      <ul class="share-rank">
        <li class="share-code">
          <p>1234</p>
          <p>幸运码</p>
        </li>
        <li class="rank">
          <p>90</p>
          <p>小区排名</p>
        </li>
      </ul>
    </div>
    
    <div class="des-info">
      <ul class="photo-list-info">
        <li class="user-info" v-for="item in searchInfo.dataList">
          <img class="user-image" :src="searchInfo.userImg" alt="头像">
          <div class="content-right">
            <span class="user-name">{{searchInfo.userName}}</span>
            <div class="content-text">{{item.contentText}}</div>
            <ul class="content-photo">
              <li v-for="photo in item.photoList">
                <img class="photo" :src="photo" alt="图片">
              </li>
            </ul>
          </div>
          <div class="content-bottom">
            <span class="create-time">{{item.createTime}}</span>
            <span class="del-content" @click="showDeleteConfirm">删除</span>
            <img class="share" src="../assets/demoIcon/转发@3x.png" alt="转发">
            <img class="praise" src="../assets/demoIcon/转发@3x.png" alt="点赞">
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
  .center-info{
    border: 1px solid red;
    height: 144px;
    background: #FFD100;
    text-align: center;
    .user-img{
      margin: 8px auto;
      // margin: 10px 20px 20px 20px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: 1px solid darkgreen;
      list-style: none;
    }
    .share-rank{
      list-style: none;
      position: relative;
      display: flex;
      justify-content: center;
      border: 1px solid yellow;
      font-size: 20px;
      color: #FFFFFF;
      // margin-top: 5px;
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
        padding-right: 80px; 
        // left: 10px;
      }
      .rank{
        text-align: center;
        // right: 10px;
      }
    }
  }
  .des-info{
    border: 1px solid darkblue;
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
          .del-content{
            font-size: 12px;
            position: absolute;
            color: #4C618E;
            left: 80px;
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
import { XCircle, XButton, Previewer } from 'vux'
export default {
  components: {
    XCircle,
    XButton,
    Previewer
  },
  data () {
    return {
      msg: '',
      searchInfo: {
        userImg: 'http://t12.baidu.com/it/u=3593073884,2369230742&fm=173&app=25&f=JPEG?w=500&h=455&s=2AA2C04D041327C61A99F08A03006011',
        userName: 'dou',
        dataList: [{
          photoId: 1,
          contentText: '身体和灵魂总有一个在路上，享受旅行的快乐!',
          photoNum: 3,
          photoList: [
            'http://img5.duitang.com/uploads/item/201405/24/20140524105402_VK2Rz.jpeg'
          ],
          createTime: '3分钟前'
        },
        {
          photoId: 11,
          contentText: '每天叫醒我的不是闹钟，是梦想',
          photoNum: 2,
          photoList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795930804&di=227ca86587d3329d38eab24712d72cbc&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F23%2F33%2F16233390-1f3fc11767c0a138002126a9cbcc599f-1.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795930803&di=0e9a7bd07a4685852d8b8f952d404c08&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140713%2F0020033056793294_b.jpg'
          ],
          createTime: '4分钟前'
        },
        {
          photoId: 111,
          contentText: '我爱中华美食, 湘菜，川菜，粤菜...',
          photoNum: 3,
          photoList: [
            'http://e.hiphotos.baidu.com/bainuo/crop=0,0,470,285;w=470;q=80/sign=c2b1cf8c2bf5e0fefa57d34161501898/8b13632762d0f703a32155490efa513d2797c590.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795446437&di=9d011c27ff73752862123c06ab197b9f&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3b87e950352ac65c870094e3f9f2b21193138a1d.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795446435&di=46c2534a9a5a757e3a0d199e036335f2&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3Daf4d0d15d51373f0ea3f629f940f4b8b%2F6f061d950a7b020805faaa8f66d9f2d3572cc8a9.jpg'
          ],
          createTime: '5分钟前'
        }
        ]
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
    showDeleteConfirm () {
      this.$vux.confirm.show({
        title: '提示',
        content: '确定删除吗？',
        onConfirm () {
          alert('数据已删')
          // ajax.delete operation
        }
      })
    },
    backHome () {
      this.$router.push({path: '/happiness'})
    }
  }
}
</script>

