/* 
Answer1



def double(number):
    return number * 2

input_arr = [1, 2, 3, 4, 5]
doubled_arr = double_elements(input_arr, double)
print(doubled_arr)



Answer2


function manipulateString(string) {
  function convertToUppercase() {
    return string.toUpperCase();
  }

  function logString() {
    var manipulatedString = convertToUppercase();
    console.log("The manipulated string is: " + manipulatedString);
  }

  return {
    logString: logString,
    string: string
  };
}

// Example usage:
var result = manipulateString("Hello, World!");
result.logString(); // Output: The manipulated string is: HELLO, WORLD!
console.log("Input string: " + result.string); // Output: Input string: Hello, World!


Answer3

function ageInDays(person) {
  var fullName = person.firstName + " " + person.lastName;
  var ageInDays = person.age * 365;

  function logMessage() {
    console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
  }

  return logMessage;
}

// Example usage:
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

var logMessageCallback = ageInDays(person);
logMessageCallback(); // Output: The person's full name is John Doe and their age in days is 10950.




Answer4

function bookTitles(books, callback) {
  var titles = books.map(function(book) {
    return book.title;
  });

  titles.sort();

  callback(titles);
}

// Example usage:
var books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

function logTitles(titles) {
  console.log("Book titles in alphabetical order:");
  titles.forEach(function(title) {
    console.log("- " + title);
  });
}

bookTitles(books, logTitles);



Answer 6
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();



Answer 5

function greet(name) {
  return new Promise(function(resolve, reject) {
    if (typeof name === 'string') {
      resolve("Hello, " + name + "!");
    } else {
      reject(new Error("Invalid input. Name must be a string."));
    }
  });
}


Answer 7

async function fetchData() {
  try {
    const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData
    };

    console.log(combinedData);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


Answer 8

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


Answer9

  fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the data (e.g., display it on the webpage)
  })
  .catch(error => {
    console.error('Error:', error);
    // Display an error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while fetching the data.';
    document.body.appendChild(errorMessage);
  });








*/

