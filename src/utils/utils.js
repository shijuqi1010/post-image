class Utils {
  setCookie (name, value, expires) {
    let Days = 10
    let exp = new Date()
    if (expires) {
      exp.setTime(exp.getTime() + parseInt(expires))
    } else {
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    }
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
  }
  getCookie (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  }
}

export default new Utils()