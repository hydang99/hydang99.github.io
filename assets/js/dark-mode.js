// Dark Mode Toggle Functionality
(function() {
  'use strict';

  console.log('Dark mode script loaded');

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  console.log('Current theme:', currentTheme);
  
  // Apply the theme on page load
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Function to toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save preference
    localStorage.setItem('theme', newTheme);
    
    // Update toggle button icon
    updateToggleIcon(newTheme);
  }
  
  // Function to update toggle button icon
  function updateToggleIcon(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach(function(toggleBtn) {
      if (toggleBtn) {
        if (theme === 'dark') {
          toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
          toggleBtn.setAttribute('title', 'Switch to light mode');
        } else {
          toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
          toggleBtn.setAttribute('title', 'Switch to dark mode');
        }
      }
    });
  }
  
  // Function to add event listeners to toggle buttons
  function addToggleListeners() {
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    console.log('Found', toggleBtns.length, 'toggle buttons');
    
    toggleBtns.forEach(function(toggleBtn) {
      if (toggleBtn && !toggleBtn.hasAttribute('data-listener-added')) {
        toggleBtn.addEventListener('click', toggleTheme);
        toggleBtn.setAttribute('data-listener-added', 'true');
        console.log('Event listener added to toggle button');
      }
    });
  }
  
  // Initialize toggle button icon
  updateToggleIcon(currentTheme);
  
  // Add event listeners when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM loaded, adding toggle listeners');
      addToggleListeners();
    });
  } else {
    console.log('DOM already loaded, adding toggle listeners immediately');
    addToggleListeners();
  }

  // Also try to find the button after delays in case it's added dynamically
  setTimeout(function() {
    console.log('Checking for toggle buttons after 500ms delay');
    addToggleListeners();
  }, 500);

  setTimeout(function() {
    console.log('Checking for toggle buttons after 1s delay');
    addToggleListeners();
  }, 1000);

  setTimeout(function() {
    console.log('Checking for toggle buttons after 2s delay');
    addToggleListeners();
  }, 2000);
  
  // Expose toggle function globally (optional)
  window.toggleTheme = toggleTheme;
})();