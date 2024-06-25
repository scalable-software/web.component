import {
  defineComponent,
  removeTemplate,
  appendComponent,
  hasSetter,
} from "./Helper.js";

import {
  Pin,
  Attribute,
  Visible,
  State,
} from "@scalable.software/web.component";

describe("Given Pin imported", () => {
  it("then Pin exist", () => {
    expect(Pin).toBeDefined();
  });
});

/**
 * Static Properties Existence
 */
describe("Given Pin exist", () => {
  it("then Pin.Tag static getter exist", () => {
    expect(Pin.Tag).toBeDefined();
  });
  it("then Pin.Attributes static getter exist", () => {
    expect(Pin.Attributes).toBeDefined();
  });
});

/**
 * Static Properties Value
 */
describe("Given Pin.Tag static getter exists", () => {
  it("then Pin.Tag is 'pin-button'", () => {
    expect(Pin.Tag).toBe("pin-button");
  });
});
describe("Given Pin.Attributes static getter exists", () => {
  it("then Pin.Attributes is Attribute", () => {
    expect(Pin.Attributes).toBe(Attribute);
  });
});

/**
 * Static Methods Existence
 */
describe("When Pin exist", () => {
  it("then Pin.loadTemplate static method exist", () => {
    expect(Pin.loadTemplate).toBeDefined();
  });
});

/**
 * Static Methods Behavior
 */
describe("Given Pin.loadTemplate method", () => {
  it("and no template is in html document", () => {
    const template = document.querySelector("template");
    expect(template).toBeNull();
  });
  describe("when Pin.loadTemplate(filename) is called with valid filename", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      const template = document.querySelector("template");
      template && template.remove();
    });
    it("then an template is inserted into the html document", async () => {
      const template = document.querySelector("template");
      expect(template).not.toBeNull();
    });
  });
  describe("when Pin.loadTemplate(filename) is called with invalid filename", () => {
    let errorThrown: boolean = false;
    beforeEach(async () => {
      try {
        await Pin.loadTemplate("invalid.html");
      } catch (error) {
        errorThrown = true;
      }
    });
    it("then an error was thrown", async () => {
      expect(errorThrown).toBe(true);
    });
  });
});

/**
 * Component State Existence
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      it("then pin.visible property exist", () => {
        expect(pin.visible).toBeDefined();
      });
      it("then pin.state property exist", () => {
        expect(pin.state).toBeDefined();
      });
    });
  });
});

/**
 * Component State Default Value
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      it("Then pin.visible is Visible.YES", () => {
        expect(pin.visible).toEqual(Visible.YES);
      });
      it("Then pin.state is State.OFF", () => {
        expect(pin.state).toEqual(State.OFF);
      });
    });
  });
});

/**
 * Component Operation Existence
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      it("then pin.show() method exist", () => {
        expect(pin.show).toBeDefined();
      });
      it("then pin.hide() method exist", () => {
        expect(pin.hide).toBeDefined();
      });
      it("then pin.on() method exist", () => {
        expect(pin.on).toBeDefined();
      });
      it("then pin.off() method exist", () => {
        expect(pin.off).toBeDefined();
      });
      it("then pin.toggle() method exist", () => {
        expect(pin.toggle).toBeDefined();
      });
    });
  });
});

/**
 * Component Operation Behavior
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      describe("and pin.hide()", () => {
        beforeEach(() => {
          pin.hide();
        });
        // Component State Value
        it("then pin.visible is Visible.NO", () => {
          expect(pin.visible).toEqual(Visible.NO);
        });
        // Component Attribute Value
        it("then html attribute visible is Visible.NO", () => {
          expect(pin.getAttribute(Attribute.VISIBLE)).toEqual(Visible.NO);
        });
        describe("and pin.show()", () => {
          beforeEach(() => {
            pin.show();
          });
          // Component State Value
          it("then pin.visible is Visible.YES", () => {
            console.log(pin["_visible"]);
            expect(pin.visible).toEqual(Visible.YES);
          });
          // Component Attribute Value
          it("then html attribute visible does not exist", () => {
            expect(pin.getAttribute(Attribute.VISIBLE)).toBeNull();
          });
        });
      });
      describe("and pin.on()", () => {
        let onon: jasmine.Spy;
        beforeEach(() => {
          onon = jasmine.createSpy("onon");
          pin.onon = onon;
          pin.on();
        });
        // Component State Value
        it("then pin.state is State.ON", () => {
          expect(pin.state).toEqual(State.ON);
        });
        // Component Attribute Value
        it("then html attribute state is State.ON", () => {
          expect(pin.getAttribute(Attribute.STATE)).toEqual(State.ON);
        });
        // Component Event Dispatch
        it("then onon is called", () => {
          expect(onon).toHaveBeenCalled();
        });
        describe("and pin.off()", () => {
          let onoff: jasmine.Spy;
          beforeEach(() => {
            onoff = jasmine.createSpy("onoff");
            pin.onoff = onoff;
            pin.off();
          });
          // Component State Value
          it("then pin.state is State.OFF", () => {
            expect(pin.state).toEqual(State.OFF);
          });
          // Component Attribute Value
          it("then html attribute state is State.OFF", () => {
            expect(pin.getAttribute(Attribute.STATE)).toEqual(State.OFF);
          });
          // Component Event Dispatch
          it("then onoff is called", () => {
            expect(onoff).toHaveBeenCalled();
          });
        });
      });
      describe("and pin.toggle()", () => {
        beforeEach(() => {
          pin.toggle();
        });
        // Component State Value
        it("then pin.state is State.ON", () => {
          expect(pin.state).toEqual(State.ON);
        });
        // Component Attribute Value
        it("then html attribute state is State.ON", () => {
          expect(pin.getAttribute(Attribute.STATE)).toEqual(State.ON);
        });
        describe("and pin.toggle()", () => {
          beforeEach(() => {
            pin.toggle();
          });
          // Component State Value
          it("then pin.state is State.OFF", () => {
            expect(pin.state).toEqual(State.OFF);
          });
          // Component Attribute Value
          it("then html attribute state is State.OFF", () => {
            expect(pin.getAttribute(Attribute.STATE)).toEqual(State.OFF);
          });
        });
      });
      describe("and user clicks on pin", () => {
        beforeEach(() => {
          pin.click();
        });
        it("then pin.state is State.ON", () => {
          expect(pin.state).toEqual(State.ON);
        });
        it("then html attribute state is State.ON", () => {
          expect(pin.getAttribute(Attribute.STATE)).toEqual(State.ON);
        });
      });
    });
  });
});

/**
 * Component Event Existence
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      it("then pin.onhide setter exist", () => {
        expect(hasSetter(pin, "onhide")).toBeTrue();
      });
      it("then pin.onshow setter exist", () => {
        expect(hasSetter(pin, "onshow")).toBeTrue();
      });
      it("then pin.onon setter exist", () => {
        expect(hasSetter(pin, "onon")).toBeTrue();
      });
      it("then pin.onoff setter exist", () => {
        expect(hasSetter(pin, "onoff")).toBeTrue();
      });
    });
  });
});

/**
 * Component Event Dispatching Behavior
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      describe("and pin.hide()", () => {
        let onhide: jasmine.Spy;
        beforeEach(() => {
          onhide = jasmine.createSpy("onhide");
          pin.onhide = onhide;
          pin.hide();
        });
        it("then onhide is called", () => {
          expect(onhide).toHaveBeenCalled();
        });
        describe("and pin.show()", () => {
          let onshow: jasmine.Spy;
          beforeEach(() => {
            onshow = jasmine.createSpy("onshow");
            pin.onshow = onshow;
            pin.show();
          });
          it("then onshow is called", () => {
            expect(onshow).toHaveBeenCalled();
          });
        });
      });
      describe("and pin.on()", () => {
        let onon: jasmine.Spy;
        beforeEach(() => {
          onon = jasmine.createSpy("onon");
          pin.onon = onon;
          pin.on();
        });
        it("then onon is called", () => {
          expect(onon).toHaveBeenCalled();
        });
        describe("and pin.off()", () => {
          let onoff: jasmine.Spy;
          beforeEach(() => {
            onoff = jasmine.createSpy("onoff");
            pin.onoff = onoff;
            pin.off();
          });
          it("then onoff is called", () => {
            expect(onoff).toHaveBeenCalled();
          });
        });
      });
      describe("and pin.toggle()", () => {
        let onon: jasmine.Spy;
        beforeEach(() => {
          onon = jasmine.createSpy("onon");
          pin.onon = onon;
          pin.toggle();
        });
        it("then onon is called", () => {
          expect(onon).toHaveBeenCalled();
        });
        describe("and pin.toggle()", () => {
          let onoff: jasmine.Spy;
          beforeEach(() => {
            onoff = jasmine.createSpy("onoff");
            pin.onoff = onoff;
            pin.toggle();
          });
          it("then onoff is called", () => {
            expect(onoff).toHaveBeenCalled();
          });
        });
      });
    });
  });
});

/**
 * User Gesture Behavior
 */
describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await Pin.loadTemplate("Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    describe("when Pin added to DOM", () => {
      let pin: Pin;
      beforeEach(() => {
        pin = appendComponent<Pin>(Pin.Tag);
      });
      afterEach(() => {
        pin.remove();
      });
      describe("and user clicks on pin", () => {
        let onon: jasmine.Spy;
        beforeEach(() => {
          onon = jasmine.createSpy("onon");
          pin.onon = onon;
          pin.click();
        });
        it("then pin.state is State.ON", () => {
          expect(pin.state).toEqual(State.ON);
        });
        it("then html attribute state is State.ON", () => {
          expect(pin.getAttribute(Attribute.STATE)).toEqual(State.ON);
        });
        it("then onon is called", () => {
          expect(onon).toHaveBeenCalled();
        });
        describe("and user clicks on pin", () => {
          let onoff: jasmine.Spy;
          beforeEach(() => {
            onoff = jasmine.createSpy("onoff");
            pin.onoff = onoff;
            pin.click();
          });
          it("then pin.state is State.OFF", () => {
            expect(pin.state).toEqual(State.OFF);
          });
          it("then html attribute state is State.OFF", () => {
            expect(pin.getAttribute(Attribute.STATE)).toEqual(State.OFF);
          });
          it("then onoff is called", () => {
            expect(onoff).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
