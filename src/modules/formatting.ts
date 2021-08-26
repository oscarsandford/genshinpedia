// Module: formatting
// Functions for formatting strings and commonly used custom interfaces.

// A set of props used in all card components. 
// A type (i.e. "artifacts") and a article (i.e. "noblesse-oblige").
export interface CardProps {
  type: string;
  article: string;
}

// Returns a version of the input string with 
// - leading uppercase letters, 
// - spaces instead of dashes, and 
// - correct placement of possessive character ('s).
export const stylizeString = (s: string): string => {
  var t: string = s.charAt(0).toUpperCase();
  for (var i = 1; i < s.length-1; i++) {
    if (s[i] === "-") {
      if (i < s.length-2 && s.substr(i+1, 2) === "s-") {
        t += "'s";
        i++;
      }
      else {
        t += " " + s[i+1].toUpperCase();
        i++;
      }
    }
    else {
      t += s[i];
    }
  }
  return t += s[s.length-1];
}
