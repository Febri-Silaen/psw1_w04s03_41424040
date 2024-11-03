function showAlert(serviceName) {
    alert("Anda telah memilih " + serviceName);
}

function submitForm() {
    alert("Pesan Anda telah dikirim!");
    document.getElementById("contact-form").reset();
    return false; 
}