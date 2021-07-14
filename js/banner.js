const alertBanner = document.getElementById("alert");

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong> Alert: </strong> You have <strong> 4 </strong> unread messages.</p>
</div>
<div class= "alert-close-marker">
    <p class="alert-banner-close">&times;</p>
</div> ` ;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none" }
});
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out user field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});