function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vowcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vowcount += 1;
    }
  
  }
  return vowcount;
}
console.log(vowel_count("The quick brown fox"));
alert(vowel_count("The quick brown fox"));