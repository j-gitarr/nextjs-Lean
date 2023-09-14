import clientPromise from "@lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { companyName } = req.query;
    try {
      const client = await clientPromise;
      const db = client.db("leanDB");

      const borgData = await db.collection("BORG_Value").find({ companyName }).toArray();
      const eawsData = await db.collection("EAWS_Score").find({ companyName }).toArray();
      const kfzaData = await db.collection("KFZA").find({ companyName }).toArray();
      const nasaData = await db.collection("NASATLX").find({ companyName }).toArray();

      const allData = {
        borgData,
        eawsData,
        kfzaData,
        nasaData,
      };

      res.status(200).json({ data: borgData });
    } catch (error) {
      console.error("Error fetching Data: ", error);
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
