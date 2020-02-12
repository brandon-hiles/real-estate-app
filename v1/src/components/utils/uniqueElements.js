function getUniqueElements(data, property) {
    /*
    Helper Method: Returns an array of all unique elements in object specified
    by object property called property.

    Example: obj = {prop1: ["ex1", "ex2", "ex1"], prop2: ...}
    elms = getUniqueElements(prop1) -> ["ex1", "ex2"]
     */

    let list = data.map((item) => {
      return item[property]
    })

    list = new Set(list) // Convert to set to get unique elements
    list = [...list] // Convert back to array
    return list.sort() // Sort the list
  }

  export default getUniqueElements