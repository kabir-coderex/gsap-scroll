gsap.registerPlugin(ScrollTrigger);

const contents = document.querySelectorAll('.content');
const image = document.querySelector('#changing-image')

const changeImage = content =>{
 let imgURL = content.getAttribute('img-url')
 image.setAttribute('src', imgURL)
 if(imgURL !== './img3.png'){
    image.setAttribute('margin-top', '-30px')
 }
}

let cwh = document.querySelector('.content-wrapper').clientHeight;
console.log(cwh)


contents.forEach((content, i) => {
  const otherContents = Array.from(contents).filter((c, index) => index !== i);
  let contentHeight = content.clientHeight;
  let lastStarting = cwh - contentHeight;
console.log(lastStarting)

  ScrollTrigger.create({
    trigger: content,
    scroller: ".left-content",
    // scroller:'.content-wrapper',
    // markers: true,
    start: () => content.offsetHeight < window.innerHeight ? i === 1 ? "top 20%" : "top 30%" : "bottom 80%",
    // start: () => content.offsetHeight < window.innerHeight ? i === 1 ? "top 20%" : i === contents.length - 1 ? `top ${lastStarting}px` : "top 30%" : "bottom 80%",
    pinSpacing: false,
    pin:'.image',
    onEnter: () => {
        changeImage(content)
      gsap.to(content, { opacity: 1 });
      gsap.to(otherContents, { opacity: 0.5 });
      
    },
    onLeave: () => {
      gsap.to(content, { opacity: 0.5 });
    },
    onEnterBack: () => {
        changeImage(content)
      gsap.to(content, { opacity: 1 });
      gsap.to(otherContents, { opacity: 0.5 });
    },
  });
});

