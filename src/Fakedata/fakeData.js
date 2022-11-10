const fakeData = [{
    "id": 1,
    "in_cart": true,
    "instructor": "Bartlet Keep",
    "instructor_photo": "https://robohash.org/quivoluptatemolestias.png?size=50x50&set=set1",
    "price": 36,
    "duration": "1h 53m",
    "title": "Illustration Practice: Lettering & Florals With Adobe Fresco",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/9b9898a196a35d1d940bd26aefe626e5/original"
  }, {
    "id": 2,
    "in_cart": true,
    "instructor": "Rhea Bellhouse",
    "instructor_photo": "https://robohash.org/quiisterepudiandae.png?size=50x50&set=set1",
    "price": 32,
    "duration": "3h 40m",
    "title": "Python Beginners Programming Guide",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d0e71b3229152de9317c8d3b5049d494/original"
  }, {
    "id": 3,
    "in_cart": true,
    "instructor": "Svend Bussetti",
    "instructor_photo": "https://robohash.org/nihiletveniam.png?size=50x50&set=set1",
    "price": 52,
    "duration": "47m",
    "title": "Illustrator Basics: The Pen & Pencil Tools",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/a74aa39f36b60b2468c656eb8830b437/original"
  }, {
    "id": 4,
    "in_cart": true,
    "instructor": "Ludovico Artin",
    "instructor_photo": "https://robohash.org/sedautsuscipit.png?size=50x50&set=set1",
    "price": 69,
    "duration": "60m",
    "title": "Simple Character Animation",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/3756730827001/original"
  }, {
    "id": 5,
    "in_cart": true,
    "instructor": "Valentine Casterton",
    "instructor_photo": "https://robohash.org/quiafacereminima.png?size=50x50&set=set1",
    "price": 64,
    "duration": "8h 3m",
    "title": "Unity Game Development For Beginners",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/02688fc554cab1a4e6e6de54f622e774/original"
  }, {
    "id": 6,
    "in_cart": true,
    "instructor": "Gertrud McPeice",
    "instructor_photo": "https://robohash.org/deseruntevenietsequi.png?size=50x50&set=set1",
    "price": 79,
    "duration": "59m",
    "title": "Unity Game Development For Beginners",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/02688fc554cab1a4e6e6de54f622e774/original"
  }, {
    "id": 7,
    "in_cart": true,
    "instructor": "Ingaberg Quillinane",
    "instructor_photo": "https://robohash.org/quibusdamutcum.png?size=50x50&set=set1",
    "price": 84,
    "duration": "4h 9m",
    "title": "Website Development With Python & Flask",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/44be85115470027a44d25f6816f1fe7c/original"
  }, {
    "id": 8,
    "in_cart": true,
    "instructor": "Berte Greeson",
    "instructor_photo": "https://robohash.org/harumtemporaiusto.png?size=50x50&set=set1",
    "price": 14,
    "duration": "2h 7m",
    "title": "Unity 2D Game Development Course",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d796a5b1f59442791107c77cfcdbf9a4/original"
  }, {
    "id": 9,
    "in_cart": true,
    "instructor": "Reta Lechmere",
    "instructor_photo": "https://robohash.org/optioautquam.png?size=50x50&set=set1",
    "price": 39,
    "duration": "5h 8m",
    "title": "Learn Video Game Development & Program In C#!",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/79c8d8638a79991b23e849467b7688a2/original"
  }, {
    "id": 10,
    "in_cart": true,
    "instructor": "Diane-marie Gilfoy",
    "instructor_photo": "https://robohash.org/numquamestnon.png?size=50x50&set=set1",
    "price": 79,
    "duration": "4h 21m",
    "title": "Illustrated Journaling II: 14 MORE Days of Prompts",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e2064cd050ca7693cd65af77fd58bd8d/original"
  }, {
    "id": 11,
    "in_cart": true,
    "instructor": "Oswald Manach",
    "instructor_photo": "https://robohash.org/cupiditatedoloresrepellat.png?size=50x50&set=set1",
    "price": 36,
    "duration": "1h 53m",
    "title": "Illustration Practice: Lettering & Florals With Adobe Fresco",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/9b9898a196a35d1d940bd26aefe626e5/original"
  }, {
    "id": 12,
    "in_cart": true,
    "instructor": "Nikolai McWilliams",
    "instructor_photo": "https://robohash.org/animiconsequaturtempora.png?size=50x50&set=set1",
    "price": 90,
    "duration": "1h 27m",
    "title": "Pattern Play: Layered Designs",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/dbb066c8c2aafffc10a89bb9db443297/original"
  }, {
    "id": 13,
    "in_cart": true,
    "instructor": "Beatrix Bates",
    "instructor_photo": "https://robohash.org/expeditainciduntest.png?size=50x50&set=set1",
    "price": 52,
    "duration": "47m",
    "title": "Illustrator Basics: The Pen & Pencil Tools",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/a74aa39f36b60b2468c656eb8830b437/original"
  }, 
  {
    "id": 14,
    "in_cart": true,
    "instructor": "Tabby Umpleby",
    "instructor_photo": "https://robohash.org/exexcepturinatus.png?size=50x50&set=set1",
    "price": 42,
    "duration": "19m",
    "title": "Vector illustration: How to Create Simple Product Mockups",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/e3bb0305fc277caa93814a6cc5512481/original"
  }, {
    "id": 15,
    "in_cart": true,
    "instructor": "Talya Goby",
    "instructor_photo": "https://robohash.org/quaeratnecessitatibusaut.png?size=50x50&set=set1",
    "price": 14,
    "duration": "26m",
    "title": "Typographic Badges: Building with Type, Shape and Balance",
    "course_thumbnail": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/89b5ec92c45f90082e992d8b6acca523/original"
  }
  ]
  export default fakeData;