const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one pange.",
        author: "Saint Augustine",
    },
    {
        quote: "God doesn't require us to succeed, he only requires that you try.",
        author: "Mother Teresa",
    },
    {
        quote: "Only actions give life strength, Only moderation gives it a charm.",
        author: "Jean Paul Richter",
    },
    {
        quote: "I'm as poud of we don't do as I am of what we do.",
        author: "Steve Jobs",
    },
    {
        quote: "No one has ever made a difference by being like everyone else",
        author: "Pineas Taylor Barnum",
    },
    {
        quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        author: "Dale Carnegie",
    },
    {
        quote: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.",
        author: "Kobe Bryant",
    },
    {
        quote: "Don't pay attention to what they write about you. Just measure it in inches.",
        author: "Andy Warhol"
    }
];

const quote = document.querySelector("#quote_content");
const author = document.querySelector("#author");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;