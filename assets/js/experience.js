AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Technology Lead",
    cardImage: "assets/images/experience-page/infosys.jpg",
    place: "Infosys",
    time: "(June , 2022 - 2024)",
    desp: "<li>Managed a team of developers, ensuring on-time delivery with high code quality.</li> <li>Streamlined development using Agile methodologies, task prioritization, and best coding practices..</li> <li>Integrated Automation in Infosys local infra servers for monitoring and troubleshooting.Reduced tshoot time by 60% by gathering and filtering serverlogs and filtering them to Narrow down tshoot approach.<li>Enhanced team productivity through mentorship, automation, and efficient workflows.</li>",
  },
  {
    title: "Senior Application Support Engineer",
    cardImage: "assets/images/experience-page/TLF.png",
    place: "The Logic Factory",
    time: "(April 2016 - June, 2022)",
    desp: "<li>Automat IT Infrastructure of Private hosted cloud at The Logic Factory*</li><li>Developed Terraform & Ansible scripts to provision AWS infrastructure, reducing setup time by 80%.</li><li>Designed Ansible playbooks for server configurations & updates and logs gathering for Troubleshoot Test,Dev,Prod Issues.</li><li>Troubleshot Quintiq issues and Provided Tech Support to US EU Russian and Austrlian Clients as a Third Line TechSuppor Engineer and Technical Consultant.</li>",
  },
  {
    title: "Software Quality Analyst",
    cardImage: "assets/images/experience-page/musikaar.jpeg",
    place: "Musikaar Softwares",
    time: "(Dec 2014 - July 2015)",
    desp: "<li>Reduced bug resolution time by 30% with JIRA automation workflows.</li><li>Implemented automated test cases, improving test coverage & efficiency.</li><li>Developed automated regression testing, reducing manual effort by 40%.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Automated Infrastructure Monitoring System",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Develop an automated infrastructure monitoring system using Prometheus and Grafana. Created dynamic dashboards for real-time monitoring and alerting.",
  },
  {
    title: "CI/CD Pipeline for Web Applications",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Build a CI/CD pipeline using Jenkins, Docker, and Kubernetes to automate the build, test, and deployment processes for web applications.",
  },
  {
    title: "Web Development Mentorship Project",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Guide students in developing their own portfolio websites using HTML, CSS, and JavaScript. This project helps students showcase their skills and projects, providing a solid foundation in web development.",
  },
  {
    title: "Tech Support and Automation Mentorship Project",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentor students in creating an automated system monitoring and reporting tool using Python, Bash scripting, and monitoring tools like Prometheus and Grafana. This project will help students understand infrastructure management and automation.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hackathon Participation Project (2016)",
    subtitle: "Mentor Studets about Real-Time Traffic Network Monitoring System",
    image: "assets/images/experience-page/uplift.png",
    desp: "Participated in a hackathon in 2016 where our team developed a Python-based network monitoring and log gathering system.",
    href: "#",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
