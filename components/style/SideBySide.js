import Space from "./Space";

export default function(props) {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
    };
  
    const firstItemStyle = {
      flex: `${props.flex1 || 1}`,
      padding: "0 2% 0 5%",
    };
  
    const secondItemStyle = {
      flex: `${props.flex2 || 1}`,
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
    };
  
    // Define a media query for screens with a maximum width of 768px
    const mediaQuery = `@media (max-width: 1000px) { 
      .container {
        flex-direction: column; /* Stack items vertically */
        align-items: flex-start; /* Align items to the start of the container */
      }
      .item {
        flex: 1; /* Both items take up full width */
        padding: 0;
        width: 100%;
        margin-bottom: 20px
      }
    }`;
  
    return (
      <div className={props.className || "container"} style={containerStyle}>
        <div className="item" style={props.firstItemStyle || firstItemStyle}>
          {props.firstItem}
        </div>
        <div className="item" style={props.secondItemStyle || secondItemStyle}>
          {props.secondItem}
        </div>
  
        {/* Add the media query */}
        <style>{mediaQuery}</style>
      </div>
    );
  }
  