import React from 'react';

function HeaderContainer() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center mr-8">
                <div className="h-[64px] w-[50%] flex items-center">
                    <i className="bi bi-arrow-left text-white text-2xl mr-5 ml-8"></i>
                    <i className="bi bi-arrow-right text-slate-400 text-2xl mr-5"></i>
                    <div className="h-[40px] bg-cyan-800 flex rounded-3xl items-center w-[100%]">
                        <i className="bi bi-search-heart text-white text-xl ml-3 mr-3"></i>
                        <input className="rounded-3xl bg-transparent w-[100%] h-[100%] focus:outline-none text-slate-100 pl-1" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."></input>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-end">
                    <a className="h-[40px] w-[40px] flex items-center justify-center bg-cyan-800 rounded-full ml-3">
                        <i className="bi bi-menu-button-wide pt text-red-500"></i>
                    </a>
                    <a className="h-[40px] w-[40px] flex items-center justify-center bg-cyan-800 rounded-full ml-3">
                        <i className="bi bi-upload text-white"></i>
                    </a>
                    <a className="h-[40px] w-[40px] flex items-center justify-center bg-cyan-800 rounded-full ml-3">
                        <i className="bi bi-gear-fill text-white"></i>
                    </a>
                    <a className="h-[40px] w-[40px] flex items-center justify-center bg-cyan-800 rounded-full ml-3">
                        <img src="../avatar.jpg" alt="" className='rounded-full' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderContainer;