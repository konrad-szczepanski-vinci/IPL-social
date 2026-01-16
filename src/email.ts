export function isValidEmail(email: string): boolean {
  if (email.includes(" ")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (email.indexOf("@", atIndex + 1) !== -1) return false;

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (localPart.length === 0 || domainPart.length === 0) return false;

  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1) return false;
  if (domainPart.endsWith(".")) return false;

  return true;
}
