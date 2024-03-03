import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [cards, setCards] = useState([
    //easy
    { question: "Which country is the birthplace of sushi?", 
      answer: "Japan", 
      difficulty:"easy", 
      img:"https://static.vecteezy.com/system/resources/previews/025/064/113/non_2x/sushi-with-ai-generated-free-png.png",
      imgWidth: "600px", 
      imgHeight: "300px"
  },
    { question: "What is the main ingredient in Risotto?", 
    answer: "Rice",difficulty:"easy", 
    img:"https://www.acouplecooks.com/wp-content/uploads/2022/09/Shrimp-Risotto-005.jpg",
    imgWidth: "500px", 
    imgHeight: "500px"
    },
    { question: "Ceviche is a popular seafood dish in which region?", 
      answer: "Latin America", difficulty:"easy", 
      img:"https://www.feastingathome.com/wp-content/uploads/2015/04/Ceviche-11.jpg", 
      imgWidth: "350px", 
      imgHeight: "500px"
    },
    { question: "Which dish is considered a national dish of Spain?", 
      answer: "Paella", 
      difficulty:"easy",  
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
      imgWidth: "350px", 
      imgHeight: "300px"
    },
    //medium
    { question: "What is the main protein ingredient in the traditional dish Feijoada from Brazil?", 
      answer: "Pork", 
      difficulty:"medium", 
      img:"https://www.177milkstreet.com/assets/site/Recipes/Brazilian-Black-Bean-Stew-Pork-Beef-Feijoada.jpg", 
      imgWidth: "400px", 
      imgHeight: "400px"    
    },
    { question: "In which country did the dish Couscous originate?", 
      answer: "Morocco", 
      difficulty:"medium", 
      img:"https://www.wellplated.com/wp-content/uploads/2023/05/Best-Couscous.jpg", 
      imgWidth: "500px", 
      imgHeight: "500px"
    },
    //hard
    { question: "Pavlova, a meringue-based dessert, is a subject of culinary dispute between which two countries?", 
      answer: "Australia and New Zealand",
      difficulty:"hard", 
      img:"https://thescranline.com/wp-content/uploads/2023/12/PAVLOVA-23-S-02.jpg", 
      imgWidth: "500px", 
      imgHeight: "500px"
    },
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <>
      <h1>Famous dishes from around the world</h1>
      <h2>How much of a foodie are you?</h2>
      <h2>Number of Cards: {cards.length}</h2>
      <div className='DifficultyDescription'>
        <h3>Difficulty</h3>
        <ul>
          <li>Easy = green</li>
          <li>Medium = Orange</li>
          <li>Hard = Red</li>
        </ul>
      </div>

      <Card
        key={currentCardIndex}
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
        difficulty={cards[currentCardIndex].difficulty}
        img={cards[currentCardIndex].img}
        imgWidth={cards[currentCardIndex].imgWidth}
        imgHeight={cards[currentCardIndex].imgHeight}
      />
      <button onClick={showRandomCard}>Next</button>
    </>
  );
}

export default App;
