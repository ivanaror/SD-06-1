// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function() {
        console.log(this.subject + ": " + this.message);
}
}
const args = process.argv.slice(2);
  const newMail = new Mail( args[0], args[1])

  // Type your code above this line!
  
  newMail.printMail()