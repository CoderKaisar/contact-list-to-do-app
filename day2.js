// contact input data
const fName = document.getElementById('fullName')
const phoneNo = document.getElementById('phoneNo')
const addBtn = document.getElementById('addContact')

// contact UI items

const contactListUL = document.getElementById('contactUL')

// btn event
addBtn.addEventListener('click', () => {
    let contact = {
        fName: fName.value,
        phoneNo: phoneNo.value
    }
    let contactListItems = document.createElement('li');
    contactListItems.innerHTML = `
                    <div class="d-flex justify-content-between gap-2 border px-3 rounded-2 py-2">
                        <div class="d-flex flex-column ">
                            <h5 class="m-0">${contact.fName}</h5>
                            <p class="m-0 fs-6">${contact.phoneNo}</p>
                        </div>
                        <div class="d-flex justify-content-center align-items-center gap-3 ">
                            <button type="button" class="btn btn-warning link-underline-light text-center
                             link-opacity-0"
                             onClick={editContact(this)}
                             data-bs-toggle="modal" data-bs-target="#exampleModal"
                             >Edit</button>
                            <button type="button" class="btn btn-danger text-center"
                            onClick={deleteContact(this)}
                            >Delete</button>   
                        </div>                     
                    </div>    
    
    `
    contactListItems.classList.add = "marginBottom:10px"
    contactListUL.appendChild(contactListItems)

})

const deleteContact = (tag) => {
    tag.parentElement.parentElement.remove()
}


const editContact = tag => {
    tag.innerHTML =
        `   
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border rounded-2 p-4 d-flex flex-column gap-2">
                    <input type="text" class="form-control" placeholder="Full Name" aria-label="fullName"
                        id="fullName" aria-describedby="basic-addon1">
                        <input type="number" class="form-control" placeholder={contact.fName} aria-label="phoneNo"
                            id="phoneNo" aria-describedby="basic-addon1">
                            <button type="button" class="btn btn-primary text-center" id="addContact">Update
                                Contact</button>
                        </div>
                </div>
            </div>
    
    `
}

