import { loadTemplate } from "./loader.js";
await loadTemplate("../dist/Pin.template.html");

import { Pin } from "pin";
customElements.define(Pin.Tag, Pin);
