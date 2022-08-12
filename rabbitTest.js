const maxHole = 99;
const hole = Math.round(Math.random() * maxHole);
const startHole = Math.round(maxHole / 2);
// let foundRabbit = false;
let lookHoleFoward = startHole + 1;
let lookHoleBackward = startHole;
let rabbitHole = hole;

function nextHole(hole) {
  if (hole + 1 > 99) {
    return hole--;
  } else if (hole - 1 < 0) {
    return hole++;
  } else {
    return (hole = hole + (Math.random() < 0.5 ? 1 : -1));
  }
}
function checkHole(firstHole, secondHole, targetHole) {
  //   console.log(`\nchecking holes ${firstHole} and ${secondHole} with rabbit in ${targetHole}`);
  if (firstHole === targetHole || secondHole === targetHole) {
    console.log(
      `\n\nFound rabbit at hole ${targetHole}. Looking at hole: ${firstHole} and hole: ${secondHole}`
    );
    return true;
  }
  return false;
}
// console.log(`Rabbit hidden at ${rabbitHole}`);
while (!checkHole(lookHoleBackward, lookHoleFoward, rabbitHole)) {
  rabbitHole = nextHole(rabbitHole);
  if (checkHole(lookHoleBackward, lookHoleFoward, rabbitHole)) {
    break;
  }
  lookHoleFoward++;
  lookHoleBackward--;
  //   console.log(`Forward Hole: ${lookHoleFoward}\n Back Hole: ${lookHoleBackward}\n Rabbit went to: ${rabbitHole}`);
}
