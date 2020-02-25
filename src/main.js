import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findDoctor } from './find-doctor.js';

$(document).ready(function () {
  $("#search").submit(function (event) {
    event.preventDefault();
    const query = $("#inputSymptom").val();

    (async () => {
      let search = new findDoctor();
      const response = await search.getSymptom(query);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response == false) {
        $("#result").text("error");
      } else if (response.data === 0) {
        $("ul#listDoctors").append("No Doctors available");
      } else if (response.data.length > 0) {
        for (let i = 0; i < response.data.length; i++) {
          // response.data.forEach(function (doctors) {
          // });
        }
      }
      $("result").show();
    }
  });
});