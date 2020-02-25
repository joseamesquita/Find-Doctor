export class findDoctor {
  async getSymptom(query) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.4889%2C%20-122.8014%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return error.message;
    }
  }
}