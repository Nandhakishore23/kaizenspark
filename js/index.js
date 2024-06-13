const scriptURL = 'https://script.google.com/macros/s/AKfycbygL3hvZk5UGYFYjesgndaEaM-E0i7ExjKCEDJlhlkVG93YA3T7nn9bmKHsFeOVv6vo/exec'
const form = document.forms['contact-form']

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name');
  var number = document.getElementById('number');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  
  var fields = [name, number, email, message];
  var errorMessages = ['nameError', 'numberError', 'emailError', 'messageError'];
  fields.forEach(function(field) {
      field.classList.remove('error');
  });
  errorMessages.forEach(function(id) {
      document.getElementById(id).textContent = '';
  });

  var valid = true;
  var errorMessage = '';

  if (name.value.trim() === '') {
      valid = false;
      name.classList.add('error');
      document.getElementById('nameError').textContent = 'Name is required.';
      errorMessage += 'Name is required.<br>';
  }
  
  if (number.value.trim() === '') {
      valid = false;
      number.classList.add('error');
      document.getElementById('numberError').textContent = 'Phone number is required.';
      errorMessage += 'Phone number is required.<br>';
  }
  
  if (email.value.trim() === '') {
      valid = false;
      email.classList.add('error');
      document.getElementById('emailError').textContent = 'Email is required.';
      errorMessage += 'Email is required.<br>';
  }
  
  if (message.value.trim() === '') {
      valid = false;
      message.classList.add('error');
      document.getElementById('messageError').textContent = 'Message is required.';
      errorMessage += 'Message is required.<br>';
  }
  if (valid) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    Swal.fire({
      icon: 'success',
      title: 'Form Submitted Successfully!',
      text: 'Thank you for getting in touch with us.',
  }).then((result) => {
      if (result.isConfirmed) {
          document.getElementById('contactForm').reset();
          if (window.history && window.history.pushState) {
              window.history.pushState(null, null, window.location.href);
          }
      }
  });
      
  } else {
      Swal.fire({
          icon: 'error',
          title: 'Form Validation Failed',
          html: errorMessage,
      });
  }
});

function myFunction1() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "This is the start of the project, and the goal of this phase is to define the project at a broad level. This phase usually begins with a business case. This is when you will research whether the project is feasible and if it should be undertaken. If feasibility testing needs to be done, this is the stage of the project in which that will be completed.") {
      x.innerHTML = "This is the start of the project, and the goal of this phase is to define the project at a broad level. This phase usually begins with a business case. This is when you will research whether the project is feasible and if it should be undertaken. If feasibility testing needs to be done, this is the stage of the project in which that will be completed.";
    }
    if (y.innerHTML !== "Ideation") {
        y.innerHTML = "Ideation";
      }
  }

  function myFunction2() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "This phase is key to successful project and focuses on developing a roadmap that everyone will follow. This phase typically begins with setting goals.") {
      x.innerHTML = "This phase is key to successful project and focuses on developing a roadmap that everyone will follow. This phase typically begins with setting goals.";
    }
    if (y.innerHTML !== "Plan") {
        y.innerHTML = "Plan";
      }
  }

  function myFunction3() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "During the design phase, your project takes shape. All the visual content, such as images, photos, and videos is created at this step. Once again, all the info that was gathered through the first phase is crucial. The customer and target audience must be kept in mind while you work on a design.") {
      x.innerHTML = "During the design phase, your project takes shape. All the visual content, such as images, photos, and videos is created at this step. Once again, all the info that was gathered through the first phase is crucial. The customer and target audience must be kept in mind while you work on a design.";
    }
    if (y.innerHTML !== "Design") {
        y.innerHTML = "Design";
      }
  }

  function myFunction4() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "At this step, you can finally start creating the project (web &amp; mobile) itself. Graphic elements that have been designed during the previous stages should be used to create an actual project. In nthis phase we develop the functional website or app. Which is ready for next phase.") {
      x.innerHTML = "At this step, you can finally start creating the project (web &amp; mobile) itself. Graphic elements that have been designed during the previous stages should be used to create an actual project. In nthis phase we develop the functional website or app. Which is ready for next phase.";
    }
    if (y.innerHTML !== "Develop") {
        y.innerHTML = "Develop";
      }
  }

  function myFunction5() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "Testing is probably the most routine part of a process. Every single UI should be tested to make sure that there are no broken ones among them. We check every form, every script, run a spell-checking software to find possible typos. Use code validators to check if your code follows the current standards. Valid code is necessary.") {
      x.innerHTML = "Testing is probably the most routine part of a process. Every single UI should be tested to make sure that there are no broken ones among them. We check every form, every script, run a spell-checking software to find possible typos. Use code validators to check if your code follows the current standards. Valid code is necessary.";
    }
    if (y.innerHTML !== "Test") {
        y.innerHTML = "Test";
      }
  }

  function myFunction6() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "Once testing is done we seek feedback from client, and implement their suggestions and recommendation.") {
      x.innerHTML = "Once testing is done we seek feedback from client, and implement their suggestions and recommendation.";
    }
    if (y.innerHTML !== "Feedback") {
        y.innerHTML = "Feedback";
      }
  }

  function myFunction7() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "Once clients feedback is implemeted we launch the application in server and app stores.") {
      x.innerHTML = "Once clients feedback is implemeted we launch the application in server and app stores.";
    }
    if (y.innerHTML !== "Launch") {
        y.innerHTML = "Launch";
      }
  }

  function myFunction8() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("old1");
    if (x.innerHTML !== "What’s important to remember is that a developed application is more of a service than a product. It’s not enough to “deliver” a website/app to a user. We also make sure that everything works fine, and everybody is satisfied and always be prepared to make changes in another case.") {
      x.innerHTML = "What’s important to remember is that a developed application is more of a service than a product. It’s not enough to “deliver” a website/app to a user. We also make sure that everything works fine, and everybody is satisfied and always be prepared to make changes in another case.";
    }
    if (y.innerHTML !== "Support") {
        y.innerHTML = "Support";
      }
  }

