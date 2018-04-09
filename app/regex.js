exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z])\1{1,}/.test(str);
  },

  endsWithVowel: function(str) {
    return /[a|e|i|o|u]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    number = /(\d{3})/.exec(str) || false;
    if (number) return number[0];
    return number;
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{2})?|(?:,[0-9]{3})*(?:\.[0-9]{2})?|(?:\.[0-9]{3})*(?:,[0-9]{2})?)$/.test(str);
  }
};
