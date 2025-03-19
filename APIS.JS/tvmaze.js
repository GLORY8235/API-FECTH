const forms = document.querySelector('#searchForms');
forms.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(forms)
    const searchTerm = forms.elements.query.value;
    const conflig = {params: {q: searchTerm, isFunny: 'colt'} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, conflig);
    console.log(res.data[0].show.image.medium);
    makeImge(res.data)
    forms.elements.query.value = '';
    
})

const makeImge = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
         }

   }
 }

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent page reload
    
    const searchTerm = form.elements.query.value;
    const configs = { params: { q: searchTerm } }; // Fixed variable name & removed unnecessary param
    
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, configs);
        clearImages(); // Remove previous images before adding new ones
        makeImages(res.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    form.elements.query.value = ''; // Clear input field after search
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};

// Function to clear previous images
const clearImages = () => {
    const existingImages = document.querySelectorAll("img");
    existingImages.forEach(img => img.remove());
};
