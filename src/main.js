import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

  $(document).ready(function() {
  $('button').click(function() {

    asyncApiCall();

    async function asyncApiCall() {
      let response = await fetch(`http://api.icndb.com/jokes?exclude=[explicit]`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }

    const getElements = function(response) {
      let i = Math.floor(Math.random() * 5);
      $('#joke').text(` ${response.value[i].joke}`);
    }
    asyncApiCall2();

    async function asyncApiCall2() {
      let response2 = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=eA5QrPG0kgbvymKiUi3pJqKZ0ZY54uIB&q=ChuckNorris`)
      let jsonifiedResponse2 = await response2.json();
      getElements2(jsonifiedResponse2);
    }
    const getElements2 = function (response2) {
      document.getElementById('gif').src = response2.data[0].images.downsized_large.url;
      console.log(response2);
   }
  });
});
