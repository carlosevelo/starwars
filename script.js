document.getElementById("searchSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const input = document.getElementById("searchInput").value;
    const type = document.getElementById("searchType").value;

    const url = "http://swapi.dev/api/";

    if (type === "") {
        //Make a pretty pop up with hidden html
        window.alert("Must select a search type")
    }
    else {
        document.getElementById("filler").style.display = "none";
        if (input === "") {
            fetch(url + type + "?search=")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                //Parse all data 
            })
        }
        else {
            fetch(url + type + "?search=" + input)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                document.getElementById("searchResults");

                //Format the results json
                if (type === "films") {
                    let filmDiv = document.getElementById("films");
                    let title_episode = document.getElementById("film_title");
                    let prod_direct = document.getElementById("prod_direct");
                    let release = document.getElementById("release");
                    let crawl = document.getElementById("crawl");
                    let charList = document.getElementById("charList");
                    let planetList = document.getElementById("planetList");
                    let speciesList = document.getElementById("speciesList");
                    let starshipsList = document.getElementById("starshipsList");
                    let vehiclesList = document.getElementById("vehiclesList");

                    let resultsArray = json.results;
                    
                    resultsArray.forEach(element => {
                        //Title & episode id
                        title_episode.innerHTML = "<h2>Episode " + element.episode_id + ": " + element.title + "</h2>";
                        //Producer & Director
                        prod_direct.innerHTML = "<h4>Producer: " + element.producer + "<br/>Director: " + element.director + "</h4>";
                        //Release date
                        release.innerHTML = "<h4>Release Date: " + element.release_date + "</h4>";
                        //Opening crawl
                        crawl.innerHTML = "<p>" + element.opening_crawl + "</p>"
                        //Characters (fetch urls)
                        let charArray = element.characters;
                        for (let i = 0; i < charArray.length; i++) {
                            fetch(charArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                charList.innerHTML += json.name + " ";
                            })
                        }
                        //Planets (fetch urls)
                        let planetArray = element.planets;
                        for (let i = 0; i < planetArray.length; i++) {
                            fetch(planetArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                planetList.innerHTML += json.name + " ";
                            })
                        }
                        //Species (fetch urls)
                        let speciesArray = element.species;
                        for (let i = 0; i < speciesArray.length; i++) {
                            fetch(speciesArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                speciesList.innerHTML += json.name + " ";
                            })
                        }
                        //Starships (fetch urls) 
                        let starshipsArray = element.starships;
                        for (let i = 0; i < starshipsArray.length; i++) {
                            fetch(starshipsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                starshipsList.innerHTML += json.name + " ";
                            })
                        }
                        //Vehicles (fetch urls)
                        let vehiclesArray = element.vehicles;
                        for (let i = 0; i < vehiclesArray.length; i++) {
                            fetch(vehiclesArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                vehiclesList.innerHTML += json.name + " ";
                            })
                        }
                    });  
                }
                else if (type === "people") {
                    //Name

                    //Birth year

                    //Eye color

                    //Gender

                    //Hair color

                    //Height 

                    //Mass

                    //Skin color

                    //Home world (fetch url)

                    //Films (fetch urls)

                    //Species (fetch urls)

                    //Starships (fetch urls)

                    //Vehicles (fetch urls)

                }
                else if (type === "planets") {
                    //Name

                    //Diameter

                    //Rotation Period

                    //Orbital period

                    //Gravity

                    //Population

                    //Climate

                    //Terrain

                    //Surface water

                    //Residents (fetch urls)

                    //Films (fetch urls)

                }
                else if (type === "species") {
                    //Name 

                    //Classification
                    
                    //Designation

                    //Average Height

                    //Average life span

                    //eye colors
                    
                    //hair colors

                    //skin colors

                    //language

                    //homeworld (fetch urls)

                    //people (fetch urls)

                    //films (fetch urls)

                }
                else if (type === "starships") {
                    //Name 

                    //Model

                    //Starship class

                    //Manufacturer

                    //Cost in credits

                    //length

                    //Crew

                    //Passengers

                    //Max atmospheric speed 

                    //Hyperdrive rating

                    //Max num of Megalights per hour (speed)

                    //Cargo capacity

                    //Consumables (time)

                    //Films (fetch urls)

                    //Pilots (fetch urls)

                }
                else if (type === "vehicles") {
                    //Name

                    //Model

                    //Vehicle class

                    //Manufacturer

                    //Length

                    //Cost in credits

                    //crew

                    //passengers

                    //max atmoshperic speed

                    //cargo capacity

                    //consumables

                    //films (fetch urls)

                    //pilots (fetch urls)

                }
            })
        }
    }
    document.getElementById("searchResults").style.display = "grid";

})