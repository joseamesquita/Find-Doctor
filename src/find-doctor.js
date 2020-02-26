export class findDoctor {
  async getSymptom(query) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.505%2C-122.675%2C100&user_location=37.773%2C-122.413&skip=0&limit=5&user_key=${process.env.API_KEYY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        // throw Error("Error requests, try again. ");
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      document.getElementById("outcome").innerHTML = error.message;
      // return error.message;
    }
  }
}