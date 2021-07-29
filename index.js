const features = document.getElementById("about__us");
const ourTeam = document.getElementById("our__team");

const item1 = document.querySelector(".about-us-item-list:nth-child(1)");
const item2 = document.querySelector(".about-us-item-list:nth-child(2)");
const item3 = document.querySelector(".about-us-item-list:nth-child(3)");
const item4 = document.querySelector(".about-us-item-list:nth-child(4)");
const text = document.querySelector(".our-team__text-animated");
const img = document.querySelector(".our-team__img-animated");

const options = {
  rootMargin: "50px",
  threshold: 0.5,
};

const options2 = {
  rootMargin: "50px",
  threshold: 0.2,
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      item1.style.animation = `aboutUs1 500ms linear 0ms `;
      item2.style.animation = `aboutUs1 500ms linear 250ms`;
      item3.style.animation = `aboutUs1 500ms linear 500ms`;
      item4.style.animation = `aboutUs1 500ms linear 750ms`;

      item1.style.opacity = `1`;
      setTimeout(function () {
        item2.style.opacity = `1`;
      }, 250);
      setTimeout(function () {
        item3.style.opacity = `1`;
      }, 500);
      setTimeout(function () {
        item4.style.opacity = `1`;
      }, 750);
    }
  });
};

const onEntryTeam = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      text.style.animation = `right 500ms linear`;
      img.style.animation = `img 500ms linear`;
    }
    setTimeout(function () {
      text.style.opacity = `1`;
      img.style.opacity = `1`;
    }, 500);
  });
};

const observer = new IntersectionObserver(onEntry, options);
const observerOurTeam = new IntersectionObserver(onEntryTeam, options2);

observer.observe(features);
observerOurTeam.observe(ourTeam);
