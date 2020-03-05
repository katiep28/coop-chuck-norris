const {
    onButtonPress,
    checkName

  } = require("./BusinessLogicTest");
  
  describe("onButtonPress", () => {
    test("Checks 2 names are entered separated by a space", () => {
      expect(onButtonPress("Katie Postle")).toBeTruthy();
    });

  });
  