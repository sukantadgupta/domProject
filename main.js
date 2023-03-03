
//delete
var itemList = document.getElementById('items');

itemList.addEventListener('click',removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure you want to delete')){
      var li = e.target.parentNode;
      itemList.removeChild(li);
    }

  }
}


// add new item and description

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var secItem = document.getElementById('item_desc').value;


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));


  li.appendChild(document.createTextNode(secItem));


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}


// Filter Items


function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    // console.log(item.thirdChild);
    var itemName = item.firstChild.textContent;
    var itemDesc = item.childNodes[1].textContent;

    console.log(itemDesc);
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



