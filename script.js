let newForm = document.getElementById("form") //getting form

newForm.addEventListener("submit", addItem)

function addItem(e){
    e.preventDefault()

    let newName = document.getElementById("name").value //fetching value of name 
    // console.log(newName)

    let newEmail = document.getElementById("email").value //fetching value of email
    // console.log(newEmail)

    let newNumber = document.getElementById("number").value//fetching value of number 

  


    // local storage
    let obj = {
        newName,
        newEmail,
        newNumber
    }


    axios.post("https://crudcrud.com/api/0377baf2b01b4458a2fd6b70bd4125b3/appointmentData", obj)
    .then((response)=>{
        console.log(response)
    })
    .then((err)=>{
        console.log(err)
    })

    localStorage.setItem(obj.newEmail,JSON.stringify(obj))
   



    let li = document.createElement("li")

    document.body.appendChild(li)



    li.appendChild(document.createTextNode(obj.newName +" - "+ obj.newEmail + " - " + obj.newNumber))
   
  

    let deleteButton = document.createElement('input')
    li.appendChild(deleteButton)
    deleteButton.type = "button"
    deleteButton.value = "delete"

    deleteButton.onclick =()=>{
        localStorage.removeItem(obj.newEmail)
        document.body.removeChild(li)
    }


    let editButton = document.createElement("input")
    li.appendChild(editButton)
    editButton.type="button"
    editButton.value="Edit"

    editButton.onclick = ()=>{
        localStorage.removeItem(obj.newEmail)
        document.body.removeChild(li)
        document.getElementById("name").value = obj.newName
        document.getElementById("email").value = obj.newEmail
        document.getElementById("number").value = obj.newNumber
    }
    




   
}
