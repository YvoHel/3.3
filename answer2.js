const url= "https://cat-fact.herokuapp.com/facts";

fetch(url)
.then(function(response){
    return response.json();
})
then(function(resaults){
    console.log(resaults.length);
})
.catch(function(error){
    console.log(error);
})
