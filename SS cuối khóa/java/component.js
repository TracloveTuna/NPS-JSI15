const components = {};

components.MainScreen=`
<div class="container">
<div class="top-menu">
    <div>
        <img src="https://www.msc.org/images/default-source/msc-english/content-banner/fish-to-eat/tuna.jpg?sfvrsn=996dabb4_8"  alt="ai mà biết dc">
    </div>
    <div class="page">
      <div class="main-page">Trang chủ</div>
      <div class="introduction">Giới thiệu</div>
      <div class="login">Đăng nhập</div>
    </div>
    <div class="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <a href="cart.html">
            <i class="fa-solid fa-cart-shopping">
              
            </i>

        </a>
        <a href="login/login.html">
            <i class="fa-solid fa-user" id="users">
                <img src="./image/user-solid.svg" alt="">
            </i>
        </a>
        <div class="lines"></div>
        <i class="fa-solid fa-globe"></i>
    </div>
</div>
<div class="main-content">
    <div class="selector">
      <a onclick="FilterMostLiked()">Like nhiều nhất</a>
      <a onclick="FilterMostSale()">Mua nhiều nhất</a>

    </div>

    <div id="products"></div>
</div>
</div>


`;
