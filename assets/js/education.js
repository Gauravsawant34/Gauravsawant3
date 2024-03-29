AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
 
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/infyspringboard.svg",
    moocLink: " https://drive.google.com/file/d/1ZBUoc_wKYE8zF3ELF1Q2fN-klGCoWkjX/view?usp=drive_link",
  },
  
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/infyspringboard.svg",
    moocLink: "",
  },
  
   {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/infyspringboard.svg",
    moocLink: " ",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/infyspringboard.svg",
    moocLink: " ",
  },
   {
    title: "Introduction of IOT",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://drive.google.com/file/d/17xuet5pmehcUdqawW1PRV9EujzhdLMYp/view?usp=drive_link",
  },

  {
    title: "Fullstack Java Developement",
    cardImage: "assets/images/education-page/SSPU.svg",
    moocLink: "",
  },
 
   {
    title: " React",
    cardImage: "assets/images/education-page/infyspringboard.svg",
    moocLink: "",
  },
 ];
 // {
 //    title: "Bootstrap 4",
 //    cardImage: "assets/images/education-page/udemy.svg",
 //    moocLink: " ",
 //  },
 
 // {
  //   title: "Data Science",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "",
  // },

  // {
  //   title: "Intro to React",
  //   cardImage: "assets/images/education-page/edx.svg",
  //   moocLink: "",
  // },

  // {
  //   title: "Intro to React Native",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink:
  //     "",
  // },
 
  // {
  //   title: "NodeJS, Express and MongoDB",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "",
  // },
   
  // {
  //   title: "Data Structures & Algorithms",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink:
  //     "",
  // },
  // {
  //   title: "Data Structures & Algorithms2",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink:
  //     "",
  // },
//];

/**/ 
const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);




const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/


$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    
   sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

 sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
  

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
  
  
  
});


