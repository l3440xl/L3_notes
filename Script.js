// Constants for password and elements
const password = '394800';
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordScreen = document.getElementById('passwordScreen');
const notesScreen = document.getElementById('notesScreen');
const notesTextArea = document.getElementById('notes');
const lockButton = document.getElementById('lockButton');

// Load saved notes from localStorage
window.onload = function() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notesTextArea.value = savedNotes;
  }
};

// Check if the entered password is correct
passwordSubmit.addEventListener('click', function() {
  if (passwordInput.value === password) {
    passwordScreen.classList.add('hidden');
    notesScreen.classList.remove('hidden');
  } else {
    alert('Incorrect password!');
  }
});

// Save notes to localStorage whenever the user types
notesTextArea.addEventListener('input', function() {
  localStorage.setItem('notes', notesTextArea.value);
});

// Lock the screen and return to the password screen
lockButton.addEventListener('click', function() {
  localStorage.removeItem('notes');  // Optional: Clear saved notes when locking
  passwordScreen.classList.remove('hidden');
  notesScreen.classList.add('hidden');
  passwordInput.value = ''; // Clear the password field
});
