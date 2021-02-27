document.getElementById("search-btn").addEventListener("click", function(event) {
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
        let allResults = document.querySelectorAll('#films, #people, #planets, #species, #starships, #vehicles');
        allResults.forEach((result) => {
            result.style.display = "none";
        })
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
                    let title_episode = document.getElementById("film_title");
                    let prod_direct = document.getElementById("prod_direct");
                    let release = document.getElementById("release");
                    let crawl = document.getElementById("crawl");
                    let charList = document.getElementById("film_charList");
                    let planetList = document.getElementById("film_planetList");
                    let speciesList = document.getElementById("film_speciesList");
                    let starshipsList = document.getElementById("film_starshipsList");
                    let vehiclesList = document.getElementById("film_vehiclesList");

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
                    document.getElementById("films").style.display = "grid";

                }
                else if (type === "people") {
                    let people_name = document.getElementById("people_name");
                    let birthYear = document.getElementById("birthYear");
                    let eyeColor = document.getElementById("eyeColor");
                    let gender = document.getElementById("gender");
                    let hairColor = document.getElementById("hairColor");
                    let height = document.getElementById("height");
                    let mass = document.getElementById("mass");
                    let skinColor = document.getElementById("skinColor");
                    let homeWorld = document.getElementById("homeWorld");
                    let filmList = document.getElementById("people_filmList");
                    let speciesList = document.getElementById("people_speciesList");
                    let starshipsList = document.getElementById("people_starshipsList");
                    let vehiclesList = document.getElementById("people_vehiclesList");

                    let resultsArray = json.results;

                    resultsArray.forEach(element => {
                        //Name
                        people_name.innerHTML = "<h2>" + element.name + "</h2>";
                        //Birth year
                        birthYear.innerHTML = "<h4>Birth Year: <br/>" + element.birth_year + "</h4>";
                        //Eye color
                        eyeColor.innerHTML = "<h4>Eye Color: " + element.eye_color + "</h4>";
                        //Gender
                        gender.innerHTML = "<h4>Gender: " + element.gender + "</h4>"
                        //Hair Color
                        hairColor.innerHTML = "<h4>Hair Color: " + element.hair_color + "</h4>"
                        //height
                        height.innerHTML = "<h4>Height: " + element.height + "</h4>"
                        //Mass
                        mass.innerHTML = "<h4>Mass: " + element.mass + "</h4>"
                        //Skin color
                        skinColor.innerHTML = "<h4>Skin Color: " + element.skin_color + "</h4>"
                        //home World
                        homeWorld.innerHTML = "<h4>Home World: " + element.home_world + "</h4>"
                        //Films
                        let filmsArray = element.films;
                        for (let i = 0; i < filmsArray.length; i++) {
                            fetch(filmsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                filmList.innerHTML += json.title + " ";
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
                    document.getElementById("people").style.display = "grid";

                }
                else if (type === "planets") {
                    let planet_name = document.getElementById("planet_name");
                    let diameter = document.getElementById("diameter");
                    let rotation = document.getElementById("rotation");
                    let orbital = document.getElementById("orbital");
                    let gravity = document.getElementById("gravity");
                    let population = document.getElementById("population");
                    let climate = document.getElementById("climate");
                    let terrain = document.getElementById("terrain");
                    let water = document.getElementById("water");
                    let charList = document.getElementById("planets_charList");
                    let filmList = document.getElementById("planets_filmList");
                    
                    let resultsArray = json.results;

                    resultsArray.forEach(element => {
                        //Name
                        planet_name.innerHTML = "<h2>" + element.name + "</h2>";
                        //Birth year
                        diameter.innerHTML = "<h4>Diameter: <br/>" + element.diameter + "</h4>";
                        //Eye color
                        rotation.innerHTML = "<h4>Rotation: " + element.rotation_period + "</h4>";
                        //Gender
                        orbital.innerHTML = "<h4>Orbit: " + element.orbital_period + "</h4>"
                        //Hair Color
                        gravity.innerHTML = "<h4>Gravity: " + element.gravity + "</h4>"
                        //height
                        population.innerHTML = "<h4>Population: " + element.population + "</h4>"
                        //Mass
                        climate.innerHTML = "<h4>Climate: " + element.climate + "</h4>"
                        //Skin color
                        terrain.innerHTML = "<h4>Terrain: " + element.terrain + "</h4>"
                        //home World
                        water.innerHTML = "<h4>Surface Water: " + element.surface_water + "</h4>"
                        //Residents 
                        let charArray = element.residents;
                        for (let i = 0; i < charArray.length; i++) {
                            fetch(charArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                charList.innerHTML += json.name + " ";
                            })
                        }
                        //Films
                        let filmsArray = element.films;
                        for (let i = 0; i < filmsArray.length; i++) {
                            fetch(filmsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                filmList.innerHTML += json.title + " ";
                            })
                        }
                    });
                    document.getElementById("planets").style.display = "grid";

                }
                else if (type === "species") {
                    let species_name = document.getElementById("species_name");
                    let classification = document.getElementById("classification");
                    let designation = document.getElementById("designation");
                    let avgHeight = document.getElementById("avgHeight");
                    let avgLifeSpan = document.getElementById("avgLifeSpan");
                    let eyeColors = document.getElementById("eyeColors");
                    let hairColors = document.getElementById("hairColors");
                    let skinColors = document.getElementById("skinColors");
                    let language = document.getElementById("language");
                    let homeWorld = document.getElementById("species_homeWorld");
                    let charList = document.getElementById("species_charList");
                    let filmList = document.getElementById("species_filmList");
                    
                    let resultsArray = json.results;

                    resultsArray.forEach(element => {
                        //Name
                        species_name.innerHTML = "<h2>" + element.name + "</h2>";
                        //classification
                        classification.innerHTML = "<h4>Classification: <br/>" + element.classification + "</h4>";
                        //designation
                        designation.innerHTML = "<h4>Designation: " + element.designation + "</h4>";
                        //avgHeight
                        avgHeight.innerHTML = "<h4>Average Height: " + element.average_height + "</h4>"
                        //avgLifeSpan
                        avgLifeSpan.innerHTML = "<h4>Average Lifespan: " + element.average_lifespan + "</h4>"
                        //eyeColors
                        eyeColors.innerHTML = "<h4>Eye Colors: " + element.eye_colors + "</h4>"
                        //hairColors
                        hairColors.innerHTML = "<h4>Hair Colors: " + element.hair_colors + "</h4>"
                        //Skin color
                        skinColors.innerHTML = "<h4>Skin Colors: " + element.skin_colors + "</h4>"
                        //language
                        language.innerHTML = "<h4>Language: " + element.language + "</h4>"
                        //Home world 
                        fetch(element.homeworld)
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                homeWorld.innerHTML = "<h4>Homeworld: " + json.name + "</h4>";
                            })
                        //Characters 
                        let charArray = element.people;
                        for (let i = 0; i < charArray.length; i++) {
                            fetch(charArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                charList.innerHTML += json.name + " ";
                            })
                        }
                        //Films
                        let filmsArray = element.films;
                        for (let i = 0; i < filmsArray.length; i++) {
                            fetch(filmsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                filmList.innerHTML += json.title + " ";
                            })
                        }
                    });
                    document.getElementById("species").style.display = "grid";

                }
                else if (type === "starships") {
                    let starship_name = document.getElementById("starship_name");
                    let starship_model = document.getElementById("starship_model");
                    let starship_class = document.getElementById("starship_class");
                    let starship_manufacturer = document.getElementById("starship_manufacturer");
                    let starship_cost = document.getElementById("starship_cost");
                    let starship_length = document.getElementById("starship_length");
                    let starship_crew = document.getElementById("starship_crew");
                    let starship_passengers = document.getElementById("starship_passengers");
                    let starship_speed = document.getElementById("starship_speed");
                    let starship_hyperdrive = document.getElementById("starship_hyperdrive");
                    let starship_MGL = document.getElementById("starship_MGL");
                    let starship_capacity = document.getElementById("starship_capacity");
                    let starship_consumables = document.getElementById("starship_consumables");
                    let charList = document.getElementById("starship_charList");
                    let filmList = document.getElementById("starship_filmList");
                    
                    let resultsArray = json.results;

                    resultsArray.forEach(element => {
                        //Name
                        starship_name.innerHTML = "<h2>" + element.name + "</h2>";
                        //model
                        starship_model.innerHTML = "<h4>Model: <br/>" + element.model + "</h4>";
                        //class
                        starship_class.innerHTML = "<h4>Class: " + element.starship_class + "</h4>";
                        //manufacturer
                        starship_manufacturer.innerHTML = "<h4>Manufacturer: " + element.manufacturer + "</h4>"
                        //cost
                        starship_cost.innerHTML = "<h4>Cost in Credits: " + element.cost_in_credits + "</h4>"
                        //length
                        starship_length.innerHTML = "<h4>Length: " + element.length + "</h4>"
                        //crew
                        starship_crew.innerHTML = "<h4>Crew: " + element.crew + "</h4>"
                        //passengers
                        starship_passengers.innerHTML = "<h4>Passengers: " + element.passengers + "</h4>"
                        //speed
                        starship_speed.innerHTML = "<h4>Max Atmospheric Speed: " + element.max_atmosphering_speed + "</h4>"
                        //hyperdrive
                        starship_hyperdrive.innerHTML = "<h4>Hyperdrive Rating: " + element.hyperdrive_rating + "</h4>"
                        //MGL
                        starship_MGL.innerHTML = "<h4>MGLT: " + element.MGLT + "</h4>"
                        //capacity
                        starship_capacity.innerHTML = "<h4>Cargo Capacity: " + element.cargo_capacity + "</h4>"
                        //consumables
                        starship_consumables.innerHTML = "<h4>Consumables: " + element.consumables + "</h4>"
                        //Characters 
                        let charArray = element.pilots;
                        for (let i = 0; i < charArray.length; i++) {
                            fetch(charArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                charList.innerHTML += json.name + " ";
                            })
                        }
                        //Films
                        let filmsArray = element.films;
                        for (let i = 0; i < filmsArray.length; i++) {
                            fetch(filmsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                filmList.innerHTML += json.title + " ";
                            })
                        }
                    });
                    document.getElementById("starships").style.display = "grid";

                }
                else if (type === "vehicles") {
                    let vehicle_name = document.getElementById("vehicle_name");
                    let vehicle_model = document.getElementById("vehicle_model");
                    let vehicle_class = document.getElementById("vehicle_class");
                    let vehicle_manufacturer = document.getElementById("vehicle_manufacturer");
                    let vehicle_cost = document.getElementById("vehicle_cost");
                    let vehicle_length = document.getElementById("vehicle_length");
                    let vehicle_crew = document.getElementById("vehicle_crew");
                    let vehicle_passengers = document.getElementById("vehicle_passengers");
                    let vehicle_speed = document.getElementById("vehicle_speed");
                    let vehicle_capacity = document.getElementById("vehicle_capacity");
                    let vehicle_consumables = document.getElementById("vehicle_consumables");
                    let charList = document.getElementById("vehicle_charList");
                    let filmList = document.getElementById("vehicle_filmList");
                    
                    let resultsArray = json.results;

                    resultsArray.forEach(element => {
                        //Name
                        vehicle_name.innerHTML = "<h2>" + element.name + "</h2>";
                        //model
                        vehicle_model.innerHTML = "<h4>Model: <br/>" + element.model + "</h4>";
                        //class
                        vehicle_class.innerHTML = "<h4>Class: " + element.vehicle_class + "</h4>";
                        //manufacturer
                        vehicle_manufacturer.innerHTML = "<h4>Manufacturer: " + element.manufacturer + "</h4>"
                        //cost
                        vehicle_cost.innerHTML = "<h4>Cost in Credits: " + element.cost_in_credits + "</h4>"
                        //length
                        vehicle_length.innerHTML = "<h4>Length: " + element.length + "</h4>"
                        //crew
                        vehicle_crew.innerHTML = "<h4>Crew: " + element.crew + "</h4>"
                        //passengers
                        vehicle_passengers.innerHTML = "<h4>Passengers: " + element.passengers + "</h4>"
                        //speed
                        vehicle_speed.innerHTML = "<h4>Max Atmospheric Speed: " + element.max_atmosphering_speed + "</h4>"
                        //capacity
                        vehicle_capacity.innerHTML = "<h4>Cargo Capacity: " + element.cargo_capacity + "</h4>"
                        //consumables
                        vehicle_consumables.innerHTML = "<h4>Consumables: " + element.consumables + "</h4>"
                        //Characters 
                        let charArray = element.pilots;
                        for (let i = 0; i < charArray.length; i++) {
                            fetch(charArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                charList.innerHTML += json.name + " ";
                            })
                        }
                        //Films
                        let filmsArray = element.films;
                        for (let i = 0; i < filmsArray.length; i++) {
                            fetch(filmsArray[i])
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                filmList.innerHTML += json.title + " ";
                            })
                        }
                    });
                    document.getElementById("vehicles").style.display = "grid";

                }
            })
        }
    }
    document.getElementById("searchResults").style.display = "grid";
})