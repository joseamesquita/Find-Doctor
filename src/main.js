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
      if (response == false) {
        $("#result").text("error");
      } else if (response.data.length === 0) {
        $("#outcome").append(`No Doctors available`);
      } else if (response.data.length > 0) {
        for (let i = 0; i < response.data.length; i++) {
          response.data.forEach(function (doctors) {
            $("ul#result").append(`<li>${doctors.profile.first_name} ${doctors.profile.last_name} ${doctors.practices[0].visit_address.city} ${doctors.practices[0].visit_address.state} ${doctors.practices[0].visit_address.street} ${doctors.practices[0].visit_address.zip} ${doctors.practices[0].phones[0].number}</li> `);
          });
        }
      }
      $("#outcome").show();
    }
  });
});