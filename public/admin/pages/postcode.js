/*
|--------------------------------------------------------------------------
| JS for postcode
|--------------------------------------------------------------------------
|
| Author : Juman
| Version : 1.0.0
|
*/

tableLoad();

function tableLoad(){
	$.ajax({
		method: "GET",
		url: base_URL+'/'+'backoffice/postcodeormileage/tableData',
		dataType: "html",
		success: function(result){
			$('.TableData').html(result);
		}
	});
}


function deletePostcode(id){
	if(confirm('Are you sure ?')){
		$.ajax({
		    type: 'DELETE',
		    dataType: 'json',
		    url: base_URL+'/'+'backoffice/postcodeormileage/postcode/'+id,
		    data: {id:id},
		    async: false,
		    success: function(response){
		    	tableLoad();
		        toast(response);
		    }
		});
	}
}

jQuery(function($){


    $(document).on( 'click', '.btn-modal', function(e){
    	e.preventDefault();
    	var container = $(this).data("container");

    	$.ajax({
			url: $(this).data("href"),
			dataType: "html",
			success: function(result){
				$(container).html(result).modal('show');
			}
		});
    });


	$(document).on('submit', 'form#postcode_add_form', function(e){
		e.preventDefault();
		var data = $(this).serialize();

		$.ajax({
			method: "POST",
			url: $(this).attr("action"),
			dataType: "json",
			data: data,
		    success: function(response){

		    	if(response.status == 'success'){
			    	tableLoad();
		    		$('div.postcode_modal').modal('hide');
		    	}
				
		        toast(response);

		    }

		});
	});


});

