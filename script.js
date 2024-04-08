document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
      // Here you can redirect to another page or perform any other action upon successful login
    } else {
      errorMessage.innerText = 'Invalid username or password';
    }
  });