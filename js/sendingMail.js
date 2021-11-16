function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mayankgupta8900@gmail.com",
        Password: "qwertymayank08",
        To: 'er.mayankgupta8900@gmail.com',
        From: "mayankgupta8900@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "yeah",
    }).then((message)=> alert("mail sent"));
}
