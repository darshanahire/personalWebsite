const moreProj =document.getElementById("moreProj")
const hiddenProjects =document.getElementById("hiddenProjects")
const covidtracker =document.getElementById("covidtracker")
const showProj1 =document.getElementById("show-proj1")
const showProj2 =document.getElementById("show-proj2")
const showProj3 =document.getElementById("show-proj3")
const showProj4 =document.getElementById("show-proj4")
const noteCard =document.getElementById("noteCard")
const calCard =document.getElementById("calCard")
const card =document.getElementsByClassName("card")
const cardConainer =document.getElementById("card-conainer")
const formContainer =document.getElementById("form-container")
const contactmeid =document.getElementById("contactmeid")
const moreprojbtn =document.getElementById("moreprojbtn")
function mediaFunc(med) {
    if (med.matches) {
        cardConainer.style.height="2500px";
        moreprojbtn.style.display="none";
    }
    else{
        cardConainer.style.height="1550px";
        contactmeid.style.marginTop="130px";
    }
    
}
moreProj.addEventListener("click",()=>{
    moreProj.style.visibility="hidden"
    hiddenProjects.style.display="none";
    showProj1.style.display="block";
    showProj2.style.display="block";
    showProj3.style.display="block";
    showProj4.style.display="block";
    // formContainer.style.marginTop="-100px"
    noteCard.style.zIndex=4;
    calCard.style.zIndex=4;
    covidtracker.style.zIndex=4;
    const medialist = window.matchMedia("(max-width:1000px)")
    mediaFunc(medialist)
    medialist.addListener(mediaFunc)
    })