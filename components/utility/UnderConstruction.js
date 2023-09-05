import React from "react"
import background from "@public/images/construction.jpg"
import Space from "@components/style/Space"

export default function Build(){
    return(
        <div style={{
            backgroundImage: `url(/images/construction.jpg)`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            width:"100%",
            height:"100%",
            display:"grid",
            alignContent:"center",
            alignItems:"center",
            justifyContent:"center"
        
        }}>

            <Space height="30vh"/>
            <h1 style={{color: "white", background:"#5e7783"}}>
                Page currently under construction
            </h1>
            <Space height="60vh"/>
            <p style={{background:"white"}}>picture by: Photo by Aleksandar Pasaric: https://www.pexels.com/photo/photo-of-skyscrapers-surrounded-with-clouds-1437493/</p>
            <Space height="10vh"/>
        </div>
    )
}