import clientPromise from "../lib/mongodb";
import React from "react";
import CSVDownload from "@components/utility/CSVDownload";

export default function ShowData({ data }) {
    return (
        <div>
            <h1>Example how to Read from DB</h1>
            <ul>
                {data.map((dates) => (
                    <li>
                        <h2>{dates.name}</h2>
                        <p>{dates.value}</p>
                    </li>
                ))}
            </ul>

            <Average data={data}/>

            <br/>
            <br/>

            <CSVDownload data={data}/>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("leanDB");

        const data = await db
            .collection("stressData")
            .find({})
            .toArray();

        return {
            props: { data: JSON.parse(JSON.stringify(data)) },
        };
    } catch (e) {
        console.error(e);
    }
}


const Average = ({data}) => {
    const total = data.reduce((sum, item) => sum + Number(item.value), 0);
    const average = total/data.length;

    return(<div>
        <h2>Average Value:= {average.toFixed(2)}</h2>
    </div>)
}