import './App.css'


 const customers=[

     {
         id:1,
         avatar:'https://i0.wp.com/defendernetwork.com/wp-content/uploads/2022/02/Samuel-L.-Jackson-in-Pulp-Fiction.-Miramax.-JPEG-1.jpg?fit=1076%2C719&ssl=1',
         customerName:'jake paul',
         description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores mollitia \n' +
             '         nesciunt saepe sit, voluptatum. Atque commodi delectus deserunt dicta, \n' +
             '         dolorum et ipsam ipsum natus sapiente! Autem facere quis sunt.',
         userProfile:'https://stewartstaffordblog.wordpress.com/category/movies/'

     },
     {
         id:2,
         avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT8btLt8tzAy8np9G4u76oZmU6ckF1JFBEYv4Dj0JhwnucBLOaWYf1MkhVRKj8QKoR5U&usqp=CAU',
         customerName:'nelson',
         description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores mollitia \n' +
             '         nesciunt saepe sit, voluptatum. Atque commodi delectus deserunt dicta, \n' +
             '         dolorum et ipsam ipsum natus sapiente! Autem facere quis sunt.',
         userProfile:'https://defendernetwork.com/news/opinion/top-10-coolest-black-male-movie-tv-characters/'

     },
     {
         id:3,
         avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5gsnleF5JTeUZdAjTl6lSpHqS4zFNxxtcnPtlsbuFmHfb7FbqtizcY75Jf_YnHoKTL8&usqp=CAU',
         customerName:'liver pool',
         description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores mollitia \n' +
             '         nesciunt saepe sit, voluptatum. Atque commodi delectus deserunt dicta, \n' +
             '         dolorum et ipsam ipsum natus sapiente! Autem facere quis sunt.',
         userProfile:'https://www.empireonline.com/movies/features/100-greatest-movie-characters/'

     },{
         id:4,
         avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzekyPrwf78iz8bwtVj_IyeS4-wN3hDlgpZw&s',
         customerName:'maker made',
         description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores mollitia \n' +
             '         nesciunt saepe sit, voluptatum. Atque commodi delectus deserunt dicta, \n' +
             '         dolorum et ipsam ipsum natus sapiente! Autem facere quis sunt.',
         userProfile:''

     },
     {
         id:5,
         avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRA8M7caAQobx5GoLdPIHfXsaCgL60-C4nxYWtI3yKW2fSjmBxLcVc_Ege5eBIGuOWK0&usqp=CAU',
         customerName:'silva de ',
         description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores mollitia \n' +
             '         nesciunt saepe sit, voluptatum. Atque commodi delectus deserunt dicta, \n' +
             '         dolorum et ipsam ipsum natus sapiente! Autem facere quis sunt.',
         userProfile:'https://www.wallflowerjournal.com/art-books-media/14-women-in-film-and-tv-that-make-us-love-being-women'

     }

]
function App() {


  return (
     <>
      <h1>customer data</h1>

     <div className="card" >
    <img src="https://images.squarespace-cdn.com/content/v1/5f13643bd87ba32558d653e7/c373a9ad-3795-41ff-ba12-9084d1242261/Arwen-Return-of-the-King-arwen-undomiel-34589904-950-1458.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

     </>


  )
}

export default App
