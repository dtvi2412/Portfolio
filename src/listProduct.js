import shopBookImg from './Assets/images/hinhWeb/shop-book.png';
import shopBookImgFull from './Assets/images/fullScreen/shop-book-full.png';
import instagramImg  from './Assets/images/hinhWeb/instagram.png';
import instagramImgFull from './Assets/images/fullScreen/instagram.png';
import netflixImg  from './Assets/images/hinhWeb/netflix.png';
import netflixImgFull from './Assets/images/fullScreen/netflix.png';
import apiFilm2021Img  from './Assets/images/hinhWeb/api-film-2021.png';
import apiFilm2021ImgFull from './Assets/images/fullScreen/api-film-2021.png';
import mernLearnImg from './Assets/images/hinhWeb/MERN-LEARN.png';
import mernLearnImgFull from './Assets/images/fullScreen/MERN-LEARN.png';

const product = [
    {
        id: 1,
        duAn: 'Shop Book',
        congNghe: 'Reactjs, Redux, Firebase, DevPaypal(Sandbox)',
        // image: 'https://i.imgur.com/MBoTyCD.png',
        // imageDetail:'https://i.imgur.com/PpL87gq.png',
        image: shopBookImg,
        imageDetail:shopBookImgFull,
        ngonNgu: 'REACJS',
        linkDemo: 'https://shop-bae1a.firebaseapp.com',
        moTa:'Thao tác với Firebase, tạo dữ liệu cần dùng, kết nối firebase với Reacjs, lấy những thông tin dữ liệu của firebase để đưa vào của redux, render và xử lý các chức năng của website, sử dụng developer paypal(sanbox) để tạo thông tin tài khoản paypal thanh toán trực tiếp qua paypal'
      },
      {
        id:10,
        duAn:'Clone Instagram',
        congNghe :'Reacjs, Firebase, Material UI, SASS',
        // image:'https://i.imgur.com/t0CrqwD.png',
        // imageDetail:'https://i.imgur.com/7aDWloS.png',
        image:instagramImg,
        imageDetail:instagramImgFull,
        ngonNgu: 'REACJS',
        linkDemo : 'https://hosting-instagram-clone.firebaseapp.com',
        moTa:'Sử dụng firebase để tạo tài khoản đăng nhập, đăng nhập thông qua facebook hoặc google.Thao tác với ReactJS tạo ra giao diện và các chức năng.'

      },
      {
        id: 28,
        duAn: 'MERN LEARN',
        congNghe: 'Mongo, Express, NodeJS, Reactjs, Call API, Heroku, Netlify',
        // image:'https://i.imgur.com/YH9mIbD.png',
        // imageDetail:'https://i.imgur.com/YVJ0DDw.png',
        image:mernLearnImg,
        imageDetail:mernLearnImgFull,
        ngonNgu: 'REACJS',
        linkDemo: 'https://angry-euler-1c98ac.netlify.app/',
        moTa:'Sử dụng NodeJS để xây dựng server RESTful API, sử dụng ReactJS để call API render giao diện, dùng Heroku để deploy Nodejs ra website và dùng Netlify để đưa ReactJS ra website '
      },
  

      {
        id:22,
        duAn: 'MOVIE-API',
        congNghe: 'ReactJS, Firebase(deploy)',
        // image:'https://i.imgur.com/SL6OmsS.png',
        // imageDetail:'https://i.imgur.com/DVHDpTa.png',
        image:apiFilm2021Img,
        imageDetail:apiFilm2021ImgFull,
        ngonNgu:'REACJS',
        linkDemo:'https://film-api-redux-2021.firebaseapp.com',
        moTa:'Tôi sử dụng redux để lưu trữ dữ liệu khi call Api từ server và tạo giao điện render ra màn hình, và sử dụng firebase để deploy lên website',
      },
      {
        id:23,
        duAn: 'Shoes Store',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/KxUJzQ9.png',
        imageDetail:'https://i.imgur.com/OCDxXvr.png',
        ngonNgu:'REACJS',
        linkDemo:'https://shoes-dtv.firebaseapp.com',
        moTa:'Tôi sử dụng React để tạo ra giao diện theo các website, dữ liệu lưu trữ bằng redux và sử dụng firebase để tạo hosting.',
      },
      {
        id: 8,
        duAn: 'Netflix HomePage',
        congNghe: 'Reactjs, Call API,Reacjs Youtube',
        // image:'https://i.imgur.com/YH9mIbD.png',
        // imageDetail:'https://i.imgur.com/YVJ0DDw.png',
        image:netflixImg,
        imageDetail:netflixImgFull,
        ngonNgu: 'REACJS',
        linkDemo: 'http://netflix-home.surge.sh/',
        moTa:'Lấy dữ liệu từ API render ra giao diện, tạo giao diện giống với Netflix, sử dụng Reacjs Youtube để tải dữ liệu video.'
      },
      {
        id:21,
        duAn: 'LINE FRIENDS',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/7bKh235.png',
        imageDetail:'https://i.imgur.com/w4SfieO.png',
        ngonNgu:'REACJS',
        linkDemo:'https://line-friends-clone.web.app',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện Line Friends và sử dụng Firebase để deploy.',
      },
      {
        id:19,
        duAn: 'WAVELANE',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/U4n0qfq.png',
        imageDetail:'https://i.imgur.com/5eLMvfQ.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-wave-lane.firebaseapp.com',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện Wavelane và sử dụng Firebase để deploy.',
      },
      {
        id:20,
        duAn: 'AGENCY LEGEND',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/BPTdDf9.png',
        imageDetail:'https://i.imgur.com/h4RnNFf.png',
        ngonNgu:'REACJS',
        linkDemo:'https://agency-clone.web.app',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện Agency Legend và sử dụng Firebase để deploy.',
      },
      {
        id:24,
        duAn: 'Buro Harro',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/8r9LgaM.jpg',
        imageDetail:'https://i.imgur.com/kRoVwsc.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-buro-harro-96139.firebaseapp.com',
        moTa:'Tôi sử dụng React để tạo ra giao diện website Buro Harro, sử dụng firebase để tạo hosting.',
      },
      {
        id:25,
        duAn: 'Cake Shop',
        congNghe: 'ReactJS, Surge(deploy)',
        image:'https://i.imgur.com/YuP0N4z.png',
        imageDetail:'https://i.imgur.com/l7tpdi7.png',
        ngonNgu:'REACJS',
        linkDemo:'http://clone-cakeshop.surge.sh',
        moTa:'Tôi sử dụng React để tạo ra giao diện website Cakeshop, sử dụng surge để tạo hosting.',
      },
      {
        id:26,
        duAn: 'Tesla',
        congNghe: 'ReactJS, Styled-Components, Redux/Toolkit, Surge(deploy)',
        image:'https://i.imgur.com/suBZQ6g.png',
        imageDetail:'https://i.imgur.com/xExKg9v.jpg',
        ngonNgu:'REACJS',
        linkDemo:'http://tesla-clone24.surge.sh',
        moTa:'Tôi sử dụng React, Redux/Toolkit, Styled-components để tạo ra giao diện website Tesla, sử dụng surge để tạo hosting.',
      },
      {
        id:27,
        duAn: 'Disney',
        congNghe: 'ReactJS, Styled-Components, Redux/Toolkit, Surge(deploy)',
        image:'https://i.imgur.com/IaQk2iJ.png',
        imageDetail:'https://i.imgur.com/Ofh8v26.png',
        ngonNgu:'REACJS',
        linkDemo:'http://clone-disneydtv.surge.sh/',
        moTa:'Tôi sử dụng React, Redux/Toolkit, Styled-components để tạo ra giao diện website Disney, sử dụng surge để tạo hosting.',
      },
      {
        id:14,
        duAn: 'Youtube Clone',
        congNghe: 'ReactJS ,Material UI',
        image:'https://i.imgur.com/Y8Q3Jjk.png',
        imageDetail:'https://i.imgur.com/rZyuH4S.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-ddb15.firebaseapp.com',
        moTa:'Sử dụng React JS ,Material UI và Firebase(deploy) clone giao diện Youtube.',
      },
      {
        id:15,
        duAn: 'Basketball',
        congNghe: 'ReactJS, Firebase, Redux',
        image:'https://i.imgur.com/tv1qKT5.png',
        imageDetail:'https://i.imgur.com/wmijxEL.png',
        ngonNgu:'REACJS',
        linkDemo:'https://basketball-a3551.firebaseapp.com/',
        moTa:'Môn bóng rổ là môn thể thao tôi yêu thích nên tôi đã tạo ra website này, tôi muốn lưu trữ những video của các ngôi sao bóng rổ và các kỹ năng để mình có thể xem và cho đồng đội xem mà không cần search trên youtube',
      },
      {
        id:16,
        duAn: 'Image Desgin',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/FkoLYao.png',
        imageDetail:'https://i.imgur.com/ryVl7IB.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-website-imagedesign98.web.app',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện Image Desgin Custom và sử dụng Firebase để deploy.',
      },
      {
        id:17,
        duAn: 'Boom Club',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/tkrw2UH.png',
        imageDetail:'https://i.imgur.com/73mIkQw.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-website-boom-club.firebaseapp.com',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện Boom Club và sử dụng Firebase để deploy.',
      },
      {
        id:18,
        duAn: 'The Coffee House',
        congNghe: 'ReactJS, Firebase(deploy)',
        image:'https://i.imgur.com/i7lxWyH.png',
        imageDetail:'https://i.imgur.com/Hpnm9O8.png',
        ngonNgu:'REACJS',
        linkDemo:'https://clone-the-coffee-house.firebaseapp.com/',
        moTa:'Tôi sử dụng ReactJS để clone lại giao diện The Coffee House và sử dụng Firebase để deploy.',
      },
      {
        id:12,
        duAn: 'Portfolio Template',
        congNghe: 'ReactJS, Styled Components, LocalStorage',
        image:'https://i.imgur.com/HKgvaT4.png',
        imageDetail:'https://i.imgur.com/V0TTfzr.png',
        ngonNgu:'REACJS',
        linkDemo:'http://portfolio-template-dtv.surge.sh',
        moTa:'Tạo template portfolio sử dụng công nghệ styled components',
      },
      {
        id:13,
        duAn: 'Tinder',
        congNghe: 'ReactJS, Firebase ,Material UI',
        image:'https://i.imgur.com/bmaxNcT.png',
        imageDetail:'https://i.imgur.com/4bxH2eL.png',
        ngonNgu:'REACJS',
        linkDemo:'https://tinder-app-a1cc2.firebaseapp.com',
        moTa:'Sử dụng react và firebase clone giao diện Tinder.',
      },
      {
        id: 2,
        duAn: 'Todo List',
        congNghe: 'Reactjs, LocalStorage,AOS animation, Material UI',
        image: 'https://i.imgur.com/otQR7j3.png',
        imageDetail : 'https://i.imgur.com/lup4UUL.png',
        ngonNgu: 'REACJS',
        linkDemo: 'https://todo-dtv.firebaseapp.com',
        moTa:'Người dùng có thể ghi chú danh sách những công việc cẩn xử lý trong một ngày.Dữ liệu tự động cập nhật sau một ngày.'
      },
      {
        id:11,
        duAn:'Quiz',
        congNghe: 'Reactjs, SASS',
        image:'https://i.imgur.com/BOLQPLY.png',
        imageDetail:'https://i.imgur.com/94iTKxq.png',
        ngonNgu :'REACJS',
        linkDemo:'http://quiz-dtv.surge.sh',
        moTa:'Tạo những câu đố đã được tham khảo, cho người dùng thử sức với kiến thức của mình.Được build bằng Reactjs SASS'
      },
      {
        id: 4,
        duAn: 'SASS Mercedes',
        congNghe: 'Sass, Html5, Css3, Javascript',
        image:'https://i.imgur.com/QwKGtmC.png',
        imageDetail:'https://i.imgur.com/7HvqHjP.png',
        ngonNgu: 'HTML',
        linkDemo: 'http://sass-mercedes.surge.sh/',
        moTa:'Sử dụng SASS, HTML5, CSS3, tạo ra giao diện giống với giao diện Mercedes'

      },
      {
        id: 9,
        duAn: 'Tix Cinema',
        congNghe: 'Reactjs, Redux, Axios, Restful API, Formik, Material UI',
        image:'https://i.imgur.com/EZvOp6C.png',
        imageDetail:'https://i.imgur.com/skWoBrC.png',
        ngonNgu: 'REACJS',
        linkDemo: 'http://tix-dtv.surge.sh',
        moTa:'Lấy thông tin dữ liệu từ API để hoàn thiện các chức năng của website cinema.Sử dụng tốt Redux và cách phân chia Service API, gửi dữ liệu khi đang lấy API về bằng redux thunk.'
      },
      {
        id: 3,
        duAn: 'Cinema',
        congNghe: 'Reactjs, Redux, Axios, Restful API, AOS Animation, Formik, Material UI',
        image: 'https://i.imgur.com/bvwHkQd.png',
        imageDetail :'https://i.imgur.com/YiUwESP.png',
        ngonNgu: 'REACJS',
        linkDemo: 'https://cinema-dtv.firebaseapp.com',
        moTa:'Lấy thông tin dữ liệu từ API để hoàn thiện các chức năng của website cinema.Sử dụng tốt Redux và cách phân chia Service API, gửi dữ liệu khi đang lấy API về bằng redux thunk.'
      },


      {
        id: 5,
        duAn: 'Home Stead',
        congNghe: 'HTML5, CSS3, JAVASCRIPT, OWL CAROUSEL',
        image:'https://i.imgur.com/Z2VdLOQ.png',
        imageDetail:'https://i.imgur.com/yxXTrkj.png',
        ngonNgu: 'HTML',
        linkDemo: 'http://home-stead.surge.sh/',
        moTa:'Sử dụng HTML5, CSS3 tạo ra giao diện giống với giao diện Home Stead'
      },
      {
        id: 6,
        duAn: 'Housing',
        congNghe: 'HTML5, CSS3, JAVASCRIPT, OWL CAROUSEL',
        image:'https://i.imgur.com/e9O4FVC.png',
        imageDetail:'https://i.imgur.com/bRBZa3G.png',
        ngonNgu: 'HTML',
        linkDemo: 'http://housing-dtv.surge.sh/',
        moTa:'Sử dụng HTML5, CSS3 tạo ra giao diện giống với giao diện Housing'

      },
      {
        id: 7,
        duAn: 'Clothes',
        congNghe: 'HTML5, CSS3, JAVASCRIPT',
        image:'https://i.imgur.com/jMt3mMN.png',
        imageDetail:'https://i.imgur.com/FqQhzmt.png',
        ngonNgu: 'HTML',
        linkDemo: 'http://clothes-dtv.surge.sh/',
        moTa:'Sử dụng HTML5, CSS3 tạo ra giao diện giống với giao diện Clothes'

      },

]
export default product;