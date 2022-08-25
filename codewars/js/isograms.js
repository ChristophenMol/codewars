
  function isIsogram(str) {
    //if empty return true.
    if (str.isEmpty) {
      return true;
    } else {
      // All lower case.
      str = str.toLowerCase();
    }
    //split string into individual characters. 
    var array = str.split('');
    var sortedArr = array.slice().sort();
  
    for (var i = 0; i < array.length; i++) {
      //if duplicate is found return false.
      if (sortedArr[i + 1] == sortedArr[i]) {
        return false;
      }
    }
    //else return true
    return true;
  }
//------------------------------------------

function isIsogram(str) {
    const arr = str.toLowerCase().split('').sort();
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        return false;
      }
    }
    
    return true;
  }
  //-------------------------------------------

  function isIsogram(str) {
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) !== -1) {
        return false;
      }
    }
    
    return true;
  }
//-----------------------------------------------

//using regex

function isIsogram(str) {
    return !str.match(/([a-z]).*\1/i);
  }

  //---------------------------------------------

  function isIsogram(str) {
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    
    return true;
  }
