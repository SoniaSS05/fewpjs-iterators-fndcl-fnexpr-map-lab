const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = (tuto) => {
  const newTutorials = tutorials.map((tuto)=>{
    let phrase = tuto;
    let sep = phrase.split(' ');
    let nsepUp = sep.map(s=>{
      let toget = s[0].toUpperCase()+s.slice(1);
      return toget;
    }).join(' ');
   
    return nsepUp;
  });
  console.log(newTutorials);
  return newTutorials;
}



  
  
