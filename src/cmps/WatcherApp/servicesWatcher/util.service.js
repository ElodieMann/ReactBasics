
async function getData(key) {
    try {
      const placesData = await localStorage.getItem(key);
      return JSON.parse(placesData);
    } catch (error) {
      console.error(`Error getting data from localStorage: ${error.message}`);
      throw error;
    }
  }
  
  async function addToData(key, item) {
    try {
      await localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error(`Error adding data to localStorage: ${error.message}`);
      throw error;
    }
  }
  
  function makeId(length = 6) {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let txt = "";
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
  
  export const utilService = {
    getData,
    addToData,
    makeId,
  };
  