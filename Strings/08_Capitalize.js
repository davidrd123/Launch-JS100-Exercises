s = 'launch school tech & talk'

const capitalize = s => {
  result = '';
  s.split(' ').forEach(word => {
    result += (word[0].toUpperCase() + word.substring(1)) + ' ';
  });
  return result.trim();
}

console.log(capitalize(s));