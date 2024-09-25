// Set the current year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date dynamically in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch members from the JSON file
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

// Display the members on the page
function displayMembers(members) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = ''; // Clear the list

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member-card');

        memberDiv.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        memberList.appendChild(memberDiv);
    });
}

// Toggle between grid view and list view
document.getElementById('toggleView').addEventListener('click', () => {
    const memberList = document.getElementById('member-list');
    memberList.classList.toggle('grid-view');
    memberList.classList.toggle('list-view');
});

// Fetch the members when the page loads
fetchMembers();
