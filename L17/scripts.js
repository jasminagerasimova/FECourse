var edit = document.querySelector('.EditPageButton'),
    editPeopleWrapper = document.querySelector('.EditPeopleWrapper');

edit.addEventListener('click', onEdit);

function onEdit(){
    if (edit.innerText==='Edit') {
        edit.innerText='Stop Editing';
    } else {
        edit.innerText='Edit';
    }
 
    edit.classList.toggle('EditPageButton--active');
    editPeopleWrapper.classList.toggle('EditPeopleWrapper--expanded');
}