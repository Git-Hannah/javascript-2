console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'

- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<img/>'
- The '<img/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

const firstNames = ["Max", "Dara", "Kim", "Kai", "Mar", "Jul"];
const lastNames = ["Müller", "Rodriguez", "Chu", "Poirot", "Evans"];
const gender = ["men", "women"];

function myRandom(number) {
  return Math.round(Math.random() * number);
}
function randomItem(array) {
  const maxIndex = array.length - 1;
  const randomIndex = myRandom(maxIndex);
  return array[randomIndex];
}

const cards = Array.from({ length: 4 });
const people = cards.map(() => {
  return {
    // The next three lines do the same, with a different technique:
    //name: randomItem(firstNames) + " " + randomItem(lastNames),
    //name: [randomItem(firstNames), randomItem(lastNames)].join(" "),
    name: `${randomItem(firstNames)} ${randomItem(lastNames)}`,
    //gender: randomItem(gender),
    image: `https://randomuser.me/api/portraits/${randomItem(
      gender
    )}/${myRandom(99)}.jpg`,
  };
});

//console.log(cards, people, people.join(""));
document.querySelector("#root").innerHTML = /*html*/ `
<div class="Grid">
    ${people
      .map(person => {
        return `<div class="Card">
            <header class="Card-header">
            <h3 class="Card-title">${person.name}</h3>
            </header>
                <figure class="Card-media">        
                    <img src="${person.image}" alt="image of ${person.name}" />
                </figure>
            </div>`;
      })
      .join("")}
</div>
    `;

// const a = ["hallo", "b", "c", "d", "e", "f", "g"].map(function (char) {
//   return char.toUpperCase();
// });

// const b = ["Hallo, wie geht es dir", "b", "c", "d", "e", "f", "g"].map(function (char) {
//     return {
//         original: char,
//          uppercase: char.toUpperCase(),
//          lowercase: char.toLowerCase(),
//          array: char.split(""),
//          fancy: char.split("").join("*")
//     };
//   });
// console.log(b);
