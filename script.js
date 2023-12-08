const parseCode = (encodedString) => {
  // your code here
	// Split the encoded string using "000" as the separator
  const parts = encodedString.split("000");

  // Extract values for firstName, lastName, and id
  const firstName = parts[0];
  const lastName = parts[1];
  const id = parts[2];

  // Return the parsed object
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
