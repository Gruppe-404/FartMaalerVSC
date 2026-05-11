function goToMeasurement () {
    window.location.href = "elev.html";
}


function login() {
    const email = document.querySelector('input[type="text"]').value;
    const kode = document.querySelector('input[type="password"]').value;

    if (email !== "" && kode !== "") {
        window.location.href = "overblik.html";
    } else {
        alert("Udfyld email og adgangskode");
    }
}

function goToTeacherLogin() {
    window.location.href = "teacher-login.html";
}


