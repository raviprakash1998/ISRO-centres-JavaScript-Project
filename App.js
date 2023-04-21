const isroCenters = document.getElementById("isroCenters");
const searchCity = document.getElementById("city");
const searchState = document.getElementById("state");
const searchCenter = document.getElementById("name");
const searchInput = document.getElementById("search-input");

const isro_centre_api = "https://isro.vercel.app/api/centres";
var data;

// Defining async function
async function getApi(url) {
  const response = await fetch(url); // Storing response
  data = await response.json(); // Storing data in form of JSON
  displayApi(data);
}

getApi(isro_centre_api); // Calling async function

// Function to define innerHTML for HTML table
function displayApi(data) {
  let tab = `
    <tr class="dd-tr">
      <th class="dd-th" scope="col">S.No</th>
	  	<th class="dd-th" scope="col">Center Name</th>
	  	<th class="dd-th" scope="col">Place</th>
	  	<th class="dd-th" scope="col">State</th>
		</tr>`;

  // Loop to access all rows
  for (let center of data.centres) {
    tab += `
      <tr class="dd-tr row">
        <td class = "dd-td table-data">${center.id} </td>
	      <td class="dd-td table-data">${center.name} </td>
	      <td class="dd-td table-data">${center.Place}</td>
	      <td class="dd-td table-data">${center.State}</td>
      </tr>`;
  }
  // Setting innerHTML as tab variable
  isroCenters.innerHTML = tab;
}

//Function to set Flag
var flag = "name";

searchCity.addEventListener("click", () => {
  var element = searchCity;
  flag = "city";
});

searchState.addEventListener("click", () => {
  var element = searchState;
  flag = "state";
});

searchCenter.addEventListener("click", () => {
  var element = searchCenter;
  flag = "name";
});

//function for searching center by name
function searchData() {
  var val = searchInput.value;
  let tab = `
    <tr class="dd-tr row">
      <th class="dd-th col">S.No</th>
		  <th class="dd-th col">Center Name</th>
		  <th class="dd-th col">Place</th>
		  <th class="dd-th col">State</th>
		</tr>`;

  if (flag === "name") {
    searchByName(tab, val);
  } else if (flag === "city") {
    searchByCity(tab, val);
  } else if (flag === "state") {
    searchByState(tab, val);
  }
}

//Function for searching center by name
function searchByName(tab, val) {
  let i = 1;

  for (let center of data.centres) {
    if (center.name.toLowerCase().includes(val.toLowerCase())) {
      tab += `
        <tr class="dd-tr row">
			    <td class="dd-td table-data">${i++} </td>
			    <td class="dd-td table-data">${center.name} </td>
			    <td class="dd-td table-data">${center.Place}</td>
			    <td class="dd-td table-data">${center.State}</td>
			  </tr>`;
    }
  }

  if (i <= 1) {
    tab += `
      <tr scope="row">
		  	<td colspan="4" style="text-align:center;">No Record Found!!</td>
		  </tr>`;
  }
  isroCenters.innerHTML = tab;
}

//Function for searching center by state
function searchByState(tab, val) {
  let i = 1;
  for (let center of data.centres) {
    if (center.State.toLowerCase().includes(val.toLowerCase())) {
      tab += `
        <tr class="row">
		  	  <td class="table-data">${i++} </td>
		  	  <td "table-data">${center.name} </td>
		  	  <td "table-data">${center.Place}</td>
		  	  <td "table-data">${center.State}</td>
		    </tr>`;
    }
  }

  if (i <= 1) {
    tab += `
      <tr scope="row">
		  	<td colspan="4" style="text-align:center;">No Record Found!!</td>
		  </tr>`;
  }
  isroCenters.innerHTML = tab;
}

//Function for searching center by city
function searchByCity(tab, val) {
  let i = 1;

  for (let center of data.centres) {
    if (center.Place.toLowerCase().includes(val.toLowerCase())) {
      tab += `
        <tr class="row">
		    	<td class="table-data">${i++} </td>
		    	<td "table-data">${center.name} </td>
		    	<td "table-data">${center.Place}</td>
		    	<td "table-data">${center.State}</td>
		    </tr>`;
    }
  }

  if (i <= 1) {
    tab += `
      <tr scope="row">
		  	<td colspan="4" style="text-align:center;">No Record Found!!</td>
		  </tr>`;
  }
  isroCenters.innerHTML = tab;
}

