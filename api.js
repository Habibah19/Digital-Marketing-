

var Dash_Body = document.getElementById("Dash_Body")


fetch("http://e-orbit.somee.com/api/users", {
    method: 'GET',
    headers: {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},

  
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
    
    var Cartona="";

    for (let index = 0; index < result.length; index++) {


        Cartona += `                                        <tr>
        <th>${result[index].firstName}</th>
        <th>${result[index].lastName}</th>
        <th>${result[index].email}</th>
        <th>${result[index].phoneNumber}</th>
        <th>${result[index].companyWebsite}</th>
        <th>${result[index].monthlySpend}</th>
        <th>${result[index].description}</th>
        <th><Button class="btn btn-danger" onclick="Delete(${result[index].id})">Delete</Button></th>

        </tr>`

        
    }

    Dash_Body.innerHTML = Cartona;
  
  })
  
  function Delete(id)
  {
    fetch(`http://e-orbit.somee.com/api/users/${id}`, {
      method: 'Delete',
      headers: {'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
  
    
    })
    .then(response => response)
    .then(result => {
      location.reload();
    })
  }                                                                            

  