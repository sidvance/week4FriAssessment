const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const insults = ['You\'re a Harry, wizard', 'You bob for apples in the toilet, and you like it', 'You play ball like a girl!'];

module.exports = {
    
    getFortune: (req, res) => {
        const fortunes = ['Look behind you!!!!!!', 'Nicolas Cage is thinking about you', 'Your mom called. She said she loves you', 'You are going to have joint pain when you\'re older, sorry', 'This fortune is tired, ask for another one'];

        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI]

        res.status(200).send(randomFortune)
    },

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    submitComp: (req, res) => {
        let {compliment} = req.body
        console.log(compliment)

        if(compliment){
            compliments.push(compliment)
            res.status(200).send(compliments)
        } else {
            res.status(400).send('Error')
        }
    },

    getInsult: (req, res) => {
        let randomI = Math.floor(Math.random() * insults.length);
        let randomInsult = insults[randomI]

        res.status(200).send(randomInsult)
    },

    submitInsult: (req, res) => {
        let {insult} = req.body
        console.log(insult)

        if(insult){
            insults.push(insult)
            res.status(200).send(insults)
        } else {
            res.status(400).send('Error')
        }
    },

    deleteInsult : (req, res) => {
        insults.splice(-1, 1)

        res.status(200).send(insults)
    } 
}