import { isValidEmail } from "./email";

describe("isValidEmail", () => {
  test("valide: texte@domaine.com", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("invalide: pas de @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("invalide: espace", () => {
    expect(isValidEmail("te st@example.com")).toBe(false);
  });

  test("invalide: rien avant @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("invalide: rien après @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

  test("invalide: pas de point dans le domaine", () => {
    expect(isValidEmail("test@example")).toBe(false);
  });

  test("invalide: point en dernier dans le domaine", () => {
    expect(isValidEmail("test@example.")).toBe(false);
  });

  test("invalide: deux @", () => {
    expect(isValidEmail("a@b@c.com")).toBe(false);
  });
});
