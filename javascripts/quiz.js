"use strict";


function populatePage (inventory) {
	let output = document.getElementById("output"); 
	let newDiv = document.createElement("div"); 
	newDiv.classList.add("container");
	
	let newRow = document.createElement('rowDiv');
	newRow.innerHTML = `<div class="row">`
	let endRow = document.createElement('endRow'); 
	endRow.innerHTML = `</div>`
	
	for(var i = 0; i < inventory.length; i++) {
	let getInfo = inventory[i]; 
	newDiv.innerHTML += 
	`<div class="col-sm-4">
	<h3>${getInfo.make}</h3>
	 <h2>${getInfo.model}</h2>
	 <h3>${getInfo.year}</h3>
	 <h2>${getInfo.price}</h2>
	 <h3>${getInfo.description}</h3>
	 </div>`;

	  if ((i + 1) % 3 === 0) {
		newDiv.appendChild(newRow);
		}
	  if ((i + 1) % 6 === 0) {
		newDiv.appendChild(endRow);
	}

	  output.appendChild(newDiv);
	  console.log('cool');
		}
	

}
		


//   // Loop over the inventory and populate the page

//   // Now that the DOM is loaded, establish all the event listeners needed
  //CarLot.activateEvents();


// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory(populatePage);
