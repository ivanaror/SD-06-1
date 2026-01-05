// Type your code below this line!
function Journey(start, end) {
    this.start = start;
    this.end = end;
}
const args = process.argv.slice(2); // desde el tercer argumento
const from = args[0];
const to = args[1];

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")