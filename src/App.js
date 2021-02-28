import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
            <a href="index.html"><img src="img/LOGO.png" alt="LOGO" className="LOGO LOGO_header"/></a>
        </div>
        <div className="header-icon">
            <a href="#"  className="ic ic_login"><img src="Icon/ic_login.png" alt="Login"/></a>
            <a href="#"  className="ic ic_shopping"><img src="Icon/ic_shopping.png" alt="Shopping"/></a>
            <a href="#"  className="ic ic_search"><img src="Icon/ic_search.png" alt="Search"/></a>
        </div>
        <a href="#" ><img src="icon/menu_bars.png" height="30px"width="30px" className="nav_menu"/></a>
        <div className="nav  show_menu">
            <ul className="nav-list">
                <li className="nav-list-item font-style"><a href="index.html" className="nav-list-item-btn font-style">首頁</a></li>
                <li className="nav-list-item font-style"><a href="#" className="nav-list-item-btn font-style">最新消息</a></li>
                <li className="nav-list-item font-style">
                    <a href="page2-3.html" className="nav-list-item-btn font-style font-style">商品一覽</a>
                    <ul className="nav-sublist">
                        <li className="nav-sublist-item"><a href="page2-1.html" className="nav-list-item-link font-style">樂樂甜點精選</a></li>
                        <li className="nav-sublist-item"><a href="page2-2.html" className="nav-list-item-link font-style">彌月蛋糕專區</a></li>
                        <li className="nav-sublist-item"><a href="page2-3.html" className="nav-list-item-link font-style">提拉米蘇系列</a></li>
                        <li className="nav-sublist-item"><a href="page2-4.html" className="nav-list-item-link font-style">布丁蛋糕系列</a></li>
                        <li className="nav-sublist-item"><a href="page2-5.html" className="nav-list-item-link font-style">禮盒系列</a></li>
                        <li className="nav-sublist-item"><a href="page2-6.html" className="nav-list-item-link font-style">小突兔聯名</a></li>
                    </ul>
                </li>
                <li className="nav-list-item"><a href="https://www.lelecake.com/" className="nav-list-item-btn font-style">商家資訊</a></li>
            </ul>
        </div>
    </header>
    <div className="main_area">

        <div className="row">

            <div className="col camera">
                <a href="#"  className="camera_pic"><img src="img/page1/camera1.jpg" className="col_md_11"/></a>
                <a href="#"  className="camera_pic"><img src="img/page1/camera2.jpg" className="col_md_11"/></a>
                <a href="#"  className="camera_pic"><img src="img/page1/camera3.jpg" className="col_md_11"/></a>
                <a href="#"  className="camera_pic"><img src="img/page1/camera5.jpg" className="col_md_11"/></a>
            </div>
            
        </div>
        <div className="row">

            <div id="banner" className="col">
                <ul id="banner_point">
                    <li className="point active"></li>
                    <li className="point"></li>
                    <li className="point"></li>
                    <li className="point"></li>
                </ul>
            </div>

        </div>
        <div className="row">
            <p className="Product font-style">商品</p>
            <a href="page2-1.html" className="MORE font-style">MORE<img src="Icon/ic_MORE.png" className="ic_MORE"/></a>
        </div>
        <div className="row">
            <div className="col col_md_6">
                <a href="#"><div className="product_pic product_pic1"></div></a>
                <div className="product_name"><a href="page2-2.html" className="product_link font-style">彌月蛋糕專區</a></div>
            </div>
            <div className="col col_md_6">
                <a href="#"><div className="product_pic product_pic2"></div></a>
                <div className="product_name"><a href="page2-4.html" className="product_link font-style">布丁蛋糕系列</a></div>
            </div>
            <div className="col col_md_6">
                <a href="#"><div className="product_pic product_pic3"></div></a>
                <div className="product_name"><a href="page2-3.html" className="product_link font-style">提拉米蘇系列</a></div>
            </div>
            <div className="col col_md_6">
                <a href="#"><div className="product_pic product_pic4"></div></a>
                <div className="product_name"><a href="page2-5.html" className="product_link font-style">禮盒系列</a></div>
            </div>
        </div>
    </div>
    <footer>
        <div className="row">
            <div className="col col_md_3 ">
                <div className="logo_footer">
                    <a href="https://www.lelecake.com/"><img src="img/LOGO.png" alt="LOGO" className="LOGO LOGO_footer"/></a>
                </div>
                <a href="https://www.facebook.com/lelesweetcake/"><img src="Icon/ic_fb.png"alt="FB" className="ic_footer ic_fb"/></a>
                <a href="http://line.me/ti/p/@sii8952n"><img src="Icon/ic_line.png"alt="Line" className="ic_footer ic_line"/></a>
                <a href="https://www.instagram.com/lelecake_/"><img src="Icon/ic_ig.png"alt="Ig" className="ic_footer ic_ig"/></a>
            </div>
        
            <div className="col col_md_3 ">
                <p className="footer_title font-style">關於我們</p>
                <a href="#" className="footer_words font-style about_us"><img src="Icon/ic_phone.png"alt="phone" className="ic_footer "/><p>04-2437-7259</p></a>
                <a href="#" className="footer_words font-style about_us"><img src="Icon/ic_place.png"alt="place" className="ic_footer "/><p>台中市北屯區旱溪東路三段35號</p></a>
                <a href="#" className="footer_words font-style about_us"><img src="Icon/ic_mail.png"alt="mail" className="ic_footer "/><p>lelesweetcake@gmail.com</p></a>
            </div>
            <div className="col col_md_3  ">
                <p className="footer_title font-style">購物說明</p>
                <a href="#" className=" footer_words font-style"><p>付款方式</p></a>
                <a href="#" className=" footer_words font-style"><p>取消訂單與退換貨</p></a>
                <a href="#" className=" footer_words font-style"><p>優惠說明</p></a>
            </div>
            <div className="col col_md_3 ">
                <p className="footer_title font-style">網站資訊</p>
                <a href="#" className=" footer_words font-style"><p>常見問題</p></a>
                <a href="#" className=" footer_words font-style"><p>聯絡我們</p></a>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
