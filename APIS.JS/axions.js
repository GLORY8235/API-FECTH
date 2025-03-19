
document.getElementById('fetchData').addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const output = document.getElementById('output');
            output.innerHTML = response.data.map(post => `<p>${post.title}</p>`).join('');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});



axios.get('https://reqres.in/api/users')
    .then((res) => {
        console.log("RESPONSE: ", res.data);
    })
    .catch((e) => {
        console.log("ERROR", e);
    });

const getUser = async (id) => {
    try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR! ", e);
    }
};

// Fetching users with IDs 5 and 10
getUser(5);
getUser(10);


const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newli = document.createElement('LI');
    newli.append(jokeText);
    jokes.append(newli);
}
const getDadJoke = async () => {
try {
    const config = { headers: {Accept: 'application/json'}}
    const res = await axios('https://icanhazdadjoke.com/', config)
    // console.log(res.data.jokes)
    return res.data.joke;
} catch (e) {
    console.log('sorry no jok avaliable')

    return "NO JOKE AVAILABLE! SORRY : "
}
   
}
button.addEventListener('click', addNewJoke)
