const data = [
  {
    id: 1,
    hours: "23",
    minute: "00",
    title: "خبر",
    img: "https://i.postimg.cc/sX4zM2FT/0-96.jpg",
    Runtime: 77
  },
  {
    id: 2,
    hours: "00",
    minute: "17",
    title: "اذان ظهر به افق قم ",
    img: "https://i.postimg.cc/wxr8c9dN/template-8.jpg",
    Runtime: 13
  },
  {
    id: 3,
    hours: "00",
    minute: "30",
    title: "فیلم سینمایی  ",
    img: "https://i.postimg.cc/8c921mb4/template-10.jpg",
    Runtime: 120
  },
  {
    id: 4,
    hours: "02",
    minute: "30",
    title: "پلاک۱۶ (تکرار) ",
    img: "https://i.postimg.cc/xjXTSxfK/template.gif",
    Runtime: 155
  },
  {
    id: 5,
    hours: "05",
    minute: "05",
    title: "ترتیل جزء خوانی قرآن کریم ",
    img: "https://i.postimg.cc/0j5sDqPP/image.jpg",
    Runtime: 25
  },
  {
    id: 6,
    hours: "05",
    minute: "30",
    title: "سخنرانی",
    img: "https://i.postimg.cc/KzvSQzzP/template-9.jpg",
    Runtime: 16
  },
  {
    id: 7,
    hours: "05",
    minute: "46",
    title: "اذان صبح به افق قم ",
    img: "https://i.postimg.cc/wxr8c9dN/template-8.jpg",
    Runtime: 24
  },
  {
    id: 8,
    hours: "06",
    minute: "10",
    title: "دعای عهد  ",
    img:
      "https://i.postimg.cc/wxWKZZ9R/icon-2-Bgnz-ZEj-E-2019-03-06-08-12-05.png",
    Runtime: 20
  },
  {
    id: 9,
    hours: "06",
    minute: "30",
    title: "جانهای عاشق",
    img: "https://i.postimg.cc/1R7PCpDf/template-1.jpg",
    Runtime: 20
  },
  {
    id: 10,
    hours: "07",
    minute: "10",
    title: "مستند طبیعت",
    img: "https://i.postimg.cc/hPPD7VtT/Nature-Docs-HEADER-OPT-298x218.jpg",
    Runtime: 55
  },
  {
    id: 11,
    hours: "08",
    minute: "00",
    title: "در مسیر پیشرفت",
    img: "https://i.postimg.cc/VLGY95JT/download.jpg",
    Runtime: 60
  },
  {
    id: 12,
    hours: "09",
    minute: "00",
    title: "بی تعارف(زنده)",
    img: "https://i.postimg.cc/kgx0m8RN/template-2.jpg",
    Runtime: 30
  },
  {
    id: 13,
    hours: "09",
    minute: "30",
    title: "انیمیشن",
    img: "https://i.postimg.cc/bvpKNJ17/template-3.jpg",
    Runtime: 60
  },
  {
    id: 14,
    hours: "10",
    minute: "30",
    title: "دکتر سلام (زنده) ",
    img: "https://i.postimg.cc/j2w1kJr7/template.jpg",
    Runtime: 30
  },
  {
    id: 15,
    hours: "11",
    minute: "00",
    title: "بیان (تکرار)",
    img: "https://i.postimg.cc/tgryKP8S/template.png",
    Runtime: 125
  },
  {
    id: 16,
    hours: "13",
    minute: "05",
    title: "فیلم سینمایی(تکرار)",
    img: "https://i.postimg.cc/8c921mb4/template-10.jpg",
    Runtime: 120
  },
  {
    id: 17,
    hours: "15",
    minute: "05",
    title: "دکتر سلام (تکرار) ",
    img: "https://i.postimg.cc/j2w1kJr7/template.jpg",
    Runtime: 25
  },
  {
    id: 18,
    hours: "15",
    minute: "30",
    title: "دلیرستان (تکرار)",
    img: "https://i.postimg.cc/R0f4zRg5/1116111-267.jpg",
    Runtime: 30
  },
  {
    id: 19,
    hours: "16",
    minute: "00",
    title: "انیمیشن سینمایی",
    img: "https://i.postimg.cc/bvpKNJ17/template-3.jpg",
    Runtime: 30
  },
  {
    id: 20,
    hours: "16",
    minute: "30",
    title: "حدیث کسا",
    img: "https://i.postimg.cc/9MhVX7k4/Sml-600-30044.jpg",
    Runtime: 50
  },
  {
    id: 21,
    hours: "17",
    minute: "20",
    title: "اذان مغرب به افق قم",
    img: "https://i.postimg.cc/wxr8c9dN/template-8.jpg",
    Runtime: 25
  },
  {
    id: 22,
    hours: "17",
    minute: "45",
    title: 'مسابقه تلفنی "هفت در هفت"(زنده)',
    img: "https://i.postimg.cc/rsD6XP5z/template-6.jpg",
    Runtime: 35
  },
  {
    id: 23,
    hours: "18",
    minute: "20",
    title: "طنزپیشگان",
    img: "https://i.postimg.cc/y8D7LB9N/download-1.jpg",
    Runtime: 50
  },
  {
    id: 24,
    hours: "19",
    minute: "00",
    title: "سیمای ورزش(زنده)",
    img: "https://i.postimg.cc/13bsTTcr/download-2.jpg",
    Runtime: 120
  },
  {
    id: 25,
    hours: "21",
    minute: "00",
    title: "فیلم سینمایی",
    img: "https://i.postimg.cc/8c921mb4/template-10.jpg",
    Runtime: 120
  },
  {
    id: 26,
    hours: "22",
    minute: "45",
    title: 'مسابقه تلفنی "هفت در هفت"(زنده)',
    img: "https://i.postimg.cc/rsD6XP5z/template-6.jpg",
    Runtime: 35
  },
  {
    id: 27,
    hours: "23",
    minute: "30",
    title: "حدیث کسا",
    img: "https://i.postimg.cc/9MhVX7k4/Sml-600-30044.jpg",
    Runtime: 50
  }
];
export default data;
