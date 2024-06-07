import {
  defineComponent,
  loadTemplate,
  removeTemplate,
  appendComponent,
} from "./Helper.js";

import { Attribute, Visible, State } from "../../src/Pin.meta.js";

import { Pin } from "pin";

describe("Given Pin imported", () => {
  it("then Pin exist", () => {
    expect(Pin).toBeDefined();
  });
  describe("When Pin exist", () => {
    it("then Pin.Tag static getter exist", () => {
      expect(Pin.Tag).toBeDefined();
    });
    it("then Pin.Tag is 'pin-button'", () => {
      expect(Pin.Tag).toBe("pin-button");
    });
    it("then Pin.Attributes static getter exist", () => {
      expect(Pin.Attributes).toBeDefined();
    });
    it("then Pin.Attributes is Attribute", () => {
      expect(Pin.Attributes).toEqual(Attribute);
    });
  });
});

describe("Given Pin is defined in custom element registry", () => {
  beforeEach(() => {
    defineComponent(Pin.Tag, Pin);
  });
  it("then custom element registry should contain Pin", () => {
    expect(customElements.get(Pin.Tag)).toBe(Pin);
  });
  describe("and HTML Template added to DOM", () => {
    beforeEach(async () => {
      await loadTemplate("../src/Pin.template.html");
    });
    afterEach(() => {
      removeTemplate(Pin.Tag);
    });
    it("then a HTML Template exist in DOM", () => {
      expect(document.getElementsByTagName("template")).toHaveSize(1);
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
      describe("and pin.hide()", () => {
        let onhide: jasmine.Spy;
        beforeEach(() => {
          onhide = jasmine.createSpy("onhide");
          pin.onhide = onhide;
          pin.hide();
        });
        it("then pin.visible is Visible.NO", () => {
          expect(pin.visible).toEqual(Visible.NO);
        });
        it("then html attribute visible is Visible.NO", () => {
          expect(pin.getAttribute(Attribute.VISIBLE)).toEqual(Visible.NO);
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
          it("then pin.visible is Visible.YES", () => {
            console.log(pin["_visible"]);
            expect(pin.visible).toEqual(Visible.YES);
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
        it("then pin.state is State.ON", () => {
          expect(pin.state).toEqual(State.ON);
        });
        it("then html attribute state is State.ON", () => {
          expect(pin.getAttribute(Attribute.STATE)).toEqual(State.ON);
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
      describe("and pin.toggle()", () => {
        let onon: jasmine.Spy;
        beforeEach(() => {
          onon = jasmine.createSpy("onon");
          pin.onon = onon;
          pin.toggle();
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
        describe("and pin.toggle()", () => {
          let onoff: jasmine.Spy;
          beforeEach(() => {
            onoff = jasmine.createSpy("onoff");
            pin.onoff = onoff;
            pin.toggle();
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
      });
    });
  });
});
