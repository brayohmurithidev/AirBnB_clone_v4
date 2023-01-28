$(document).ready(function(){
	var amenity_id = [];
	var amenity_name = [];
	var input_elements = $("input[type='checkbox']");
	$(input_elements).click(function(){
		var found = false;
		if ($(this).is(":checked")) {
			for (var index = 0; index < amenity_id.length; index++){
				if (amenity_id[index] == $(this).attr("id")){
					found = true;
				}
			}
			if (found == false){
				amenity_id.push($(this).attr("id"));
				amenity_name.push($(this).attr("name"));
			}
		} else {
			for (var index = 0; index < amenity_id.length; index++){
                                if (amenity_id[index] == $(this).attr("id")){
					amenity_id.splice(index,1);
					amenity_name.splice(index,1);
				}
			}
			
		} 
		var tmp = amenity_name.toString();
		$("div.amenities > h4").text(tmp);
	});
});
