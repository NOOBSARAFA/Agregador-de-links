function togglemode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
const img = document.querySelector("#profile img")

if (html.classList.contains("light"))
{
img.setAttribute("src", "./Avatar.png")
  
}
else {img.setAttribute("src", "./avatarlondon.png")

}


  }
