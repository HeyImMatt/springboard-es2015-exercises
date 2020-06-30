//QQ 1
// {1, 2, 3, 4}

//QQ 2
// 'ref'

//QQ 3
// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate = (arr) => {
  const set = new Set([...arr]);
  return arr.length === set.size ? false : true;
};

const vowelCount = (str) => {
  const vowels = 'aeiou';
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (vowels.includes(lowerCaseChar)) {
      vowelMap.has(lowerCaseChar)
        ? vowelMap.set(loweCaseChar, vowelMap.get(lowerCaseChar) + 1)
        : vowelMap.set(lowerCaseChar, 1);
    }
  }
  return vowelMap;
};
