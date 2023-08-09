export default function(props){
    function space(){
        if(props.flex === undefined){
            return 1;
        }else{
            return props.flex;
        }
    }
    
    return(
        <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{flex: space(), padding: "0 2% 0 5%"}}>
                        {props.firstItem}
                    </div>
                    <div style={{flex: 2-space(), 
                                    justifyContent: "center", 
                                    alignItems: "center", 
                                    padding: "0 5%"}}>
                        {props.secondItem}
                    </div>
                </div>
    );
}