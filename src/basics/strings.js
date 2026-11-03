/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {

  if (typeof needle !== "string") {
    throw new Error("error");
  }

  if (typeof newWord !== "string") {
    throw new Error("error");
  }

  const regex = new RegExp(needle, "gi");

  const len = Math.min(needle.length, newWord.length);

  return haystack.replaceAll(regex, function(matched) {
    let result = "";

    for (let i = 0; i < len; i++) {
      const matchedChar = matched[i];   
      const newChar     = newWord[i];   

      if (matchedChar === matchedChar.toUpperCase()) {
        result = result + newChar.toUpperCase();   
      } else {
        result = result + newChar.toLowerCase();   
      }
    }

    return result;
  });
}

