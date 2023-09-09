import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import shanik from "./shanik.MOV"
import song from "./song.mp4"
import Loader from './Loader';
import { useEffect } from 'react';

// function App() {

//   const[state, setState]= useState(true)
//   const buttonStyle = {
//     backgroundColor: state ? 'green' : 'red',  Green for "display", Red for "hide"
//     color: 'white', 
//   };
//   console.log(state)
//   return (
//     <div className="App">
       
//      <div className="background-video">
//       <video autoPlay loop muted playsInline>
//         <source src={shanik} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div> 
//       <h1>100 Days of My Life</h1>
//       </div>
      
      
//       <button id='btn' onClick={()=>{setState(!state)} } style={buttonStyle}>{state? "Display":"Hide"}</button>
//       <p>{state? "This the True  Story of My life, 100 Days of Journey. To Read all the Story Click on Display ":
  //  "Dear Magic ji,  I hope this letter finds you well. I want to share my thoughts and feelings from the past 100 days since I arrived in Delhi. Though it's just a distance of 1000 kilometers that separates us, it often feels like a vast expanse. From the very first day in Delhi, I realized I had left someone special behind, someone who has always been there for me. I understand that we both have careers to build, and this journey has not been easy for either of us. The truth is, it wasn't an easy decision for me to come to Delhi, leaving you behind to face your own challenges. But my career aspirations led me here, and I had no other choice. However, as I immersed myself in my studies, I decided to cut out distractions completely. I left behind all the habits of my past life to focus entirely on this new chapter. I believed our future would be together, even if it meant enduring a long-distance relationship. Soon, I realized that maintaining such a relationship was more challenging than I had anticipated. A month apart already felt too long, and I began to question my decision. Despite the distance, I continued to think about you, talk to you, and strive to strengthen our bond. But after 25 days, everything took a turn for the worse. Our relationship seemed to weaken with each passing day, and I tried my best to prevent it from falling apart. However, I couldn't be there for you when you needed me the most, like when your exams were approaching or when your results were announced. Those were the darkest days of my life, filled with sadness and regret. I couldn't bring myself to explain these feelings, not even to you. I had promised to be by your side, take you to the exam center, and be there when the results came in, no matter the outcome. I admired your hard work and dedication to your studies, and I still do. But deep down, I realized that being physically distant caused you to hide things from me. I began to doubt why you were keeping certain things from me. It's not about your friends; I have no issues with them. I know you well, your character, your values. What bothered me was that something was missing in my life that only you could fill. I thought you should be with me all the time. However, I understand that we're both working hard to secure our futures, and being apart is part of that journey. I'm not certain about our future together due to some of the reasons you've mentioned. But I eagerly await the day when you stand on your own two feet, managing your expenses, and achieving your goals with your hard-earned money. That day, I'll be the happiest person in your life, knowing that your hard work has paid off. There are many dreams I have for us, and I believe we can achieve them together. once I Love you I will be Loving You until My Last Breath. Love you So much ♥ 💟 💌  💞 💖 💝 💟 💌 "}</p>

//       <div  className="vid-container">
//       <video id='vid' controls autoPlay loop>
//         <source src={song} type="video/mp4" />
        
//       </video>
//     </div>

//     </div>
//     <p>Scroll Down</p>
//      </div>
//   );
//   }

// export default App;

// App.js



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(true);

  useEffect(() => {
    // Simulate loading with a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated 2-second delay
  }, []);

  const buttonStyle = {
    backgroundColor: state ? 'green' : 'red',
    color: 'white',
  };

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="background-video">
          <video autoPlay loop muted playsInline>
            <source src={shanik} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1>100 Days of My Life</h1>
          </div>
          <button
            id="btn"
            onClick={() => {
              setState(!state);
            }}
            style={buttonStyle}
          >
            {state ? 'Display' : 'Hide'}
          </button>
          <p>
            {state
              ? 'This the True  Story of My life, 100 Days of Journey. To Read all the Story Click on Display '
              : `Dear Magic ji, I hope this letter finds you well. I want to share my thoughts and feelings from the past 100 days since I arrived in Delhi. Though it's just a distance of 1000 kilometers that separates us, it often feels like a vast expanse. From the very first day in Delhi, I realized I had left someone special behind, someone who has always been there for me. I understand that we both have careers to build, and this journey has not been easy for either of us. The truth is, it wasn't an easy decision for me to come to Delhi, leaving you behind to face your own challenges. But my career aspirations led me here, and I had no other choice. However, as I immersed myself in my studies, I decided to cut out distractions completely. I left behind all the habits of my past life to focus entirely on this new chapter. I believed our future would be together, even if it meant enduring a long-distance relationship. Soon, I realized that maintaining such a relationship was more challenging than I had anticipated. A month apart already felt too long, and I began to question my decision. Despite the distance, I continued to think about you, talk to you, and strive to strengthen our bond. But after 25 days, everything took a turn for the worse. Our relationship seemed to weaken with each passing day, and I tried my best to prevent it from falling apart. However, I couldn't be there for you when you needed me the most, like when your exams were approaching or when your results were announced. Those were the darkest days of my life, filled with sadness and regret. I couldn't bring myself to explain these feelings, not even to you. I had promised to be by your side, take you to the exam center, and be there when the results came in, no matter the outcome. I admired your hard work and dedication to your studies, and I still do. But deep down, I realized that being physically distant caused you to hide things from me. I began to doubt why you were keeping certain things from me. It's not about your friends; I have no issues with them. I know you well, your character, your values. What bothered me was that something was missing in my life that only you could fill. I thought you should be with me all the time. However, I understand that we're both working hard to secure our futures, and being apart is part of that journey. I'm not certain about our future together due to some of the reasons you've mentioned. But I eagerly await the day when you stand on your own two feet, managing your expenses, and achieving your goals with your hard-earned money. That day, I'll be the happiest person in your life, knowing that your hard work has paid off. There are many dreams I have for us, and I believe we can achieve them together. once I Love you I will be Loving You until My Last Breath. Love you So much ♥ 💟 💌  💞 💖 💝 💟 💌 `}
          </p>

          <div className="vid-container">
            <video id="vid" controls autoPlay loop>
              <source src={song} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

