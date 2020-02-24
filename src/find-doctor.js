export class findDoctor {
  async getSymptom(symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?symptom=${symptom}&location=45.5051%2C%20122.6750&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
    } catch (error) {
      return false;
    }
  }
}