function padZeros(n, width) {
  n = String(n)
  while (n.length < width) {
    n = '0' + n;
  }
  return n;
}

export function timeFilter() {
  return input => {
    const time = parseFloat(input);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const fracseconds = Math.floor((time % 1) * 100);

    if (minutes > 0) {
      return '' + String(minutes) + ':' + padZeros(seconds, 2) + '.' + padZeros(fracseconds, 2);
    }
    else {
      return '' + String(seconds) + '.' + padZeros(fracseconds, 2);
    }
  }
}
