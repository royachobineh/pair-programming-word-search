const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = ['','','','','','','',''];
  
    for (let i = 0; i < horizontalJoin.length; i++) {
      for (let j = 0; j < horizontalJoin[i].length; j++) {
        verticalJoin[j] += horizontalJoin[i][j];
      }
    }
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };

module.exports = wordSearch
