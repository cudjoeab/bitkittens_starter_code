document.addEventListener("DOMContentLoaded", function() {
    
    let summonKitties = document.querySelector('.summon-cats');
    let catBoxes = document.querySelectorAll('.cat-boxes'); 

    summonKitties.addEventListener('click', () => {
        console.log('meow'); 
        let request = 
        axios.get("https://eric-deploy-test.herokuapp.com/cats")
        .then(function(response){
            const kittiesList = response.data.cats
            console.log('the cats have arrived')
            console.log(kittiesList)

            kittiesList.forEach((box, index) => {
                box.innerHTML = ""; 
                const kitty= document.createElement('img');
                kitty.src = kittiesList[index]['photo'];
                kitty.alt = `Photo of ${kittiesList[index]['name']}`;
                // box.appendChild(kitty); 
             });
            
        })
        .catch((error) => {
            console.log('-- Received error.');
            console.log(error);
        })
        .then(() => {
            console.log('-- Request is over.');
        });
    });
});
