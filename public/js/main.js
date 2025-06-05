// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  console.log("submit handler called");
  event.preventDefault()
  console.log("event pd called")

  //each data entry goes through this object
  const data = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    email: document.querySelector("#email").value,
    phoneNumber: document.querySelector("#phoneNumber").value
  };

  const body = JSON.stringify(data)
  console.log("data collected");

  //Fetch for submitting button
  const response = await fetch( "/waitlist_entries", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body 
  })

  //Alert to the user and for us on debugging
  alert(`Thank you! You've been added to the waitlist. As part of our personas for a free drink, you are a ${assignDrinkPersona(data.firstName)}!!! Please keep a lookout for our messages! `);
  document.getElementById("ourForm").reset();
}

//This is similar to the server one, just a little different based on the needs
function assignDrinkPersona(firstName) {
  const firstChar = firstName[0].toUpperCase();
  if (firstChar >= 'A' && firstChar <= 'F') return "Strawberry Matcha";
  else if (firstChar >= 'G' && firstChar <= 'L') return "Brown Sugar Cold Brew";
  else if (firstChar >= 'M' && firstChar <= 'R') return "Blueberry Matcha";
  else return "Chai Latte";
}

const loadTableData = async function () {
  const tbody = document.getElementById("customerDataBody");
  if (!tbody) return;
  tbody.innerHTML = ""; //clear table initially

  try {
    const response = await fetch("/waitlist_entries"); //fetch the data
    if (!response.ok) {
      const text = await response.text();
      alert("Server error: " + text);
      return;
    }

    const entries = await response.json();
    //Populating our waitlist entries
    entries.forEach(entry => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${entry.firstName}</td>
      <td>${entry.lastName}</td>
      <td>${entry.email}</td>
      <td>${entry.phoneNumber || ""}</td>
      <td>${entry.drinkPersona}</td>
      <td><button style="background-color: #ed4337; color: white; border-radius: 10px; border: none; padding: 10px" onclick="${entry.id}">Delete</button></td>
    `;
      tbody.appendChild(row); //adding our user data after submitting
    })
  }
  catch (err) {
    console.error("Could not load entries", err)
  }
}

//needed listeners
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#ourForm");
  if (form) {
    form.addEventListener("submit", submit);
  }
  loadTableData().then();
});

