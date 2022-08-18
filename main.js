var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

//  Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemlist.addEventListener('click', removeItem);

// Add item 
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item');

    // Create new li elements
    var li = document.getElementById('li');
    
    // Add class
    li.className = 'list-group-item';
    //Add textNode with input values
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');

    // Addclasses to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemlist.appendChild(li);

}

// Remove item 
function removeItem(e) {
    if(confirm("Are You sure")){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}