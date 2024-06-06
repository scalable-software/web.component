/**
 * @module Components
 */
/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 * @enum
 */
export declare const Attribute: {
    readonly VISIBLE: "visible";
    readonly STATE: "state";
};
/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export type Attributes = (typeof Attribute)[keyof typeof Attribute];
/**
 * @category Metadata: State
 * @enum
 */
export declare const State: {
    readonly ON: "on";
    readonly OFF: "off";
};
/**
 * @category Metadata: State
 */
export type States = (typeof State)[keyof typeof State];
/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 * @enum
 */
export declare const Visible: {
    readonly YES: "yes";
    readonly NO: "no";
};
/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export type Visibility = (typeof Visible)[keyof typeof Visible];
/**
 * @category Metadata: Behavior
 * @enum
 */
export declare const Event: {
    readonly ONHIDE: "onhide";
    readonly ONSHOW: "onshow";
    readonly ONON: "onon";
    readonly ONOFF: "onoff";
};
/**
 * @category Metadata: Behavior
 */
export type Events = (typeof Event)[keyof typeof Event];
/**
 * @category Metadata: Behavior
 * @enum
 */
export declare const Gesture: {
    readonly CLICK: "click";
};
/**
 * @category Metadata: Behavior
 */
export type Gestures = (typeof Gesture)[keyof typeof Gesture];
