const paginateData = (arr, part, chunk_size) => {
  let parts = []
  let myChunk = []
  for (let index = 0; index < arr.length; index += chunk_size) {
    myChunk = arr.slice(index, index + chunk_size)
    parts.push(myChunk)
  }
  return parts[part - 1]
}
export default paginateData
