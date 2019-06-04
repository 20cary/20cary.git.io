var submit = document.querySelector(".submit");
    var out = document.querySelector(".out");
    
    function reply(){
        var radios = document.getElementsByName("response");
        for(var i = 0; i < radios.length; i++){
            if (radios [i].checked){
                out.innerHTML = radios[i].value;
                break;
            }
        }
    }
    
    submit.addEventListener("click", reply);
