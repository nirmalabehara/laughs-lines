import React, { useState } from "react";
import "../styles/LoveHacks.css";  // Import CSS file

const loveHacks = [
  { question: "😏 How can I propose to my crush?", answer: "Confidence is key! 🔑 Start with a sweet compliment 🍬, make eye contact 👀, and just say what you feel 💖." },
  { question: "💬 How do I start a flirty conversation?", answer: "Open with a playful question 🎭 like, ‘If we were in a rom-com 🎥, what would our meet-cute scene be?’ 😉" },
  { question: "💘 What’s a smooth way to ask someone out?", answer: "‘I have two tickets 🎟️ to an amazing experience… but I need the perfect partner 💑 to join me. Interested? 😉’" },
  { question: "👀 How do I know if someone likes me back?", answer: "Watch their body language! 🕵️‍♂️ If they lean in when talking 🗣️, make frequent eye contact 👁️, or text often 📱, it’s a good sign!" },
  { question: "🔥 How do I keep the spark alive in a relationship?", answer: "Surprise texts 📱, unexpected date nights 🍽️, and spontaneous ‘I miss you’ messages! ❤️" },
  { question: "🤣 How do I make my crush laugh?", answer: "Hit them with a classic: ‘Are you French? 🇫🇷 Because Eiffel for you!’ 😆" },
  { question: "💡 What’s the best way to make a first impression?", answer: "Confidence + a genuine smile 😊 = Unstoppable charm! 💯" },
  { question: "🌹 How do I plan a romantic date?", answer: "Keep it personal! A cozy picnic 🍉, a stargazing night 🌟, or a fun cooking date 🍝." },
  { question: "😍 What’s a cute text to send my crush?", answer: "‘I was having a great day… then I saw your text, and now it’s even better! 😊’" },
  { question: "💖 How do I make someone feel special?", answer: "Personalized gifts 🎁, genuine compliments 💬, and making time for them! ⏳" },
  { question: "🥰 How can I tell if I’m in love?", answer: "If their happiness means everything to you 💕, and their absence feels like a missing piece 🧩, then it’s love!" },
  { question: "😜 What’s a flirty way to compliment someone?", answer: "‘Are you a magician? 🎩 Because whenever I look at you, everyone else disappears!’ 😍" },
  { question: "😏 How do I tease my crush playfully?", answer: "Challenge them to a fun bet 🎲, joke about their quirks, or playfully mock their favorite movie choice 🍿." },
  { question: "🎁 What’s a great surprise gift idea?", answer: "A handwritten letter 💌, a custom playlist 🎶, or a jar full of little love notes! ✍️" },
  { question: "🍽️ What’s the best food for a date night?", answer: "Anything that can be shared! 🍕 Fondue, sushi, or even a heart-shaped pizza! ❤️" },
  { question: "💬 What’s a romantic text for a good morning?", answer: "‘Rise and shine, beautiful! ☀️ I hope your day is as amazing as your smile. 😊’" },
  { question: "🌙 How do I say goodnight in a cute way?", answer: "‘Sleep tight, dream of me 😘, and let the stars ✨ watch over you.’" },
  { question: "📱 How often should I text my crush?", answer: "Enough to show interest, but not too much! Keep the mystery alive. 😉" },
  { question: "🤔 What’s a flirty question to ask?", answer: "‘If we were stuck on a deserted island 🏝️, what’s the first thing you’d do?’" },
  { question: "💑 How do I get out of the friend zone?", answer: "Start flirting more 😏, make subtle romantic gestures, and show your confidence!" },
  { question: "🤷‍♂️ Why do people play hard to get?", answer: "It’s all about the chase! 🏃‍♀️ A little mystery makes things exciting. 😉" },
  { question: "💘 How do I make my crush miss me?", answer: "Be memorable! Leave them wanting more after every conversation. 🎭" },
  { question: "❤️ How do I make a long-distance relationship work?", answer: "Frequent video calls 📹, surprise gifts 🎁, and constant reassurance 💕." },
  { question: "😂 What’s a funny way to flirt?", answer: "‘Are you WiFi? Because I’m totally feeling a connection. 📶😉’" },
  { question: "🎵 What’s a romantic song to dedicate to someone?", answer: "‘Perfect’ by Ed Sheeran or ‘Can’t Help Falling in Love’ by Elvis Presley. 🎶" },
  { question: "🤭 What’s a subtle way to flirt?", answer: "Use eye contact 👀, touch their arm casually ✋, and drop hints in conversations." },
  { question: "💌 How do I write a love letter?", answer: "Start with a sweet memory, talk about why they’re special, and end with a promise. 💖" },
  { question: "💭 How do I make someone dream about me?", answer: "Tell them something sweet before bed! ‘I hope I visit your dreams tonight. 😉’" },
  { question: "📸 What’s a cute caption for a couple’s photo?", answer: "‘Partners in crime 🔫💖 and love 💕’ or ‘You + Me = Forever’ ❤️" },
  { question: "👀 How do I get someone’s attention?", answer: "Confidence! Walk past them with a smile 😊 or make an inside joke only they understand. 😏" },
  { question: "💋 What’s a flirty way to compliment someone’s lips?", answer: "‘Your lips look lonely… they need company. 😉💋’" },
  { question: "💖 How do I make a guy/girl chase me?", answer: "Be confident, show interest but don’t overdo it, and be a little mysterious. 🔥" },
  { question: "🌍 What’s the best place for a romantic trip?", answer: "Paris 🇫🇷, Santorini 🇬🇷, or even a cozy cabin in the mountains. 🏔️" },
  { question: "🔥 What’s a sexy way to say ‘I miss you’?", answer: "‘Every second without you feels like an eternity… hurry back to me. 😘’" },
  { question: "💑 How do I build a deep emotional connection?", answer: "Listen actively 🎧, share your dreams, and make them feel truly valued. ❤️" },
  { question: "🥺 How do I make someone fall for me?", answer: "Be kind, be funny, be confident… and most importantly, be yourself! 💕" },
  { question: "💃 What’s a flirty way to invite someone out?", answer: "‘I heard laughter is the best medicine… so let’s grab dinner and let me be your doctor. 😏’" },
  { question: "🙈 How do I stop being shy around my crush?", answer: "Practice talking in the mirror 🪞, take deep breaths, and remind yourself—they’re just human too! 😜" },
  { question: "😍 What’s a simple way to make someone feel loved?", answer: "Hold their hand unexpectedly, look into their eyes, and say, ‘I appreciate you.’ ❤️" },
  { question: "🌟 What’s the key to a lasting relationship?", answer: "Trust, laughter, and never stopping the little romantic gestures. 💖" }
];


function LoveHacksPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="love-hacks-container">
      <h1 className="love-hacks-title">💘 Love Hacks 💬</h1>
      <p className="love-hacks-subtitle">Click on a question to reveal the answer! 💖</p>

      <div className="love-hacks-list">
        {loveHacks.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              className="love-hacks-question"
            >
              {item.question}
            </button>
            {selectedIndex === index && <p className="love-hacks-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveHacksPage;
