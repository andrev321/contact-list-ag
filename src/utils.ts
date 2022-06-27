export function GetInitials(name: string) {
  return name
    .split(" ")
    .map((item) => item.charAt(0))
    .join("")
    .slice(0, 2);
}
