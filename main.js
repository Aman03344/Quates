const qouate = [
    {
        id: 1,
        tContent: "Jawaharlal Nehru (November 14, 1889 – May 27, 1964) was India’s first Prime Minister and a prominent freedom fighter. His vision of a modern, secular, and progressive India laid the foundation for the nation’s development.",
        image: "./nehru.png",
    },
    {
        id: 2,
        tContent: "Lal Bahadur Shastri (October 2, 1904 – January 11, 1966) was the second Prime Minister of India, known for his leadership during the 1965 India-Pakistan war and for promoting the slogan 'Jai Jawan Jai Kisan.' His efforts in improving India's agricultural and defense sectors left a lasting legacy.",
        image: "./shastri.png",
    },
    {
        id: 3,
        tContent: "APJ Abdul Kalam (October 15, 1931 – July 27, 2015), known as the Missile Man of India, was a renowned scientist and the 11th President of India. He played a key role in India’s space and defense programs and inspired millions with his vision for a developed India.",
        image: "./kalam.png",
    },
    {
        id: 4,
        tContent: "Rabindranath Tagore (1861–1941), a poet and philosopher, was the first non-European Nobel laureate in Literature. His work, including Gitanjali, greatly influenced literature, music, and the arts.",
        image: "./tagore.png",
    },
    {
        id: 5,
        tContent: "Sardar Vallabhbhai Patel (1875–1950), India's first Deputy PM and Home Minister, is known as the Iron Man of India for uniting over 500 princely states into the Indian Union.",
        image: "./patel.png",
    },
];

let textContent = document.querySelector("#textContent");
let btn = document.querySelector("#btn");
let quoteImage = document.querySelector(".img-section img");

const runEvent = () => {
    const random = Math.floor(Math.random() * qouate.length); 
    const selectedQuote = qouate[random];

    textContent.innerText = selectedQuote.tContent; 
    quoteImage.src = selectedQuote.image; 

    // Adjust width for Patel's image only
    if (selectedQuote.image.includes("patel.png")) {
        quoteImage.style.width = "20%"; 
    } 
    
};

btn.addEventListener("click", runEvent);
