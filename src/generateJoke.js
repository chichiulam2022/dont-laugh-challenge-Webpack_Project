import axios from 'axios'

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     axios.get('https://icanhazdadjoke.com', config)
//         .then(res => {
//             document.getElementById('joke').innerHTML = res.data.joke
//             console.log(res);
//         })

// }


const generateJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com', config)
        const joke = res.data.joke
        document.getElementById('joke').innerHTML = joke
        console.log(joke);

    }
    catch (err) {
        console.log(err);
    }


}
export default generateJoke