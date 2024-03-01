const users = {};
let currentUser = null;

function registerUser() {
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (users[username]) {
        alert('Username already exists. Please choose another.');
        return;
    }

    const hashedPassword = hashPassword(password);
    users[username] = { username, email, password: hashedPassword };

    alert('Registration successful. You can now log in.');
    showLogin();
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!users[username]) {
        alert('User not found. Please register.');
        return;
    }

    if (verifyPassword(password, users[username].password)) {
        currentUser = username;
        document.getElementById('loggedInUsername').textContent = username;
        showSecuredPage();
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function logout() {
    currentUser = null;
    showLogin();
}

function showRegistrationForm() {
    document.getElementById('registrationPage').style.display = 'block';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('ContentPage').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('registrationPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('ContentPage').style.display = 'none';
}

function showSecuredPage() {
    document.getElementById('registrationPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('ContentPage').style.display = 'block';
}

function verifyPassword(enteredPassword, storedPassword) {
    return enteredPassword === storedPassword;
}

function hashPassword(password) {
    
    return password; 
}
