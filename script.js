// Function to make an element draggable
function dragElement(terrariumElement) {
  // Variables to track mouse position and movement
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  // Event listener for when the user clicks on the plant
  terrariumElement.onpointerdown = pointerDrag;

  // Function triggered when the user starts dragging
  function pointerDrag(e) {
    e.preventDefault(); // Prevent default behavior
    console.log(e); // Optional: logs event for debugging
    // Store initial mouse position
    pos3 = e.clientX;
    pos4 = e.clientY;
    // When the pointer moves, call elementDrag function
    document.onpointermove = elementDrag;
    // When the pointer is released, stop the dragging
    document.onpointerup = stopElementDrag;
  }
  // Function to update the plant's position during the drag
  function elementDrag(e) {
    // Calculate the distance moved
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Update the element's position
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }
  // Function to stop dragging
  function stopElementDrag() {
    document.onpointerup = null; // Remove the event listener
    document.onpointermove = null; // Remove the move event listener
  }
}
// Apply dragElement to all plants
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));
