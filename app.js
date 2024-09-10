document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
  
    const checklistItems = Array.from(document.querySelectorAll('#checklist li')).map(li => li.innerText);
  
    // Create a task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('todo-card', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'relative');
  
    taskCard.innerHTML = `
      <h3 class="text-2xl font-semibold mb-2">${title}</h3>
      <p class="text-gray-700 mb-2">${description}</p>
      <p class="text-gray-500 mb-2"><strong>Due:</strong> ${dueDate}</p>
      <p class="text-${priorityColor(priority)} mb-2"><strong>Priority:</strong> ${priority}</p>
      <p class="text-gray-600 mb-4"><strong>Notes:</strong> ${notes}</p>
      <ul class="mb-4">
        <strong>Checklist:</strong>
        ${checklistItems.map(item => `<li> - ${item}</li>`).join('')}
      </ul>
      <button class="bg-red-500 text-white p-2 rounded-lg shadow-lg absolute bottom-4 right-4 remove-task">Delete</button>
    `;
  
    // Append task card to task list
    document.getElementById('taskList').appendChild(taskCard);
  
    // Clear form
    document.getElementById('todoForm').reset();
    document.getElementById('checklist').innerHTML = '';
  
    // Add delete functionality
    taskCard.querySelector('.remove-task').addEventListener('click', function() {
      taskCard.remove();
    });
  });
  
  // Helper function to get priority color
  function priorityColor(priority) {
    switch(priority) {
      case 'Low': return 'green-500';
      case 'Medium': return 'yellow-500';
      case 'High': return 'red-500';
      default: return 'gray-500';
    }
  }
  
  // Add checklist functionality
  document.getElementById('addChecklistItem').addEventListener('click', function() {
    const itemText = document.getElementById('checklistItem').value;
    if (itemText !== '') {
      const li = document.createElement('li');
      li.innerText = itemText;
      document.getElementById('checklist').appendChild(li);
      document.getElementById('checklistItem').value = ''; // Clear input
    }
  });
  