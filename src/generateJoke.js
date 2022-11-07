import axios from 'axios'

const generateJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com', config)
        const { joke } = res.data
        // const joke = res.data.joke
        document.getElementById('joke').innerHTML = joke
        console.log(joke);

    }
    catch (err) {
        console.log(err);
    }
}

export default generateJoke