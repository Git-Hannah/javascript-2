console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"

4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

// 1.
const element = document.querySelector("#root");
//Erste Option (Referenz zum Element, gespeichert als Konstante):
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

element.append(h1);
//Referenz existiert noch:
h1.innerHTML = "It works!";

// // += fügt hinzu, Referenzen zu Elementen, die durch JavaScript erzeugt und
// // dann hinzugefügt werden, werden hierbei gelöscht:
// // das Element wird entfernt, zusammengefügt und wieder zugefügt
element.innerHTML += "<div>Hallo I am added to the Headline with += </div>";

// // 2. Referenz existiert nicht mehr
h1.className = "main-headline";
// // hier wird das refernzierte Element erneut hinzugefügt
// // jetzt existieren zwei gleiche Elemente (nicht dieselben!!)
element.append(h1);
element.append(h2);
h2.innerHTML = "i am number 2";
// // Referenz zu dem zweiten existiert
// // dadurch wird das Element verschoben und nicht neu hinzugefügt
element.append(h1);

// Zweite Option, 1. und 2.
// element.innerHTML = `<h1 class="main-header">It works!</h1>`;

// 3.+
// 4.
//kurze Schreibweise bei head und body: document.head
//für Erweiterung es6-string-html: /*html*/
document.head.innerHTML += /*html*/ `   
<style id="main-style">
    .main-headline {
        color: blue;
    }
</style>
`;

/*
//Marc Gruners Lösung:
//const head = document.querySelector("head");
const mainheadlinestyles = css`
  .main-headline {
    color: blue;
  }
`;

const style = html` <style id="main-style">
  ${mainheadlinestyles}
</style>`;

conslole.log(style);
head.innerHTML += style;

function Square(props) {
  return `
        <button class="square">
            ${props.value}
        </button>
    `;
}
*/

// React hat die html-js-api verwendet, so dass die createElement -
// Wörter genutzt werden
