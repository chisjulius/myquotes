import React, {useState} from 'react'
import './App.css';
import Hoc from './Hoc'




function App() {
  const [counter, setCounter] = useState(110)
  const [input, setInput] = useState ("")
  const [errorMessage, setErrorMessage] = useState("")

  let Quotes = [
    "The greatest glory in living lies not in never falling but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",   
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Whoever is happy will make others happy too. -Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
    "Life is either a daring adventure or nothing at all. -Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
     "Life is never fair, and perhaps it is a good thing for most of us that it is not. -Oscar Wilde",
     "The only impossible journey is the one you never begin. -Tony Robbins",
     "In this life we cannot do great things. We can only do small things with great love. -Mother Teresa",
     "Only a life lived for others is a life worthwhile. -Albert Einstein",
     "The purpose of our lives is to be happy. -Dalai Lama",
     "Life is what happens when you're busy making other plans. -John Lennon",
     "You only live once, but if you do it right, once is enough. -Mae West",
     "Live in the sunshine, swim the sea, drink the wild air. -Ralph Waldo Emerson",
     "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
     "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
     "Life is really simple, but we insist on making it complicated. -Confucius",
     "May you live all the days of your life. -Jonathan Swift",
     "Life itself is the most wonderful fairy tale. -Hans Christian Andersen",
     "Do not let making a living prevent you from making a life. -John Wooden",
     "Life is ours to be spent, not to be saved. -D. H. Lawrence",
     "Keep smiling, because life is a beautiful thing and there's so much to smile about. -Marilyn Monroe",
     "Life is a long lesson in humility. -James M. Barrie",
     "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
     "Love the life you live. Live the life you love. -Bob Marley",
     "Life is either a daring adventure or nothing at all. -Helen Keller",
     "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
     "Life is made of ever so many partings welded together. -Charles Dickens",
     "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking. -Steve Jobs",
     "Life is trying things to see if they work. -Ray Bradbury",
     "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
     "Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill",
     "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
     "The way to get started is to quit talking and begin doing. -Walt Disney",
     "If you really look closely, most overnight successes took a long time. -Steve Jobs",
     "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
     "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
     "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama",
     "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
     "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
     "Don't be distracted by criticism. Remember -- the only taste of success some people get is to take a bite out of you. -Zig Ziglar",
     "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
     "I never dreamed about success, I worked for it. -Estee Lauder",
     "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit. -Conrad Hilton",
     "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. -Colin Powell",
     "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
     "It is better to fail in originality than to succeed in imitation. -Herman Melville",
      "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. -Jim Rohn",
      "The road to success and the road to failure are almost exactly the same. -Colin R. Davis",
      "I failed my way to success. -Thomas Edison",
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
      "If you really look closely, most overnight successes took a long time. -Steve Jobs",
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. -David Brinkley",
      "Things work out best for those who make the best of how things work out. -John Wooden",
      "Try not to become a man of success. Rather become a man of value. -Albert Einstein",
      "Don't be afraid to give up the good to go for the great. -John D. Rockefeller",
      "Always bear in mind that your own resolution to success is more important than any other one thing. -Abraham Lincoln",
      "Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill",
      "You know you are on the road to success if you would do your job and not be paid for it. -Oprah Winfrey",
      "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work. -Thomas J. Watson",
      "If you genuinely want something, don't wait for it -- teach yourself to be impatient. -Gurbaksh Chahal",
      "The only place where success comes before work is in the dictionary. -Vidal Sassoon",
      "If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn",
      "Before anything else, preparation is the key to success. -Alexander Graham Bell",
      "People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy. -Tony Robbins",
      "You miss 100% of the shots you don't take. -Wayne Gretzky",
      "Whether you think you can or you think you can't, you're right. -Henry Ford",
      "I have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks",
      "I alone cannot change the world, but I can cast a stone across the water to create many ripples. -Mother Teresa",
      "Nothing is impossible, the word itself says, ‘I'm possible!' -Audrey Hepburn",
      "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand",
      "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou",
      "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand",
      "Winning isn't everything, but wanting to win is. -Vince Lombardi",
      "Whether you think you can or you think you can't, you're right. -Henry Ford",
      "I have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks",
      "Too many of us are not living our dreams because we are living our fears. -Les Brown",
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -Henry Ford",
      "It does not matter how slowly you go as long as you do not stop. -Confucius",
      "Nothing is impossible, the word itself says, ‘I'm possible!' -Audrey Hepburn",
      "Life is 10% what happens to me and 90% of how I react to it. -Charles Swindoll",
      "You may be disappointed if you fail, but you are doomed if you don't try. -Beverly Sills",
      "Dream big and dare to fail. -Norman Vaughan",
      "Everything you've ever wanted is on the other side of fear. -George Addair",
      "An unexamined life is not worth living. -Socrates",
      "How wonderful it is that nobody need wait a single moment before starting to improve the world. -Anne Frank",
      "The most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart",
      "You become what you believe. -Oprah Winfrey",

] 
const [quotes, setQuotes] = useState(Quotes)
  
const handleChange =(e) =>{
  setInput(e.target.value);

  let quotesToMatch = Quotes.filter((i) =>{
    return i.toLowerCase().match(input.toLowerCase())
  })
  if(!quotesToMatch.length){
    setQuotes([])
    setErrorMessage("No quotes found")
    return 
  }
  setQuotes(quotesToMatch)
  setErrorMessage("")
}





  return (
    <div className="App">
      <nav className="nav-wrapper grey darken-4 ">
        <div className="container ">
          <div className="row">
            <div className="col l6 hide-on-med-and-down">
               <h4>MY QUOTES</h4>
            </div>
            <div className="col s12 l6">
              <div className="input-field">
                <i className="material-icons prefix">search</i>
              <input type="text"  className="white-text" id="quotes" onChange={handleChange} value={input} />
              <label htmlFor="quotes">Search Quotes</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
       <div className="container  valign-wrapper box"
          onClick = {e => setCounter(counter + Math.floor(Math.random()*110))} 
          >
            <div className="row">
                <div className="col s10 offset-s1">
                   <h4> {errorMessage.length > 0 ? errorMessage : quotes[counter% Quotes.length]}</h4>
                </div>
            </div>
           
       </div>
    </div>

  );
}

export default Hoc(App)
