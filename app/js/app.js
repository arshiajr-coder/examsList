const examsList = [
  {
    name: "سلامت و بهداشت",
    date: "۱۴۰۲/۳/۱۱",
    seasons: "درس ۶و۷",
    isNew: true,
  },
  {
    name: "سلام سید",
    date: "۱۴۰۲/۳/۱5",
    seasons: "درس ۶و۷",
    isNew: true,
  },
  {
    name: "سلامت و بهداشت",
    date: "۱۴۰۲/۳/۱۱",
    seasons: "درس ۶و۷",
    isNew: true,
  },
];

const ul = document.querySelector(".ul-list");

examsList.forEach((exam) => {
  ul.innerHTML += `<li class="relative lg:flex lg:w-[500px] py-4 lg:items-center">
  <div class="lg:w-[180px] text-center">${exam.name}</div>
  <div class="flex justify-center mt-3 lg:mt-0">
      <div class="lg:w-[140px] flex justify-center ml-4">${exam.date}</div>
      <div class="lg:w-[180px]">${exam.seasons}</div>
  </div>
  <div class="flex justify-center items-center w-6 h-6 rounded-xl text-[8px] text-white absolute top-0 left-0 lg:top-auto bg-red-400 ${exam.isNew? "": "hidden"}">${exam.isNew? "جدید": ""}</div>
</li>`;

});
