let currentAudio = null; // Variable, um die aktuelle Audiodatei zu speichern
let audioElement = null;

const starsContainer = document.getElementById('stars');
for (let i = 0; i < 70; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = Math.random() * 3 + 'px';
  star.style.height = star.style.width;
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 1 + 's';
  starsContainer.appendChild(star);
}
for (let i = 0; i < 30; i++) {
    const starUnik = document.createElement('div');
    starUnik.className = 'star_unik';
    starUnik.style.width = Math.random() * 3 + 'px';
    starUnik.style.height = starUnik.style.width;
    starUnik.style.left = Math.random() * 103 + '%';
    starUnik.style.top = Math.random() * 103 + '%';
    starUnik.style.animationDelay = Math.random() * 1.2 + 's';
    starsContainer.appendChild(starUnik);
}

const figures = [
  { name: 'Marcus Aurelius', title: 'Roman Emperor & Philosopher', type: 'philosopher', image: 'aurelius.jpg', open: 'aurelius' },
  { name: 'Plato', title: 'Greek Philosopher', type: 'philosopher', image: 'plato.jpg', open: 'plato' },
  { name: 'Aristotle', title: 'Greek Philosopher', type: 'philosopher', image: 'aristoteles.jpg', open: 'aristotle' },
  { name: 'Friedrich Nietzsche', title: 'German Philosopher', type: 'philosopher', image: 'nietzsche.jpg', open: 'nietzsche' },
  { name: 'Julius Caesar', title: 'Roman Emperor', type: 'leader', image: 'cäsar.jpg', open: 'cäsar' },
  { name: 'Leonardo da Vinci', title: 'Renaissance Polymath', type: 'artist', image: 'leonardo.jpg', open: 'leonardo' },
  { name: 'Buddha', title: 'Spiritual Teacher', type: 'spiritual', image: 'buddha.jpg', open: 'buddha' },
  { name: 'Marco Polo', title: 'Venetian Merchant', type: 'explorer', image: 'marco.jpg', open: 'marco' },
  { name: 'James Cook', title: 'British Explorer', type: 'explorer', image: 'cook.jpg', open: 'cook' },
  { name: 'William Shakespeare', title: 'English Playwright', type: 'artist', image: 'shakespeare.jpg', open: 'shapespeare' },
  { name: 'Leonidas', title: 'Spartan King', type: 'leader', image: 'leonidas.jpg', open: 'leonidas' },
  { name: 'Confucius', title: 'Chinese philosopher', type: 'philosopher', image: 'Confucius.jpg', open: 'confucius' },
  { name: 'Socrates', title: 'Greek Philosopher', type: 'philosopher', image: 'Socrates.jpg', open: 'socrates' },
  { name: 'Immanuel Kant', title: 'German Philosopher', type: 'philosopher', image: 'kant.jpeg', open: 'kant' },

];













const carousel = document.getElementById('carousel');
let currentRotation = 0;
const radius = window.innerWidth <= 768 ? 370 : 495;



// Touch handling variables
let touchStartX = 0;
let touchEndX = 0;

// Create cards
figures.forEach((figure, index) => {
    const card = document.createElement('div');
    card.className = `card ${figure.type}`;
    
    const angle = (index * (360 / figures.length));
    
    card.style.transform = `
      rotateY(${angle}deg)
      translateZ(${radius}px)
    `;

    card.innerHTML = `
        <div class="card-bg personality-card" data-personality="${figure.name}" onclick="showPhilosopher('${figure.open}')">
            <div class="image-container">
            <img src="${figure.image}" alt="${figure.name}">
            </div>
        </div>
        <div class="card-content">
            <div class="name">${figure.name}</div>
            <div class="title">${figure.title}</div>
        </div>
    `;

    carousel.appendChild(card);
  });

function rotate(direction) {
  const step = 360 / figures.length;
  if (direction === 'left') {
    currentRotation += step;
  } else {
    currentRotation -= step;
  }
  carousel.style.transform = `rotateY(${currentRotation}deg)`;
}

// Touch event handlers
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => {
  const swipeThreshold = 48; // Minimum distance for a swipe
  const swipeDistance = touchEndX - touchStartX;
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    // If swipe distance is greater than threshold, rotate
    if (swipeDistance > 0) {
      rotate('left'); // Swipe right
    } else {
      rotate('right'); // Swipe left
    }
  }
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') rotate('left');
  if (e.key === 'ArrowRight') rotate('right');
});





//Philosophers Audio Page
// Personalities and their associated content
const personalities = {
  "Marcus Aurelius": {
    title: "Roman Emperor & Philosopher (121–180)",
    quotes: [
      '"The universe is change; our life is what our thoughts make it."',
      '"Waste no more time arguing what a good man should be. Be one."',
      '"The best revenge is to be unlike him who performed the injury."',
      '"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."',
      '"You have power over your mind, not external events. Realize this, and you will find strength."',
      '"The impediment to action advances action. What stands in the way becomes the way."',
      '"The happiness of your life depends upon the quality of your thoughts. Therefore, guard your thoughts and take care that they align with virtue and reason."',
      '"When you wake up, remind yourself: Today I will meet difficult people, but they cannot harm me if I stay true to myself and the good."' 
    ],
    tracks: [
      { day: 1, audioFile: 'audio/marcus-aurelius1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Plato": {
    title: "Greek Philosopher (c. 427–347 BCE)",
    quotes: [
      '"The beginning is the most important part of the work."',       
      '"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."',
      '"Be kind, for everyone you meet is fighting a hard battle."',       
      '"Wise men speak because they have something to say; fools because they have to say something."',
      '"Wisdom begins in wonder."',       
      '"The measure of a man is what he does with power."',
      '"Education is the kindling of a flame, not the filling of a vessel."',       
      '"He who learns to rule himself is greater than he who rules others.."'   
    ],
    tracks: [
      { day: 1, audioFile: 'audio/platon1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Aristotle": {
    title: "Greek Philosopher (384–322 BCE)",
    quotes: [
      '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."',
      '"The whole is greater than the sum of its parts."',
      '"Knowing yourself is the beginning of all wisdom."',
      '"Excellence is never an accident."',
      '"The aim of the wise is not to secure pleasure, but to avoid pain."',
      '"It is the mark of an educated mind to entertain a thought without accepting it."',
      '"Educating the mind without educating the heart is no education at all."',
      '"Happiness depends upon ourselves."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio/aristoteles1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Friedrich Nietzsche": {
    title: "German Philosopher (1844–1900)",
    quotes: [
      '"He who has a why to live can bear almost any how."',
      '"That which does not kill us makes us stronger."',
      '"There are no facts, only interpretations."',
      '"Without music, life would be a mistake."',
      '"The individual has always had to struggle to keep from being overwhelmed by the tribe."',
      '"The man of knowledge must be able not only to love his enemies but also to hate his friends."',
      '"In every real man, a child is hidden that wants to play."',
      '"No one can build you the bridge on which you must cross the river of life—only you can."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio21/nietzsche1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Julius Caesar": {
    title: "Roman Emperor & Military Commander (100–44 BCE)",
    quotes: [
      '"I came, I saw, I conquered."',
      '"Experience is the teacher of all things."',
      '"It is easier to find men who will volunteer to die than to find those who are willing to endure pain with patience."',
      '"The die is cast."',
      '"Cowards die many times before their actual deaths."',
      '"It is not these well-fed long-haired men that I fear, but the pale and the hungry-looking."',
      '"If you must break the law, do it to seize power: in all other cases observe it."',
      '"Fortune favors the bold."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio29/cäsar1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Leonardo da Vinci": {
    title: "Italian Polymath (1452–1519)",
    quotes: [
      '"Learning never exhausts the mind, it only ignites it."',
      '"Simplicity is the ultimate sophistication."',
      '"Art is never finished, only abandoned."',
      '"I have been impressed with the urgency of doing. Knowing is not enough; we must apply."',
      '"Art is the queen of all sciences communicating knowledge to all the generations of the world."',
      '"The greatest deception men suffer is from their own opinions."',
      '"You can have no dominion greater or less than that over yourself."',
      '"Nature is the source of all true knowledge. She has her own logic, her own laws, she has no effect without cause, nor invention without necessity."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio37/leonardo1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Buddha": {
    title: "Spiritual Teacher (c. 563–483 BCE)",
    quotes: [
      '"Peace comes from within. Do not seek it without."',
      '"Three things cannot be long hidden: the sun, the moon, and the truth."',
      '"The mind is everything. What you think you become."',
      '"Health is the greatest gift, contentment the greatest wealth."',
      '"You only lose what you cling to."',
      '"It is better to travel well than to arrive."',
      '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."',
      '"Holding onto anger is like drinking poison and expecting the other person to die."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio45/buddha1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Marco Polo": {
    title: "Venetian Explorer (1254–1324)",
    quotes: [
      '"I have not told half of what I saw."',
      '"Without stones there is no arch."',
      '"I did not tell half of what I saw, for I knew I would not be believed."',
      '"You can’t cross the sea merely by standing and staring at the water."',
      '"The world is a book, and those who do not travel read only one page."',
      '"A man who is not a good servant will not be a good master."',
      '"The greatest adventure is what lies ahead."',
      '"There is a world of difference between the knowledge gained through experience and the knowledge found in books."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio53/marco1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "James Cook": {
    title: "British Explorer & Navigator (1728–1779)",
    quotes: [
      '"Ambition leads me not only farther than any other man has been before me, but as far as I think it possible for man to go."',
      '"Do just once what others say you cannot do, and you will never pay attention to their limitations again."',
      '"I had ambition not only to go farther than any man had ever been before, but as far as it was possible for a man to go."',
      '"Bad weather has a way of following good sailors."',
      '"I am not afraid to die, but I am afraid of the loss of the opportunity to do good."',
      '"We must not forget that it is not the size of the ship, but the ability of the crew, that makes a successful voyage."',
      '"No great discovery was ever made without a bold guess."',
      '"I am not a man who seeks praise, but I do seek to leave a legacy of discovery."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio61/cook1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "William Shakespeare": {
    title: "English Playwright & Poet (1564–1616)",
    quotes: [
      '"All the world is a stage, and all the men and women merely players."',
      '"We know what we are, but know not what we may be."',
      '"To be, or not to be, that is the question."',
      '"Love all, trust a few, do wrong to none."',
      '"This above all: to thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man."',
      '"It is not in the stars to hold our destiny but in ourselves."',
      '"The better part of Valour, is Discretion."',
      '"We know what we are, but know not what we may be."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio69/shakespear1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Leonidas": {
    title: "Spartan King and Warrior (c. 540–480 BCE)",
    quotes: [
      '"Come and take them!"',
      '"Eat well, for tonight we dine in Hades."',
      '"This is Spartas law: Either come back with your shield or on it."',
      '"Better to fight for something than live for nothing."',
      '"Freedom is the only worthy goal in life. It is won by disregarding fear."',
      '"With courage, we conquer not just our enemies, but ourselves."',
      '"The strength of a warrior is not measured by the sword, but by the heart that wields it."',
      '"A man who fights with honor is never defeated, no matter the outcome."',
      '"In unity, there is power; in division, there is defeat."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio77/leonidas1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Socrates": {
    title: "Greek Philosopher (469–399 BCE)",
    quotes: [
      '"The way to gain a good reputation is to endeavor to be what you desire to appear."',
      '"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."',
      '"He who wants to change the world should first change himself."',
      '"Understanding a question is half an answer."',
      '"A multitude of books distracts the mind."',
      '"We cannot live better than in seeking to become better."',
      '"I call myself a peaceful warrior because the battles we fight are on the inside."',
      '"Be slow to fall into friendship, but when thou art in, continue firm and constant."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio88/Socrates1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Confucius": {
    
    "title": "Chinese Philosopher (551–479 BCE)",
    "quotes": [
      "The superior man is modest in his speech but exceeds in his actions.",
      "Real knowledge is to know the extent of one’s ignorance.",
      "When we see men of a contrary character, we should turn inwards and examine ourselves.",
      "Ignorance is the night of the mind, but a night without moon and star.",
      "The superior man acts before he speaks, and afterwards speaks according to his actions.",
      "If we don't know life, how can we know death?",
      "The strength of a nation derives from the integrity of the home.",
      "He who learns but does not think, is lost. He who thinks but does not learn is in great danger."
    ],
    
    tracks: [
      { day: 1, audioFile: 'audio96/Confucius1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  },
  "Immanuel Kant": {
    title: "German Philosopher (1724–1804)",
    quotes: [
      '"Sapere aude! Dare to use your own reason!"',
      '"Act only according to that maxim whereby you can at the same time will that it should become a universal law."',
      '"Enlightenment is man’s emergence from his self-imposed immaturity."',
      '"The starry sky above me and the moral law within me."', 
      '"Thoughts without content are empty; intuitions without concepts are blind."',
      '"Freedom is the only idea belonging to the philosophy of reason."',
      '"Duty! Sublime and mighty name that contains nothing pleasing to the senses."',
      '"The only thing that is good without qualification is a good will."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio104/kant1.mp3' },
      { day: 2, audioFile: 'audio/2.mp3' },
      { day: 3, audioFile: 'audio/2.mp3' },
      { day: 4, audioFile: 'audio/2.mp3' },
      { day: 5, audioFile: 'audio/2.mp3' },
      { day: 6, audioFile: 'audio/2.mp3' },
      { day: 7, audioFile: 'audio/2.mp3' },
      { day: 8, audioFile: 'audio/2.mp3' },
      { day: 9, audioFile: 'audio/2.mp3' },
      { day: 10, audioFile: 'audio/2.mp3' },
      { day: 11, audioFile: 'audio/2.mp3' },
      { day: 12, audioFile: 'audio/2.mp3' },
      { day: 13, audioFile: 'audio/2.mp3' },
      { day: 14, audioFile: 'audio/2.mp3' },
      { day: 15, audioFile: 'audio/2.mp3' },
      { day: 16, audioFile: 'audio/2.mp3' },
      { day: 17, audioFile: 'audio/2.mp3' },
      { day: 18, audioFile: 'audio/2.mp3' },
      { day: 19, audioFile: 'audio/2.mp3' },
      { day: 20, audioFile: 'audio/2.mp3' },
      { day: 21, audioFile: 'audio/2.mp3' },
      { day: 22, audioFile: 'audio/2.mp3' },
      { day: 23, audioFile: 'audio/2.mp3' },
      { day: 24, audioFile: 'audio/2.mp3' },
      { day: 25, audioFile: 'audio/2.mp3' },
      { day: 26, audioFile: 'audio/2.mp3' },
      { day: 27, audioFile: 'audio/2.mp3' },
      { day: 28, audioFile: 'audio/2.mp3' },
      { day: 29, audioFile: 'audio/2.mp3' }
    ]
  }

};

function createBackgroundParticles() {
  const particle = document.createElement('div');
  particle.className = 'background-particle';
  particle.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: #ffd700;
      pointer-events: none;
  `;
  
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;
  
  document.body.appendChild(particle);
  
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 100 + 50;
  const duration = Math.random() * 2000 + 3000;
  
  particle.animate([
      { transform: 'translate(0, 0)', opacity: 0 },
      { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0.5, offset: 0.5 },
      { transform: `translate(${Math.cos(angle) * distance * 2}px, ${Math.sin(angle) * distance * 2}px)`, opacity: 0 }
  ], {
      duration: duration,
      easing: 'ease-out'
  }).onfinish = () => {
      particle.remove();
      createBackgroundParticles();
  };
}

// Create initial background particles
for (let i = 0; i < 20; i++) {
  createBackgroundParticles();
}

class AudioPlayer {
  constructor() {
    this.initializeElements();
    this.initializeState();
    this.createLines();
    this.setupEventListeners();
    this.initializeQuoteRotation();
    
    // Set default personality
    this.setActivePersonality("Marcus Aurelius");
  }

  initializeElements() {
    // Audio elements
    this.audio = new Audio();
    this.playButton = document.querySelector('.play-button');
    this.playIcon = document.querySelector('.play-icon');
    this.pauseIcon = document.querySelector('.pause-icon');
    this.progressRing = document.querySelector('.progress-ring');
    this.timeDisplay = document.querySelector('.time-display');
    this.personalityName = document.getElementById('personalityName');
    this.dayTitle = document.getElementById('dayTitle');
    
    // Control buttons
    this.prevDayBtn = document.querySelector('.prev-day');
    this.nextDayBtn = document.querySelector('.next-day');
    this.prevTrackBtn = document.getElementById('prev-track');
    this.nextTrackBtn = document.getElementById('next-track');
    this.rewindBtn = document.getElementById('rewind');
    this.forwardBtn = document.getElementById('forward');
    this.playPauseBtn = document.getElementById('play-pause');
    this.muteBtn = document.getElementById('mute');
    this.volumeSlider = document.getElementById('volume');
    
    // Progress elements
    this.progressContainer = document.getElementById('progressContainer');
    this.progressLine = document.getElementById('progressLine');
    this.quoteElement = document.querySelector('.wisdom-quote');

    // Add personality navigation buttons
    this.prevPersonalityBtn = document.createElement('div');
    this.nextPersonalityBtn = document.createElement('div');
    this.prevPersonalityBtn.className = 'nav-arrow prev-personality';
    this.nextPersonalityBtn.className = 'nav-arrow next-personality';
    this.prevPersonalityBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    this.nextPersonalityBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    this.personalityTitle = document.getElementById('personalityTitle');
    this.prevPersonalityBtn = document.querySelector('.prev-personality');
    this.nextPersonalityBtn = document.querySelector('.next-personality');
    this.dayTitle = document.getElementById('dayTitle');
    this.prevDayBtn = document.querySelector('.prev-day');
    this.nextDayBtn = document.querySelector('.next-day');

    this.personalityCards = document.querySelectorAll('.personality-card');
    
    // Insert personality navigation before title container
    const titleContainer = document.querySelector('.title-container');
    titleContainer.parentNode.insertBefore(this.prevPersonalityBtn, titleContainer);
    titleContainer.parentNode.insertBefore(this.nextPersonalityBtn, titleContainer.nextSibling);
  }

  initializeState() {
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.lastVolume = 1;
    this.audio.volume = 1;
    this.currentQuoteIndex = 0;
  }

  createLines() {
    const linesContainer = document.querySelector('.lines');
    for (let i = 0; i < 72; i++) {
      const line = document.createElement('div');
      line.className = 'line';
      line.style.transform = `rotate(${i * 5}deg)`;
      linesContainer.appendChild(line);
    }
  }

  setupEventListeners() {
    // Play/Pause
    this.playButton.addEventListener('click', () => this.togglePlay());
    this.playPauseBtn.addEventListener('click', () => this.togglePlay());
    
    // Navigation
    this.prevDayBtn.addEventListener('click', () => this.previousTrack());
    this.nextDayBtn.addEventListener('click', () => this.nextTrack());
    this.prevTrackBtn.addEventListener('click', () => this.previousTrack());
    this.nextTrackBtn.addEventListener('click', () => this.nextTrack());
    
    // Timeline and Progress
    this.progressContainer.addEventListener('click', (e) => this.seek(e));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.handleTrackEnd());
    
    // Controls
    this.rewindBtn.addEventListener('click', () => this.rewind());
    this.forwardBtn.addEventListener('click', () => this.forward());
    this.muteBtn.addEventListener('click', () => this.toggleMute());
    this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
    
    // Speed Control
    document.querySelectorAll('.speed-button').forEach(button => {
      button.addEventListener('click', () => this.setSpeed(button));
    });

    // Add personality navigation listeners
    this.prevPersonalityBtn.addEventListener('click', () => this.previousPersonality());
    this.nextPersonalityBtn.addEventListener('click', () => this.nextPersonality());

     // Add personality navigation
     this.prevPersonalityBtn.addEventListener('click', () => this.changePersonality('prev'));
     this.nextPersonalityBtn.addEventListener('click', () => this.changePersonality('next'));
     
     // Add day navigation
     this.prevDayBtn.addEventListener('click', () => this.changeDay('prev'));
     this.nextDayBtn.addEventListener('click', () => this.changeDay('next'));
    
     // Add card click listeners
    this.personalityCards.forEach(card => {
      card.addEventListener('click', () => {
        const personalityName = card.dataset.personality;
        this.setActivePersonality(personalityName);
      });
    });
  }

  setActivePersonality(personalityName) {
    // Update active card visual state
    this.personalityCards.forEach(card => {
      card.classList.toggle('active', card.dataset.personality === personalityName);
    });

    // Update current personality
    this.currentPersonality = personalityName;
    this.currentDay = 1;
    
    // Update display
    this.updateDisplay();
    
    // Reset and start playing first track
    this.loadTrack(0);
    
    // Update quote
    this.currentQuoteIndex = 0;
    this.updateQuote();
  }

  changePersonality(direction) {
    const personalityNames = Object.keys(personalities);
    let currentIndex = personalityNames.indexOf(this.currentPersonality);
    
    if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
    } else if (direction === 'next' && currentIndex < personalityNames.length - 1) {
      currentIndex++;
    }
    
    this.currentPersonality = personalityNames[currentIndex];
    this.currentDay = 1; // Reset day when changing personality
    this.updateDisplay();
  }

  changeDay(direction) {
    const personality = personalities[this.currentPersonality];
    const maxDays = personality.tracks.length;
    
    if (direction === 'prev' && this.currentDay > 1) {
      this.currentDay--;
    } else if (direction === 'next' && this.currentDay < maxDays) {
      this.currentDay++;
    }
    
    this.updateDisplay();
    this.loadTrack(this.currentDay - 1);
  }

  updateDisplay() {
    const personality = personalities[this.currentPersonality];
    
    // Update personality info
    document.getElementById('personalityName').textContent = this.currentPersonality;
    document.getElementById('personalityTitle').textContent = personality.title;
    document.getElementById('dayTitle').textContent = `DAY ${this.currentDay}`;
  }

  updateNavigationState() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    const maxDays = personalities[this.currentPersonality].tracks.length;
    
    // Update personality navigation
    this.prevPersonalityBtn.disabled = currentIndex === 0;
    this.nextPersonalityBtn.disabled = currentIndex === personalityNames.length - 1;
    
    // Update day navigation
    this.prevDayBtn.disabled = this.currentDay === 1;
    this.nextDayBtn.disabled = this.currentDay === maxDays;
  }

  previousPersonality() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    if (currentIndex > 0) {
      this.changePersonality(personalityNames[currentIndex - 1]);
    }
  }

  nextPersonality() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    if (currentIndex < personalityNames.length - 1) {
      this.changePersonality(personalityNames[currentIndex + 1]);
    }
  }

  updateQuote() {
    const personality = personalities[this.currentPersonality];
    const quoteElement = document.querySelector('.wisdom-quote');
    quoteElement.style.opacity = '0';
    
    setTimeout(() => {
      quoteElement.textContent = `${personality.quotes[this.currentQuoteIndex]} - ${this.currentPersonality}`;
      quoteElement.style.opacity = '0.8';
    }, 1000);
  }

  initializeQuoteRotation() {
    setInterval(() => {
      const personality = personalities[this.currentPersonality];
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % personality.quotes.length;
      this.updateQuote();
    }, 10000);
  }

  loadTrack(index) {
    const personality = personalities[this.currentPersonality];
    const track = personality.tracks[index];
    
    if (!track) return;
    
    this.audio.src = track.audioFile;
    
    // Update the day number separately
    this.dayTitle.textContent = `DAY ${track.day}`;
    
    this.currentTrackIndex = index;
    this.resetPlayState();
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
      this.playIcon.style.display = 'none';
      this.pauseIcon.style.display = 'block';
      this.playButton.classList.add('playing');
    } else {
      this.audio.pause();
      this.playIcon.style.display = 'block';
      this.pauseIcon.style.display = 'none';
      this.playButton.classList.remove('playing');
    }
    this.isPlaying = !this.audio.paused;
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.loadTrack(this.currentTrackIndex - 1);
      if (this.isPlaying) {
        this.audio.play();
        this.playButton.classList.add('playing');
      }
    }
  }

  nextTrack() {
    const personality = personalities[this.currentPersonality];
    if (this.currentTrackIndex < personality.tracks.length - 1) {
      this.loadTrack(this.currentTrackIndex + 1);
      if (this.isPlaying) {
        this.audio.play();
        this.playButton.classList.add('playing');
      }
    }
  }

  seek(event) {
    const rect = this.progressContainer.getBoundingClientRect();
    const clickPosition = (event.clientX - rect.left) / rect.width;
    this.audio.currentTime = clickPosition * this.audio.duration;
  }

  updateProgress() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressLine.style.width = `${progress}%`;
    this.progressRing.style.background = `conic-gradient(from 0deg, goldenrod ${progress}%, transparent ${progress}%)`;
    
    const currentTime = this.formatTime(this.audio.currentTime);
    const duration = this.formatTime(this.audio.duration);
    this.timeDisplay.textContent = `${currentTime} / ${duration}`;
  }

  handleTrackEnd() {
    this.playButton.classList.remove('playing');
    const personality = personalities[this.currentPersonality];

     // Calculate current day based on track index
     const currentDay = this.currentTrackIndex + 1;

     // Set and show the task
     TaskManager.setTask(this.currentPersonality, currentDay);
     TaskManager.showDialog();

    if (this.currentTrackIndex < personality.tracks.length - 1) {
      this.nextTrack();
    } else {
      this.resetPlayState();
    }
  }

  rewind() {
    this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
  }

  forward() {
    this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 10);
  }

  toggleMute() {
    if (this.audio.volume > 0) {
      this.lastVolume = this.audio.volume;
      this.setVolume(0);
    } else {
      this.setVolume(this.lastVolume);
    }
  }

  setVolume(value) {
    this.audio.volume = value;
    this.volumeSlider.value = value;
    this.updateVolumeIcon(value);
  }

  updateVolumeIcon(volume) {
    const icon = this.muteBtn.querySelector('i');
    icon.className = 'fas';
    
    if (volume === 0) {
      icon.classList.add('fa-volume-mute');
    } else if (volume < 0.5) {
      icon.classList.add('fa-volume-down');
    } else {
      icon.classList.add('fa-volume-up');
    }
  }

  setSpeed(button) {
    const speed = parseFloat(button.dataset.speed);
    this.audio.playbackRate = speed;
    
    document.querySelectorAll('.speed-button').forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });
  }

  resetPlayState() {
    this.playIcon.style.display = 'block';
    this.pauseIcon.style.display = 'none';
    this.playButton.classList.remove('playing');
    this.isPlaying = false;
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

// Initialize player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AudioPlayer();
});



// Funktion zum Anzeigen des Philosophenprofils
function showPhilosopher(philosopher) {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('philosopher-page').style.display = 'block';

    const philosopherName = philosopher.charAt(0).toUpperCase() + philosopher.slice(1);
    document.getElementById('personalityName').textContent = philosopherName;

    // Setze den Steckbrief des Philosophen
    setPhilosopherProfile(philosopher);

    // Setze die Day-Buttons für den jeweiligen Philosophen
    setupAudioButtons(philosopher);
}








// Funktion zum Einrichten der Audio-Buttons für den Philosophen
function setupAudioButtons(philosopher) {
    const days = ['day1', 'day2', 'day3']; // Liste der Tage, die unterstützt werden


    if (philosopher === 'aurelius') {
        document.getElementById('day5').style.display = 'inline-block'; // Zeige Tag 5 an
        days.push('day5'); // Füge Tag 5 zur Liste hinzu
    }


    days.forEach(day => {
        const button = document.getElementById(day);
        if (button) {
            button.style.display = 'inline-block'; // Stelle sicher, dass der Button angezeigt wird
            button.onclick = function() {
                playAudio(`audio/${philosopher}-${day}.mp3`, philosopher, day.replace('day', ''));
                recordVisitedDay(); // Speichert den Besuchstag
            };
        }
    });

    // Verberge den Tag 5-Button, wenn es sich nicht um Aurelius handelt
    if (philosopher !== 'aurelius') {
        const day5Button = document.getElementById('day5');
       
    }
}

        



// Task management functionality
const TaskManager = {
  currentTask : '',
        tasks : {
            'Marcus Aurelius': {
                '1': 'Reflect on your thoughts today. Maintain calmness and observe your inner self.',
                

            },
            'Plato': {
                '1': 'Reflect on a truth-related decision. List aspects and consequences, then act wisely.',
             
            },
            'Aristotle': {
                '1': 'Choose a decision balancing fairness and impact. Document how to reconcile these and mitigate effects.',
         
            },
            'Friedrich Nietzsche': {
                '1': 'Reflect on your struggles, use discipline and introspection, and embrace challenges to reach your highest self.',
               
               
            },
            'Julius Caesar': {
                '1': 'Reflect on a bold decision you made. How did you handle the risks, and how did it shape your path?',
              
            },
             'Leonardo da Vinci': {
                '1': 'Explore a field you are curious about today. Spend time researching it and embrace the joy of discovery.',
                
            },
            'Buddha': {
                '1': 'Today, make one small change that fosters inner contentment, like practicing mindfulness or expressing gratitude.',
               
            },
            'Marco': {
                '1': 'Note what piques your curiosity today. Write down your questions or topics, and take a small step to explore them.',
              
            },
            'James Cook': {
                '1': 'Document a detail from your day to contribute to a broader understanding.',
                
            },
            'William Shakespeare': {
                '1': 'Reflect on a key decision or challenge in your life. Apply careful contemplation, like Hamlet, to navigate moral conflicts and seek clarity.',
               
            },
            'Leonidas': {
                '1': 'Trust someone today instead of relying only on yourself.',
               
            },

            'Confucius': {
              '1': 'Ask "Why does this work this way?" to deepen understanding.',
             
          },
         
          'Immanuel Kant': {
            '1': 'Before acting, ask: "Can this be a universal law?" If not, choose differently.',
          
            '29': 'Today, live as though your example sets the law for all mankind.',
          }




  },

  init() {
      // Get DOM elements
      this.taskText = document.getElementById('task-text');
      this.taskSubtitle = document.getElementById('task-subtitle');
      this.overlay = document.getElementById('task-overlay');
      this.dialog = document.getElementById('task-dialog');
      this.laterButton = document.getElementById('later-button');
      this.completeButton = document.getElementById('complete-button');

      // Bind event listeners
      this.laterButton.addEventListener('click', () => this.closeDialog());
      this.completeButton.addEventListener('click', () => this.closeDialog());

      // Initialize with default task
      this.setTask('Marcus Aurelius', 1);
  },

  setTask(philosopher, day) {
    if (!this.taskText || !this.taskSubtitle) {
        console.error('Required DOM elements not found');
        return;
    }
    
    const dayKey = `${day}`;
    
    if (!this.tasks[philosopher]) {
        console.error(`Philosopher ${philosopher} not found`);
        return;
    }
    
    // Update current task
    this.currentTask = this.tasks[philosopher][dayKey] || 'Ready to continue your journey? Unlock the full version of WiseWords to access all stories and lessons.';
    
    // Update DOM
    this.taskText.textContent = this.currentTask;
    this.taskSubtitle.textContent = `Day ${day} • ${this.capitalizeFirstLetter(philosopher)}`;
  },

  showDialog() {
      if (!this.overlay || !this.dialog) return;

      // Reset any existing transitions
      this.overlay.style.display = 'block';
      this.dialog.style.display = 'block';
      
      // Force browser reflow
      void this.dialog.offsetHeight;
      
      // Add show classes
      this.overlay.classList.add('show');
      this.dialog.classList.add('show');
  },

  closeDialog() {
      if (!this.overlay || !this.dialog) return;

      // Remove show classes
      this.overlay.classList.remove('show');
      this.dialog.classList.remove('show');
      
      // Wait for transition to complete before hiding elements
      setTimeout(() => {
          this.overlay.style.display = 'none';
          this.dialog.style.display = 'none';
      }, 300); // Match this with your CSS transition duration
  },

  capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  TaskManager.init();
});

// Show a task
TaskManager.setTask('aurelius', 1);
TaskManager.showDialog();

// Close the dialog
TaskManager.closeDialog();




