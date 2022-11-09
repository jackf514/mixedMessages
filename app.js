// Store message parts in arrays
const exhortAdj = ['exhort', 'urge', 'bid', 'entreat', 'insist', 'beseech', 'advise', 'incite', 'counsel', 'invite', 'request'];
const bodyAdj = ['fat', 'greasy', 'large', 'abnormal', 'pointy', 'disgusting', 'bulbus', 'flabby', 'nosey', 'strange'];
const bodyParts = ['nose', 'head', 'foot', 'hair', 'belly', 'hand', 'eyes', 'chin', 'knees', 'elbows'];

// Construct message
function chooseParts() { //choose random message parts from each array
    const parts = [];
    parts.push(exhortAdj[Math.floor(Math.random() * exhortAdj.length)]);
    parts.push(bodyAdj[Math.floor(Math.random() * bodyAdj.length)]);
    parts.push(bodyParts[Math.floor(Math.random() * bodyParts.length)]);
    return parts;
};

function createMessage(exhortAdj, bodyAdj, bodyParts) { //put together string from random message parts
    return `We ${exhortAdj} you to keep your ${bodyAdj} ${bodyParts} out of other people's business`;
};

// Put message together
function outputMessage(chooseParts, createMessage) {
    let parts = chooseParts();
    console.log(createMessage(parts[1], parts[2], parts[3]));
}