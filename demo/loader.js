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
