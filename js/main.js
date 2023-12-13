let video = document.querySelector("video")
video.defaultPlaybackRate = 0.5
video.load()

const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  showcase.classList.toggle("active")
})
