function sendMessageToHost(email, body, subject) {
    Email.send({
        SecureToken: "c3732315-8f93-463c-8af8-996d3c34e522",
        To: 'sds.bitmesra@gmail.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        alert(`
        Your mail has been send successfully!!
        Thanks..
      `)
      
    );
}


function sendEmail() {
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    if (name == "") {
        $("#name").css({ "border-color": "red" })
        return;
    }

    if (email == "") {
        $("#email").css({ "border-color": "red" })
        return;
    }
    if (subject == "") {
        $("#subject").css({ "border-color": "red" })
        return;
    }

    if (message == "") {
        $("#message").css({ "border-color": "red" })
        return;
    }

    let s = `
    <html>
         <h2>Enquiry to SDS, BIT Mesra</h2>
      Name of the sender: ${name} <br/>
      Email id of the sender : ${email} <br/>
      Subject : ${subject} <br/>
      Message : ${message}
    </html>
      
    `
    sendMessageToHost(email, s, subject);
    window.location.reload();
}
