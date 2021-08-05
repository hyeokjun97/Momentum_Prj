const quotes = [
    {
        quote: "Man's love is of man's life a part; it is a woman's whole existence. In her first passion, a woman loves her lover, in all the others all she loves is love.",
        author: "Lord Byron",
    },
    {
        quote: "The road to success is not easy to navigate, but with hard work, drive and passion, it's possible to achieve the American dream.",
        author: "Tommy Hilfiger",
    },
    {
        quote: "Leadership is not about a title or a designation. It's about impact, influence and inspiration. Impact involves getting results, influence is about spreading the passion you have for your work, and you have to inspire team-mates and customers.",
        author: "Robin S. Sharma",
    },
    {
        quote: "Singing is my passion, my first love and the secret of my energy. Music to me is like finding my inner self, my soul. It gives me a great joy to see audiences enjoying with me. I have given my heart to singing. When I sing, I can feel romance in everything around me.",
        author: "Kailash Kher",
    },
    {
        quote: "When you have balance in your life, work becomes an entirely different experience. There is a passion that moves you to a whole new level of fulfillment and gratitude, and that's when you can do your best... for yourself and for others.",
        author: "Cara Delevingne",
    },
    {
        quote: "Follow your passion, be prepared to work hard and sacrifice, and, above all, don't let anyone limit your dreams.",
        author: "Donovan Bailey",
    },
    {
        quote: "You can do anything as long as you have the passion, the drive, the focus, and the support.",
        author: "Sabrina Bryan",
    },
    {
        quote: "Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. Whether you want to be a chef, doctor, actor, or a mother, be passionate to get the best result.",
        author: "Alia Bhatt",
    },
    {
        quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
        author: "Maya Angelou",
    },
    {
        quote: "Nothing great in the world has ever been accomplished without passion.",
        author: "Georg Wilhelm Friedrich Hegel",
    },

];
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;