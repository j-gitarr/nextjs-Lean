import PageContainer from "../../components/PageContainer";
import SideBySide from "../../components/SideBySide";
import content from "../../public/text/KFZA.module.JSON"
import style from "../../styles/KFZA.module.css"
import Radio from "../../components/Radio";

function scale(index){
    return(
    <form style={{ display: "flex",alignItems: "center", flex:"1", flexDirection:"row"}}>
        <Radio label="trifft gar nicht zu" value="0"  key="index"/>
        <Radio label="trifft wenig zu" value="1" key="index"/>
        <Radio label="trifft mittelmäßig zu" value="2" key="index"/>
        <Radio label="trifft überwiegend zu" value="3" key="index"/>
        <Radio label="trifft völlig zu" value="4" key="index"/>
    </form>)
}


export default function(){
    
    
    return(
       <PageContainer>
        {(()=>{
            let question = [];
            for(let i = 0; i < content.questions.length; i++){
                question.push(
                    <div className={style.Row} style={{background: `${i%2 === 0? "transparent" : "#e3e3e3"}`}}>
                        <SideBySide
                            firstItem=<p>{i+1}. {content.questions[i]}</p>
                            secondItem={scale(i)}
                            flex="0.5"
                        />
                    </div>
                    )
            }
            return question;
        })()}

        
       </PageContainer>
    );
}