function chunkString(str, length) {
  if (!str || typeof str !== 'string') return [];

  const chunks = [];
  for (let i = 0; i < str.length; i += length) {
    chunks.push(str.slice(i, i + length));
  }
  return chunks;
}
console.log(chunkString("Hello, world!", 5)); 
console.log(chunkString("12345", 2));        
console.log(chunkString("abc", 5));           
console.log(chunkString(null, 3));