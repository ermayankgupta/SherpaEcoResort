function func() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["pno"].value;
    let a = document.forms["form"]["query"].value;
    let text;
    if (x == "" || x.length < 3 || !isNaN(x)) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        document.getElementById("name").classList.add("is-invalid");
        text = "Enter the valid name";
    } else if (y == "") {
        document.getElementById("isFormValid").classList.add("alert-danger");
        document.getElementById("email").classList.add("is-invalid");
        text = "Enter the form Completely";
    } else if (z == "" || isNaN(z) || z[0] < 6 || z.length < 10 || z.length > 10) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        document.getElementById("phone").classList.add("is-invalid");
        text = "Enter the valid number";
    } else if (a == "") {
        document.getElementById("isFormValid").classList.add("alert-warning");
        text = "Please Type Your Query!!";
    } else {
        document.getElementById("isFormValid").classList.remove("alert-danger");
        document.getElementById("name").classList.remove("is-invalid");
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("phone").classList.remove("is-invalid");
        document.getElementById("name").classList.add("is-valid");
        document.getElementById("email").classList.add("is-valid");
        document.getElementById("phone").classList.add("is-valid");
        document.getElementById("isFormValid").classList.add("alert-success");
        text = "All good";
    }
    document.getElementById("isFormValid").innerHTML = text;
    return x;
}
