let todolist = [],
    idlist = [];
const btn = document.querySelector('#btn'),
      article = document.querySelector('#article'),
      result = document.querySelector('#result');
   
      
    
    window.onload = function(){
        result.onclick = function (evt) {
            // Event tweaks, since IE wants to go its own way...
            let event = evt || window.event;
            let target = event.target
            ChangeBoughtStatus(target);  
         
        }
    };



    function AddToList(){
        // Lägger till varan först i listan.
        todolist.unshift(article.value);
    
            for(let i=0; i < todolist.length; i++){
             idlist[i]= `<li id="${i}" class="unbought">${todolist[i]}&nbsp;<button onClick="DeleteItem(${i})" class="delete btn btn-outline-danger float-right btn-sm">Ta bort</button></li> `; 
            };
            //Tar bort kommatecknen i arrayen.
            let stringWithoutCommas =  idlist.join('');
            result.innerHTML = stringWithoutCommas;

           // Rensar inputfält
              article.value = '';
        };


    function DeleteItem(id){
        if (id > -1) {
        todolist.splice(id, 1);
        idlist.splice(id, 1);
        document.getElementById(id).remove();
        }
    }

    function ChangeBoughtStatus(target){

        let classname = target.className;

        if(classname === 'unbought'){
            target.classList.toggle('bought');
            target.classList.remove('unbought');
        }else{
            target.classList.toggle('unbought');
            target.classList.remove('bought');
        }
      
    }
  
    btn.addEventListener('click', AddToList);

  

