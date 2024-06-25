import { Pin } from "@scalable.software/web.component";

await Pin.loadTemplate("Pin.template.html");
customElements.define(Pin.Tag, Pin);
