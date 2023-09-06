import clientPromise from "@lib/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { mental, physical, temporal, performance, effort, frustration, name, companyName } = req.body;

    try {
      // Connect to your MongoDB database
      const client = await clientPromise;
      const db = client.db("leanDB");

      // Insert the NASA-TLX values into the database
      await db.collection("NASATLX").insertOne({
        mental,
        physical,
        temporal,
        performance,
        effort,
        frustration,
        companyName,
        name,
        timestamp: new Date(),
      });

      res.status(201).json({ message: "Values successfully saved." });
    } catch (error) {
      res.status(500).json({ error: "Error saving values to the database." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};
