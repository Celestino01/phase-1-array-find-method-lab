// code your solution here
function superbowlWin(arg){
    const result = arg.find(arg => arg.result === 'W')
    return !!result ? result.year : undefined;
}