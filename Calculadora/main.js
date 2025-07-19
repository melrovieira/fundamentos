let number = '';

function insert(num) {
    number += num;
    document.getElementById('resultado').innerHTML = number; 
}

function clearAll(){
        document.getElementById('resultado').innerHTML = ''; 
        number = '';

}