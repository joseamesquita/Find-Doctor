export class findDoctor {
  constructor(symptom, name){
    this.symptom = symptom,
    this.name = name
  }
  async getDoctor() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?symptom=${this.symptom}&name=${this.name}&location=45.5051%2C%20122.6750&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (response.ok && response.status == 200) {
        let jsonResponse = await response.json();
        return jsonResponse;
      } else{
          throw Error("Error: request for API failed.")
        }
      } catch (error) {
        alert(error.message);
        return false;
    }
}
}