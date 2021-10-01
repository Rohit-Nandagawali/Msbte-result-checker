
    let seat_link
    let enroll_link

function view_result(){
    let number = document.querySelector("#esnumber").value
    let myframe = document.getElementById("myframe")
    let download_btn = document.querySelector(".download")
    let frame = document.querySelector(".frame")


    // this code is for seat number

    if(number.length==6)
    {
        let fist_number = number.slice(0,2)
    //   window.open("https://msbte.org.in/DISRESLIVE2021CRSLDSEP/COV6139QS21LIVEResult/SeatNumber/"+fist_number+"/"+number+"Marksheet.html")
      seat_link = "https://msbte.org.in/DISRESLIVE2021CRSLDSEP/COV6139QS21LIVEResult/SeatNumber/"+fist_number+"/"+number+"Marksheet.html"

      myframe.src = seat_link
      download_btn.style.display = "inline-block"
      frame.style.display = "inline-block"

    }
    // enrollment number
    else if (number.length==10) {
        let fist_number = number.slice(0,2)
        console.log(fist_number)
        // window.open("https://msbte.org.in/DISRESLIVE2021CRSLDSEP/COV6139QS21LIVEResult/EnrollmentNumber/"+fist_number+"/"+number+"Marksheet.html")
        enroll_link = "https://msbte.org.in/DISRESLIVE2021CRSLDSEP/COV6139QS21LIVEResult/EnrollmentNumber/"+fist_number+"/"+number+"Marksheet.html"

        myframe.src = enroll_link
        download_btn.style.display = "inline-block"
        frame.style.display = "inline-block"

        console.log(enroll_link)
        
    } 
    // 
    else {
        swal({
            title: "Invalid seat or enrollment number",
            text: "Please enter valid seat or enrollment number",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        
    }
}


// 
function view() {
    if (seat_link!=undefined) {
        
        window.open(seat_link,"_blank")
    }
    else{
        window.open(enroll_link,"_blank")

    }
    
} 
