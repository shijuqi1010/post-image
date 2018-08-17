<template>
  <div class="edit-body">
    <div class="edit-header">
      <img class="back-btn" @click="back" src="../assets/demoIcon/arrow.png" alt="">
      <span class="push-btn" @click="pushPhoto">发表</span>
    </div>

    <x-textarea class="text-area" placeholder="这一刻的想法...(100字以内,选填)" :max="100" :show-counter="true" :rows="5">
    </x-textarea>
    <!-- <div upload-box-item>
      <img class="add-btn" @click="addPhoto" src="../assets/demoIcon/add-photo.png" alt="">
    </div> -->
   
    <div class="upload-box" v-if="showUpload">
      <vue-core-image-upload
        :class="['btn', 'upload-box-item']"
        :crop="true"
        @imageuploaded="imageuploaded"
        @imageuploading="imageuploading"
        @errorhandle="errorhandle"
        :max-file-size="10485760"
        inputOfFile="img"
        :text="uploadText"
        :url="uploadUrl">
        <img class="add-btn" @click="addPhoto" src="../assets/demoIcon/add-photo.png" alt="">
      </vue-core-image-upload>
    </div>
    <div v-if="form.uploadPics.length > 0" class="imgs">
      <div class="img-box" v-for="(item, index) in form.uploadPics">
        <img :src="item"/>
        <div @click="delImage(index)" class="close vux-close"></div>
      </div>
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
    .upload{
      width: 100%;
      border-top: 1px solid #e1e1e1;
      padding: 0.3rem 0;
      span{
        width: 3rem;
        line-height: 0.8rem;
        font-size: 0.42rem;
        float: left;
        padding-left: 0.3rem;
        box-sizing: border-box;
      }
      .btn-primary{
        background-color: #16c2c2;
        color: #fff;
        padding: 0.3rem;
        height: 4rem;
        width: 5rem;
        float: left;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .upload-box {
    padding: 15px;
    display: flex;
    justify-content: center;
    .upload-box-item {
      width: 100%;
      // height: 3em;
      // background: url("../assets/demoIcon/add-photo.png") center center no-repeat;
      // background-size: 2em;
      height: 90px;
    }
    .add-btn{
      position: relative;
      height: 90px;
      top: 50%;
      transform: translateY(-50%);
      // border: 1px solid black;
    }
  }
  .imgs {
    padding: 10px 15px;
    .img-box {
      position: relative;
      img {
        padding: 5px 0;
        width: 100%;
      }
      .close {
        position: absolute;
        top: 15px;
        right: 10px;
        color: #fff;
        height: 22px;
        width: 22px;
        background: #666;
      }
    }
  }
}
</style>

<script>
import { XCircle, XButton, XTextarea } from 'vux'
import VueCoreImageUpload from 'vue-core-image-upload'
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
      showUpload: true,
      uploadText: '',
      uploadUrl: '',
      form: {
        openId: '',
        uploadPics: []
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
  methods: {
    back () {
      this.$router.push({path: '/happiness'})
    },
    // pushPhoto () {
    //   this.$router.push({path: '/happiness'})
    // },
    pushPhoto () {
      if (this.form.agencyId === '') {
        this.$vux.toast.show({
          text: '请选择小区',
          type: 'warn'
        })
      } else if (this.form.name === '' || !this.$refs.name.valid) {
        this.$vux.toast.show({
          text: '姓名不合法',
          type: 'warn'
        })
      } else if (this.form.phone === '' || !this.$refs.phone.valid) {
        this.$vux.toast.show({
          text: '手机号不合法',
          type: 'warn'
        })
      } else if (this.form.code === '') {
        this.$vux.toast.show({
          text: '验证码不合法',
          type: 'warn'
        })
      } else {
        this.$api.signup(this.form).then(res => {
          if (res.data.code === 200) {
            this.$vux.toast.show({
              text: '报名成功',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({path: '/happiness'})
            }, 1200)
          } else if (res.data.code === 1001) {
            this.$vux.toast.show({
              text: '验证码错误',
              type: 'warn'
            })
          } else {
            this.$vux.toast.show({
              text: res.data.msg,
              type: 'warn'
            })
          }
        })
      }
    },
    imageuploaded (res) {
      if (this.form.uploadPics.length === 2) {
        this.$vux.toast.show({
          text: '最多可上传三张图片',
          type: 'warn'
        })
      }
      this.$vux.loading.hide()
      if (res.code === 2002) {
        this.$vux.toast.show({
          text: '图片不可以超过5MB',
          type: 'warn'
        })
      } else if (res.code === 200) {
        this.form.uploadPics.push(res.data.imgUrl)
        if (this.form.uploadPics.length === 2) {
          this.showUpload = false
        }
      } else {
        this.$vux.toast.show({
          text: '上传失败,请稍后再试',
          type: 'warn'
        })
      }
    },
    delImage (index) {
      this.form.uploadPics.splice(index, 1)
      if (this.form.uploadPics.length < 2) {
        this.showUpload = true
      }
    },
    imageuploading () {
      // 显示
      this.$vux.loading.show({
        text: 'Loading'
      })
    },
    errorhandle (err) {
      // if (err === "FILE IS TOO LARGER") {
      if (err) {
        this.$vux.toast.show({
          text: '图片不可以超过10MB',
          type: 'warn'
        })
      }
    },
    addPhoto () {
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

