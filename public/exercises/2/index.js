console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<img/>'
- The '<img/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
`);

function myRandom(number) {
  return Math.round(Math.random() * number);
}
console.log(myRandom(100));

const firstNames = ["Max", "Dara", "Kim", "Kai", "Mar", "Jul"];
const lastNames = ["Müller", "Rodriguez", "Chu", "Poirot", "Evans"];

function randomItem(array) {
  const maxIndex = array.length - 1;
  const randomIndex = myRandom(maxIndex);
  return array[randomIndex];
}
console.log(randomItem(firstNames), randomItem(lastNames));

document.querySelector("#root").innerHTML += /*html*/ `
<div class="card">
    <header class="card-header">
      <h3 class="card-title">${randomItem(firstNames)} ${randomItem(lastNames)}</h3>
      <figure class="card-image-container">
        <img class="card-image"
          src="https://randomuser.me/api/portraits/women/${myRandom(50)}.jpg" 
          alt="image of a random person" />  
       </figure>
    </header>
    <div class="card-content-container">
      <h4 class="card-content-title">My hobbies</h4>
        <ul class="card-list">
          <li class="card-list-item">Dancing</li>
          <li class="card-list-item">Playing Ukulele</li>
          <li class="card-list-item">Mime</li>
          <li class="card-list-item">Clowning</li>
        </ul>
    </div>
</div>
`;
