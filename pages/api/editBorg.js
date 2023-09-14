import clientPromise from "@lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, newValue } = req.query;

    try {
      const client = await clientPromise;
      const db = client.db("leanDB"); // Get the database instance

      const objectId = new ObjectId(id);

      // Update the document in the MongoDB collection based on the provided id
      const result = await db.collection('BORG_Value').updateOne(
        { _id: objectId },
        { $set: { value: parseInt(newValue) } } // Assuming newValue is a string that can be parsed as an integer
      );

      if (result.matchedCount === 1) {
        res.status(200).json({ message: 'Entry updated successfully' });
      } else {
        res.status(404).json({ message: 'Entry not found' });
      }
    } catch (error) {
      console.error('Error updating entry:', error);
      res.status(500).json({ message: 'Error updating entry' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
