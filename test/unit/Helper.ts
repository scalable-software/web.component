export const defineComponent = (tag: string, component) => {
  !customElements.get(tag) && customElements.define(tag, component);
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
