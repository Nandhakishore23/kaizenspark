const scriptURL = 'https://script.google.com/macros/s/AKfycbzCDksXerSyjryMzeooIb_QAEA53rIC3m1KBceRd2WLJh_AHT4LhTf0aHw7CJGJFrec/exec'
const form = document.forms['contact-form']
  
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

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

