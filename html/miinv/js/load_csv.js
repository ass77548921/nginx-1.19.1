var csv_file_API = './data.csv';

$(document).ready(function () {
  $.ajax({

    type: 'GET',

    url: csv_file_API,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },

    success: function (data) {

        var jsonData = $.csv.toObjects(data);

        console.log(jsonData);

        $.each(jsonData, function (index, value) {

            $('#showCSV').append(

                '<li class="list-group-item d-flex justify-content-between align-items-center">' + 
                    
                    '<span style="width: 15%; font-size: 1rem; font-weight: bold; color: #37474F">' +
                        value['公司統編'] +
                    '</span>' +

                    '<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
                        value['公司名稱'] +
                    '</span>' +

                    '<span style="width: 15%; font-size: 1rem;  color: #37474F">'  +
                        value['發票開立月份'] +
                    '</span>' +

                    '<span style="width: 15%; font-size: 1rem;  color: #37474F">'  +
                        value['發票開立張數'] +
                    '</span>' +

                '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call
});