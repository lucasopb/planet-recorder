let allPlanets = [];
function newPlanet(name, location, situation) {
    const planet = {
        name,
        location,
        situation,
        satelites: []
    };
    allPlanets.push(planet);
    return planet;
}
function findPlanet(name) {
    let planet;
    planet = allPlanets.find((element) => {
        return element.name == name;
    });
    return planet;
}
function changeSituation(planet, newSitu) {
    planet.situation = newSitu;
}
function appendSatelite(planet, newSatelite) {
    planet.satelites.push(newSatelite);
}
function deleteSatelite(planet, staliteName) {
    let indToRemove = planet.satelites.indexOf(staliteName);
    if (indToRemove !== -1) {
        planet.satelites.splice(indToRemove, 1);
    }
    else {
        alert('invalid satelite name');
    }
}
function conferPlanetSitu(newSituation) {
    if (newSituation === "habitable" || newSituation === "uninhabitable" || newSituation === "inhabited" || newSituation === "unexplored") {
        return newSituation;
    }
    else {
        alert('invalid situation');
        return undefined;
    }
}
// MENU
let situation;
let arrayLoc = [0, 0, 0, 0];
let resp = '';
while (resp != '6') {
    resp = prompt('1. create planet\n2. change situation\n3. add satelite\n4. delete satelite\n5. show planets\n6. sair');
    switch (resp) {
        case '1':
            let name = prompt('type the name of the planet');
            for (let i = 0; i < 4; i++) {
                let position = Number(prompt(`type the coordinates ${i} of the planet`));
                arrayLoc[i] = position;
            }
            situation = conferPlanetSitu(prompt("type the situation of the planet: (habitable, inhabited, uninhabitable, unexplored)"));
            if (situation) {
                newPlanet(name, arrayLoc, situation);
            }
            break;
        case '2':
            let Planet = findPlanet(prompt('type the name of the planet you wanna change'));
            if (Planet) {
                situation = conferPlanetSitu(prompt("type the new situation of the planet: (habitable, inhabited, uninhabitable, unexplored)"));
                if (situation) {
                    changeSituation(Planet, situation);
                }
            }
            else {
                alert('Name of the planet not found');
            }
            break;
        case '3':
            let Planet2 = findPlanet(prompt('type the name of  the planet you wanna change'));
            if (Planet2) {
                appendSatelite(Planet2, prompt('whats the name of the satelite you wanna append?'));
            }
            else {
                alert('name of the planet not found');
            }
            break;
        case '4':
            let Planet3 = findPlanet(prompt('type the name of  the planet you wanna change'));
            if (Planet3) {
                deleteSatelite(Planet3, prompt('whats the name of the satelite you wanna delete?'));
            }
            else {
                alert('name of the planet not found');
            }
            break;
        case '5':
            let list = 'Naves Registradas:\n';
            allPlanets.forEach((planet) => {
                list += `
                planet: ${planet.name}
                location: ${planet.location}
                situation: ${planet.situation}
                satelites
            `;
                planet.satelites.forEach(satelite => {
                    list += `   - ${satelite}`;
                });
            });
            alert(list);
            break;
        case '6':
            alert('exiting');
            console.log(allPlanets);
            break;
        default:
            alert('invalid option');
    }
}
