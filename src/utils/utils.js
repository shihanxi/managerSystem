export default {
  formateDate(time) {
    if (!time) return '';
    let date = new Date(time);   // 转换成 ： Wed Feb 27 2019 14:35:13 GMT+0800 (中国标准时间)
    return date.getFullYear() + "-" + ((date.getMonth() + 1).toString().length===1?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + '-' + (date.getDate().toString().length===1?'0'+date.getDate():date.getDate()) + '  ' + (date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes().toString().length===1?'0'+date.getMinutes():date.getMinutes()) + ':' + (date.getSeconds().toString().length===1?'0'+date.getSeconds():date.getSeconds())
  }
}