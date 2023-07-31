// Belanja.js
import React, { useEffect } from 'react';
import '../css-styling/awal.css'
import 'boxicons/css/boxicons.min.css';
import logo from './Group 2 (1).svg'
import Slider from 'react-slick';
import gambarslidi1 from './keranjang_part_2.png'
import gambarslidi2 from './keranjang_prev_ui.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tas from "../gambar produk versi 2/tas 1.jpg"
import sepatu from "../gambar sepatu/sepatu merk geoff max.jpg"
import jam from "../gambar produk versi 2/jam 1.jpg"
import laptop from "../gambar sepatu/sepatu merk airwalk.jpg"
import { useNavigate } from 'react-router-dom';



const Belanja = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const navigate = useNavigate();

    useEffect(() => {
        const waktuBerakhir = new Date();
        waktuBerakhir.setDate(waktuBerakhir.getDate() + 1);

        const jamt = document.querySelector('.isijam');
        const menitt = document.querySelector('.isimenit');
        const detikt = document.querySelector('.isidetik');

        function perbaruiHitunganMundur() {
            const waktuSaatIni = new Date();
            const selisihWaktu = waktuBerakhir - waktuSaatIni;

            if (selisihWaktu <= 0) {
                document.querySelector('.waktu').style.display = 'none';
            } else {
                const jam = Math.floor(selisihWaktu / (1000 * 60 * 60));
                const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
                const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

                jamt.textContent = jam;
                menitt.textContent = menit;
                detikt.textContent = detik;
                setTimeout(perbaruiHitunganMundur, 1000);
            }
        }

        perbaruiHitunganMundur();
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            {/* <!-- ====== Header ====== --> */}
            <header className="header">
                {/* <!-- ====== Navigation ====== --> */}

                {/* <!-- ====== Hero Area ====== --> */}
                <div className="hero" id="home">
                    <Slider {...settings} className='row container d-flex skeleton coursel'>
                        <div className="col" id="col">
                            <span className="subtitle">Hanya untuk Waktu Terbatas</span>
                            <h1>lucky store</h1>
                            <p>TAMPILKAN PENAMPILAN TERBAIKMU DI HARI TERBAIKMU</p>
                            <button className="btn">Jelajahi Sekarang!</button>
                            <img src={gambarslidi2} alt="" className='gambar-slide' />
                        </div>
                        <div className="col" id="col">
                            <span className="subtitle">Hanya untuk Waktu Terbatas</span>
                            <h1>big sale</h1>
                            <p>TAMPILKAN PENAMPILAN TERBAIKMU DI HARI TERBAIKMU</p>
                            <button className="btn">Jelajahi Sekarang!</button>
                            <img src={gambarslidi1} alt="" className='gambar-slide' />
                        </div>
                    </Slider>
                </div>
            </header>

            <div className="promo container skeleton">
                <h2>Waktu Terbatas Belanja segera</h2>
                <div className="waktum">
                    <p>Promo berakhir dalam:</p>
                    <div className="waktu">
                        <div className="jam">
                            <div className="isijam"></div>
                        </div>
                        <div className="menit">
                            <div className="isimenit"></div>
                        </div>
                        <div className="detik">
                            <div className="isidetik"></div>
                        </div>
                    </div>
                    <span id="timer"></span>
                </div>

                <a href="#shop" className="promobtn">Buy Now</a>
            </div>

            {/* <!-- ====== Tranding ====== --> */}
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} infinite={true} className='card container d-flex' >
                <div className='gambarcard'>
                    <img src={tas} alt="" />
                    <div className="cek">
                        <p>Order Tas Dihari Terbaik mu</p>
                        <button onClick={() => navigate('/shop')}>Buy Now</button>
                    </div>
                </div>
                <div className='gambarcard'>
                    <img src={sepatu} alt="" />
                    <div className="cek">
                        <p>Order Sepatu Dihari Terbaik mu</p>
                        <button onClick={() => navigate('/shop')}>Buy Now</button>
                    </div>
                </div>
                <div className='gambarcard'>
                    <img src={jam} alt="" />
                    <div className="cek">
                        <p>Order jam Dihari Terbaik mu</p>
                        <button onClick={() => navigate('/shop')}>Buy Now</button>
                    </div>
                </div>
                <div className='gambarcard'>
                    <img src={laptop} alt="" />
                    <div className="cek">
                        <p>Order laptop Dihari Terbaik mu</p>
                        <button onClick={() => navigate('/shop')}>Buy Now</button>
                    </div>
                </div>
            </Carousel>

            {/* <!-- ====== About-us ====== --> */}
            <div className="footer" id="tentang">
                <div className="row container skeleton">
                    <div className="col">
                        <div className="logo d-flex">
                            <img src={logo} alt="logo" id="logotentang" />
                        </div>
                        <p>
                            Lorem ipsum adalah teks pengganti <br />
                            yang umum digunakan sebagai teks acuan.
                        </p>
                        <div className="icons d-flex">
                            <div className="icon d-flex">
                                <i className="bx bxl-facebook"></i>
                            </div>
                            <div className="icon d-flex"><i className="bx bxl-twitter"></i></div>
                            <div className="icon d-flex"><i className="bx bxl-instagram"></i></div>
                            <div className="icon d-flex"><i className="bx bxl-youtube"></i></div>
                        </div>
                        <p className="color">
                            Copyright 2023 <br />
                            @LUCKY STORE
                        </p>
                    </div>
                    <div className="col">
                        <div>
                            <h4>Produk</h4>
                            <a href="#/">Unduh</a>
                            <a href="#/">Harga</a>
                            <a href="#/">Lokasi</a>
                            <a href="#/">Server</a>
                            <a href="#/">Negara</a>
                            <a href="#/">Blog</a>
                        </div>
                        <div>
                            <h4>Kategori</h4>
                            <a href="#/">Pria</a>
                            <a href="#/">Wanita</a>
                            <a href="#/">Anak-anak</a>
                            <a href="#/">Produk Terlaris</a>
                            <a href="#/">Produk Terbaru</a>
                        </div>
                        <div>
                            <h4>Akun Saya</h4>
                            <a href="#/">Akun Saya</a>
                            <a href="#/">Diskon</a>
                            <a href="#/">Pengembalian</a>
                            <a href="#/">Riwayat Pesanan</a>
                            <a href="#/">Pelacakan Pesanan</a>
                        </div>
                        <div>
                            <h4>Hubungi Kami</h4>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-map"></i></div>
                                <span>Jalan Medan Baru No. 456, Medan, Indonesia</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-envelope"></i></div>
                                <span>info@luckystore.com</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-phone"></i></div>
                                <span>+62.....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Belanja;
