// Banner Design with  Modal with custom alert

const apply = document.getElementById('apply');
const mostofaModal = document.querySelector('.mostofa_modal');
const modalContent = document.querySelector('.modal_content');

const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');

const mostofaAlert = document.querySelector('.mostofaAlert');
const alertContent = document.querySelector('.alertContent');

const cancel = document.querySelector('.cancel');
const edit = document.querySelector('.edit');
const discart = document.querySelector('.discart');


apply.addEventListener('click', function(){

    mostofaModal.classList.add('active1');
    modalContent.classList.add('active2');

});

close.addEventListener('click', function(){

    mostofaAlert.classList.add('aActive1');
    alertContent.classList.add('aActive2');

});

close2.addEventListener('click', function(){

    mostofaAlert.classList.add('aActive1');
    alertContent.classList.add('aActive2');

});

mostofaModal.addEventListener('click', function(event){

    if(event.target == this){
        mostofaModal.classList.remove('active1');
        modalContent.classList.remove('active2');
    }

})

cancel.addEventListener('click', function(){

    mostofaAlert.classList.remove('aActive1');
    alertContent.classList.remove('aActive2');

});

edit.addEventListener('click', function(){

    mostofaAlert.classList.remove('aActive1');
    alertContent.classList.remove('aActive2');

});

discart.addEventListener('click', function(){

    mostofaAlert.classList.remove('aActive1');
    alertContent.classList.remove('aActive2');

    mostofaModal.classList.remove('active1');
    modalContent.classList.remove('active2');

});








