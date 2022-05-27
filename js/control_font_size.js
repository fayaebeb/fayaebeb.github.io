$(document).ready(function(){     
	var cookieLoad = read_cookie (COOKIE_NAME);
	$('.fontSizeVal').html("<p style='margin: 6px 0px;'><b>"+cookieLoad+"px</b></p>");  
	
	var originalSize = $('#araayat span').css('font-size');         
	// reset        
	$(".resetMe").click(function(){           
		$('#araayat span').css('font-size', originalSize);         
	});
 
	// Increase Font Size          
	$(".increaseFont").on("click", function(){         
		increase_font_size();
		var size = $('.variable_font').css('font-size');
		$('.fontSizeVal').html("<p style='margin: 6px 0px;'><b>"+size+"</b></p>");
		return false;          
	});        
  
	// Decrease Font Size       
	$(".decreaseFont").on("click", function(){ 
		reduce_font_size();
		var size = $('.variable_font').css('font-size');
		$('.fontSizeVal').html("<p style='margin: 6px 0px;'><b>"+size+"</b></p>");  
		return false;         
	});
});

var COOKIE_NAME = "SAVED_VARIABLE_FONT_SIZE";
var DEFAULT_FONT_SIZE = 28;
var MAXIMUM_FONT_SIZE = 38;
var MINIMUM_FONT_SIZE = 28;

var variable_font_rule;

function reduce_font_size(){
	if(variable_font_rule){
		var cookie = read_cookie(COOKIE_NAME);
		var font_size = DEFAULT_FONT_SIZE;
  
		if(cookie){
			font_size = parseInt (cookie, 10);
		}
  
		if(font_size > MINIMUM_FONT_SIZE){
			font_size--;
			variable_font_rule.style.fontSize = (font_size) + "px";
			create_cookie(COOKIE_NAME, font_size.toString(), 0);
		}
	}
}

function restore_font_size(){
	if (variable_font_rule){
		var font_size = DEFAULT_FONT_SIZE;
		variable_font_rule.style.fontSize = (font_size) + "px";
		create_cookie (COOKIE_NAME, font_size.toString(), 0);
    }
}
  
function increase_font_size(){
	if (variable_font_rule){
		var cookie = read_cookie (COOKIE_NAME);
		var font_size = DEFAULT_FONT_SIZE; 
		if(cookie){
			font_size = parseInt (cookie, 10);
		}
  
		if (font_size < MAXIMUM_FONT_SIZE){
			font_size++;
			variable_font_rule.style.fontSize = (font_size) + "px";
			create_cookie ( COOKIE_NAME, font_size.toString (), 0 );
		}
    }
}
  
function initialize_font_size(css_sheet_name, selector){
	if ( document.styleSheets && css_sheet_name && selector ){
	    var done = false;
	    var found = false;
	    var i = 0;
	    var sheet_rules;
	    var sheets = document.styleSheets;
	    var the_rules = new Array();
	
	    css_sheet_name = css_sheet_name.toLowerCase();
	
	    i = 0;
	    done = (i >= sheets.length);
	    while (!(done || found)){
	    	var sheet_name = sheets[i].href.substring(sheets[i].href.lastIndexOf('/') + 1).toLowerCase();
	    	
	    	if (sheet_name == css_sheet_name){
	    		the_rules = sheets[i].cssRules || sheets[i].rules;
	    		found = true;
	        }else{
	        	i++;
	        	done = ( i >= sheets.length );
	        }    
	    }

	    if(found){
	    	found = false;
	    	i = 0;
	    	done = (i >= the_rules.length);
	    	
	    	while (!(done || found)){
		        found = (the_rules[i].selectorText.toLowerCase() == selector.toLowerCase());
		        if(found){
		        	variable_font_rule = the_rules [ i ];
		        }else{
		        	i++;
		        	done = (i >= the_rules.length);
		        }    
	        }
		}

	    if(variable_font_rule){
	    	var cookie = read_cookie ( COOKIE_NAME );
	    	var font_size = DEFAULT_FONT_SIZE;
	
	    	if(cookie){
	    		font_size = parseInt(cookie, 10);
	        }
	    	
	    	variable_font_rule.style.fontSize = (font_size) + "px";
	    	create_cookie (COOKIE_NAME, font_size.toString(), 0);
		}
	}
}

function on_keyup(e){
	var code = (window.event) ? event.keyCode : e.keyCode;

	switch(code){
    	case 109 :
    	
    	case 189 : // '-'
    		reduce_font_size();
    		break;
    
    	case 107 :
    		
    	case 187 : // '+'
    		increase_font_size();
    		break;
    
    	case 32 :  // ' '
    		restore_font_size();
    		break;
    
    	default :  // don't handle it in this module    
    		break;
    }
}

document.onkeyup=on_keyup;
