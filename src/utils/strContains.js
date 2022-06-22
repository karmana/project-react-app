const strContans = (firstStr, secondStr) => {
    if (firstStr.toLowerCase().includes(secondStr.toString().toLowerCase()))
        return true
        else
        return false
}
  export default strContans;