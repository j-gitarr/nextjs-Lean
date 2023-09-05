// export default function(props){
//     function space(){
//         if(props.flex === undefined){
//             return 1;
//         }else{
//             return props.flex;
//         }
//     }

import Space from "./Space";

    
//     return(
//         <div style={{display: "flex", alignItems: "center"}}>
//                     <div style={{flex: space(), padding: "0 2% 0 5%"}}>
//                         {props.firstItem}
//                     </div>
//                     <div style={{flex: 2-space(), 
//                                     justifyContent: "center", 
//                                     alignItems: "center", 
//                                     padding: "0 5%"}}>
//                         {props.secondItem}
//                     </div>
//                 </div>
//     );
// }

export default function(props) {
    function space() {
      if (props.flex === undefined) {
        return 1;
      } else {
        return props.flex;
      }
    }
  
    const containerStyle = {
      display: "flex",
      alignItems: "center",
    };
  
    const firstItemStyle = {
      flex: space(),
      padding: "0 2% 0 5%",
      
    };
  
    const secondItemStyle = {
      flex: space(), // Both items take up full width
      justifyContent: "center",
      alignItems: "center",
      padding: "0 5%",
    };
  
    // Define a media query for screens with a maximum width of 768px
    const mediaQuery = `@media (max-width: 1000px) { 
      .container {
        flex-direction: column; /* Stack items vertically */
        align-items: flex-start; /* Align items to the start of the container */
      }
      .item {
        flex: 1; /* Both items take up full width */
        padding: 0 5%;
        width: 100%;
        
      }
    }`;
  
    return (
      <div className="container" style={containerStyle}>
        <div className="item" style={firstItemStyle}>
          {props.firstItem}
          <Space height="10vh"/>
        </div>
        <div className="item" style={secondItemStyle}>
          {props.secondItem}
        </div>
  
        {/* Add the media query */}
        <style>{mediaQuery}</style>
      </div>
    );
  }
  