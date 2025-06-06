const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const {ObjectId} = require('mongodb');
app = express();
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
require('dotenv').config();

let collection = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.MONGODB_API_KEY;
console.log("Connecting", uri);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//Run MongoDB
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    collection = client.db("a3-ChrisLam").collection("waitlist_entries");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(process.env.PORT || 3000)
  } catch (err) {
    console.log("MongoDB has an connection error:", err);
  }
}
run().catch(console.dir);


//Get Request
app.get('/waitlist_entries', async (req, res) => {
  try {
    if (!collection) {
      return res.status(500).json({ error: "No collection found" });
    }
    const entries = await collection.find({}).toArray();

    res.status(200).json(entries);
  }
  catch (err) {
      console.error("Error getting waitlist entries");
      res.status(500).json({err: "Error getting entries"});
  }
})


//Post Request
app.post('/waitlist_entries', async (req, res) => {
  console.log("POST /waitlist_entries received:", req.body);
  try {
    if (!collection) {
      return res.status(500).json({ error: "No collection found" });
    }
    collection = client.db("a3-ChrisLam").collection("waitlist_entries"); //grab our collection of entries
    const newEntry = req.body;

    newEntry.drinkPersona = assignDrinkPersona(newEntry.firstName); //assign the drink persona

    console.log(newEntry);
    const result = await collection.insertOne(newEntry); //add to waitlist_entries
    console.log("new entry went thru");
    res.status(201).json({ status: "success", insertedId: result.insertedId });
  }
    catch (err) {
      console.error("Error inserting entry");
      res.status(500).json({ error: "Error inserting entry" });
    }

});

//Delete a waitlist entry by its entry id
app.delete('/waitlist_entries/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const entryId = new ObjectId(id);
    const entry = await collection.deleteOne({ _id: entryId });
    if (entry.deletedCount === 1) {
      res.status(200).json({ status: 'success', id }); //successful removal
    }
    else {
      res.status(404).json({ error: 'Entry not found' });
    }
  }
  catch (err) {
    console.error("Error removing entry", err.message);
    res.status(500).json({ error: 'Error removing entry' });
  }
})

//Save or update new waitlist entry
app.put('/waitlist_entries/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    updatedData.drinkPersona = assignDrinkPersona(updatedData.firstName); //update


    //update whole entry in the DB
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
    );

    if (result.matchedCount === 0) {//not found
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error("Error updating entry:", err.message);
    res.status(500).json({ error: 'Error updating entry' });
  }
});


/*
  assignDrinkPersona divides up the alphabet in 4 quadrants. Based on the form entry's first name, it gets assigned a quadrant, and it then becomes their persona.
 */
function assignDrinkPersona(firstName) {
  const firstChar = firstName?.[0].toUpperCase();
  let persona = "";

  if (firstChar >= 'A' && firstChar <= 'F') persona = "Strawberry Matcha";
  else if (firstChar >= 'G' && firstChar <= 'L') persona = "Brown Sugar Cold Brew";
  else if (firstChar >= 'M' && firstChar <= 'R') persona = "Blueberry Matcha";
  else persona = "Chai Latte";
  return persona;
}





