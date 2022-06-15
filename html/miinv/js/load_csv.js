var csv_file_API = './js/data.csv';

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

                '<li class="list-group-item align-items-center">' + 
                        
                         
                            value["公司統編"] +
                         '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                         
                            value["公司名稱"] +
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                          
                            value["發票開立月份"] +
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
                          
                            value["發票開立張數"] +
                         

                    '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call
});