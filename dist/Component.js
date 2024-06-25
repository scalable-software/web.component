/**
 * @module Base
 */
/**
 * Base class for creating custom elements.
 * Extends HTMLElement and provides lifecycle methods and attribute handling.
 * Lifecycle methods points to functions which may use function expressions.
 * @category Base
 */
export class Component extends HTMLElement {
    static loadTemplate = async (filename) => {
        try {
            const url = new URL(filename, import.meta.url).href;
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`${response.status}`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const template = doc.querySelector("template");
            document.body.appendChild(template);
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * When extending `Component`, override attributes.
     * Only attributes defined the Attributes object will be observed in DOM
     * @category Attributes
     * @hidden
     */
    /* istanbul ignore next */
    static get Attributes() {
        return [];
    }
    /**
     * List of attributes in DOM to observe.
     * This list is generated from the Attributes object's values.
     * @category Hooks
     */
    static get observedAttributes() {
        return Object.values(this.Attributes);
    }
    /**
     * @hidden
     */
    _root;
    /**
     * @hidden
     */
    constructor() {
        super();
        this.template && this._addTemplate(this.template);
    }
    /**
     * The shadow root of the component exposed as a readonly accessor.
     * @category Configuration
     * @hidden
     */
    get root() {
        return this._root;
    }
    /**
     * Optional readonly accessor with HTML Template id to use if template is required
     * @category Configuration
     */
    /* istanbul ignore next */
    get template() {
        return undefined;
    }
    /**
     * Optional readonly access with CSS style to use if style is required
     * @category Configuration
     */
    /* istanbul ignore next */
    get css() {
        return undefined;
    }
    /**
     *
     *
     * @memberof Component
     */
    connectedCallback() {
        this._addEventListeners();
    }
    /**
     * The disconnected callback is called when the element is removed from the DOM.
     * It is used for cleanup tasks like removing event listeners or resetting state.
     * @category Hooks
     */
    disconnectedCallback() {
        this._removeEventListeners();
    }
    /**
     * The attributeChangedCallback is called when one of the observed attributes is added, removed, or changed.
     * It is used to react to attribute changes and update the element accordingly.
     * @category Hooks
     */
    attributeChangedCallback(name, oldValue, newValue) {
        const handler = this._attributeHandlers[name];
        handler && handler(newValue);
    }
    /**
     * Not required by all components.
     * Only needed if the component needs its own HTML template.
     * @hidden
     */
    _addShadowRoot = () => (this._root = this.attachShadow({ mode: "closed" }));
    /**
     * @hidden
     */
    _loadTemplate = (id) => {
        const template = document.getElementById(id);
        this.root.appendChild(template.content.cloneNode(true));
    };
    /**
     * @hidden
     **/
    /* istanbul ignore next */
    _loadStyle = () => {
        if (!this.css)
            return;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL(this.css, import.meta.url).href;
        this._root.appendChild(link);
    };
    /**
     * Not required by all components.
     * Only needed if the component has its own Layout.
     *  @hidden
     */
    _addTemplate = (id) => {
        this._addShadowRoot();
        this._loadStyle();
        this._loadTemplate(id);
    };
    _attributeHandlers = {};
    _addEventListeners = () => { };
    _removeEventListeners = () => { };
}
