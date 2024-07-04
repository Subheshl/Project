document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      contact: document.getElementById('contact').value,
      dob: document.getElementById('dob').value,
      email: document.getElementById('email').value,
      gender: document.getElementById('gender').value,
      address1: document.getElementById('address1').value,
      address2: document.getElementById('address2').value,
      country: document.getElementById('country').value,
      state: document.getElementById('state').value,
      city: document.getElementById('city').value,
      pincode: document.getElementById('pincode').value
    };
    gigya.cdp.init({
      apiDomain: 'EU5',
      bUnitId: '4_2arKfv5bsPsK9ODVBhCJeA',
      appId: 'HLnxME1S3b0RyHdQkB8FJA'
  })
  .then(function(sdk) { window.CDP = sdk;
      CDP.report('Registration form',
          {
              "Mail_id": email,
    "Firstname": firstName,
    "Lastname": lastName,
    "Address": {
        "AddressLine1": address1,
        "AddressLine2": address2,
        "Country": country,
        "State": state,
        "City": city,
        "Pincode": pincode
    }
          }
          );
          alert('Form submitted successfully!');
   }).catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
  });
    
    
    this.reset();
  });
});
