const public_key = "4cazDhwY265_oquQH"
const service_id = "service_n620pc8"
const template_id = "template_eq8cux4"

emailjs.init(public_key); // Your EmailJS Public Key

function sendTestEmail() {
    var params = {
        name: document.getElementById("name").value, // User's Name
        email: document.getElementById("email").value, // User's Email
        message: document.getElementById("message").value // User's Message
    };

    // Check if fields are empty
    if (!params.name || !params.email || !params.message) {
        alert("Please fill out all fields.");
        return;
    }

    emailjs.send(service_id, template_id, params)
        .then(response => {
            console.log("✅ Email sent successfully!", response);
            alert("Message sent successfully!");

            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            console.error("❌ Error sending email:", error);
            alert("Failed to send message.");
        });
}

// ---------------------------------------------------------------------------------------

// emailjs.init(public_key); // Initialize EmailJS

// function sendTestEmail() {
//     var params = {
//         name: document.getElementById("name")?.value.trim(), // User's Name
//         email: document.getElementById("email")?.value.trim(), // User's Email
//         message: document.getElementById("message")?.value.trim() // User's Message
//     };

//     // Validate fields
//     if (!params.name || !params.email || !params.message) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     emailjs.send(service_id, template_id, params)
//         .then(response => {
//             console.log("✅ Email sent successfully!", response);
//             alert("Message sent successfully!");

//             // Clear input fields
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//         })
//         .catch(error => {
//             console.error("❌ Error sending email:", error);
//             alert("Failed to send message. Please try again later.");
//         });
// }

// // Attach event listener dynamically for the send button
// document.addEventListener("DOMContentLoaded", function () {
//     document.body.addEventListener("click", function (event) {
//         if (event.target.classList.contains("contactBtn")) {
//             sendTestEmail();
//         }
//     });
// });


