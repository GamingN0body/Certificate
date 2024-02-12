// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;

    });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');

    //print
    if (document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function (e) {
            window.prompt();
            console.log('invoke print');
        })
    }

    //date
    let theDate = new Date().toLocaleDateString('en-us', {
        weekday: "long",
        year: 'numeric', month: "numeric", day: 'numeric'
    })
    //formats the date
    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate

    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        let signer = document.getElementById('signer');
        let about = document.getElementById('description');
        let header = document.getElementById('header2');
        let back = document.getElementById('cert');
        let logo = document.getElementById('logo');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'A':
                back.style.backgroundImage = 'url(images/music-background.png)';
                logo.style.backgroundImage = 'url(images/record.png)';
                header.innerText = "Worst Music";
                about.innerText = "For the people that has no clue what good music sounds like.";
                signer.innerText = "Aubrey Drake Graham";
                break;
            case 'B':
                back.style.backgroundImage = 'url(images/certificate.png)';
                logo.style.backgroundImage = 'url(images/funny-award.png)';
                header.innerText = "The Punchline of Every Joke";
                about.innerText = "To the person that is always the punchline of a joke";
                signer.innerText = "James Thomas Fallon";
                break;
            case 'C':
                back.style.backgroundImage = 'url(images/certificate.png)';
                logo.style.backgroundImage = 'url(images/best-actor-award.png)';
                header.innerText = "Bear With Me";
                about.innerText = "To the person with the least interesting stories.";
                signer.innerText = "Louis Manuel McManus";
                break;
        }
    }
});


/* Additional things to be aware of */






function processForm(form) {

}