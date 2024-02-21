function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const xrplAddress = document.getElementById('xrplAddress').value;

    // validation
    if (!username || !email || !xrplAddress) {
        document.getElementById('registrationStatus').innerText = 'Please fill in all fields.';
        return;
    }

    // XRPL address validation
    if (!isValidXRPLAddress(xrplAddress)) {
        document.getElementById('registrationStatus').innerText = 'Invalid XRPL Wallet Address.';
        return;
    }

    // registration success if a valid XRPL address is entered
    document.getElementById('registrationStatus').innerText = 'Registration Successful!';
}

function isValidXRPLAddress(address) {
    // method to check if XRPL address is valid
    return /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(address);
}