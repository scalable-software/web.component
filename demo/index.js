import { Pin } from "pin";

await Pin.loadTemplate("Pin.template.html");
customElements.define(Pin.Tag, Pin);
