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
     */
    static get observedAttributes(): string[];
    /**
     * The shadow root of the component exposed as a property for convenience
     */
    root: ShadowRoot;
    /**
     * @hidden
     */
    constructor();
    /**
     * This connectedCallback is invoked each time the element is connected to the DOM.
     * It is commonly used for setting up initial DOM structure, adding event listeners, or fetching external data.
     */
    connectedCallback(): void;
    /**
     * The disconnected callback is called when the element is removed from the DOM.
     * It is used for cleanup tasks like removing event listeners or resetting state.
     */
    disconnectedCallback(): void;
    /**
     * The attributeChangedCallback is called when one of the observed attributes is added, removed, or changed.
     * It is used to react to attribute changes and update the element accordingly.
     */
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    protected _attributeHandlers: {};
    protected _addEventListeners: () => void;
    protected _removeEventListeners: () => void;
}
