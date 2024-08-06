for(let x=0; x<5; x++){
    document.getElementsByClassName('project')[x].onclick = function(){
        document.getElementsByClassName('modal')[x].style.display = 'flex';
        document.getElementsByClassName('close-cross')[x].onclick = function() {
            document.getElementsByClassName('modal')[x].style.display = 'none'; 
        }
    }
}

document.getElementsByClassName('fa-bars')[0].onclick = function(){
    document.getElementsByClassName('nav_mobile')[0].style.visibility = 'visible'; 

    document.getElementsByClassName('nav_mobile')[0].onclick = function(){
        document.getElementsByClassName('nav_mobile')[0].style.visibility = 'hidden'; 
    }
}