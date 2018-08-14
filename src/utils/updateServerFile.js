// 直推oss失败后转存服务端

const API_SERVER_PUT_OSS = 'http://upload/upload'

function putFileToServer(fileName, blob, token) {

  let fromData = new FormData()

  fromData.append('token', token)
  fromData.append('object', fileName)
  fromData.append('upload_file', blob)

  return new Promise((resolve,reject) => {
    $.ajax({
      url: API_SERVER_PUT_OSS,
      type: 'POST',
      dataType: "json",
      processData: false,
      contentType: false,
      data: fromData,
      success: (res) => {
        resolve(res)
      },
      error: (error) => {
        reject(error)
      }
    })
  })

}

export default putFileToServer