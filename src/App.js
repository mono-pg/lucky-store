import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Keranjang from './Home/cart';
import Belanja from './Home/shop';
import Pratinjau from './Home/preview';
import sepatu1 from './gambar sepatu/sepatu merk run  star hike.jpg'
import sepatu2 from './gambar sepatu/sepatu merk olukai.jpg'
import sepatu3 from './gambar sepatu/sepatu merk bold.webp'
import sepatu4 from './gambar sepatu/sepatu merk superga.webp'
import sepatu5 from './gambar sepatu/sepatu merk league.webp'
import sepatu6 from './gambar sepatu/sepatu merk amble.webp'
import sepatu7 from './gambar sepatu/sepatu merk balance.webp'
import sepatu8 from './gambar sepatu/sepatu merk diadora.webp'
import sepatu9 from './gambar sepatu/sepatu merk asics.webp'
import sepatu10 from './gambar sepatu/sepatu merk eagle.jpg'
import sepatu11 from './gambar sepatu/sepatu merk piero.jpg'
import sepatu12 from './gambar sepatu/sepatu merk under armour.jpg'
import sepatu13 from './gambar sepatu/sepatu merk airwalk.jpg'
import sepatu14 from './gambar sepatu/sepatu merk portee.jpg'
import sepatu15 from './gambar sepatu/sepatu merk warrior.jpg'

// unuk jam
import jam1 from './gambar produk versi 2/jam 1.jpg'
import jam2 from './gambar produk versi 2/jam 2.jpg'
import jam3 from './gambar produk versi 2/jam 3.jpeg'
import jam4 from './gambar produk versi 2/jam 4.jpg'
import jam5 from './gambar produk versi 2/jam 5.jpg'
import jam6 from './gambar produk versi 2/jam 6.jpg'
import jam7 from './gambar produk versi 2/jam 7.png'
import jam8 from './gambar produk versi 2/jam 9.jpg'
import jam9 from './gambar produk versi 2/jam 10.jpg'
import jam10 from './gambar produk versi 2/jam 11.jpg'
import jam11 from './gambar produk versi 2/jam 12.png'
import jam12 from './gambar produk versi 2/jam 14.jpg'
import jam13 from './gambar produk versi 2/jam 14.jpg'
import jam14 from './gambar produk versi 2/jam 15.jpg'
import jam15 from './gambar produk versi 2/jam 12.png'
import tas from './gambar produk versi 2/tas 1.jpg'
import LoginForm from './component/login';
import RegisterForm from './component/register';
import logo from './Home/Group 2 (1).svg';
import Produk from './Home/produk';

function UserPanel({ user, handleLogout }) {
  return (
    <div className="user-panel">
      <p className="user-name">{user.nama}</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [keranjang, setKeranjang] = useState([]);
  const [registrasiData, setRegistrasiData] = useState({});


  const handleLogin = (nama, email) => {
    setIsLoggedIn(true);
    setUser({ nama, email });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const hapusDariKeranjang = (item) => {
    const keranjangBaru = keranjang.filter((barang) => barang !== item);
    setKeranjang(keranjangBaru);
  };

  const tambahJumlah = (item) => {
    const keranjangBaru = keranjang.map((barang) => {
      if (barang === item) {
        return {
          ...barang,
          jumlah: barang.jumlah + 1,
        };
      }
      return barang;
    });
    setKeranjang(keranjangBaru);
  };

  const kurangiJumlah = (item) => {
    const keranjangBaru = keranjang.map((barang) => {
      if (barang === item && barang.jumlah > 1) {
        return {
          ...barang,
          jumlah: barang.jumlah - 1,
        };
      }
      return barang;
    });
    setKeranjang(keranjangBaru);
  };

  const [produk] = useState([
    {
      gambar: sepatu1,
      nama: "STAR HIKE",
      harga: 1500000,
      kategori: "sepatu"

    },
    {
      gambar: sepatu2,
      nama: "OLUKAI",
      harga: 2000000,
      kategori: "sepatu"

    },
    {
      gambar: sepatu3,
      nama: "BOLD",
      harga: 726000,
      kategori: "sepatu"

    },
    {
      gambar: sepatu4,
      nama: "SUPERGA",
      harga: 887000,
      kategori: "sepatu"

    },
    {
      gambar: sepatu5,
      nama: "LEAGUE",
      harga: 779000,
      kategori: "sepatu"

    },
    {
      gambar: sepatu6,
      nama: "AMBLE",
      harga: 714000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu7,
      nama: "BALANCE",
      harga: 505000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu8,
      nama: "DIADORA",
      harga: 400000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu9,
      nama: "ASICS",
      harga: 590000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu10,
      nama: "EAGLE",
      harga: 699000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu11,
      nama: "PIERO",
      harga: 862000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu12,
      nama: "UNDER ARMOUR",
      harga: 570000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu13,
      nama: "AIR WALK",
      harga: 972000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu14,
      nama: "PORTEE",
      harga: 400000,
      kategori: "sepatu"
    },
    {
      gambar: sepatu15,
      nama: "WARRIOR",
      harga: 420000,
      kategori: "sepatu"
    },
    {
      gambar: tas,
      nama: "WARRIOR",
      harga: 8888000,
      kategori: "tas",
    },
    {
      gambar: jam1,
      nama: "CASIO",
      harga: "200.000",
      kategori: "jam"
    },
    {
      gambar: jam2,
      nama: "FOSSIL",
      harga: "1.000.000",
      kategori: "jam"
    },
    {
      gambar: jam3,
      nama: "ORIENT",
      harga: "1.200.000",
      kategori: "jam"
    },
    {
      gambar: jam4,
      nama: "CITIZEN",
      harga: "850.00",
      kategori: "jam"
    },
    {
      gambar: jam5,
      nama: "SEIKO",
      harga: "1.000.000",
      kategori: "jam"
    },
    {
      gambar: jam6,
      nama: "ALBA",
      harga: "500.000",
      kategori: "jam"
    },
    {
      gambar: jam7,
      nama: "CASIO G-SHOCK",
      harga: "900.000",
      kategori: "jam"
    },
    {
      gambar: jam8,
      nama: "CASIO EDIFICE",
      harga: "940.000",
      kategori: "jam"
    },
    {
      gambar: jam9,
      nama: "DANIEL WELLINGTON",
      harga: "1.450.000",
      kategori: "jam"
    },
    {
      gambar: jam10,
      nama: "ALEXANDRE CHRISTIE",
      harga: "599.000",
      kategori: "jam"
    },
    {
      gambar: jam11,
      nama: "EXPEDETION",
      harga: "720.000",
      kategori: "jam"
    },
    {
      gambar: jam12,
      nama: "TIMEX",
      harga: "728.000",
      kategori: "jam"
    },
    {
      gambar: jam13,
      nama: "TISSOT",
      harga: "1.965.000",
      kategori: "jam"
    },
    {
      gambar: jam14,
      nama: "AIGNER",
      harga: "3.965.000",
      kategori: "jam"
    },
    {
      gambar: jam15,
      nama: "NIXON",
      harga: "1.000.000",
      kategori: "jam"
    },
  ])


  const tambahKeKeranjang = (produk) => {
    const itemSama = keranjang.find((item) => item.nama === produk.nama);
    if (itemSama) {
      const keranjangBaru = keranjang.map((item) =>
        item.nama === produk.nama ? { ...item, jumlah: item.jumlah + 1 } : item
      );
      setKeranjang(keranjangBaru);
    } else {
      setKeranjang([...keranjang, { ...produk, jumlah: 1 }]);
    }
  };

  // ...
  const gelap = () => {
    // mode gelap
    document.body.classList.toggle('coba');

    if (document.body.classList.contains('coba')) {
      document.documentElement.style.setProperty('--color-khusus', 'white');
      document.documentElement.style.setProperty('--white-color', 'black');
      document.documentElement.style.setProperty('--black-color', 'white');
      document.documentElement.style.setProperty('--icon-hover', '#222');
      document.querySelector('.mode-gelap').classList.remove('bx', 'bx-moon');
      document.querySelector('.mode-gelap').classList.add('bx', 'bx-sun');
    } else {
      document.documentElement.style.setProperty('--color-khusus', '#4f5665');
      document.documentElement.style.setProperty('--white-color', 'white');
      document.documentElement.style.setProperty('--black-color', 'black');
      document.documentElement.style.setProperty('--icon-hover', '#f4f4f4');
      document.querySelector('.mode-gelap').classList.remove('bx', 'bx-sun');
      document.querySelector('.mode-gelap').classList.add('bx', 'bx-moon');
    }
  };


  useEffect(() => {
    const gelapButton = document.querySelector('.gelap-icon');
    const nav = document.querySelector('.hamburger');
    const close = document.querySelector('.close')

    const show = () => {
      document.querySelector('.nav-list').style.right = "0";
    };
    const hide = () => {
      document.querySelector('.nav-list').style.right = "-100%";
    };

    gelapButton.addEventListener('click', gelap);
    nav.addEventListener('click', show);

    close.addEventListener('click', hide);
    return () => {
      gelapButton.removeEventListener('click', gelap);
    };

  }, []);


  return (
    <Router>
      <div className="header">
        <nav className="navbar">
          <div className="row container d-flex">
            <div className="logo skeleton">
              <Link to="/">
                <img src={logo} alt="" id="khusus" />
              </Link>
            </div>

            <div className="nav-list d-flex skeleton">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <a href="#tranding">Tranding</a>
              <a href="#tentang">About-Us</a>
              <div className="close">
                <i className="bx bx-x"></i>
              </div>
            </div>

            <div className="icons d-flex skeleton">
              <div className="icon like-icon d-flex">
                <i className="bx bx-heart"></i>
              </div>
              <div className="icon d-flex isi-no">
                <Link to="/keranjang">
                  <i className="bx bx-shopping-bag bag"></i>
                </Link>
                <span>{keranjang.length}</span>
              </div>
              <div className="icon gelap-icon d-flex">
                <i className="bx bx-moon mode-gelap"></i>
              </div>
              {isLoggedIn ? (
                <>
                  <div className="icon user-icon d-flex">
                    <UserPanel user={user} handleLogout={handleLogout} />
                  </div>
                </>
              ) : (
                <div className="icon user-icon d-flex">
                  <Link to="/login">
                    <i className="bx bx-user"></i>
                  </Link>
                </div>
              )}
            </div>

            <div className="hamburger">
              <i className="bx bx-menu-alt-right"></i>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Belanja />} />
        <Route
          path="/pratinjau/:id"
          element={<Pratinjau produk={produk} tambahKeKeranjang={tambahKeKeranjang} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/keranjang"
          element={
            <Keranjang
              keranjang={keranjang}
              hapusDariKeranjang={hapusDariKeranjang}
              tambahJumlah={tambahJumlah}
              kurangiJumlah={kurangiJumlah}
            />
          }
        />

        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} registrasiData={registrasiData} />}
        />
        <Route path="/register" element={<RegisterForm setRegistrasiData={setRegistrasiData} />} />
        <Route path='/shop' element={<Produk />} />
      </Routes>
    </Router>
  );
}

export default App;
