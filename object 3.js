var myStorage={
   "car":{
      "inside":{
         "glove box":"maps",
         "passenger seat":"crumbs"
      },
      "outside":{
         trunk:"jack"
      }
   }
};
var gloveBoxContents=myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [
   {
      type: "flowers",
      list: [
         "rose",
         "tulip",
         "dandelion"
      ]
   },
   {
      type: "trees",
      list : [
         "fir",
         "pine",
         "birch"
      ]
   }
];

var  a=myPlants[1].list[1];
console.log(a);