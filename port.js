const resumeBtn = document.getElementById('resumeBtn');
const githubBtn = document.getElementById('githubBtn');
const fbBtn = document.getElementById('fbBtn');
const instaBtn = document.getElementById('instaBtn');
const linkedinBtn = document.getElementById('linkedinBtn');
const youtubeBtn = document.getElementById('youtubeBtn');

resumeBtn.addEventListener('click' , function() {
    location.href = 'resume.pdf';
});

githubBtn.addEventListener('click' , function() {
    window.open('https://github.com/narukaavdesh2' , '_blank');
});

fbBtn.addEventListener('click' , function() {
    window.open('https://www.facebook.com/avdesh.naruka.3/' , '_blank');
});

instaBtn.addEventListener('click' , function() {
    window.open('https://www.instagram.com/avdesh_naruka/' , '_blank');
});

linkedinBtn.addEventListener('click' , function() {
    window.open('https://www.linkedin.com/in/avdesh-singh/' , '_blank');
});

youtubeBtn.addEventListener('click' , function() {
    window.open('https://www.youtube.com/@avdeshsingh001' , '_blank');
});