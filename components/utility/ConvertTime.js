export default function ConvertTime(TimeString){
    const formatted = TimeString.charAt(5) + TimeString.charAt(6) + "." + TimeString.charAt(8) +TimeString.charAt(9) + "." + TimeString.charAt(0) + TimeString.charAt(1) +TimeString.charAt(2) + TimeString.charAt(3) + " " + (parseInt(TimeString.charAt(11) + TimeString.charAt(12))+2)+ ":" + TimeString.charAt(14) +TimeString.charAt(15)

    return formatted;
}