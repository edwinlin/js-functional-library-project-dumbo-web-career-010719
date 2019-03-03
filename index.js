fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        // debugger
        for(let i = 0; i < newCollection.length; i++){
          callback(newCollection[i])
        }
      return collection

    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      const newArray = [];
      for(let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc=0) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc;
    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
