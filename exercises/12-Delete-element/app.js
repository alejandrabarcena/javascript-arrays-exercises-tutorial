let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

function deletePerson(personName) {
    return people.filter(function(element){
        return element !== personName;
    });
}

// Pruebas de la función:
console.log(deletePerson("daniella"));
console.log(deletePerson("juan"));
console.log(deletePerson("emilio"));
