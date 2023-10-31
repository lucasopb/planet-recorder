type planetSitu = "habitable" | "uninhabitable" | "inhabited" | "unexplored"
type where = [number, number, number, number]
let allPlanets = []


function newPlanet(name: string, location: where, situation: planetSitu) {
    const planet = {
        name,
        location,
        situation,
        satelites: []
    }

    allPlanets.push(planet)
    return planet
}

 
function findPlanet(name: string) {
    let planet: {
        name: string,
        location: where,
        situation: planetSitu,
        satelites: string[]
    }

    planet = allPlanets.find((element) => {
        return element.name == name
    })

    return planet
}


function changeSituation(planet: {situation: planetSitu}, newSitu: planetSitu) {
    planet.situation = newSitu
}


function appendSatelite(planet: {satelites: string[]}, newSatelite: string) {
    planet.satelites.push(newSatelite)
}


function deleteSatelite(planet: {satelites: string[]}, staliteName: string) {
    let indToRemove = planet.satelites.indexOf(staliteName) 
    if (indToRemove !== -1) {
        planet.satelites.splice(indToRemove, 1)
    } else {
        alert('invalid satelite name')
    }
}


function conferPlanetSitu(newSituation: string) {
    if (newSituation === "habitable" || newSituation === "uninhabitable" || newSituation === "inhabited" || newSituation === "unexplored") {
        return newSituation;
    } else {
        alert('invalid situation')
        return undefined
    } 
}



// MENU

let planet
let situation: planetSitu 
let arrayLoc: where = [0, 0, 0, 0]
let resp = ''

while (resp != '6') {
    resp = prompt('1. create planet\n2. change situation\n3. add satelite\n4. delete satelite\n5. show planets\n6. sair')
    switch (resp) {
        case '1':
            let name = prompt('type the name of the planet')
            for (let i = 0; i < 4; i++) {
                let position = Number(prompt(`type the coordinates ${i} of the planet`))
                arrayLoc[i] = position
            }
            situation = conferPlanetSitu(prompt("type the situation of the planet: (habitable, inhabited, uninhabitable, unexplored)"))
            if (situation) {
                newPlanet(name, arrayLoc, situation)
            }
            break
        case '2':
            planet = findPlanet(prompt('type the name of the planet you wanna change'))
            if (planet) {
                situation = conferPlanetSitu(prompt("type the new situation of the planet: (habitable, inhabited, uninhabitable, unexplored)" ))
                if (situation) {
                    changeSituation(planet, situation)
                }
            } else {
                alert('Name of the planet not found')
            } 
            break
        case '3':
            planet = findPlanet(prompt('type the name of  the planet you wanna change'))
            if (planet) {
                appendSatelite(planet, prompt('whats the name of the satelite you wanna add?'))
            } else {
                alert('name of the planet not found')
            }
            break
        case '4':
            planet = findPlanet(prompt('type the name of  the planet you wanna change'))
            if (planet) {
                deleteSatelite(planet, prompt('whats the name of the satelite you wanna delete?'))
            } else {
                alert('name not found')
            }
            break
        case '5':
            let list = 'all planets:\n'
  
            allPlanets.forEach((planet: {
            name: string,
            location: where,
            situation: planetSitu,
            satelites: string[],
            }) => {
            list += `
                planet: ${planet.name}
                location: ${planet.location}
                situation: ${planet.situation}
                satelites
            `

            planet.satelites.forEach(satelite => {
                list += `   - ${satelite}`
            })

            })

            alert(list)
            break
        case '6':
            alert('exiting')
            console.log(allPlanets)
            break
        default:
            alert('invalid option')
    }
}