var qouts = [
  "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br> ― Marilyn Monroe",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”  <br> ― Albert Einstein",
  "“So many books, so little time.”  <br> ― Frank Zappa",
  "“A room without books is like a body without a soul.”  <br> ― Marcus Tullius Cicero",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”  <br> ― Bernard M. Baruch",
  "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”   <br> ― William W. Purkey",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”  <br> ― Dr. Seuss",
  "“You only live once, but if you do it right, once is enough.”   <br> ― Mae West",
  "“Be the change that you wish to see in the world.”  <br> ― Mahatma Gandhi",
  "“In three words I can sum up everything I've learned about life: it goes on.”  <br> ― Robert Frost",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”  <br> ― J.K. Rowling, Harry Potter and the Goblet of Fire",
  "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”  <br> ― Albert Camus",
  "“If you tell the truth, you don't have to remember anything.”  <br> ― Mark Twain",
  "“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .”  <br> ― C.S. Lewis, The Four Loves",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”  <br> ― Maya Angelou",
  "“A friend is someone who knows all about you and still loves you.”  <br> ― Elbert Hubbard",
  "“To live is the rarest thing in the world. Most people exist, that is all.”  <br> ― Oscar Wilde",
  "“Always forgive your enemies; nothing annoys them so much.”  <br> ― Oscar Wilde",
  "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”  <br> ― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”  <br> ― Mahatma Gandhi",
  "“We accept the love we think we deserve.”   <br> ― Stephen Chbosky, The Perks of Being a Wallflower",
  "“Without music, life would be a mistake.”  <br> ― Friedrich Nietzsche, Twilight of the Idols",
  "“I am so clever that sometimes I don't understand a single word of what I am saying.”  <br> ― Oscar Wilde, The Happy Prince and Other Stories",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”  <br> ― Ralph Waldo Emerson",
  "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”  <br> ― Steve Jobs",
  "“Insanity is doing the same thing, over and over again, but expecting different results.” <br> ― Narcotics Anonymous",
  "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”  <br> ― Marilyn Monroe",
  "“It is better to be hated for what you are than to be loved for what you are not.”  <br> ― Andre Gide, Autumn Leaves",
  "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”  <br> ― H. Jackson Brown Jr., P.S. I Love You",
];
var randomNo;
var prvNo;
function showQuote() {
  randomNo = Math.floor(Math.random() * 30);
  console.log(randomNo);
  if (randomNo == prvNo) {
    randomNo = Math.floor(Math.random() * 30);
  }
  document.getElementById("quote").innerHTML = qouts[randomNo];
  prvNo = randomNo;
}
