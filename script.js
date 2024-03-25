let lvl = document.querySelector('span');
let msg =  document.querySelector('p');
let pass = document.querySelector('.passwordBox');

const passwordLevel = ()=>{
    let input = document.querySelector('.passwordBox input').value;
    if(input.length > 0){
        msg.style.display = "block";
    }
    
    else{
        msg.style.display = "none";
    }
    
    if(input.length <= 4){
        lvl.innerHTML = "Weak";
        pass.style.borderColor = "red"
        msg.style.color = "red";
    }
    
    else if(input.length <= 8){
        lvl.innerHTML = "Medium";
        pass.style.borderColor = "yellow"
        msg.style.color = "yellow";
    }
    
    else{
        lvl.innerHTML = "Hard";
        msg.style.color = "green";
        pass.style.borderColor = "green"
    }

}