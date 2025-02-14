/*  Typing animation* */
var typed = new Typed(".typing",{
    strings:["","Desarrollador Full-Stack"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: false,
    onComplete: (self) => { document.querySelector('.typed-cursor').style.display = 'none';
    }
    })
/*  Aside* */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for (let i = 0; i < totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () 
        {
            removeBackSection();
            for(let j = 0; j < totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection();
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this)
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
      }
      function removeBackSection()
      {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection()
      {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.add("back-section");
        }
      }
      function showSection(element)
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
      }
      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
        }
      }
      /*document.querySelector(".hire-me").addEventListener("click", function()
      {
         const sectionIndex = this.getAttribute("data-section-index");
         //console.log(sectionIndex);
         showSection(this);
         updateNav(this);
         removeBackSection();
         addBackSection(sectionIndex);
      })*/
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click",() =>
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i = 0; i < totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }

            const btn = document.getElementById('send_button');
            

              document.getElementById('form_contact')
              .addEventListener('submit', function(event) {
                event.preventDefault();

              btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_9p3goz9';

            emailjs.sendForm(serviceID, templateID, this)
              .then(() => {
              btn.value = 'Enviar Email';
              showCustomAlert('Enviado correctamente!');
              }, (err) => {
              btn.value = 'Enviado Email';
              showCustomAlert('Hubo un error: ' + JSON.stringify(err));
              });
            });

            function showCustomAlert(message) {
                /*const alertBox = document.getElementById('customAlert');*/
                const alertBox = $(".alertMessage");
                const alertContent = document.getElementById('alertContent'); 
                alertContent.textContent = message; 
                /*alertBox.classList.remove('hide'); 
                alertBox.classList.add('show');*/
                
                alertBox.fadeIn( 300 ).delay( 3500 ).fadeOut( 400 );

                

                /*setTimeout(() => { 
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');

        // Espera a que termine la transición antes de ocultar completamente
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000); // Debe coincidir con la duración de la transición de opacidad
    }, 5000);*/
            
}