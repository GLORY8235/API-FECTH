

// const req = new XMLHttpRequest();

//     req.onload = function () {
//         console.log("IT LOADED!");
//         const data = JSON.parse(this.response);
//         console.log(data.name, data.height);
//     };

//     req.onerror = function (){
//         console.log("ERROR!!!");
//         console.log(this);
//     }

//     req.open("GET", "https://swapi.dev/api/people/1/");
//     req.send();

// const loadStarWarPoeple = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/2/");
//         const data = await res.json();
//         console.log(data.name, data.height);

//         const res1 = await fetch("https://swapi.dev/api/people/2/");
//         const data1 = await res1.json();
//         console.log(data1.name, data1.height);

//     } catch (e) {
//         console.log("ERROR!!!", e);
//     }
// };
// loadStarWarPoeple();

const loadStarWa = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);

        const res1 = await fetch("https://swapi.dev/api/people/2/");
                const data1 = await res1.json();
                console.log(data1);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
};
loadStarWa();




async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokomonsprite = data.sprites.front_default;
        const imElement = document.getElementById("pokemonsprite")
        imElement.src = pokomonsprite;
        imElement.style.display = "block"
        console.log(data.name, data.hieght)

    } catch (e) {
        console.log(e);
    }
}

// Jd;*a,&CB7J-yXb



fetchData()

//    Bulbasaur