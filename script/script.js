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

image.setAttribute("src", reviews[0].img);
testName.textContent = reviews[0].name;
testJob.textContent = reviews[0].job;
testReview.textContent = reviews[0].review;