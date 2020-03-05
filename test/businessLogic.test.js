const {
    onButtonPress

  } = require("./BusinessLogicTest");
  
  const specialCharacters = ["1","2","3","4","5","6","7","8","9","0",
  "!","@","£","$","%","^","&","*","(",")","_","+","=",
  "{","}","[","]",";",":","|","<",">",",",".",
  "\"","'","`","~","±","§","€","/","\\"]

  describe("onButtonPress", () => {
    test("Checks success if 2 names are entered separated by a space", () => {
      expect(onButtonPress("Katie Postle")).toBeTruthy();}),
    test("Checks success if names include a hyphen", () => {
        expect(onButtonPress("Katie Postle-Smythe")).toBeTruthy();}),
    test("Checks success if names include a hyphen", () => {
        expect(onButtonPress("Katie-Jane Postle")).toBeTruthy();}),
    test("Checks success if more than two names are entered", () => {
        expect(onButtonPress("Katie Jane Postle Smythe")).toBeTruthy();}),
    test("If no name entered throw and error", () => {
        expect(()=>{onButtonPress("")}).toThrow("ERROR: You must enter a name");}),
    test("If no space is entered between the names throw an error", () => {
        expect(()=>{onButtonPress("KatiePostle")}).toThrow("ERROR: You must enter a first name and a second name separted with a space");})
    test("If special characters are entered throw an error", () => {   
        expect(()=>{onButtonPress("K@tie Postle")}).toThrow("ERROR: Your name must not contain numbers or special characters");}),

    specialCharacters.forEach(char => {
      test("If special characters or numbers are entered throw an error. Testing this char " + char, () => {
                  expect(()=>{onButtonPress("Katie" + char + " Postle")}).toThrow("ERROR: Your name must not contain numbers or special characters");})})
   });
  