const reviews = [
    {
        img: "images/image-tanya.jpg",
        name: "Tanya Sinclair",
        job: "UX Engineer",
        review: 
        `
        “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”
        `
    },
    {
        img: "images/image-john.jpg",
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        review: 
        `
        “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”
        `
    }
];

const image = document.querySelector(".testimonial_img");
const testName = document.querySelector(".name");
const testJob = document.querySelector(".job");
const testReview = document.querySelector(".review_text");
const review = document.querySelector(".review");
const elements = [image, testReview, testName, testJob, review];

for(const elem of elements) {
    elem.style.transition = "all .25s ease-in-out";
}

let index = 0;
changeContent();

document.querySelector(".btn_forward").addEventListener("click", () => {
    if(index < reviews.length - 1) {
        index++;
        changeContent("right");
    }
});
document.querySelector(".btn_back").addEventListener("click", () => {
    if(index-1 >= 0) {
        index--;
        changeContent("left");
    }
});

function changeContent(direction) {
    let offset = 0;
    if(direction === "right") {
        offset = -5;
    } else if (direction === "left") {
        offset = 5;
    }
    for(const elem of elements) {
        elem.style.transform = "translateX(" + offset +  "rem)";
        elem.style.opacity = "0";
        setTimeout(() => {
            elem.style.transform = "translateX(" + offset * -1 + "rem)";
        }, 250);
    }

    setTimeout(() => {
        image.setAttribute("src", reviews[index].img);
        testName.textContent = reviews[index].name;
        testJob.textContent = reviews[index].job;
        testReview.textContent = reviews[index].review;
    }, 250);

    setTimeout(() => {
        for(const elem of elements) {
            elem.style.transform = "translateX(0)";
            elem.style.opacity = "1";
        }
    }, 500);
}