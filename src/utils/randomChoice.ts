const randomChoice = (choices: any) =>
  choices[Math.floor(Math.random() * choices.length)];

export default randomChoice;
