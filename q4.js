function substrings(str)
{
var arr = [];
  for (var x = 0, y=1; x < str.length; x++,y++) 
  {
   arr[x]=str.substring(x, y);
    }
var a = [];
var temp= "";
var len = Math.pow(2, arr.length);

for (var i = 0; i < len ; i++)
{
    temp= "";
    for (var j=0;j<arr.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += arr[j];
        }
    }
    if (temp !== "")
    {
        a.push(temp);
    }
}
  console.log(a.join("\n"));
}

substrings("dog");
