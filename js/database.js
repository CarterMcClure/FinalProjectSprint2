document.getElementById('form').addEventListener('submit', function(event) {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
document.cookie = `username=${username}; password=${password}`;             //creates cookie
message.textContent = "Account Created!";
event.preventDefault();
})
