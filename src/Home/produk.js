import { useEffect, useState } from 'react'
import '../css-styling/syleproduk.css'
import { useNavigate } from 'react-router-dom'
// untuk sepatu
import sepatu1 from '../gambar sepatu/sepatu merk run  star hike.jpg'
import sepatu2 from '../gambar sepatu/sepatu merk olukai.jpg'
import sepatu3 from '../gambar sepatu/sepatu merk bold.webp'
import sepatu4 from '../gambar sepatu/sepatu merk superga.webp'
import sepatu5 from '../gambar sepatu/sepatu merk league.webp'
import sepatu6 from '../gambar sepatu/sepatu merk amble.webp'
import sepatu7 from '../gambar sepatu/sepatu merk balance.webp'
import sepatu8 from '../gambar sepatu/sepatu merk diadora.webp'
import sepatu9 from '../gambar sepatu/sepatu merk asics.webp'
import sepatu10 from '../gambar sepatu/sepatu merk eagle.jpg'
import sepatu11 from '../gambar sepatu/sepatu merk piero.jpg'
import sepatu12 from '../gambar sepatu/sepatu merk under armour.jpg'
import sepatu13 from '../gambar sepatu/sepatu merk airwalk.jpg'
import sepatu14 from '../gambar sepatu/sepatu merk portee.jpg'
import sepatu15 from '../gambar sepatu/sepatu merk warrior.jpg'

// unuk jam
import jam1 from '../gambar produk versi 2/jam 1.jpg'
import jam2 from '../gambar produk versi 2/jam 2.jpg'
import jam3 from '../gambar produk versi 2/jam 3.jpeg'
import jam4 from '../gambar produk versi 2/jam 4.jpg'
import jam5 from '../gambar produk versi 2/jam 5.jpg'
import jam6 from '../gambar produk versi 2/jam 6.jpg'
import jam7 from '../gambar produk versi 2/jam 7.png'
import jam8 from '../gambar produk versi 2/jam 9.jpg'
import jam9 from '../gambar produk versi 2/jam 10.jpg'
import jam10 from '../gambar produk versi 2/jam 11.jpg'
import jam11 from '../gambar produk versi 2/jam 12.png'
import jam12 from '../gambar produk versi 2/jam 14.jpg'
import jam13 from '../gambar produk versi 2/jam 14.jpg'
import jam14 from '../gambar produk versi 2/jam 15.jpg'
import jam15 from '../gambar produk versi 2/jam 12.png'
import tas from '../gambar produk versi 2/tas 1.jpg'
import jam from '../gambar produk versi 2/jam 1.jpg'
const Produk = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('All');
    const [kategoriVisible, setKategoriVisible] = useState('All');
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

    const filteredProduk = produk.filter((produk) =>
        produk.nama.toLowerCase().includes(searchQuery)
    );

    let sortedProduk = filteredProduk;
    if (sortOption === "Termurah") {
        sortedProduk = filteredProduk.sort((a, b) => a.harga - b.harga);
    } else if (sortOption === "Tertinggi") {
        sortedProduk = filteredProduk.sort((a, b) => b.harga - a.harga);
    }
    const lihatDetail = (index) => {
        const filteredIndex = produk.findIndex((item) => item === sortedProduk[index]);
        const productId = filteredIndex;
        navigate(`/pratinjau/${productId}`);
    };

    useEffect(() => {
        const produ = document.querySelectorAll('.isi-produk');
        const produArray = Array.from(produ);

        for (let i = 0; i < produArray.length; i++) {
            const item = produArray[i];
            const kategori = sortedProduk[i].kategori;
            if (kategori === kategoriVisible) {
                item.style.display = 'flex';
            } else if (kategoriVisible === 'All') {
                setKategoriVisible('sepatu');
            }
            else {
                item.style.display = 'none';
            }
        }
    }, [kategoriVisible, sortedProduk]);

    const PilihanSepatuClick = () => {
        setKategoriVisible('sepatu');
    };

    const PilihanTasClick = () => {
        setKategoriVisible('tas');
    };
    const PilihanJamClick = () => {
        setKategoriVisible('jam');

    }
    return (
        <div class="tranding">
            <div class="pembungkus">
                <div class="pilihan sepatu" onClick={PilihanSepatuClick}>
                    <img src={sepatu1} alt="pilihan untuk sepatu" />
                    <p>SEPATU</p>
                </div>
                <div class="pilihan tas" onClick={PilihanTasClick}>
                    <img src={tas} alt="pilihan untuk sepatu" />
                    <p>TAS</p>
                </div>
                <div class="pilihan jam1" onClick={PilihanJamClick}>
                    <img src={jam} alt="pilihan untuk sepatu" />
                    <p>JAM TANGAN</p>
                </div>
            </div>
            <input
                type="text"
                placeholder="pencarian"
                id="pencari"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="radio">
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="Termurah"
                        checked={sortOption === "Termurah"}
                        onChange={() => setSortOption("Termurah")}
                    />
                    Termurah
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="Tertinggi"
                        checked={sortOption === "Tertinggi"}
                        onChange={() => setSortOption("Tertinggi")}
                    />
                    Tertinggi
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="All"
                        checked={sortOption === "All"}
                        onChange={() => setSortOption("All")}
                    />
                    All
                </label>
            </div>
            <div className="produk">
                {sortedProduk.map((produk, index) => (
                    <div className="isi-produk">
                        <div className="gambar">
                            <img src={produk.gambar} alt="" />
                            <div className="preview">
                                <i className="bx bx-heart"></i>
                                <i
                                    className="bx bx-search lihatview"
                                    onClick={() => lihatDetail(index)}
                                ></i>
                            </div>
                        </div>
                        <p>{produk.nama}</p>
                        <p>{`Rp.${produk.harga.toLocaleString()}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Produk