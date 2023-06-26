/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let merged = '';
  const n1 = word1.length;
  const n2 = word2.length;
  const maxLength = Math.max(n1, n2);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < n1) {
      merged += word1[i];
    }
    if (i < n2) {
      merged += word2[i];
    }
  }
  
  return merged; 
};