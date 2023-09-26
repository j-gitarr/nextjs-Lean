import clientPromise from "@lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { valueName, companyName } = req.query; // Assuming the workplace is passed as a query parameter

    console.log("found")

    try {
      const client = await clientPromise;
      const db = client.db("leanDB"); // Get the database instance

      // Delete the document from the MongoDB collection using the provided id
      const result = await db
        .collection("CustomValueNames")
        .deleteOne({ valueName: valueName, companyName: companyName });

      if (result.deletedCount === 1) {
        res.status(204).end(); // Entry deleted successfully, return a 204 No Content response
      } else {
        res.status(404).json({ message: "Entry not found" });
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      res.status(500).json({ message: "Error deleting entry" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
