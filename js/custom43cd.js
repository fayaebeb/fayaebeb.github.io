  function formSurahSubmit(responsive) {
	  
		var value = $('#surah').val();
		
		if(responsive){
			value = $('#surahResp').val();
		}
		
		if (value != null && value == 0) {
			window.location.href = appContext;
			return;
		}
		
		if($('#tafseerchk').is(":checked") || $('#tafseerchkResp').is(":checked")) {
			if ( (!$('#urdu').is(":checked") && $('#urduResp').is(":checked")) || ($('#urdu').is(":checked") && !$('#urduResp').is(":checked"))) {
				
				if(value =='surah-al-taubah'){
					 window.location.href = appContext + LangCode+"/"+ value +"/ayat-1/translation/tafsir";
					 return;
				}
				
				window.location.href = appContext + LangCode+"/" + value +"/ayat-0/translation/tafsir";
				
				return;
			}	
		}
		else {
			if ( (!$('#urdu').is(":checked") && $('#urduResp').is(":checked")) || ($('#urdu').is(":checked") && !$('#urduResp').is(":checked"))) {
				var link = appContext + LangCode+"/"+ value + "/translation";
				window.location.href = link;
				return;
			}	
		}
		if (value != null && value.trim().length > 0) {
			window.location.href = appContext + value ;
			return;
		}
	} 
  
	function formParaSubmit(responsive) {
		
		var value = $('#para').val();
		var trans = $('#urdu').val();
		
		if(responsive){
			value = $('#paraResp').val();
			trans = $('#urduResp').val();
		}
		
		if (value != null && value == 0) {
			window.location.href = appContext;
			return;
		}
		
	
		if ( (!$('#urdu').is(":checked") && $('#urduResp').is(":checked")) || ($('#urdu').is(":checked") && !$('#urduResp').is(":checked"))) {
			window.location.href = appContext + LangCode+"/"+"para-" +value + "/translation";
			return;
		}	
	
		
		if (value != null && value.trim().length > 0) {
			window.location.href = appContext+"para-" + value;
			return;
		}
	}
	
	  function formAayaatSubmit(responsive) {
		  
		var ayat = $('#ayat').val();
		var surah = $('#surah').val();
		
		if(responsive){
			ayat = $('#ayatResp').val();
			surah = $('#surahResp').val();
		}
		
		if (ayat != null && ayat.trim().length > 0) {
		
			if(ayat != null && ayat > '0'){
				window.location.href = appContext + LangCode+"/"+ ayat+"/translation/tafsir";
				return;
			}
			
			if (ayat != null && ayat == '-1'){
				if(surah =='surah-al-taubah'){
					 window.location.href = appContext + LangCode+"/"+ surah +"/ayat-1/translation/tafsir";
					 return;
				}
				window.location.href = appContext + LangCode+"/"+ surah +"/ayat-0/translation/tafsir";
				return;
			}
		}
	
	} 
	
	  function fortranslation(responsive) {
		  
		var para = $('#para').val();
		var surah = $('#surah').val();
		var ayat = $('#ayat').val();

		if(responsive){
			para = $('#paraResp').val();
			surah = $('#surahResp').val();
			ayat = $('#ayatResp').val();
		}
		
		if($('#tafseerchk').is(":checked") || $('#tafseerchkResp').is(":checked")) {
			window.location.href = appContext + surah ;
			return;
		}
		
		if( (!$('#urdu').is(":checked") && !$('#urduResp').is(":checked"))){
			if(ayat != null && ayat != '-1'){
				window.location.href = appContext + ayat;
				return;
			}
			else if (para != null && para != '0'){
				window.location.href = appContext + "para-" + para;
				return;
			}
			else if(surah != null && surah != '0'){
				window.location.href = appContext + surah;
				return;
			}
		}
		else{
			if (para != null && para != '0') {
				window.location.href = appContext + LangCode+"/"+ "para-"+para+"/translation";
				return;
			}
			else if(ayat != null && ayat != '-1'){
				window.location.href = appContext + LangCode+"/"+ ayat +"/translation";
				return;
			}
			else if(surah != null && surah != '0'){
				window.location.href =  appContext + LangCode+"/"+ surah +"/translation";
				return;
			}
		}
		
	} 
	  
	  function fortafseer(responsive) {
		  
		  var surah = $('#surah').val();
		  var ayat = $('#ayat').val();
          var para = $('#para').val();
          var forTafseerSurah =$('#forTafseerSurah').val();
          
          if(responsive){
        	  surah = $('#surahResp').val();
    		  ayat = $('#ayatResp').val();
              para = $('#paraResp').val();
              forTafseerSurah = $('#forTafseerSurahResp').val();
  		  }
          
          if($('#tafseerchk').is(":checked") || $('#tafseerchkResp').is(":checked")) {
              
        	  if(para != null && para > '0'){
        		  window.location.href = appContext + LangCode+"/" + forTafseerSurah +"/ayat-0/translation/tafsir";
        		  return;
        	  }
          
        	  if(ayat != null && ayat != '-1'){
        	     window.location.href = appContext + LangCode+"/"+ ayat +"/translation/tafsir";
        	     return;
        	  } else if(surah != null && surah != '0'){
        		  if(surah =='surah-al-taubah'){
        			  window.location.href = appContext + LangCode+"/"+ surah +"/ayat-1/translation/tafsir";
        			  return;
        		  } else {
        			  //var link ="https://alqurankarim.net/ur/"+ surah +"/ayat-0/translation/tafsir";
        			  
					  window.location.href = appContext +LangCode+"/"+ surah +"/ayat-0/translation/tafsir";
					  return;
        		  }
        	  }
		  } else{
			  if (surah != null && surah.trim().length > 0) {
				  console.log(surah);
				  window.location.href = appContext + LangCode+"/"+ surah +"/translation";
				  return;
			  }
		  }
  		}


  function forLanguages(responsive)
  {
  	if(responsive == true)
	{
		var lang = $('#langResposive').val();
	}
  	else{
		var lang = $('#lang').val();
	}

  	//for local and stage
	  // var con = appContext + LangCode
	  // var afetlang = window.location.pathname.slice(con.length)
	  // console.log(con.length)
	  // window.location.href = appContext + lang + afetlang ;

if(appContext == "https://alqurankarim.net/")
{
	var con = appContext
	console.log(lang);
	var afetlang = window.location.href.slice(con.length+2)

	window.location.href = appContext + lang + afetlang ;
}
else
{
	var con = appContext + LangCode
	var afetlang = window.location.pathname.slice(con.length)
	console.log(appContext)
	window.location.href = appContext + lang + afetlang ;
}

	  

  }
