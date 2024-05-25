window.addEventListener("load",function(event) {
  document.getElementById('contact-us--form').addEventListener('submit', function (e) {
    e.preventDefault()

    if (!e.target.checkValidity()) {
      e.stopPropagation()

      e.target.classList.add('was-validated');

      return;
    }

    ADDdata()
  });

  const backButtons = document.getElementsByClassName('contact-us--form--success--back');
  Array.from(backButtons).forEach(function (el) {
    el.addEventListener('click', handleFormBackButton)
  });
}, false);


function   ADDdata()
{
  var Firstname =document.getElementById("FirstName").value
  var LastName =document.getElementById("LastName").value
  var Email =document.getElementById("Email").value
 var PhoneNumber =document.getElementById("PhoneNumber").value
  var CompanyWebsite =document.getElementById("CompanyWebsite").value
  var MonthlyAdvertising =document.getElementById("MonthlyAdvertising").value
  var Message =document.getElementById("Message").value

 var user = {
    firstName: Firstname,
    lastName: LastName,
    email: Email,
    phoneNumber:PhoneNumber,
    monthlySpend: MonthlyAdvertising,
    description: Message,
    companyWebsite: CompanyWebsite
  }



  fetch("http://e-orbit.somee.com/api/users", {
  method: 'POST',
  headers: {'Content-Type':'application/json',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
  body: JSON.stringify(user)

})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
  handleFormBackButton();

  submitSuccess.style.display = 'block';
  submitError.style.display = null;

})


                                                                                                          
}



const submitSuccess = document.querySelector('.submit-success')
const submitError = document.querySelector('.submit-error')

const handleSubmit = () => {
  let myForm = document.getElementById('contact-us--form');
  let formData = new FormData(myForm);
  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })

    .then(() => {
      // Show sucess block
      handleFormBackButton();

      submitSuccess.style.display = 'block';
      submitError.style.display = null;
    })
    .catch((error) => { submitError.style.display = 'block'; submitSuccess.style.display = null; });
};

const handleFormBackButton = () => {
  const formSuccessEl = document.getElementById('contact-us--form--success');
  formSuccessEl.classList.toggle('d-none');

  const formEl = document.getElementById('contact-us--form');
  formEl.classList.toggle('d-none');

  formEl.reset();
}