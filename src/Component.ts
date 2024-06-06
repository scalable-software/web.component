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
  /**
   * When extending `Component`, override attributes.
   * Only attributes defined the Attributes object will be observed in DOM
   * @category Attributes
   * @hidden
   */
  /* istanbul ignore next */
  public static get Attributes(): any {
    return [];
  }

  /**
   * List of attributes in DOM to observe.
   * This list is generated from the Attributes object's values.
   * @category Hooks
   */
  public static get observedAttributes(): string[] {
    return Object.values(this.Attributes);
  }

  /**
   * @hidden
   */
  private _root: ShadowRoot;

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
  public get root(): ShadowRoot {
    return this._root;
  }

  /**
   * Optional readonly accessor with HTML Template id to use if template is required
   * @category Configuration
   */
  /* istanbul ignore next */
  public get template() {
    return undefined;
  }

  /**
   * This connectedCallback is invoked each time the element is connected to the DOM.
   * It is commonly used for setting up initial DOM structure, adding event listeners, or fetching external data.
   * @category Hooks
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
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    const handler = this._attributeHandlers[name];
    handler && handler(newValue);
  }

  /**
   * Not required by all components.
   * Only needed if the component needs its own HTML template.
   * @hidden
   */
  protected _addShadowRoot = (): ShadowRoot =>
    (this._root = this.attachShadow({ mode: "closed" }));

  /**
   * Not required by all components.
   * Only needed if the component has its own Layout and Style.
   * @hidden
   */
  protected _loadTemplate = (id: string) => {
    const template = document.getElementById(id) as HTMLTemplateElement;
    this.root.appendChild(template.content.cloneNode(true));
  };

  /**
   * Not required by all components.
   * Only needed if the component has its own Layout and Style.
   * @hidden
   */
  protected _addTemplate = (id: string) => {
    this._addShadowRoot();
    this._loadTemplate(id);
  };

  protected _attributeHandlers = {};

  protected _addEventListeners = () => {};

  protected _removeEventListeners = () => {};
}
