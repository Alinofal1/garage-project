if (!localStorage.getItem("user")) {
  window.location.href = "login.html";
}
// profile
let profile = (document.getElementById("profile").onclick = () => {
  window.location.href = "profile.html";
});

// cards
let row = document.querySelector(".row");

let card = [
  {
    id: "1",
    name: "Cetan booster",
    price: "₪" + 200,
    img: (href = "img/cetane.png"),
    quantity: 10,
  },
  {
    id: "2",
    name: "catalaizer cleaner",
    price: "₪" + 150,
    img: (href = "img/catacata.png"),
    quantity: 15,
  },
  {
    id: "3",
    name: "Dpf cleaner",
    price: "₪" + 220,
    img: (href = "img/dpf.png"),
    quantity: 12,
  },
  {
    id: "4",
    name: "Engine flush",
    price: "₪" + 180,
    img: (href = "img/flush.png"),
    quantity: 25,
  },
  {
    id: "5",
    name: "Octan booster",
    price: "₪" + 75,
    img: (href = "img/octan.png"),
    quantity: 15,
  },
  {
    id: "6",
    name: "ANTIFREEZ  Concentrate",
    price: "₪" + 80,
    img: (href = "img/Antifreez1.png"),
    quantity: 30,
  },{
    id: "7",
    name: "ANTIFREEZ Ready Mix",
    price: "₪" + 90,
    img: (href = "img/Antifreez2.png"),
    quantity: 5,
  },{
    id: "8",
    name: "ANTIFREEZ Ready Mix 12 Plus",
    price: "₪" + 90,
    img: (href = "img/Antifreez3.png"),
    quantity: 15,
  },
];
//
let content =
    "Lorem ipsum dolor sit amet,Quod ipsum quo sequi reprehenderit voluptatem consectetur earum possimus.",
  btn = "Add To Cart";
// display cards

function cards() {
  for (let i = 0; i < card.length; i++) {
    let thecode = `


            <div class="col-md-6 col-lg-3 col-sm-8 mb-4">
              <div class="card">
                <div class="cardimg">
                  <img class="card-img img-fluid py-3 bg-white" src="${card[i].img}" alt="cetan-booster"><hr>
                </div>
                <div class="cardtitle container">
                  <p>${card[i].name}</p>
                  <p>${card[i].price}</p>
                  <p class="text-danger">quantity ${card[i].quantity}</p>
                  <div class="cardcontent mb-4">
                    <p>${content}</p>
                    
                    <a   onclick="addTocart(${card[i].id},this)" class="btn btn-danger">${btn} <img src="img/shopping_bag_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
            
    `;
    row.innerHTML += thecode;
  }
}
cards();

// cart products number

let products = document.getElementById("products");
const productsarray = JSON.parse(localStorage.getItem("countpro")) || [];

function addTocart(id, btn) {
  productsarray.push(id);
  localStorage.setItem("countpro", JSON.stringify(productsarray));

  btn.classList.add("disabled");
  products.innerHTML = productsarray.length;
  products.classList.remove("d-none");
  showitem();
}

// localStorage.removeItem("countpro");
// show items in the cart

let listpro = document.getElementById("listpro");

function showitem() {
  let choosen = [];
  let pro = ``;
  let items = JSON.parse(localStorage.getItem("countpro"));
  for (let i = 0; i < items.length; i++) {
    choosen.push(card.find((x) => x.id == items[i]));

    pro += `
    <div id="cartitems" class="d-flex justify-content-center text-center">
    <img id="listimg" class="card-img img-fluid bg-none w-25" src="${choosen[i].img}">
    <p>${choosen[i].name}</p>
    
    <p>${choosen[i].price}</p>
    
    </div>
    <p class="text-danger">quantity ${choosen[i].quantity}</p>
         <div>
         <div> <input type="number" class="rounded-pill border-0  w-25 text-center" autocomplete="off" max="${choosen[i].quantity}"  min="1" value="1" name="" id="quantity"> </div><br>
         <a id="removebtn" onclick="removeitem(${i})" class="btn btn-danger">Remove item</a>
         </div>
        <hr>`;
  }
  listpro.innerHTML = pro;
};


// Remove Item

function removeitem(i) {
  productsarray.splice(i, 1);
  localStorage.countpro = JSON.stringify(productsarray);
  products.innerHTML = productsarray.length;
  showitem();
};


// buy $
let buy = document.getElementById("buy");
buy.onclick = ()=> {
  listpro.innerHTML = "";
  localStorage.removeItem("countpro");
  products.classList.add("d-none");
};

// cart icon
let sidebar = document.querySelector(".sidebar");


let cart1 = document.getElementById("cart1");
list = false;
cart1.onclick = () => {
  if (list) {
    sidebar.classList.add("d-none");
    list = false;
  } else {
    sidebar.classList.remove("d-none");
    list = true;
  }
  showitem()
};

// search
let search = document.getElementById("search");

search.onfocus =()=> {
  window.scrollTo({
    top: 600,
    behavior: "smooth"
  })
}

function searchdata(val) {
  let thecode = "";
  for (let i = 0; i < card.length; i++) {
    if (card[i].name.toLowerCase().includes(val.toLowerCase())) {
      thecode += `
            <div class="col-md-6 col-lg-3 col-sm-10 mb-4">
              <div class="card">
                <div class="cardimg">
                  <img class="card-img img-fluid py-3 bg-white" src="${card[i].img}" alt="cetan-booster"><hr>
                </div>
                <div class="cardtitle container">
                  <p>${card[i].name}</p>
                  <p>${card[i].price}</p>
                  <p class="text-danger">quantity ${card[i].quantity}</p>
                  <div class="cardcontent mb-4">
                    <p>${content}</p>
                    
                    <a   onclick="addTocart(${card[i].id},this)" class="btn btn-danger">${btn} <img src="img/shopping_bag_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
            
    `;
    }
    row.innerHTML = thecode;
  }
};

