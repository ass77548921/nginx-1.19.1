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
        $("#enter").click(function () { 
            var filterData = $(jsonData).filter(function(index){
                return jsonData[index].公司統編 == $("#number").val();
            });
            var totalfill = 0;
            $(".fill").remove();
           
            $.each(filterData, function (index, value) {
                totalfill += parseInt(value["發票開立張數"]);
              
                $('#showCSV').append(
                  
                    '<td class="list-group-item" style="word-spacing:20px;text-align:left;padding-left:30%;'+
                        ' fill '+ value["公司統編"] + '">'+
                        
                    value["公司統編"] +
                    '&nbsp;'+
                             
                    value["公司名稱"] +
                    '&nbsp;'+
    
                              
                    value["發票開立月份"] +
                    '&nbsp;'+'&nbsp;'+
                              
                    value["發票開立張數"] +
                             
                    '</td>'
                    
                );
    
            });
            if(filterData[1] !=null){
            $('#showCSV').append('<li class="list-group-item align-items-center fill">'+'總開立發票張數 ' +totalfill +'</li>')}
        });
        

    } // end: Ajax success API call

}); // end: of Ajax call
});