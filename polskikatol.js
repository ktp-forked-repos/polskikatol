// Arrays
var namesOfMonths = [
"STYCZEŃ",
"LUTY",
"MARZEC",
"KWIECIEŃ",
"MAJ",
"CZERWIEC",
"LIPIEC",
"SIERPIEŃ",
"WRZESIEŃ",
"LISTOPAD",
"GRUDZIEŃ",
];



// Get current date
var dat = new Date();
// Test different dates
 dat.setDate(20);
 dat.setMonth(4);

var month = dat.getMonth();
var year = dat.getFullYear();
var currentNrDay = dat.getDate();

// Get which day of week is the first day of month
dat.setDate(1);
var firstDayOfMonth = dat.getDay();
// Changing day of month
dat.setDate(currentNrDay);

console.log("Dzień tygodnia dla 1 dnia miesiąca "+firstDayOfMonth);


window.onload = begin;
var contentHtmlNumbers = "";

console.log("firstDayOfMonth "+firstDayOfMonth);
for ( i=0; i<42 ; i++){

// If robiący puste pola przed 1 dniem miesiąca
			if (i<firstDayOfMonth) {
				if(!(i%7)){
					contentHtmlNumbers += '<div class="daysOfMonth sunday" id="square'+i+'"></div>';
				} else {
					contentHtmlNumbers += '<div class="daysOfMonth" id="square'+i+'"></div>';
				}
			} else {
				// Change day as i
			 dat.setDate(i+1-firstDayOfMonth);

			 // Sprawdzania czy dzien nie jest po za miesiącem, jeżeli jest to miesiąc się zmienia
			 if( ( dat.getDate() === (i+1-firstDayOfMonth) ) && (dat.getMonth() === month) ) {
				 // wypelnienie 1 dnia miesiaca dla odpowiedniego dnia tygodnia
				 // dodatkowo zaznaczanie dni dzisiejszego
							if(!(i%7)){
								contentHtmlNumbers += '<div class="daysOfMonth sunday" id="square'+i+'">'+ (i+1-firstDayOfMonth) +'</div>';
							} else if ((!(i%7)) && ( (i+1-firstDayOfMonth) === currentNrDay) ) {
									contentHtmlNumbers += '<div class="daysOfMonth sundayToday" id="square'+i+'">'+ (i+1-firstDayOfMonth) +'</div>';
							} else if ((i+1-firstDayOfMonth) === currentNrDay) {
									contentHtmlNumbers += '<div class="daysOfMonth today" id="square'+i+'">'+ (i+1-firstDayOfMonth) +'</div>';
								}
									else {
										contentHtmlNumbers += '<div class="daysOfMonth" id="square'+i+'">'+ (i+1-firstDayOfMonth) +'</div>';
									}


} else {
	if ((i+1)%7 === 0) {
		contentHtmlNumbers += '<div style="clear: both;"></div>';
	}	else {
		// Wypełnianie dni po za miesiącem pustymi divami
					if(!(i%7)){
						contentHtmlNumbers += '<div class="daysOfMonth sunday" id="square'+i+'"></div>';
					} else {
						contentHtmlNumbers += '<div class="daysOfMonth" id="square'+i+'"></div>';
					}

					if ((i+1)%7 === 0) {
						contentHtmlNumbers += '<div style="clear: both;"></div>';
					}

			}
}
}
}


// change date
 dat.setDate(currentNrDay);
 dat.setMonth(month);

 console.log("dzien "+ dat.getDate()+ " current "+currentNrDay);
 console.log("miesiac "+ dat.getMonth()+ " current "+month);


function begin(){

	document.getElementById("headerOfCalendar").innerHTML = namesOfMonths[month] + " " + year;
	 document.getElementsByClassName("containerForNumbers")[0].innerHTML = contentHtmlNumbers;
}
