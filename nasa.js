function sendApiRequest() {

    var userInput = document.getElementById("input").value
    console.log("input", userInput)
    var nasaApiKey = "1XPitu4rVUIQSaflKtgecaFn9fG30UlyBCPficez"
    var nasaSearchEndpoint = `https://images-api.nasa.gov/search?q=${userInput}`
    fetch(nasaSearchEndpoint)
        .then(

            function(data) {
                return data.json()
            })
        .then(
            function(json) {

                console.log(json)
                    // .collection.items[0].data[0].description
                    // //write your code to take pieces of data from your API and add them to your html page. 
                    // console.log(userInput)

                var descriptionPath = json.collection.items[0].data[0].description
                console.log(descriptionPath)
                var description = document.getElementById("edit")
                // Get the <ul> element with id="myList"

// As long as <ul> has a child node, remove it
while (description.hasChildNodes()) {   
    description.removeChild(description.firstChild);
}

                var t = document.createTextNode(descriptionPath);

                description.appendChild(t)
                    /* document.body.appendChild(description)*/
                    
                var imagePath = json.collection.items[0].data[0].links[0].href
                console.log(imagePath)
                var image = document.createElement('img')
                image.setAttribute('src', imagePath)
                document.body.appendChild(image)
            })
        .catch(
            err => {
                console.log(err)
            })
}