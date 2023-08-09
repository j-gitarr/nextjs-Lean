import PageContainer from "../../components/PageContainer";
import FormCheck from "../../components/FormCheck";
import style from "../../styles/Borg.module.css"

export default function Borg(){
    return(
        <PageContainer>
            <p className={style.centerAlignedText}><br/>Some Text about this site...</p>

            <div className={`${style.indentedDiv} ${style.gradientDiv}`}>
                <div className='${style.gradientDiv}'>
                        <FormCheck>06 überhaupt keine Anstrengung</FormCheck>
                        <FormCheck>07</FormCheck>
                        <FormCheck>08 extrem Locker</FormCheck>
                        <FormCheck>09</FormCheck>
                        <FormCheck>10 sehr Locker </FormCheck>
                        <FormCheck>11</FormCheck>
                        <FormCheck>12</FormCheck>
                        <FormCheck>13 ein wenig anstrengend</FormCheck>
                        <FormCheck>14</FormCheck>
                        <FormCheck>15 anstrengend</FormCheck>
                        <FormCheck>16</FormCheck>
                        <FormCheck>17 sehr anstrengend</FormCheck>
                        <FormCheck>18</FormCheck>
                        <FormCheck>19 extrem anstrengend</FormCheck>
                        <FormCheck>20 maximale Anstrengung</FormCheck>

                </div>
            </div>
        </PageContainer>
    );
}