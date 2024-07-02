var typed = new Typed(".text", {
    strings:["Fresher", "Web Developer"],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.getElementById("moreLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    var hiddenText = document.getElementById("hiddenText");
  
    // Toggle visibility of hidden text
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block";
      this.textContent = "Less"; // Change anchor text to "Less"
    } else {
      hiddenText.style.display = "none";
      this.textContent = "More"; // Change anchor text back to "More"
    }
  });

  // document.getElementById('myForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent form submission
  
  //   // Collect form data
  //   const formData = {
  //     from_name: document.getElementById('name').value,
  //     subject: document.getElementById('subject').value,
  //     email_id: document.getElementById('email').value,
  //     message: document.getElementById('message').value,
  //   };
  
  //   // Send email using EmailJS
  //   emailjs.send('service_ros7acy', 'template_oua9n0p', formData)
  //     .then(function(res) {
  //       console.log('Email sent successfully:', res.status);
  //       document.getElementById("success-message").style.display = "block";
  //       alert('Email sent successfully!');
  //     }, function(error) {
  //       console.error('There was an error sending the email:', error);
  //       alert('Oops! Something went wrong.');
  //     });
  // });

  const btn = document.getElementById('button');

  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Sending...';
  
     const serviceID = 'service_ros7acy';
     const templateID = 'template_oua9n0p';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Email Sent Successfully!",
          icon: "success"
        });
        document.getElementById('form').reset();
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });