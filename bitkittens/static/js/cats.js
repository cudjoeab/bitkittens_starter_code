document.addEventListener("DOMContentLoaded", function() {
    
    let summonKitties = document.querySelector('.summon-cats');

    summonKitties.addEventListener('click', () => {
        console.log('meow'); 
        let request = 
        axios.get("https://eric-deploy-test.herokuapp.com/cats")
        .then(function(response){
            const kitties = response.data.cats

            console.log('the cats have arrived')
            console.log(kitties)

        })
    })
});
