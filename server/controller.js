module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['Look behind you!!!!!!', 'Nicolas Cage is thinking about you', 'Your mom called. She said she loves you', 'You are going to have joint pain when you\'re older, sorry', 'This fortune is tired, ask for another one'];

        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI]

        res.status(200).send(randomFortune)
    },

    submitComp: (req, res) => {
        let alert = 'Compliment submitted! That was so sweet!'
        res.status(200).send(alert)
    },

    postComp: (req, res) => {
        let {compliment} = req.body

        console.log(compliment)

        compliments.push(compliment)

        res.status(200).send(compliments)
    }

}