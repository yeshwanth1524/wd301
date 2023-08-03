console.log("This is a typescript file!!!");

interface User {
    name: string;
    id: number;
    isAdmin: boolean;
  }

let newUser: User = {
    name: "Jane",
    id: 1,
    isAdmin: false
};

let names: any = "hello";
names = 42;
names =false;

function printHello(): void {
    console.log("Hello!");
}

function throwError(): never {
    throw new Error("An error occurred!");
}

function addUser(user: User): string {
    return user.name + " added successfully";
}