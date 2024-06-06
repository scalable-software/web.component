/**
 * @module Base
 */
/**
 * Base class for creating custom elements.
 * Extends HTMLElement and provides lifecycle methods and attribute handling.
 * Lifecycle methods points to functions which may use function expressions.
 * @category Base
 */
export declare class Component extends HTMLElement {
    /**
     * When extending `Component`, override attributes.
     * Only attributes defined the Attributes object will be observed in DOM
     * @category Attributes
     * @hidden
     */
    static get Attributes(): any;
    /**
     * List of attributes in DOM to observe.
     * This list is generated from the Attributes object's values.
     * @category Hooks
     */
    static get observedAttributes(): string[];
    /**
     * @hidden
     */
    private _root;
    /**
     * @hidden
     */
    constructor();
    /**
     * The shadow root of the component exposed as a readonly accessor.
     * @category Configuration
     * @hidden
     */
    get root(): ShadowRoot;
    /**
     * Optional readonly accessor with HTML Template id to use if template is required
     * @category Configuration
     */
    get template(): any;
    /**
     * This connectedCallback is invoked each time the element is connected to the DOM.
     * It is commonly used for setting up initial DOM structure, adding event listeners, or fetching external data.
     * @category Hooks
     */
    connectedCallback(): void;
    /**
     * The disconnected callback is called when the element is removed from the DOM.
     * It is used for cleanup tasks like removing event listeners or resetting state.
     * @category Hooks
     */
    disconnectedCallback(): void;
    /**
     * The attributeChangedCallback is called when one of the observed attributes is added, removed, or changed.
     * It is used to react to attribute changes and update the element accordingly.
     * @category Hooks
     */
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    /**
     * Not required by all components.
     * Only needed if the component needs its own HTML template.
     * @hidden
     */
    protected _addShadowRoot: () => ShadowRoot;
    /**
     * Not required by all components.
     * Only needed if the component has its own Layout and Style.
     * @hidden
     */
    protected _loadTemplate: (id: string) => void;
    /**
     * Not required by all components.
     * Only needed if the component has its own Layout and Style.
     * @hidden
     */
    protected _addTemplate: (id: string) => void;
    protected _attributeHandlers: {};
    protected _addEventListeners: () => void;
    protected _removeEventListeners: () => void;
}
