export default function(){
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const camelCaseDate = `${day}${month}${year}`;
    return camelCaseDate;
}