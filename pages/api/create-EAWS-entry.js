import clientPromise from "@lib/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { value, companyName } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("leanDB"); // Get the database instance

      // Insert the document into the MongoDB collection
      await db.collection('EAWS_Score').insertOne({ 
        value: parseInt(value),
        companyName,
        timestamp: new Date()
    });

      res.status(201).json({ message: 'Entry created successfully' });
    } catch (error) {
      console.error('Error creating entry:', error);
      res.status(500).json({ message: 'Error creating entry' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}