import PageContainer from "../../components/PageContainer";
import content from "../../public/text/Nasa-TLX.module.JSON"
import logo from "../../public/images/LOGO_Moutain_Croped.png"
import SideBySide from "../../components/SideBySide";
import Scale from "../../components/Scale";
import style from "../../styles/NASA-TLX.module.css"


export default function(){
    return (
        <PageContainer>
            <div>
                <h1>NASA-TLX</h1>
                <br/>
                <p className={style.Paragraph}>{content.introduction}</p>
                <br/><br/>
                
                <h2 className={style.H2}>Geistige Anforderungen</h2>
                <SideBySide 
                    firstItem={content.mentalText} 
                    secondItem={<Scale step="5"/>}
                />
                <br/><br/>

                <h2 className={style.H2}>Körperliche Anforderungen</h2>
                <SideBySide 
                    firstItem={content.physicalText} 
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Zeitliche Anforderungen</h2>
                <SideBySide
                    firstItem={content.temporalText}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Leistung</h2>
                <SideBySide
                    firstItem={content.performance}
                    secondItem={<Scale step="5" lower="gut" upper="schlecht"/>}
                />
                <br/><br/>

                <h2 className={style.H2}>Anstrengung</h2>
                <SideBySide
                    firstItem={content.effort}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Frustration</h2>
                <SideBySide
                    firstItem={content.frustration}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>
                
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <p className={style.Paragraph}>{content.annotation}</p>
                </div>
            </div>
        </PageContainer>
    );
}