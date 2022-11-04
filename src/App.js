import "./App.css";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import logo from "./logo.svg";
import bannerImage from "./images/topGreenBanner.webp";
import { Footer } from "./components/Footer/Footer";
const courseInfo = [{
  "id": 1,
  "instructor": "Bartlet Keep",
  "instructor_photo": "https://robohash.org/quivoluptatemolestias.png?size=50x50&set=set1",
  "price": 61,
  "length": "3h 4m",
  "title": "Website Development With Python & Flask ",
  "course_thumbnail": "https://static.skillshare.com/uploads/video/thumbnails/44be85115470027a44d25f6816f1fe7c/original"
}, {
  "id": 2,
  "instructor": "Rhea Bellhouse",
  "instructor_photo": "https://robohash.org/quiisterepudiandae.png?size=50x50&set=set1",
  "price": 32,
  "length": "3h 40m",
  "title": "Python Beginners Programming Guide",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d0e71b3229152de9317c8d3b5049d494/original"
}, {
  "id": 3,
  "instructor": "Svend Bussetti",
  "instructor_photo": "https://robohash.org/nihiletveniam.png?size=50x50&set=set1",
  "price": 57,
  "length": "2h 30m",
  "title": "Unity 2D Game Development Course",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/02688fc554cab1a4e6e6de54f622e774/original"
}, {
  "id": 4,
  "instructor": "Ludovico Artin",
  "instructor_photo": "https://robohash.org/sedautsuscipit.png?size=50x50&set=set1",
  "price": 69,
  "length": "5h 3m",
  "title": "Python Flask for Beginners - CRUD",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/44be85115470027a44d25f6816f1fe7c/original"
}, {
  "id": 5,
  "instructor": "Valentine Casterton",
  "instructor_photo": "https://robohash.org/quiafacereminima.png?size=50x50&set=set1",
  "price": 64,
  "length": "8h 3m",
  "title": "Unity Game Development For Beginners",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/02688fc554cab1a4e6e6de54f622e774/original"
}, {
  "id": 6,
  "instructor": "Gertrud McPeice",
  "instructor_photo": "https://robohash.org/deseruntevenietsequi.png?size=50x50&set=set1",
  "price": 79,
  "length": "59m",
  "title": "Unity Game Development For Beginners",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/02688fc554cab1a4e6e6de54f622e774/original"
}, {
  "id": 7,
  "instructor": "Ingaberg Quillinane",
  "instructor_photo": "https://robohash.org/quibusdamutcum.png?size=50x50&set=set1",
  "price": 84,
  "length": "4h 9m",
  "title": "Website Development With Python & Flask",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/44be85115470027a44d25f6816f1fe7c/original"
}, {
  "id": 8,
  "instructor": "Berte Greeson",
  "instructor_photo": "https://robohash.org/harumtemporaiusto.png?size=50x50&set=set1",
  "price": 14,
  "length": "2h 7m",
  "title": "Unity 2D Game Development Course",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d796a5b1f59442791107c77cfcdbf9a4/original"
}, {
  "id": 9,
  "instructor": "Reta Lechmere",
  "instructor_photo": "https://robohash.org/optioautquam.png?size=50x50&set=set1",
  "price": 39,
  "length": "5h 8m",
  "title": "Learn Video Game Development & Program In C#!",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/79c8d8638a79991b23e849467b7688a2/original"
}, {
  "id": 10,
  "instructor": "Diane-marie Gilfoy",
  "instructor_photo": "https://robohash.org/numquamestnon.png?size=50x50&set=set1",
  "price": 79,
  "length": "4h 21m",
  "title": "Illustrated Journaling II: 14 MORE Days of Prompts",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e2064cd050ca7693cd65af77fd58bd8d/original"
}, {
  "id": 11,
  "instructor": "Oswald Manach",
  "instructor_photo": "https://robohash.org/cupiditatedoloresrepellat.png?size=50x50&set=set1",
  "price": 36,
  "length": "1h 53m",
  "title": "Illustration Practice: Lettering & Florals With Adobe Fresco",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/9b9898a196a35d1d940bd26aefe626e5/original"
}, {
  "id": 12,
  "instructor": "Nikolai McWilliams",
  "instructor_photo": "https://robohash.org/animiconsequaturtempora.png?size=50x50&set=set1",
  "price": 90,
  "length": "1h 27m",
  "title": "Pattern Play: Layered Designs",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/dbb066c8c2aafffc10a89bb9db443297/original"
}, {
  "id": 13,
  "instructor": "Beatrix Bates",
  "instructor_photo": "https://robohash.org/expeditainciduntest.png?size=50x50&set=set1",
  "price": 52,
  "length": "47m",
  "title": "Illustrator Basics: The Pen & Pencil Tools",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/a74aa39f36b60b2468c656eb8830b437/original"
}, 
{
  "id": 14,
  "instructor": "Tabby Umpleby",
  "instructor_photo": "https://robohash.org/exexcepturinatus.png?size=50x50&set=set1",
  "price": 42,
  "length": "19m",
  "title": "Vector illustration: How to Create Simple Product Mockups",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e3bb0305fc277caa93814a6cc5512481/original"
}, {
  "id": 15,
  "instructor": "Talya Goby",
  "instructor_photo": "https://robohash.org/quaeratnecessitatibusaut.png?size=50x50&set=set1",
  "price": 14,
  "length": "26m",
  "title": "Typographic Badges: Building with Type, Shape and Balance",
  "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/89b5ec92c45f90082e992d8b6acca523/original"
}, 
// {
//   "id": 16,
//   "instructor": "Roseann Vineall",
//   "instructor_photo": "https://robohash.org/temporibusaccusamusmolestiae.png?size=50x50&set=set1",
//   "price": 59,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 17,
//   "instructor": "Matthus Gounot",
//   "instructor_photo": "https://robohash.org/voluptatemdoloresminus.png?size=50x50&set=set1",
//   "price": 80,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 18,
//   "instructor": "Glen Igoe",
//   "instructor_photo": "https://robohash.org/delenitisintquos.png?size=50x50&set=set1",
//   "price": 49,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 19,
//   "instructor": "Simone de Nore",
//   "instructor_photo": "https://robohash.org/liberoaliasvelit.png?size=50x50&set=set1",
//   "price": 33,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 20,
//   "instructor": "Lauraine Kubes",
//   "instructor_photo": "https://robohash.org/omnisconsequaturquidem.png?size=50x50&set=set1",
//   "price": 58,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 21,
//   "instructor": "Quintin Livens",
//   "instructor_photo": "https://robohash.org/eumharumnam.png?size=50x50&set=set1",
//   "price": 78,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 22,
//   "instructor": "Krysta Del Dello",
//   "instructor_photo": "https://robohash.org/iustodistinctiohic.png?size=50x50&set=set1",
//   "price": 32,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 23,
//   "instructor": "Amelie Dowthwaite",
//   "instructor_photo": "https://robohash.org/cumtemporibusid.png?size=50x50&set=set1",
//   "price": 78,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 24,
//   "instructor": "Jacenta Draysey",
//   "instructor_photo": "https://robohash.org/architectorerummollitia.png?size=50x50&set=set1",
//   "price": 72,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 25,
//   "instructor": "Emmalyn Litchmore",
//   "instructor_photo": "https://robohash.org/liberoetet.png?size=50x50&set=set1",
//   "price": 43,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 26,
//   "instructor": "Corney Dussy",
//   "instructor_photo": "https://robohash.org/noncorporisqui.png?size=50x50&set=set1",
//   "price": 21,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 27,
//   "instructor": "Leigh Podd",
//   "instructor_photo": "https://robohash.org/temporateneturfacere.png?size=50x50&set=set1",
//   "price": 77,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 28,
//   "instructor": "Feodor Gaunter",
//   "instructor_photo": "https://robohash.org/quoddolorumnesciunt.png?size=50x50&set=set1",
//   "price": 77,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 29,
//   "instructor": "Shea Twitchett",
//   "instructor_photo": "https://robohash.org/doloremeanihil.png?size=50x50&set=set1",
//   "price": 34,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }, {
//   "id": 30,
//   "instructor": "Gabie Ruttgers",
//   "instructor_photo": "https://robohash.org/quaeratfugiatimpedit.png?size=50x50&set=set1",
//   "price": 37,
//   "length": null,
//   "title": null,
//   "course_thumbnail": null
// }
];
// Scraped data code from skill share

// var time = document.querySelectorAll('.ss-class__stats__duration');
// var isss = document.querySelectorAll('.thumbnail-img');
// var title = document.querySelectorAll('.ss-card__title');
// for(let i = 0; i < isss.length; i++){
// console.log(`"length": "${time[i].innerText}",`)
// console.log(`"title": "${title[i].innerText}",`);
// console.log(`"course_thumbnail": "${isss[i].src}"`);
// }

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Body courseList={courseInfo} halfBanner={bannerImage} />
      {courseInfo.map((course) =>{console.log(course.instructor);})}
      <Footer />
    </div>
  );
}

export default App;
