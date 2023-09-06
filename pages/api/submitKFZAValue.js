import clientPromise from "@lib/mongodb";

export default async (req, res) =>{
    if(req.method === "POST"){
        const { questionValues, name, companyName} = req.body;
        try{
            //connet to DB
            const client = await clientPromise;
            const db = client.db("leanDB");

            //Insert the KFZA values into the Database
            await db.collection("KFZA").insertOne({
                questionValues,
                name,
                companyName,
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