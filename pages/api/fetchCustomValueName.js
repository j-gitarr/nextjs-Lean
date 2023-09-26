import clientPromise from "@lib/mongodb";

export default async function handler(req, res) {
  if(req.method === "GET"){
    const{companyName} = req.query;
    try{
        const client = await clientPromise;
        const db = client.db("leanDB");


        const borgData = await db.collection("CustomValueNames").find({companyName}).toArray();
        if(borgData){
            res.status(200).json({data: borgData});
        }else{
            res.status(404).json({message:"Data not found"});
        }
    }catch(error){
        console.error("Error fetching Entry: ", error);
        res.status(500).json({message: "Error fetching entry"});
    }
  }else{
    res.status(405).json({message: "Method not allowed"});
  }
}