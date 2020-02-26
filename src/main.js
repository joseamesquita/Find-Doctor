import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findDoctor } from './find-doctor.js';
import './styles.css';

$(document).ready(function () {
  $("#search").submit(function (event) {
    event.preventDefault();
    const query = $("#input").val();

    (async () => {
      let search = new findDoctor();
      const response = await search.getSymptom(query);
      getElements(response);
    })();

    function getElements(response) {
      let x = undefined;
      let y = true;
      if (!response) {
        $("#outcome").append("Error: cannot reach request, please try again. ");
      }
      else if (response.data.length === 0) {
        $("#outcome").append(`No Doctors available, please enter your symptom and/or name of Doctor of your preference.`);
      } else if (response.data.length > 0) {
        for (let i = 0; i < response.data.length; i++) {
          response.data.forEach(function (doctors) {
            $("ul#result").append(`<li>${"Name: "}${doctors.profile.first_name} ${doctors.profile.last_name} <br> ${"Address: "} ${doctors.practices[0].visit_address.street} ${doctors.practices[0].visit_address.city + ", "} ${doctors.practices[0].visit_address.state} ${doctors.practices[0].visit_address.zip} <br> ${"Phone Number: "}${doctors.practices[0].phones[0].number} <br> ${"Website: " + ((doctors.practices[0].website !== x) ? doctors.practices[0].website : "No websited provided.")} <br> ${"Current accepting new patients: " + $(doctors.practices[0].accepts_new_patients == y) ? "Currently accepting new patients." : "Currently not accepting patients."} <br> </li> `);
          });
        }
      }
      $("#outcome").show();

    }
  });
});