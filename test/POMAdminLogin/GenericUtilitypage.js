/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
class GenericUtility {

  async randombetween(min,max) {  
  return Math.floor(Math.random() * (max - min) + min)
   }
}

export default new  GenericUtility();
