function func() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["pno"].value;
    console.log(x);
    console.log(y);
    console.log(z);
    let text;
    if (x == "" || y == "" || z == "") {
        document.getElementById("isFormValid").classList.add("alert-danger");
        text = "Enter the form Completely";
    } else if (x.length < 3) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        text = "Enter valid Name";
    }
    else if (!isNaN(x)) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        text = "Only Character allowed";
    } else if (isNaN(z)) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        text = "Phone Number must be in digit";
    } else if (z.length < 10 || z.length > 10) {
        document.getElementById("isFormValid").classList.add("alert-danger");
        text = "Phone Number must be 10 digit";
    }
    else {
        document.getElementById("isFormValid").classList.remove("alert-danger");
        document.getElementById("isFormValid").classList.add("alert-success");
        text = "All good";
    }
    document.getElementById("isFormValid").innerHTML = text;
    return x;
}