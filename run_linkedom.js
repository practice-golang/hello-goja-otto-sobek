// import { DOMParser, parseHTML } from 'linkedom';
const { DOMParser, parseHTML } = require("linkedom");

const {
    window, document, customElements,
    HTMLElement,
    Event, CustomEvent
} = parseHTML(`
<!DOCTYPE html>
<html>
<body>
    <div id="main">
        <p>Hello</p>
        <p>World</p>
    </div>
</body>
</html>
`);

console.log(document.querySelector("#main").textContent);
var doc = document.toString();
