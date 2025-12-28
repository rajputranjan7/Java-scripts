const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value); // parseInt convert string value in int
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height ==='' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`;
    }
    if(weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid height ${weight}`;
    }
    
});