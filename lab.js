var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

		$(document).ready(function(){
		  $("#myInput").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#theFaq *").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		  });
		});

  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a tag with increased number. 
function growNumbers(){
  var array_master=[];
  const array_length = document.getElementById("numbersStats").getElementsByTagName("SPAN").length; // Discovery the array length based on the number tag's found  
  for(cnter = 0; cnter < array_length; cnter++){// Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase.
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    array_master=[]; //Reset array
    for(n_increase = 0; n_increase <= atrib_node; n_increase++){ // Fill the array
      array_master [n_increase] = n_increase;
    }
    array_master.forEach(displayValues);
    setTimeout((function displayValues (item){
      document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = item
    }),(item*1000))
  }
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a tag with increased number. Basic.
function growNumbers(){
  const array_length = document.getElementById("numbersStats").getElementsByTagName("SPAN").length; // Discovery the array length based on the number tag's found
  for(cnter = 0; cnter < array_length; cnter++){ // Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = atrib_node;
  } 
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a tag with increased number. Preparation for try a animation.
function growNumbers(){
  const array_length = document.getElementById("numbersStats").getElementsByTagName("SPAN").length; // Discovery the array length based on the number tag's found
  for(cnter = 0; cnter < array_length; cnter++){ // Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    for(n_increase = 0; n_increase <= atrib_node; n_increase++){ // Get the value
      document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = n_increase;
    }
  } 
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a tag with increased number. Preparation for try a animation (querySelectorAll)
function growNumbers(){
  var array_length = document.querySelectorAll("span[value-target]").length;// Discovery the array length based on the number tag's found
  for(cnter = 0; cnter < array_length; cnter++){ // Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    for(n_increase = 0; n_increase <= atrib_node; n_increase++){ // Get the value
      document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = n_increase;
    }
  } 
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a array with increased number and put them on a selected place. It's a first step before timeout
function growNumbers(){
  var array_master=[];
  const array_length = document.getElementById("numbersStats").getElementsByTagName("SPAN").length; // Discovery the array length based on the number tag's found  
  for(cnter = 0; cnter < array_length; cnter++){// Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase.
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    array_master=[]; //Reset array
    for(n_increase = 0; n_increase <= atrib_node; n_increase++){ // Fill the array
      array_master [n_increase] = n_increase;
    }
    array_master.forEach(displayValues);
      function displayValues (item){
        document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = item;
      }
  }
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a multi-array with increased number and put them on a selected place. It's a first step before timeout
function growNumbers(){
  var array_master=[[],[]];
  const array_length = document.getElementById("numbersStats").getElementsByTagName("SPAN").length; // Discovery the array length based on the number tag's found  
  for(cnter = 0; cnter < array_length; cnter++){// Cicle the positions of the array
    var atrib_select = document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter]; // Get the values of the atribute. The number loaded is the goal to increase.
    var atrib_node = atrib_select.getAttributeNode("value-target").value;
    array_master=[[],[]]; //Reset array
    for(n_increase = 0; n_increase <= atrib_node; n_increase++){ // Fill the array
      array_master [cnter,n_increase] = n_increase;
      console.log(array_master [cnter,n_increase]);
    }
    array_master.forEach(displayValues);
      function displayValues (item){
        document.getElementById("numbersStats").getElementsByTagName("SPAN")[cnter].innerHTML = item;
      }
  }
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Script for the progress bar with 2 div's that I have disabled to implement a solution with pure css with keyframes
var i = 0;
function barra() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        //elem.innerHTML = width + "% DIGITALIZA O TEU NEGÓCIO!";
      }
    }
  }
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*One of the frustated experience of doing setInterval by function call
function growNumbers() {
  function frame(a) {
    var atrib_node = document.getElementById("numbersStats").getElementsByTagName("SPAN")[a].getAttributeNode("value-target").value; // Get the values of the atribute. The number loaded is the goal to increase.
    var n_increase=0;  
    var count_stop = setInterval(frame, 100);
      if (n_increase >= atrib_node) {
        clearInterval(count_stop);
      } else {
        n_increase++; 
        document.getElementById("numbersStats").getElementsByTagName("SPAN")[a].innerHTML = n_increase * 1;
      }
  }
  frame(0);
};
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*One of the frustated experience of doing setInterval by function call, part II
function growNumbers() {
  var a = 0;
  var count_stop = setInterval(frame, 100,a);
  var n_increase = 0; 
  var atrib_node = document.getElementById("numbersStats").getElementsByTagName("SPAN")[a].getAttributeNode("value-target").value; // Get the values of the atribute. The number loaded is the goal to increase.
  function frame(a) {
    if (n_increase >= atrib_node) {
      clearInterval(count_stop);
    } else {
      n_increase++; 
      document.getElementById("numbersStats").getElementsByTagName("SPAN")[a].innerHTML = n_increase * 1;
    }
}
};
*/