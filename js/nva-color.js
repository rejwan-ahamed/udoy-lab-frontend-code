const allpost = this.window.location.href
console.log(allpost)

if (allpost == "http://127.0.0.1:5500/allpost.html") {
    console.log('done')

    const udoylogo = this.document.querySelector('.test')
    const udoylogo2 = this.document.querySelector('.test2')
    const udoylogo3 = this.document.querySelector('.test3')
    const udoylogo4 = this.document.querySelector('.test4')
    const udoylogo5 = this.document.querySelector('.test5')
    const social1 = this.document.querySelector('.fa-facebook-f')
    const social2 = this.document.querySelector('.fa-instagram')
    const social3 = this.document.querySelector('.fa-linkedin-in')
    const social4 = this.document.querySelector('.fa-github')
    // udoylogo.classList("link-black");
    udoylogo.setAttribute("class", "link-black");
    udoylogo2.setAttribute("class", "link-black");
    udoylogo3.setAttribute("class", "link-black");
    udoylogo4.setAttribute("class", "link-black");
    udoylogo5.setAttribute("class", "link-black");
    social1.setAttribute("id", "social1");
    social2.setAttribute("id", "social2");
    social3.setAttribute("id", "social3");
    social4.setAttribute("id", "social4");

}

window.addEventListener('scroll', function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 1);
    header.classList.toggle("uptoggle", window.scrollY > 300);
    // for mobile nav 
    const mobile = document.querySelector(".mobile-nav-main");
    mobile.classList.toggle("mobile-bg-color-add", window.scrollY > 100);
    const mobiletop = document.querySelector(".mobile-nav-main");
    mobiletop.classList.toggle("mobile-top", window.scrollY > 300);


})