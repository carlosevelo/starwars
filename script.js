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
                //Format the results json
                if (type === "films") {
                    //Title & episode id

                    //Producer & Director

                    //Release date

                    //Opening crawl

                    //Characters (fetch urls)

                    //Planets (fetch urls)

                    //Species (fetch urls)

                    //Starships (fetch urls) 

                    //Vehicles (fetch urls)

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