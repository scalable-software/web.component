/**
 * @module Components
 */
import { Attribute, Visibility, States } from "./Pin.meta.js";
import { Component } from "./Component.js";
/**
 * Event handler signature
 * @hidden
 */
export type Handler = (...args: any[]) => void;
/**
 * A button that can be toggled on and off
 * @category Components
 */
export declare class Pin extends Component {
    /**
     * The tag name of the component
     * @category Configuration
     */
    static get Tag(): string;
    /**
     * Only attributes defined the Attributes object will be observed in DOM
     * @category Attributes
     * @hidden
     */
    static get Attributes(): typeof Attribute;
    /**
     * Default visibility is `yes`
     * @hidden
     */
    private _visible;
    /**
     * Default state is `off`
     * @hidden
     */
    private _state;
    /**
     * @hidden
     */
    constructor();
    /**
     * Optional readonly accessor with HTML Template id to use if template is required
     * @category State
     */
    get template(): string;
    /**
     * Readonly accessor with CSS Style Sheet path when using a Template
     * @category State
     */
    get css(): string;
    /**
     * Get and Sets the visibility of the button
     * @category State
     */
    get visible(): Visibility;
    set visible(visible: Visibility);
    /**
     * Get or Set state of the component
     * @category State
     */
    get state(): States;
    set state(state: States);
    /**
     * Triggered via `.hide()`
     * @event
     * @category Events
     */
    set onhide(handler: Handler);
    /**
     * Triggered via `.show()`
     * @event
     * @category Events
     */
    set onshow(handler: Handler);
    /**
     * Triggered via `.on()`
     * @event
     * @category Events
     */
    set onon(handler: Handler);
    /**
     * Triggered via `.off()`
     * @event
     * @category Events
     */
    set onoff(handler: Handler);
    /**
     * Handles the click event
     * @hidden
     */
    private _handleClick;
    /**
     * List operations to perform for selected attributes being observed in the DOM.
     */
    protected _attributeHandlers: {
        state: (value: string) => States;
        visible: (value: string) => Visibility;
    };
    /**
     * Called by the connectedCallback prototypical method
     * @hidden
     */
    protected _addEventListeners: () => void;
    /**
     * Called by the disconnectedCallback prototypical method
     * @hidden
     */
    protected _removeEventListeners: () => void;
    /**
     * Change the visibility of the button to `no`
     * @category Operations
     */
    hide: () => "no";
    /**
     * Change the visibility of the button to `yes`
     * @category Operations
     */
    show: () => "yes";
    /**
     * Change the state of the button to `on`
     * @category Operations
     */
    on: () => "on";
    /**
     * Change the state of the button to `off`
     * @category Operations
     */
    off: () => "off";
    /**
     * Toggle the state of the button
     * @category Operations
     */
    toggle: () => "off" | "on";
}
