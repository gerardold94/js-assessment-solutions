exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    const add = (a, b) => a + b;
    return arr.reduce(add);
  },

  remove: function(arr, item) {
    return arr.filter(v => v != item)
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(v => v == item).length;
  },

  duplicates: function(arr) {
    sorted = arr.slice().sort();
    let duplicates = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (!duplicates.includes(sorted[i]) && sorted[i + 1] === sorted[i]) {
        duplicates.push(sorted[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map(v => v * v);
  },

  findAllOccurrences: function(arr, target) {
    let occurrences = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }
    return occurrences;
  }
};
