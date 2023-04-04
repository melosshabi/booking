export default function capitalize(str){
    let tempStr = str.split("")
    let upperCaseLetter = tempStr[0].toUpperCase()
    tempStr[0] = upperCaseLetter
    let finalStr = tempStr.join("")

    return finalStr;
}