export const defineComponent = (tag: string, component) => {
  !customElements.get(tag) && customElements.define(tag, component);
};

export const loadTemplate = async (templateUrl) => {
  try {
    const response = await fetch(templateUrl);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const template = doc.querySelector("template");
    document.body.appendChild(template);
  } catch (error) {
    console.warn("Error fetching external template:", error);
  }
};

export const appendTemplate = (id, template?) => {
  let HTMLTemplate: HTMLTemplateElement = document.createElement("template");
  HTMLTemplate.innerHTML = template ?? "";
  HTMLTemplate.id = id;
  document.body.appendChild(HTMLTemplate);
  return HTMLTemplate;
};

export const removeTemplate = (id) => {
  let HTMLTemplate = <HTMLTemplateElement>document.getElementById(id);
  HTMLTemplate.remove();
};

export const appendComponent = <T>(tag, attributes?: any): T => {
  const component = document.createElement(tag);
  if (attributes != null) {
    Object.entries(attributes).forEach((attribute) => {
      component.setAttribute(attribute[0], attribute[1]);
    });
  }
  document.body.appendChild(component);
  return component;
};

export const hasSetter = (obj, propName) => {
  while (obj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, propName);
    if (descriptor) return !!descriptor.set;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};
