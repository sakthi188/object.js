function phoneticLook(val)
{
   var result= "";

   var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie":"chicago",
    "delta":"denver",
    "echo":"easy"
  };
  result=lookup[val];
  return result;
}
console.log(phoneticLook("charlie"));

// ownProperty

var myobj={
   gift:"pony",
   pet:"kitten",
   bed:"sleigh"
};

function checkBox(CheckProp){
   if(myobj.hasOwnProperty(CheckProp)){
    return myobj[CheckProp];
   }else{
    return "not found";
   }
}
console.log(checkBox("gift"));
console.log(checkBox("hai"));
