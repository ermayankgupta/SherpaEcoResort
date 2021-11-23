function sendEmail() {
  Email.send({
    SecureToken: "56a342ee-0911-4433-8317-b9949a2a4a76",
    To: 'er.mayankgupta8900@gmail.com',
    From: "mayankgupta8900@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "yeah its working (it's on testing phase)",
  }).then(function message() {
    alert("mail sent");
  });
}