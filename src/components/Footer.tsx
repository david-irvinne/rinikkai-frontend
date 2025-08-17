const Footer = () => {
  return (
    <footer className="border-1 rounded-[12px] py-[1rem] px-[1.2rem] bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]">
      <div className="grid grid-cols-2 items-center">
        {/* Bagian kiri */}
        <div>
          <h1 className="text-white font-bold text-xl">rinikkai</h1>
          <p className="text-white/90 text-sm">理学部日本語勉強会</p>
        </div>

        {/* Bagian kanan */}
        <div className="flex flex-col space-y-4 text-gray-700 text-right">
          <a href="#" className="hover:text-gray-900 text-left">Alamat</a>
          <a href="#" className="hover:text-gray-900 text-left">Sosial Media</a>
          <a href="#" className="hover:text-gray-900 text-left">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer