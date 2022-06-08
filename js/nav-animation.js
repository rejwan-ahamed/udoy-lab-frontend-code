window.addEventListener('scroll', function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    header.classList.toggle("uptoggle", window.scrollY > 300);
    const udoylogo = this.document.querySelector('.test')
    const udoylogo2 = this.document.querySelector('.test2')
    const udoylogo3 = this.document.querySelector('.test3')
    const udoylogo4 = this.document.querySelector('.test4')
    const udoylogo5 = this.document.querySelector('.test5')
    const social1 = this.document.querySelector('.fa-facebook-f')
    const social2 = this.document.querySelector('.fa-instagram')
    const social3 = this.document.querySelector('.fa-linkedin-in')
    const social4 = this.document.querySelector('.fa-github')
    udoylogo.classList.toggle("link-black", window.scrollY > 100);
    udoylogo2.classList.toggle("link-black", window.scrollY > 100);
    udoylogo3.classList.toggle("link-black", window.scrollY > 100);
    udoylogo4.classList.toggle("link-black", window.scrollY > 100);
    udoylogo5.classList.toggle("link-black", window.scrollY > 100);
    social1.classList.toggle("social1", window.scrollY > 100);
    social2.classList.toggle("social2", window.scrollY > 100);
    social3.classList.toggle("social3", window.scrollY > 100);
    social4.classList.toggle("social4", window.scrollY > 100);

    // for mobile nav 
    const mobile = document.querySelector(".mobile-nav-main");
    mobile.classList.toggle("mobile-bg-color-add", window.scrollY > 100);
    const mobiletop = document.querySelector(".mobile-nav-main");
    mobiletop.classList.toggle("mobile-top", window.scrollY > 300);


})