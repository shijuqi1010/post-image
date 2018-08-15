<template>
  <div class="edit-body">
    <div class="edit-header">
      <img class="back-btn" @click="back" src="../assets/demoIcon/arrow.png" alt="">
      <span class="push-btn" @click="pushPhoto">发表</span>
    </div>

    <x-textarea class="text-area" placeholder="这一刻的想法...(100字以内,选填)" :max="100" :show-counter="true" :rows="5">
    </x-textarea>
    <!-- <div class="text-area">
      <textarea placeholder="这一刻的想法...(100字以内,选填)" maxlength="100" :rows="5">
      </textarea>
    </div> -->

    <div class="add-photo" v-if="showAddBtn">
      <img class="add-btn" @click="addPhoto" src="../assets/demoIcon/add-photo.png" alt="">
      <!-- <label>照相机</label>
      <input type="file" id='image' accept="image/*" capture='camera'> -->
    </div>
    <div v-else>
      qq
    </div>

    <div class="upload-box" v-if="showUpload">
      <vue-core-image-upload
        :class="['btn', 'upload-box-item']"
        :crop="false"
        @imageuploaded="imageuploaded"
        @imageuploading="imageuploading"
        @errorhandle="errorhandle"
        :max-file-size="10485760"
        inputOfFile="img"
        :text="uploadText"
        :url="uploadUrl">
      </vue-core-image-upload>
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
  bottom: 0;
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
      height: 90px;
      top: 50%;
      transform: translateY(-50%);
      // border: 1px solid black;
    }

  }
}
</style>

<script>
import { XCircle, XButton, XTextarea } from 'vux'
import VueCoreImageUpload from 'vue-core-image-upload'
// import putFileToServer from '../utils/updateServerFile'
// import Util from '../utils/utils'
export default {
  components: {
    XCircle,
    XButton,
    XTextarea,
    VueCoreImageUpload
  },
  data () {
    return {
      showAddBtn: true
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
      if (this.showAddBtn) {
        this.showAddBtn = false
      }

      // let token = Util.getCookie('token')
      // putFileToServer(key, data, token).then( res => {
      //   if(res.err === 0) {
      //     let aliImg = new Image()
      //     aliImg.src = Config.Oss.cropcdn + key
      //     aliImg.onload = () => {
      //       let thumb = Config.Oss.cropcdn + key + this.getCropArea(selectCrop, aliImg, img)
      //       this.$emit('success', thumb)
      //       this.close()
      //     }
      //   }
      // })
    }
  }
}
</script>

