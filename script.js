var navLink = document.getElementById("navLink");
var menujs = document.getElementById("menujs");
var ourmenu = document.getElementById("ourmenu");
var lunch = document.getElementById("lunch");
function hidemenu() {
  navLink.style.right = "-200px";
}
function showmenu() {
  navLink.style.right = "0px";
}
var sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  delay: 500,
  duration: 2000,
});
sr.reveal(".scroll", { delay: 500 });
sr.reveal(".about-content", { delay: 500, origin: "left" });
sr.reveal(".img-gallery", { delay: 500, origin: "bottom" });
sr.reveal(".image", { delay: 500 });
document.getElementById("breakfest").addEventListener("click", () => {
  menujs.innerHTML = `
                        <div class="menu-item">
                            <img src="./img/smoothie-bowl-3a8632c.jpg" alt="SMOOTHIE">
                            <div>
                                <h3>SMOOTHIE <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food9.jpeg" alt="JUMBO CRAB SHRIMP">
                            <div>
                               <h3>CHEESE TOST <span class="primary-text">$6.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food3.png" alt="KOKTAIL JUCIE">
                            <div>
                                <h3>KOKTAIL JUCIE <span class="primary-text">$12.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food8.jpeg" alt="CAPO STEAK">
                            <div>
                                 <h3>SPANISH PIES <span class="primary-text">$14.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food5.png" alt="ORGANIC FRUIT SALAD">
                            <div>
                                <h3>DOUGHNUTS<span class="primary-text">$8.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/1588257306685.webp" alt="CHEESE PIZZA">
                            <div>
                                <h3>WAFFLES <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
    `;
  ourmenu.innerHTML = "";
});
document.getElementById("lunch").addEventListener("click", () => {
  menujs.innerHTML = `
                        <div class="menu-item">
                            <img src="./img/food7.jpeg" alt="KOFTA MEAT">
                            <div>
                                <h3>KOFTA MEAT <span class="primary-text">$40.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food6.png" alt="SPANISH PIES">
                           <div>
                                <h3>CHEESE PIZZA <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food1.png" alt="CHEESE TOST">
                            <div>
                                <h3>LASAL CHEESE <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food10.jpeg" alt="FRUIT SALAD">
                            <div>
                                <h3>FRUIT SALAD <span class="primary-text">$14.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food11.jpeg" alt="CHICKEN SHAWARMA">
                            <div>
                                <h3>CHICKEN SHAWARMA <span class="primary-text">$20.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food12.jpeg" alt="MEGA CHEESE PIZZA">
                            <div>
                                <h3>MEGA CHEESE PIZZA <span class="primary-text">$30.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>    

    `;
  ourmenu.innerHTML = "";
});
document.getElementById("all").addEventListener("click", () => {
  ourmenu.innerHTML = "";
  ourmenu.innerHTML = `
                        <div class="menu-items-left">       
                        <div class="menu-item">
                            <img src="./img/smoothie-bowl-3a8632c.jpg" alt="SMOOTHIE">
                            <div>
                                <h3>SMOOTHIE <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food9.jpeg" alt="JUMBO CRAB SHRIMP">
                            <div>
                               <h3>CHEESE TOST <span class="primary-text">$6.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food3.png" alt="KOKTAIL JUCIE">
                            <div>
                                <h3>KOKTAIL JUCIE <span class="primary-text">$12.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food8.jpeg" alt="CAPO STEAK">
                            <div>
                                 <h3>SPANISH PIES <span class="primary-text">$14.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food5.png" alt="ORGANIC FRUIT SALAD">
                            <div>
                                <h3>DOUGHNUTS<span class="primary-text">$8.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/1588257306685.webp" alt="CHEESE PIZZA">
                            <div>
                                <h3>WAFFLES <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="menu-items-right">
                        <div class="menu-item">
                            <img src="./img/food7.jpeg" alt="KOFTA MEAT">
                            <div>
                                <h3>KOFTA MEAT <span class="primary-text">$40.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food6.png" alt="SPANISH PIES">
                           <div>
                                <h3>CHEESE PIZZA <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food1.png" alt="CHEESE TOST">
                            <div>
                                <h3>LASAL CHEESE <span class="primary-text">$18.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food10.jpeg" alt="FRUIT SALAD">
                            <div>
                                <h3>FRUIT SALAD <span class="primary-text">$14.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food11.jpeg" alt="CHICKEN SHAWARMA">
                            <div>
                                <h3>CHICKEN SHAWARMA <span class="primary-text">$20.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <img src="./img/food12.jpeg" alt="MEGA CHEESE PIZZA">
                            <div>
                                <h3>MEGA CHEESE PIZZA <span class="primary-text">$30.00</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.</p>
                            </div>
                        </div>
                    </div>
    `;
  menujs.innerHTML = "";
});
