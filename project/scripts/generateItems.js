// Function to generate the list of items
function generateItems(data) {
    const itemContainer = document.getElementById('item-container');
  
    // Use an array method to generate the items
    data.forEach((item) => {
      const itemHTML = `
        <div class="item">
          <h2>${item.title}</h2>
          <p>${item.body}</p>
          <button class="show-modal" data-id="${item.id}">Show Modal</button>
        </div>
      `;
  
      // Use template literals to build the item HTML
      const itemElement = document.createElement('div');
      itemElement.innerHTML = itemHTML;
      itemContainer.appendChild(itemElement);
    });
  
    // Add event listeners to the modal buttons
    const modalButtons = document.querySelectorAll('.show-modal');
    modalButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.dataset.id;
        showModal(itemId);
      });
    });
  }
  
  export { generateItems };