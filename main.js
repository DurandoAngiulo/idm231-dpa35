// Button variables
const obiwanBtn = document.getElementById('obiwan');
const quigonBtn = document.getElementById('quigon');
const threepioBtn = document.getElementById('threepio');
const yodaBtn = document.getElementById('yoda');
const winduBtn = document.getElementById('windu');
const lukeBtn = document.getElementById('luke');
const jabbaBtn = document.getElementById('jabba');
const vaderBtn = document.getElementById('vader');
const sidiousBtn = document.getElementById('sidious');
const greviousBtn = document.getElementById('grevious');
const dookuBtn = document.getElementById('dooku');
const maulBtn = document.getElementById('maul');


// Popup box variables
const popupContainer=document.getElementById('popup_container');
const xbutton = document.getElementById('xbutton');
const image = document.getElementById('containerimage');
const text = document.getElementById('containerText');
const title = document.getElementById('container_title');


// event listeners that makes pop-up appear

obiwanBtn.addEventListener('click', function(){
    console.log('obi was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Obi Wan, you are logical, practical, and dutiful\n\
     while always trying to improve the way you live your life.";
    image.src="images/obiwan.jpg";
    title.textContent= "Obi Wan Kenobi";
});
quigonBtn.addEventListener('click', function(){
    console.log('qui was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Qui-Gon, you are a guarded, intuitive \n\
    and have a strong connection between the material worlds.";
    image.src="images/quigon.jpg";
    title.textContent= "Qui-Gon Jin";
});
threepioBtn.addEventListener('click', function(){
    console.log('threepio was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like C3PO, you are quite a busy and sometimes \n\
    erratic individual. But you are also full of pure curiosity.";
    image.src="images/threepio.jpg";
    title.textContent= "C3PO";
});
yodaBtn.addEventListener('click', function(){
    console.log('yoda was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Yoda, you are sensitive, wise beyond your years, \n\
    and full of empathetic imagination.";
    image.src="images/yoda.jpg";
    title.textContent= "Yoda";
});
winduBtn.addEventListener('click', function(){
    console.log('windu was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Mace Windu, you are focused on balance and equilibrium, \n\
    and strive to find harmony in every part of your life.";
    image.src="images/quigon.jpg";
    image.src="images/windu.jpg";
    title.textContent= "Mace Windu";
});
lukeBtn.addEventListener('click', function(){
    console.log('luke was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Luke, you are innovative, progressive, \n\
    and always focused on making the world a better place.";
    image.src="images/luke.jpg";
    title.textContent= "Luke Skywalker";
});
jabbaBtn.addEventListener('click', function(){
    console.log(' jabba was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Jabba, you are drawn to luxury, \n\
    decadence and enjoy a life of relaxation.";
    image.src="images/jabba.jpg";
    title.textContent= "Jabba The Hutt";
});
vaderBtn.addEventListener('click', function(){
    console.log('vader was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Darth Vader, you are bold, ambitious, \n\
    and enjoy diving headfirst into even the most challenging situations.";
    image.src="images/vader.jpg";
    title.textContent= "Darth Vader";
});
sidiousBtn.addEventListener('click', function(){
    console.log('sidious was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Darth Sidious, you are patient, perseverant, \n\
    and skilled in navigating emotional and political situations.";
    image.src="images/sidious.jpg";
    title.textContent= "Darth Sidious";
});
greviousBtn.addEventListener('click', function(){
    console.log('grevious was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Grevious, you have a fiery flair for the dramatic, \n\
    and love to bask in the spotlight.";
    image.src="images/grevious.jpg";
    title.textContent= "General Grevious";
});
dookuBtn.addEventListener('click', function(){
    console.log('dooku was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Dooku, you are alwys seeking knowledge, \n\
    and enjoy chasing after intellectual and spiritual exploits.";
    image.src="images/dooku.jpg";
    title.textContent= "Count Dooku";
});
maulBtn.addEventListener('click', function(){
    console.log('maul was clicked');
    popup_container.classList.add('popup-visible');
    text.textContent= "Like Maul, you are elusive, mysterious, \n\
    and who is driven by their emotions to cultivate sprawling wisdom.";
    image.src="images/maul.jpg";
    title.textContent= "Darth Maul";
});


// reomve pop-up function
xbutton.addEventListener('click', function(){
    popup_container.classList.remove('popup-visible');
    console.log('popup removed');
})






// obiwanBtn.addEventListener('click', function() {userPicked('Obi wan');});

// // create function userPicked();
// function userPicked(person) {
//     console.log(`The user picked ${person}`);
// }
// function userPicked(buttonName) {
//     console.log('User picked ' + buttonName);
// }