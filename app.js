// Get navigation elements
const navElements = document.querySelectorAll('.down-Nav-icon-Container');
const pages = document.querySelectorAll('.pages');
const navIcons = document.querySelectorAll('.navIcons');

// Add event listeners to navigation elements
navElements.forEach((navElement, index) => {
  navElement.addEventListener('click', () => {
    // Remove active class from all icons
    navIcons.forEach((navIcon) => {
      navIcon.classList.remove('active');
    });

    // Add active class to selected icon
    navIcons[index].classList.add('active');

    // Hide all pages
    pages.forEach((page) => {
      page.style.display = 'none';
    });

    // Show selected page
    pages[index].style.display = 'flex';

    // Reset ticket pages
    const Tixpages = document.querySelectorAll('.ticketsListDiv');
    Tixpages.forEach((Tixpage) => {
      Tixpage.style.display = 'none';
    });
    Tixpages[0].style.display = 'flex'; // Show first ticket page by default
  });
});

// Get navigation elements for tickets page
const Tixpages = document.querySelectorAll('.ticketsListDiv');
const TixpagesBTNs = document.querySelectorAll('.TicketPages');

// Add event listeners to navigation elements
TixpagesBTNs.forEach((TixpagesBTN, index) => {
  TixpagesBTN.addEventListener('click', () => {
    // Remove active class from all icons
    TixpagesBTNs.forEach((TixpagesBTN) => {
      TixpagesBTN.classList.remove('activeBlue');
    });

    // Add active class to selected icon
    TixpagesBTN.classList.add('activeBlue');

    // Hide all pages
    Tixpages.forEach((Tixpage) => {
      Tixpage.style.display = 'none';
    });

    // Show selected page
    Tixpages[index].style.display = 'flex';
  });
});

function Default() {
  // Hide all pages from default
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // Show selected page
  document.getElementById('Home').style.display = 'flex';
  navIcons[0].classList.add('active');

  // Set defaul ticket active page
  document.getElementById('UpcomingPage').style.display = 'flex';

  document.getElementById('Upcoming').classList.add('activeBlue');
}

Default();