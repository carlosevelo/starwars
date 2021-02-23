document.getElementById("searchSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const input = document.getElementById("searchInput").value;
    const type = document.getElementById("searchType").value;

    const url = "https://swapi.dev/api/";

    if (type === "") {
        fetch(url + "root" + "?search=" + input)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
            })
    }
    else {
        fetch(url + type + "?search=" + input)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
            })
    }
   
})