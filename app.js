//name and type are propeteis 
// Add Event listners when DOM is ready (doesnt work in the enveriment)
document.addEventListener("DOMContentLoaded", function () {//

  // check for buttons exist
  if (document.querySelectorAll('.button') !== null) { // if btton clicked it runs the code.
    let buttons = document.querySelectorAll('.button');//
    buttons.forEach(button => button.addEventListener('click', processForm)) //event listerner listens for event then runs code
  }

  // optionally update when fields update
  // tbd
  document.getElementById('name').addEventListener('change', function (eventData) { // not working with form
    let nameOutput = document.getElementById('nameOutput');
    console.log(eventData)
    //nameOutput.innerText = formData;
  })

  // process form Data
  document.getElementById("myForm").addEventListener("submit", function (eventData) {//looks for the id (ids are unque) faster than class looks for someone to sumbit the id=form
    eventData.preventDefault(); //stops the reload of the pade after submit
    console.log(eventData.target);
    var formData = new FormData(eventData.target); //has no value for form
    formData = Object.fromEntries(formData);// this is a better version of thing under, it becomes an object 

    //update certificare informatio when form is submitted:
    let nameOutput = document.getElementById('nameOutput');
    let info = document.getElementById('info');
    nameOutput.innerText = formData.name;
    info.innerText = formData.type; //since type is the name or something



  });
  // Log readiness to console
  console.log("Ready");//
});

function processForm(form) {//

}