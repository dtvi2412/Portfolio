const product = [
    {
        id: 1,
        duAn: 'Shop Book',
        congNghe: 'Reactjs, Redux, Firebase, DevPaypal(Sandbox)',
        image: 'https://i.imgur.com/MBoTyCD.png',
        imageDetail:'https://i.imgur.com/PpL87gq.png',
        ngonNgu: 'REACJS',
        
        linkDemo: 'http://shop-book.surge.sh/',
        moTa:'Thao tác với Firebase, tạo dữ liệu cần dùng, kết nối firebase với Reacjs, lấy những thông tin dữ liệu của firebase để đưa vào của redux, render và xử lý các chức năng của website, sử dụng developer paypal(sanbox) để tạo thông tin tài khoản paypal thanh toán trực tiếp qua paypal'
      },
      {
        id:10,
        duAn:'Clone Instagram',
        congNghe :'Reacjs, Firebase, Material UI, SASS',
        image:'https://i.imgur.com/t0CrqwD.png',
        imageDetail:'https://i.imgur.com/7aDWloS.png',
        ngonNgu: 'REACJS',
        linkDemo : 'http://clone-instagram.surge.sh',
        moTa:'Sử dụng firebase để tạo tài khoản đăng nhập, đăng nhập thông qua facebook hoặc google.Thao tác với ReactJS tạo ra giao diện và các chức năng.'

      },
      {
        id: 8,
        duAn: 'Netflix HomePage',
        congNghe: 'Reactjs, Call API,Reacjs Youtube',
        image:'https://i.imgur.com/YH9mIbD.png',
        imageDetail:'https://i.imgur.com/YVJ0DDw.png',
        ngonNgu: 'REACJS',
        linkDemo: 'http://netflix-home.surge.sh/',
        moTa:'Lấy dữ liệu từ API render ra giao diện, tạo giao diện giống với Netflix, sử dụng Reacjs Youtube để tải dữ liệu video.'
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
        linkDemo: 'http://todolist-dtv.surge.sh/',
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
        linkDemo: 'http://cinema-dtv.surge.sh/',
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