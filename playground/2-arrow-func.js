// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));

const event = {
    name: "Birthday",
    guests: ["Jane", "Khang", "Nia"],
    printGuestList() { //arrow func not suited for methods
        console.log("Guest list for " + this.name);

        this.guests.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
};

event.printGuestList();