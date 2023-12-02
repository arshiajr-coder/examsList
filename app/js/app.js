const examsList = [
  {
    name: "سلامت و بهداشت",
    date: "۱۴۰۲/۳/۱۱",
    seasons: "درس ۶و۷",
    isNew: true,
  },
];

const ul = document.querySelector(".ul-list");

examsList.forEach((exam) => {
  ul.innerHTML += `<li class="relative flex w-[400px] lg:w-[480px] py-2">
    <div class="w-[122px] lg:w-[140px]">${exam.name}</div>
    <div class="w-[100px] lg:w-[140px] flex justify-center ml-2">${exam.date}</div>
    <div class="w-[140px] lg:w-[180px]">${exam.seasons}</div>
    <div class="flex justify-center items-center w-6 h-6 rounded-xl text-[8px] ${exam.isNew? "": "hidden"} text-white absolute top-0 left-[-7px] lg:top-auto bg-red-400">${exam.isNew? "جدید": ""}</div>
</li>`;
});
