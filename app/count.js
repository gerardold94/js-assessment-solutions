exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeUp;
    doIt = () => {
      console.log(start++);
      if(start <= end) {
        timeUp = setTimeout(doIt, 100);
      }
    }
    doIt();
    return {
      cancel: () => {
        timeUp && clearTimeout(timeUp);
      }
    }
  }
};
