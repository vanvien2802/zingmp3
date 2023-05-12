

function SideBar_navlist() {
    return (
        <div className='h-48'>
            <img className='max-h-10 mt-3 mb-3 ml-6' src="https://vikdang.github.io/Code_web_music_player/assets/img/logos/main-logo.svg"></img>
            <ul className="sidebar__nav-list">
                <li className="hover:cursor-pointer bg-cyan-800">
                    <a className='px-7 p-1 flex items-center'>
                        <i className="mr-3 bi bi-music-player-fill text-2xl"></i>
                        <span>Cá Nhân</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 p-1 flex items-center'>
                        <i className="mr-3 bi bi-vinyl-fill text-2xl"></i>
                        <span>Khám Phá</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 p-1 flex items-center'>
                        <i className="mr-3 bi bi-music-note-list text-2xl"></i>
                        <span>#zingchart</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 p-1 flex items-center'>
                        <i className="mr-3 bi bi-soundwave text-2xl"></i>
                        <span>Radio</span>
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a className='px-7 p-1 flex items-center'>
                        <i className="mr-3 bi bi-file-earmark-slides text-2xl"></i>
                        <span>Theo Dõi</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar_navlist;