document.getElementById("searchSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const input = document.getElementById("searchInput").value;
    const type = document.getElementById("searchType").value;

    const url = "https://swapi.dev/api/";

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
                    let resultsArray = json.results;
                    
                    resultsArray.forEach(element => {
                        //Title & episode id
                        let title_episode = "<h2>Episode " + element.episode_id + ": " + element.title + "</h2>";
                        filmDiv.innerHTML = title_episode;
                        //Producer & Director
                        let prod_direct = "<h4>Producer: " + element.producer + "<br/>Director: " + element.director + "</h4>";
                        filmDiv.innerHTML += prod_direct;
                        //Release date
                        let release = "<h4>Release Date: " + element.release_date + "</h4>";
                        filmDiv.innerHTML += release;
                        //Opening crawl
                        let crawl = "<p>" + element.opening_crawl + "</p>"
                        filmDiv.innerHTML += crawl;
                        //Characters (fetch urls)
                        let charArray = element.characters;
                        let charList = "<p>Characters: ";
                        for (charURL of charArray) {
                            fetch(charURL)
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                console.log(json);
                                charList += json.name + " ";
                            })
                        }
                        
                        filmDiv.innerHTML += (charList + "</p>");
                        //Planets (fetch urls)

                        //Species (fetch urls)

                        //Starships (fetch urls) 

                        //Vehicles (fetch urls)

                    });  
                    filmDiv.style.display = "grid";
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
})