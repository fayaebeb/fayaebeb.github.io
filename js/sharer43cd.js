function facebook(){
	share("https://www.facebook.com/sharer/sharer.php?u=");
}

function facebookayat(tafseerLink){			
	var fblink =   $(location).attr('host') + "/" + tafseerLink;
	share("https://www.facebook.com/sharer/sharer.php?u=",fblink);
}

function whatsappayat(tafseerLink){			
	var whatsapplink = $(location).attr('host') +"/"+ tafseerLink;
	share("https://api.whatsapp.com/send?text=",whatsapplink);
}

function twitterayat(tafseerLink){			
	var twitterlink =  $(location).attr('host') +"/"+ tafseerLink;
	share("https://twitter.com/home?status=",twitterlink);
}

function facebookclick(){
	currLoc = $(location).attr('href');
	share("https://www.facebook.com/sharer/sharer.php?u=", currLoc);
}
function whatsappclick(){
	currLoc = $(location).attr('href');
	share("https://api.whatsapp.com/send?text=", currLoc);
}
function twitterclick(){
	currLoc = $(location).attr('href');
	share("https://twitter.com/home?status=", currLoc);
}


function facebook(tafseerLink){
	share("https://www.facebook.com/sharer/sharer.php?u=", tafseerLink);
}

function twitter(){
	share("https://twitter.com/home?status="+encodeURIComponent(t) + " ");
}

function twitter(tafseerLink){
	share("https://twitter.com/home?status="+encodeURIComponent(t) + " ", tafseerLink);
}

function googlePlus(){
	share("https://plus.google.com/share?url=");
}

function whatsup(){
	share("https://api.whatsapp.com/send?text=");
}

function whatsup(tafseerLink){
	share("https://api.whatsapp.com/send?text="+tafseerLink);
}

u=location.href;
t=document.title;

function share(link)
{
	var height = 600, width = 600;
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open(link+encodeURIComponent(u),'sharer', windowFeatures);
    return false;
}

function share(link, tafseerLink)
{
	var height = 600, width = 600;
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open(link+tafseerLink,'sharer', windowFeatures);
    return false;
}