

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