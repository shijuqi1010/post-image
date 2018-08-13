<template>
  <div class="edit-body">
    <div class="edit-header">
      <img class="back-btn" @click="back" src="../assets/demoIcon/箭头@3x.png" alt="">
      <span class="push-btn" @click="pushPhoto">发表</span>
    </div>

    <x-textarea class="text-area" placeholder="这一刻的想法...(100字以内,选填)" :max="100" :show-counter="true" :rows="5">
      <!-- <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24"> -->
    </x-textarea>
    <!-- <div class="text-area">
      <textarea placeholder="这一刻的想法...(100字以内,选填)" maxlength="100" :rows="5">
      </textarea>
    </div> -->

    <div class="add-photo">
      <img class="add-btn" @click="addPhoto" src="../assets/demoIcon/添加@3x.png" alt="">
      <!-- <label>照相机</label>
      <input type="file" id='image' accept="image/*" capture='camera'> -->
    </div>

    <div class="explain-edit-photo">
      <p class="title">照片将上传道社区与其他业主一起分享您生活的点滴</p>
      <p class="explain-title">获赞前十名可获得礼品</p>
      <p>活动规则</p>
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
.edit-body{
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
  background: #FFFFFF;
  .edit-header{
    z-index: 1000;
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
    .push-btn{
      position: absolute;
      right: 20px;
      line-height: 40px;
      // margin: 10px;
      color: #FFD100;
    }
  }
  .explain-edit-photo{
    margin: 20px 20px 0 20px;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid green;
    list-style: none;
    .title{
      margin-bottom: 10px;
      text-align: center;
    }
    .explain-title{
      text-align: center;
      margin-bottom: 10px;
    }
    .explain{
      list-style: none;
    }
  }
  .text-area{
    // width: 100%;
    border: 1px solid red;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 18px;
    margin: 20px 20px 0 20px;
    .text{
      width: 100%;
      resize: none;
    }
  }
  .add-photo{
    height: 90px;
    margin: 20px 20px 0 20px;    
    // text-align: center;
    .add-btn{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid black;
    }

  }
}
</style>

<script>
import { XCircle, XButton, XTextarea } from 'vux'
export default {
  components: {
    XCircle,
    XButton,
    XTextarea
  },
  data () {
    return {
      totalSteps: 2000,
      searchMode: false,
      stepNote: '0',
      isDonated: false,
      userInfo: [{
        photoId: 1,
        userImg: 'http://t12.baidu.com/it/u=3593073884,2369230742&fm=173&app=25&f=JPEG?w=500&h=455&s=2AA2C04D041327C61A99F08A03006011',
        userName: 'dou',
        contentText: '身体和灵魂总有一个在路上，享受旅行的快乐!',
        photoNum: 3,
        photoList: [
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3732087737,709517682&fm=27&gp=0.jpg'
        ],
        createTime: '3分钟前'
      },
      {
        photoId: 11,
        userImg: 'http://img4q.duitang.com/uploads/item/201505/28/20150528060223_wJxh3.jpeg',
        userName: 'qq',
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
        userImg: 'http://cdn.duitang.com/uploads/item/201507/10/20150710045602_wHEBf.jpeg',
        userName: 'wn',
        contentText: '我爱中华美食, 湘菜，川菜，粤菜...',
        photoNum: 3,
        photoList: [
          'http://e.hiphotos.baidu.com/bainuo/crop=0,0,470,285;w=470;q=80/sign=c2b1cf8c2bf5e0fefa57d34161501898/8b13632762d0f703a32155490efa513d2797c590.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795446437&di=9d011c27ff73752862123c06ab197b9f&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3b87e950352ac65c870094e3f9f2b21193138a1d.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795446435&di=46c2534a9a5a757e3a0d199e036335f2&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3Daf4d0d15d51373f0ea3f629f940f4b8b%2F6f061d950a7b020805faaa8f66d9f2d3572cc8a9.jpg'
        ],
        createTime: '5分钟前'
      },
      {
        photoId: 112,
        userImg: 'http://cdn.duitang.com/uploads/item/201507/10/20150710045602_wHEBf.jpeg',
        userName: 'wn',
        contentText: '好好学习，天天向上',
        photoNum: 1,
        photoList: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533795834282&di=f4ac49df404ff7c3ac73d10a2c20d986&imgtype=0&src=http%3A%2F%2Fpic30.photophoto.cn%2F20140312%2F0046043399344489_b.jpg'
        ],
        createTime: '5分钟前'
      }
      ],
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
  mounted () {
    var file = document.querySelector('input')
    if (getIos()) {
      file.removeAttribute('capture')
    }
    function getIos () {
      var ua = navigator.userAgent.toLowerCase()
      if (ua.match(/iPhone\sOS/i) === 'iphone os') {
        return true
      } else {
        return false
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
        debugger
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    search () {
      alert('seach')
      this.searchMode = true
    },
    back () {
      this.$router.push({path: '/happiness'})
    },
    pushPhoto () {
      this.$router.push({path: '/happiness'})
    },
    addPhoto () {
      console.log('addPhoto')
    }
  }
}
</script>

