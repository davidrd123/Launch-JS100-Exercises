const extractRegion = locale => {
  return locale.split(".")[0].split("_")[1]
}

const extractLanguage = locale => {
  return locale.split("_")[0]
}

const localGreet = locale => {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  if (language === 'en') {
    switch (region) {
      case 'US': return "Hi!";
      case 'GB': return "Oy!";
      case 'AU': return "Howdy!";
    }
  }
  switch (language) {
    case "fr": return "Salut!"
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'