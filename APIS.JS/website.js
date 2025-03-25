function logout() {
    alert("Logging out...");
    window.location.href = "login-page1.html"; // Redirect to login page
}
// Select the button
const button = document.querySelector("#button");

// Add event listener to redirect when clicked
button.addEventListener("click", function () {
    alert("Redirecting to dashboard...");
    window.location.href = "dashboard.html"; // Redirect to dashboard
});

// the main page 

const menuitem = document.querySelectorAll('.menu-item')

// remove active class from all menu items
const changeActiveItem = () => {
    menuitem.forEach(item =>{
        item.classList.remove('active')
    })
}

menuitem.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup'),
            Style.display = 'none';
        }else{
            document.querySelector('.notifications-popup'),
            Style.display = 'block';
            
        }
    })
})