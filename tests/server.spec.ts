import { SayHello } from "../src/server";

describe("Test SayHello", () => {
  test("expect SayHello return Hello World if name is not provide", () => {
    const sut = SayHello();
    expect(sut).toBe("Hello World");
  });
  test("expect SayHello return Hello <name> when name is provider", () => {
    const sut = SayHello("Will");
    expect(sut).toBe("Hello Will");
  });
});
