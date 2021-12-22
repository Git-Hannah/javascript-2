console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);

const LOCAL_STORAGE_KEY = "email-address";
const root = document.querySelector("#root");
const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
if (stored) {
  root.innerHTML = /*html*/ `
      <div class="subscribed">You are subscribed!</div>
      `;
} else {
  const form = document.createElement("form");

  root.append(form);

  form.innerHTML = /*html*/ `
    <label>
        Email: <input type="email" name="email" required"/>
    </label>
    <input type="text" name="a" value="iztfztf" readonly/> <!--Wird mitgeschickt, ist nicht editierbar -->
    <input type="text" name="b" value="iztfztf" disabled/> <!--Wird nicht mitgeschickt -->
    <input type="hidden" name="afgsgs" value="iztfztf" /> <!--Tauch gar nicht erst auf -->

    <button type="submit">Subscribe</button>

`;
  form.addEventListener("submit", function (event_) {
    //   console.log(event_);
    event_.preventDefault();
    const formData = new FormData(event_.target); // event_.target === form
    //   console.log(formData.get("email"));
    //const email = formData.get("email");
    const formProps = Object.fromEntries(formData);
    //if (Boolean(email)) { //Note needed because the field is required
    console.log(formProps.email);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, formProps.email);
    root.innerHTML = /*html*/ `
      <div class="subscribed">Thank you for subscribing!</div>
      `;
    //}
  });
}
