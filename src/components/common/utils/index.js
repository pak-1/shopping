export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    date = new Date(date * 1000);
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
    var o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
    };
    for (var k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        var str = o[k] + "";
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        );
      }
    }
    return fmt;
  }
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
