/**
 * @module Components
 */

import {
  Attribute,
  Event,
  Gesture,
  State,
  Visible,
  Visibility,
  States,
} from "./Pin.meta.js";

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
export class Pin extends Component {
  /**
   * The tag name of the component
   * @category Configuration
   */
  public static get Tag() {
    return "pin-button";
  }

  /**
   * Only attributes defined the Attributes object will be observed in DOM
   * @category Attributes
   * @hidden
   */
  public static get Attributes(): typeof Attribute {
    return Attribute;
  }

  /**
   * Default visibility is `yes`
   * @hidden
   */
  private _visible: Visibility = Visible.YES;

  /**
   * Default state is `off`
   * @hidden
   */
  private _state: States = State.OFF;

  /**
   * @hidden
   */
  constructor() {
    super();
  }

  /**
   * Optional readonly accessor with HTML Template id to use if template is required
   * @category State
   */
  public get template() {
    return Pin.Tag;
  }

  /**
   * Readonly accessor with CSS Style Sheet path when using a Template
   * @category State
   */
  public get css() {
    return "./Pin.style.css";
  }

  /**
   * Get and Sets the visibility of the button
   * @category State
   */
  public get visible(): Visibility {
    return <Visibility>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
  }
  public set visible(visible: Visibility) {
    visible = visible || Visible.YES;
    if (this.visible !== visible) {
      this._visible = visible;
      visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
      visible == Visible.YES &&
        this.dispatchEvent(new CustomEvent(Event.ONSHOW, { detail: visible }));
      visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
      visible == Visible.NO &&
        this.dispatchEvent(new CustomEvent(Event.ONHIDE, { detail: visible }));
    }
  }

  /**
   * Get or Set state of the component
   * @category State
   */
  public get state(): States {
    return <States>(<unknown>this.getAttribute(Attribute.STATE)) ?? this._state;
  }
  public set state(state: States) {
    if (this.state !== state) {
      this._state = state;
      this.setAttribute(Attribute.STATE, <string>(<unknown>state));
      state === State.ON &&
        this.dispatchEvent(new CustomEvent(Event.ONON, { detail: { state } }));
      state === State.OFF &&
        this.dispatchEvent(new CustomEvent(Event.ONOFF, { detail: { state } }));
    }
  }

  /**
   * Triggered via `.hide()`
   * @event
   * @category Events
   */
  public set onhide(handler: Handler) {
    this.addEventListener(Event.ONHIDE, handler);
  }

  /**
   * Triggered via `.show()`
   * @event
   * @category Events
   */
  public set onshow(handler: Handler) {
    this.addEventListener(Event.ONSHOW, handler);
  }

  /**
   * Triggered via `.on()`
   * @event
   * @category Events
   */
  public set onon(handler: Handler) {
    this.addEventListener(Event.ONON, handler);
  }

  /**
   * Triggered via `.off()`
   * @event
   * @category Events
   */
  public set onoff(handler: Handler) {
    this.addEventListener(Event.ONOFF, handler);
  }

  /**
   * Handles the click event
   * @hidden
   */
  private _handleClick = (event: MouseEvent | TouchEvent) => this.toggle();

  /**
   * List operations to perform for selected attributes being observed in the DOM.
   */
  protected _attributeHandlers = {
    [Attribute.STATE]: (value: string) => (this.state = <States>value),
    [Attribute.VISIBLE]: (value: string) => (this.visible = <Visibility>value),
  };

  /**
   * Called by the connectedCallback prototypical method
   * @hidden
   */
  protected _addEventListeners = () =>
    this.addEventListener(Gesture.CLICK, this._handleClick);

  /**
   * Called by the disconnectedCallback prototypical method
   * @hidden
   */
  protected _removeEventListeners = () =>
    this.removeEventListener(Gesture.CLICK, this._handleClick);

  /**
   * Change the visibility of the button to `no`
   * @category Operations
   */
  public hide = () => (this.visible = Visible.NO);

  /**
   * Change the visibility of the button to `yes`
   * @category Operations
   */
  public show = () => (this.visible = Visible.YES);

  /**
   * Change the state of the button to `on`
   * @category Operations
   */
  public on = () => (this.state = State.ON);

  /**
   * Change the state of the button to `off`
   * @category Operations
   */
  public off = () => (this.state = State.OFF);

  /**
   * Toggle the state of the button
   * @category Operations
   */
  public toggle = () =>
    (this.state = this.state === State.ON ? State.OFF : State.ON);
}
