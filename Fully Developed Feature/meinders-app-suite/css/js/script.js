// Example of simple form validation
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});