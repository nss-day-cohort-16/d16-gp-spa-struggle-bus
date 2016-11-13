"use strict";

var CarLot = (function () {
  var inventory = [];

//the callback is the function on quiz.js
  return {
    loadInventory: function (populatepagefromquiz) {
      console.log(populatepagefromquiz);
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", 'javascripts/inventory.json');
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
       //This, in this case, is the response text of inventoryLoader. Its refering to this instance of XMLhttpRequest
      inventory = JSON.parse(this.responseText).cars;
      populatepagefromquiz(inventory);

  });
  
  

    },
    getInventory: function () {
      return inventory;
    }
  };

})(CarLot || {});
// CarLot.loadInventory();