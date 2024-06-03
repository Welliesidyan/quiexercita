function checkType(a: unknown): string | null {
  if (typeof a === "string") {
    return "String";
  }
  // Handle other types as needed
  return null;
}
