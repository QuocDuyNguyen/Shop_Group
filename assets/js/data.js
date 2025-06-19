const products = [
  {
    id: 1,
    name: "Áo Thun Unisex Basic",
    price: 150000,
    category: "Áo",
    description:
      "Áo thun form basic dễ mặc, chất liệu cotton thoáng mát, phù hợp cho cả nam và nữ.",
    imageUrl: "../../assets/img/products/product1.jpg",
    stock: 50,
  },
  {
    id: 2,
    name: "Quần Jeans Slim Fit Nam",
    price: 450000,
    category: "Quần",
    description:
      "Quần jeans nam dáng slim fit, chất liệu denim co giãn nhẹ, màu xanh truyền thống.",
    imageUrl: "../../assets/img/products/product2.jpg",
    stock: 30,
  },
  {
    id: 3,
    name: "Váy Maxi Hoa Nhí Nữ",
    price: 580000,
    category: "Váy",
    description:
      "Váy maxi dáng xòe, họa tiết hoa nhí vintage, chất liệu voan mềm mại, có lót.",
    imageUrl: "../../assets/img/products/product3.jpg",
    stock: 25,
  },
  {
    id: 4,
    name: "Áo Sơ Mi Trắng Công Sở Nữ",
    price: 320000,
    category: "Áo",
    description:
      "Áo sơ mi nữ dáng suông, màu trắng cơ bản, chất liệu lụa thái ít nhăn.",
    imageUrl: "../../assets/img/products/product4.jpg",
    stock: 40,
  },
  {
    id: 5,
    name: "Áo Khoác Bomber Unisex",
    price: 650000,
    category: "Áo khoác",
    description:
      "Áo khoác bomber dày dặn, có lớp lót giữ ấm, kiểu dáng unisex, phù hợp thu đông.",
    imageUrl: "../../assets/img/products/product5.jpg",
    stock: 20,
  },
  {
    id: 6,
    name: "Quần Kaki Ống Đứng Nam",
    price: 380000,
    category: "Quần",
    description: "Quần kaki nam ống đứng, chất liệu kaki bền màu, form chuẩn.",
    imageUrl: "../../assets/img/products/product6.jpg",
    stock: 35,
  },
  {
    id: 7,
    name: "Chân Váy Chữ A Caro Nữ",
    price: 250000,
    category: "Váy",
    description:
      "Chân váy dáng chữ A, họa tiết caro trẻ trung, có khóa kéo sau.",
    imageUrl: "../../assets/img/products/product7.jpg",
    stock: 45,
  },
  {
    id: 8,
    name: "Bộ Đồ Mặc Nhà Lụa Satin Nữ",
    price: 420000,
    category: "Đồ bộ",
    description: "Bộ pijama lụa satin mềm mại, thoáng mát, họa tiết dễ thương.",
    imageUrl: "../../assets/img/products/product8.jpg",
    stock: 28,
  },
  {
    id: 9,
    name: "Áo Polo Nam Cao Cấp",
    price: 350000,
    category: "Áo",
    description:
      "Áo polo nam chất liệu cá sấu cotton, thấm hút mồ hôi tốt, form slim.",
    imageUrl: "../../assets/img/products/product9.jpg",
    stock: 55,
  },
  {
    id: 10,
    name: "Quần Short Jean Nữ",
    price: 280000,
    category: "Quần",
    description:
      "Quần short jean nữ cạp cao, chất liệu jean wash nhẹ, phong cách năng động.",
    imageUrl: "../../assets/img/products/product10.jpg",
    stock: 60,
  },
  {
    id: 11,
    name: "Đầm Dự Tiệc Cúp Ngực",
    price: 750000,
    category: "Đầm",
    description:
      "Đầm dự tiệc dáng ôm xòe nhẹ, thiết kế cúp ngực quyến rũ, chất liệu cao cấp.",
    imageUrl: "../../assets/img/products/product11.jpg",
    stock: 15,
    hot: 1,
  },
  {
    id: 12,
    name: "Áo Sweater Nỉ In Hình",
    price: 300000,
    category: "Áo",
    description:
      "Áo sweater chất liệu nỉ bông mềm mại, in hình graphic cá tính.",
    imageUrl: "../../assets/img/products/product12.jpg",
    stock: 38,
  },
  {
    id: 13,
    name: "Quần Legging Thể Thao Nữ",
    price: 220000,
    category: "Quần",
    description:
      "Quần legging chất liệu thun co giãn 4 chiều, cạp cao ôm bụng, phù hợp tập gym, yoga.",
    imageUrl: "../../assets/img/products/product13.jpg",
    stock: 70,
  },
  {
    id: 14,
    name: "Bộ Vest Công Sở Nam",
    price: 1500000,
    category: "Đồ bộ",
    description:
      "Bộ vest gồm áo khoác và quần tây, form slim fit, chất liệu vải cao cấp.",
    imageUrl: "../../assets/img/products/product14.jpg",
    stock: 10,
  },
  {
    id: 15,
    name: "Cardigan Len Mỏng Nữ",
    price: 320000,
    category: "Áo khoác",
    description: "Áo cardigan len mỏng, kiểu dáng basic, dễ phối đồ.",
    imageUrl: "../../assets/img/products/product15.jpg",
    stock: 33,
    hot: 1,
  },
  {
    id: 16,
    name: "Quần Jogger Kaki Nam",
    price: 400000,
    category: "Quần",
    description:
      "Quần jogger chất liệu kaki, bo gấu, phong cách thể thao năng động.",
    imageUrl: "../../assets/img/products/product16.jpg",
    stock: 48,
  },
  {
    id: 17,
    name: "Áo Ba Lỗ Tập Gym Nam",
    price: 120000,
    category: "Áo",
    description: "Áo ba lỗ chất liệu thun lạnh, thoáng khí, phù hợp tập luyện.",
    imageUrl: "../../assets/img/products/product17.jpg",
    stock: 52,
    hot: 1,
  },
  {
    id: 18,
    name: "Chân Váy Xếp Ly Dài Nữ",
    price: 350000,
    category: "Váy",
    description: "Chân váy xếp ly dáng dài, chất liệu voan nhẹ nhàng, có lót.",
    imageUrl: "../../assets/img/products/product18.jpg",
    stock: 29,
  },
  {
    id: 19,
    name: "Áo Hoodie Nỉ Bông Form Rộng",
    price: 420000,
    category: "Áo khoác",
    description:
      "Áo hoodie form rộng, chất liệu nỉ bông dày dặn, có mũ trùm đầu.",
    imageUrl: "../../assets/img/products/product19.jpg",
    stock: 41,
    hot: 1,
  },
  {
    id: 20,
    name: "Quần Culottes Vải Mềm Nữ",
    price: 300000,
    category: "Quần",
    description:
      "Quần culottes ống rộng, chất liệu vải mềm rũ, lưng thun co giãn.",
    imageUrl: "../../assets/img/products/product20.jpg",
    stock: 37,
  },
];

const productContainer = document.getElementById("inner-all-product");
const countInput = document.getElementById("product-count");

let originalProducts = [...products];
let visibleCount = 8;

function renderProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach((product) => {
    const productHTML = `
      <div class="col-md-4 mb-4 d-flex">
        <div class="card h-100 shadow-sm d-flex flex-column product-item position-relative overflow-hidden">
          <div class="product-img-wrapper position-relative">
            <img src="${product.imageUrl}" class="card-img-top" alt="${
      product.name
    }">
            <div class="inner-letter">
              <a href="./product_detail.html">Xem chi tiết</a>
            </div>
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-danger fw-bold">${product.price.toLocaleString()}₫</p>
            <p class="card-text flex-grow-1">${product.description}</p>
            <a href="./GioHang.html" class="btn btn-primary mt-auto">Thêm vào giỏ</a>

          </div>
        </div>
      </div>
    `;
    productContainer.innerHTML += productHTML;
  });
}

// Ban đầu hiển thị 8 sản phẩm
if (productContainer) {
  renderProducts(originalProducts.slice(0, visibleCount));
}

// Cập nhật khi người dùng chọn số lượng
if (countInput) {
  countInput.addEventListener("input", (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value > 0) {
      visibleCount = value;
      renderProducts(originalProducts.slice(0, visibleCount));
    }
  });
}

const loadMoreBtn = document.getElementById("load-more");
const collapseBtn = document.getElementById("collapse");

// Xử lý "Xem thêm"
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    renderProducts(originalProducts);
    loadMoreBtn.classList.add("d-none");
    collapseBtn.classList.remove("d-none");
  });
}

// Xử lý "Ẩn bớt"
if (collapseBtn) {
  collapseBtn.addEventListener("click", () => {
    renderProducts(originalProducts.slice(0, visibleCount));
    collapseBtn.classList.add("d-none");
    loadMoreBtn.classList.remove("d-none");
  });
}

// Sắp xếp khi chọn giá
const sortSelect = document.getElementById("sort-price");

if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    if (value === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price); //nếu < 0 thì a trước b
    } else if (value === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...originalProducts];
    }

    renderProducts(sortedProducts);
  });
}

// sản phẩm hot
const hotProductContainer = document.getElementById("hot-product-list");

const hotProducts = products.filter((product) => product.hot === 1);
if (hotProducts) {
  hotProducts.forEach((product) => {
    const productHTML = `
    <div class="inner-box wow animate__animated animate__fadeInRight">
      <div class="inner-img">
        <img src="${product.imageUrl}" alt="${product.name}" />
      </div>
      <div class="inner-detail">
        <div class="inner-title">${product.name}</div>
        <div class="inner-price">${(product.price / 1000).toFixed(0)}k</div>
        <a href="./GioHang.html" class="btn btn-success mt-auto">Thêm vào giỏ</a>
        <div class="inner-new">Hot</div>
      </div>
    </div>
  `;
    if (hotProductContainer) {
      hotProductContainer.innerHTML += productHTML;
    }
  });
}
//chi tiết sản phẩm minh họa
document.addEventListener("DOMContentLoaded", () => {
  const productDetail = document.getElementById("product-detail");

  if (!productDetail) {
    console.warn("Không tìm thấy phần tử #product-detail!");
    return;
  }

  const sampleProduct = {
    name: "Áo thun mẫu",
    category: "Áo",
    imageUrl: "../../assets/img/products/product1.jpg",
    price: 199000,
    description:
      "Áo thun mẫu được làm từ chất liệu cotton cao cấp, mềm mại, thoáng mát, phù hợp với mọi loại thời tiết. " +
      "Thiết kế trẻ trung, năng động, dễ phối đồ. " +
      "Đường may chắc chắn, tỉ mỉ. Sản phẩm phù hợp cho cả nam và nữ, từ đi học đến đi chơi, dạo phố. " +
      "Mẫu mã đa dạng, nhiều màu sắc, nhiều size cho bạn lựa chọn.",
  };

  const html = `
    <div class="row g-4 align-items-start">
      <div class="col-md-5">
        <img src="${
          sampleProduct.imageUrl
        }" class="img-fluid rounded shadow" alt="${sampleProduct.name}">
      </div>
      <div class="col-md-7">
        <h2 class="fw-bold mb-3">${sampleProduct.name}</h2>
        <p class="text-muted mb-2 fs-5">Danh mục: ${sampleProduct.category}</p>
        <h3 class="text-danger fw-bold mb-3">${sampleProduct.price.toLocaleString()}₫</h3>
        <p class="product-description mb-4">${sampleProduct.description.repeat(
          4
        )}</p>
        <a href="./GioHang.html" class="btn btn-lg btn-success px-5 py-2">🛒 Thêm vào giỏ hàng</a>
      </div>
    </div>
  `;

  productDetail.innerHTML = html;
});

//swipper
const adSwiper = new Swiper(".ad-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "slide",
});
