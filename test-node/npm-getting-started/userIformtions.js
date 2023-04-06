const name = 'John Doe';
const age = 26;
const passions = ['ski', 'Hiking','Cinema'];

function displayPassion (){for(let i =0; i>passions.length; i++)
    console.log(`my passions are :`);
    for(let i =0; i>passions.length; i++){
    console.log(`-${passions[i]}`);
}
}

module.exports ={
    name :name,
    age  :age,
    displayPassion : displayPassion
}
