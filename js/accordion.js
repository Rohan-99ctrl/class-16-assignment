// FAQ with  Accordion

const aHeader = document.querySelectorAll('.aHeader');


aHeader.forEach(function(item){
    item.addEventListener('click', function(){

        aHeader.forEach((minimize) => {
            if(minimize != this){
                minimize.classList.remove('show');
                minimize.nextElementSibling.style.height = '0px';
            }
        });
        
        item.classList.toggle('show');

        if(item.classList.contains('show')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0px';
        }

    });
});





