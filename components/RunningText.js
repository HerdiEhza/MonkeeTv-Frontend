import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="bottom-0 fixed inline-flex bg-yellow-400 pl-0 ml-0 text-4xl">
      <div id="time" class="text-center mx-auto pl-2 max-w-xs bg-yellow-400">
            jam
      </div>
      <div class="ml-4 bg-green-300">
            <marquee direction="left" onmousemove="this.stop()" onmouseout="this.start()">
                Monkee Cafe, Bar & Resto &bull; Jl. Kh.A.Dahlan No.3, RW.5, Darat Sekip, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78117 &bull;
                <i class="bi bi-instagram m-0 p-0"></i> monkee.idn
            </marquee>
        </div>
    </div>
  )
}

export default Footer
