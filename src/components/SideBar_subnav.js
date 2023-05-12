

function SideBar_subnav() {
    return (
        <div className="mt-2 overflow-y-scroll max-h-80">
            <ul className="">
                <li className="hover:cursor-pointer">
                    <a className='px-7 py-2 flex items-center'>
                        <i className="mr-3 bi bi-music-player-fill text-2xl"></i>
                        <span>Nhạc Mới</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 py-2 flex items-center'>
                        <i className="mr-3 bi bi-vinyl-fill text-2xl"></i>
                        <span>Thể Loại</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 py-2 flex items-center'>
                        <i className="mr-3 bi bi-music-note-list text-2xl"></i>
                        <span>Top 100</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 py-2 flex items-center'>
                        <i className="mr-3 bi bi-soundwave text-2xl"></i>
                        <span>MV</span>
                    </a>
                </li>
            </ul>
            <div className="px-4 py-4 text-center mx-5 my-3 text-xs bg-gradient-to-r from-indigo-600 to-purple-500 rotate-117 rounded-lg">
                <p className=" text-xs font-[600] mb-3">Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                <a className="text-base text-yellow-200 px-6 py-1 bg-transparent font-[500] rounded-3xl border" href="#">Mua vip</a>
            </div>
            <ul>
                <li className="flex justify-around px-7 py-2 ">
                    <h2 className="mr-24 text-base font-[600]">THƯ VIỆN</h2>
                    <i className="bi bi-pencil hover:cursor-pointer"></i>
                </li>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <i className="bi bi-file-earmark-music  max-h-2 w-2 bg-green-400 px-2 py-1 text-white rounded-lg mr-3"></i>
                        <span>Bài hát</span>
                    </a>
                </li>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <i className="bi bi-music-note-list max-h-2 w-2 bg-lime-500 px-2 py-1 text-white rounded-lg mr-3"></i>
                        <span>Playlist</span>
                    </a>
                </li>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <i className="bi bi-alarm-fill max-h-2 w-2 bg-orange-500 px-2 py-1 text-white rounded-lg mr-3"></i>
                        <span>Gần đây</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <span className="font-[600] text-base">Tháng 1</span>
                    </a>
                </li>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <span className="font-[600] text-base">Nhạc Quốc Tế</span>
                    </a>
                </li>
                <li className="py-2 ml-8 ">
                    <a href="#" className="">
                        <span className="font-[600] text-base">Sky Ơi !</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar_subnav;