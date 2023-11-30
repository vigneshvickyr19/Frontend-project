document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".spinner-wrapper").style.opacity = "0";
    setTimeout(function () {
      document.querySelector(".spinner-wrapper").style.display = "none";
    }, 2000);
  });
  
  class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #f5abd7;
            border-radius: 12px;
            transition: all 0.3s ease;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #f5abd7;
          }
          
          nav{
            position: fixed;
            width: 100%;
            padding: 20px 0;
            z-index: 998;
            transition: all 0.3s ease;
            top:0%;
            height: 85px;
            
          }
          nav.sticky{
            background: #f5b0da;
            padding: 13px 0;
          }
          nav .navbar{
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
          }
           .logo img{
            width: 100px;
           
          }
          nav.sticky .navbar .logo a{
            color: #fff;
          }
          nav .navbar .menu{
            display: flex;
            position: relative;
          }
          nav .menus-none{
            display: none;
          }
          nav .navbar .menu li{
            list-style: none;
            margin: 0 8px;
            font-size: 400;
          }
          .navbar .menu a{
            font-size: 18px;
            font-weight: 400;
            color: #0E2431;
            padding: 6px 0;
            transition: all 0.4s ease;
          }
          .navbar .menu a:hover{
            color: #f5abd7;
            
          }
          nav.sticky .menu a{
            color: #FFF;
          }
          nav.sticky .menu a:hover{
            color: #0E2431;
          }
          .navbar .media-icons a{
            color: #f5abd7;
            font-size: 18px;
            margin: 0 6px;
          }
          nav.sticky .media-icons a{
            color: #FFF;
          }
          nav.sticky .media-icons a:hover{
            color: #0c0a0a;
          }
          
          /* Side Navigation Menu Button CSS */
          nav .menu-btn,
          .navbar .menu .cancel-btn{
            position: absolute;
            color: #fff;
            right: 30px;
            top: 20px;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: none;
          }
          nav .menu-btn{
            color: #f5abd7;
            
          }
          nav.sticky .menu-btn{
            color: #FFF;
          }
          .navbar .menu .menu-btn{
            color: #fff;
          }
          @media (max-width: 750px) {
            nav .navbar{
              width: 90%;
            }
            nav  .menus-none{
              display: block;
            }
            nav .navbar .menu{
              position: fixed;
              right: -100%;
              top: 0;
              background-color: #f5abd7;
              height: 100vh;
              max-width: 400px;
              width: 100%;
              padding-top: 60px;
              flex-direction: column;
              align-items: center;
              transition: all 0.5s ease;
            }
            .navbar.active .menu{
              right: 0;
            }
            nav .navbar .menu a{
              font-size: 23px;
              display: block;
              color: #fff;
              margin: 10px 0;
            }
            nav.sticky .menu a:hover{
              color: #4070f4;
            }
            nav .navbar .media-icons{
              display: none;
            }
          
            nav .menu-btn,
            .navbar .menu .cancel-btn{
              display: block;
            }
        </style>
        <header>
        <nav>
        <div class="navbar">
        <div class="logo"><a href="#"><img src="./img/BUY_YOURS_HER-removebg-preview.png" alt=""></a></div>
        <ul class="menu">
            <li><a href="index.html">HOME</a></li>
            <li><a href="#products">YOUIRS</a></li>
            <li><a href="#">OFFERS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li class="menus-none"><a href="New folder/loginpage.html">SinUp/logIn</a></li>
            <li class="menus-none"><a href="">Yours Bag</a></li>
            <li class="menus-none"><a href="">You Liked</a></li>
            <div class="cancel-btn">
                <i class="fas fa-times"></i>
              </div>
        </ul>
        <div class="media-icons">
            <a href="New folder/loginpage.html"><i class='bx bx-user'></i></a>
            <a href="#"><i class='bx bx-heart'></i></a>
            <a href="" ><i class='bx bx-shopping-bag' id="cart-bag"></i></a>
        </div>
    </div>
        <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>

    </nav>

      </header>
    
      `;
    }
  }
  
  customElements.define('header-component', Header);
  
  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        
        .content{
            display: flex;
            justify-content: space-between;
            margin: 0px 50px;
          }
          .content .imgbox{
            width: 900px;
            display: flex;
            justify-content: flex-end;
            padding-right: 100px;
            margin-bottom: 20px;
            
          }
          .content .imgbox img{
          max-width: 300px;
          }
          .colom{
          border: 1px solid rgb(242, 232, 232);
          width: 100%;
          height: 0.5px;
          margin: 50px 0;
          }
          /* contact-section */
          
          .contact{
            background-color:#fff;
          }
          .contact-info{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, auto));
            gap: 3rem;
          }
          .contact-info p{
            font-size: .9rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 1.5;
            margin-bottom: 30px;
            transition: all .42s;
          }
          .contact-info h1{
            font-size: .9rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 1.5;
            margin-bottom: 10px;
            transition: all .42s;
          }
          .contact-info h2{
            font-size: 1rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 1.5;
            letter-spacing: 4px;
            margin-bottom: 10px;
            transition: all .42s;
          }
          .contact-info a{
            text-decoration: none;
            color: black;
          }
          .space p{
            letter-spacing: 10px;
          }
          .contact-info a:hover{
            color: rgb(244, 176, 243);
            
          }
          .contact-singin{
            margin: 50px 0px;
            grid-template-columns: repeat(auto-fit, minmax(160px, auto));
          }
          .contact-singin h1{
            font-size: 1rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 1.5;
            letter-spacing: 4px;
            margin-bottom: 10px;
            transition: all .42s;
          }
          .contact-singin h2{
            font-size: 0.9rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 1.5;
            margin-bottom: 10px;
            transition: all .42s;
          }
          .input-mail {
            width: 250px;
            height: 50px;
            border-bottom: 3px solid black;
            display: flex;
           margin: 0px 10px;
          }
          .input-mail input{
            outline: none;
            border: none;
            background: transparent;
            width: 250px;
            height:50px;
          }
          .input-mail::placeholder{
            font-size: 1em;
            color:black;
            width: 250px;
          }
          .contact-singin i{
            font-size: 25px;
            font-weight: 300;
          }
          .social-media {
            margin: 10px;
          }
          .social-media a i{
            font-size: 25px;
            margin: 10px;
            color: black;
            transition: all .42s;
          }
          .social-media i:hover{
            transform: scale(1.3);
          }
          .end-text{
          
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 400;
            text-transform: capitalize;
            transition: all .42s;
            margin: 0px 0;
  
            }
           
     
        </style>
        <footer>
        <div class="colom"></div>
        <section class="contact " id="contact">
         <div class="contact-info">
             <div class="first-info reveal-left">
                 <h2>FLAGSHIP STORE NOW OPEN</h2>
                 <h1>Chennai: <a href="#">Get Directions</a></h1>
             </div>
             <div class="second-info reveal-left">
                 <p><a href="New folder/contactpage.html">Contact Us</a></p>
                 <p><a href="New folder/FAQ.html">FAQ</a></p>
                 <p><a href="New folder/tearms.html">Terms & Conditions</a></p>
             </div>
             <div class="therd-info reveal-right">
                 <p><a href="New folder/returnpage.html">PLACE RETURN/EXCHANGE REQUEST</a></p>
                 <p><a href="New folder/policypage.html">RETURNS/EXCHANGE POLICY</a></p>
                 <p><a href="New folder/trackpage.html">TRACK YOUR ORDER</a></p>
             </div>
             <div class="four-info reveal-right">
                 <h2>CUSTOMER CARE</h2>
                 <p>Timings: 10 AM - 6:00 PM (Mon - Sat)</p>
                 <h1>Call: <a href="#">+91 7604999985</a></h1>
                 <h1>Email: <a href="#">buyyours@gmail.com</a></h1>
             </div>
         </div>
         <div class="contact-singin reveal-left">
             <h1>SIGN UP AND SAVE</h1>
             <h2>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</h2>
             <div class="input-mail reveal-left">
                 <input type="email" placeholder="Enter your mail"><i class='bx bx-envelope'></i>
             </div>
             <div class="social-media reveal-left">
             <a href="#"><i class='bx bxl-instagram'></i></a>
             <a href="#"><i class='bx bxl-facebook'></i></a>
             <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
             <a href="#"><i class='bx bxl-twitter'></i></a>
             </div>
             </div> 
             <div class="end-text reveal-bottom">
                 <p><i class='bx bx-copyright' ></i>2023 BUYYOURS | All Rights Reserved</p>
                </div>
        </section>
       </footer>
        
      
      `;
    }
  }
  customElements.define('footer-component', Footer);
  
  
    
  
    