const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const place = document.querySelector("#title");
const about = document.querySelector("#about");
const chitra = document.querySelector("#image");
const btn = document.querySelector("#explore");

const places = [
  {
    place: "ANNAPURNA REGION",
    about:
      "The spectacular Annapurna Region offers some of the best trekking routes in Nepal. The region’s most popular trekking route is the beautiful Annapurna Base Camp. For expert mountaineers, there is the grand Annapurna itself, but there are also many smaller treks and trails together with cultural detours.",
    path: "https://images.unsplash.com/photo-1647679180836-86ffeaaa5c22?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "LANGTANG",
    about:
      "Langtang is best known for its excellent Langtang Valley trek, a relatively gentle-paced trek accessible from Kathmandu. The area is known for its spectacular scenery, indigenous Tamang culture, green forests, and bamboo groves.",
    path: "https://images.unsplash.com/photo-1668669386226-0ae01b21a29d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFuZ3Rhbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    place: "MANANG",
    about:
      "Manang is a key stop for hikers doing the Annapurna Circuit. Surrounded by stunning snow-covered mountains and glacial lakes, the village offers some fascinating detours like a three-day trek to the otherworldly Tilicho Lake (4,919m).",
    path: "images/manang.jpg",
  },
  {
    place: "MUSTANG",
    about:
      "Hiding beyond the Himalayas in northern Nepal and near Tibet, the ancient kingdom of Mustang attracts both pilgrims and adventure-seekers. Its rugged mountainous terrain and valleys carved by the Kali-Gandaki river are an extraordinary spectacle.",
    path: "https://images.unsplash.com/photo-1528846328457-87c98b48ef37?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Chitwan National Park",
    about:
      "Chitwan National Park is the place to come to experience a different side of Nepal. This is a wonderful place for wildlife viewing and it has a safari-type atmosphere. At an altitude of only 100 meters in some areas, much lower than Kathmandu at 1,400 meters.",
    path: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * places.length);
  place.innerText = places[random].place;
  about.innerText = places[random].about;
  chitra.setAttribute("src", places[random].path);
});
