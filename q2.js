function uppercase(str)
{
  var arr = str.split(' ');
  var arr1 = [];
    
  for(var x = 0; x < arr.length; x++){
      arr1.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return arr1.join(' ');
}
console.log(uppercase("the quick brown fox"));
alert(uppercase("the quick brown fox"));