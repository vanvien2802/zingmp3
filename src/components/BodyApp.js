import {useState} from 'react';
import Songs from './Songs';
import GlobalSongs from './GlobalSongs';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Playlists from './Playlists';
import Albums from './Albums';
import MVs from './MVs';
import Artists from './Artists';
import Uploads from './Uploads';

function BodyApp() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    return (
        <div className="h-screen-sidebar overflow-y-scroll">
            <div className='w-[100%] mb-10'>
                <div className='flex items-center justify-end mr-8 mt-5'>
                    <a className="text-base bg-yellow-400 text-slate-950 px-6 py-1 bg-transparent rounded-full" href="#">MUA VIP NGAY</a>
                    <a className="text-base text-white px-6 py-1 bg-transparent rounded-full bg-cyan-700 ml-3" href="#">NHẬP CODE VIP</a>
                    <a className="h-[26px] w-[26px] flex items-center justify-center bg-cyan-700 rounded-full ml-3">
                        <i className="bi bi-three-dots rounded-full"></i>
                    </a>
                </div>
                <div className='flex items-center flex-col mt-8'>
                    <a className="h-[80px] w-[80px] flex items-center justify-center bg-cyan-800 rounded-full ml-3">
                        <img src="../avatar.jpg" alt="" className='rounded-full' />
                    </a>
                    <span className='font-[700] text-4xl mt-2 text-slate-200'>Nguyễn Văn Viên</span>
                </div>
            </div>
            <div className="w-[100%] flex justify-center">
                <ul className='flex text-white bg-cyan-800 rounded-full py-1 px-2 list-selection'>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===0 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(0)}>TỔNG QUAN</li>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===1 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(1)}>BÀI HÁT</li>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===2 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(2)}>PLAYLIST</li>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===3 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(3)}>ALBUM</li>
                    <li className={`px-10 py-2 text-xs rounded-full ${selectedIdx===4 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(4)}>MV</li>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===5 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(5)}>NGHỆ SĨ</li>
                    <li className={`px-7 py-2 text-xs rounded-full ${selectedIdx===6 ? 'bg-cyan-700 selected' :'bg-transparent'}`} onClick={()=>setSelectedIdx(6)}>TẢI LÊN</li>
                </ul>
            </div>
            {
                <TransitionGroup>
                <CSSTransition
                  key={selectedIdx}
                  timeout={500}
                  classNames="fade"
                >
                  {selectedIdx===0?<GlobalSongs/>:
                   selectedIdx===1?<Songs />:
                   selectedIdx===2?<Playlists />:
                   selectedIdx===3?<Albums />:
                   selectedIdx===4?<MVs />:
                   selectedIdx===5?<Artists />:
                   selectedIdx===6?<Uploads />:null
                  }
                </CSSTransition>
              </TransitionGroup>
            }
        
        </div>
    );
}

export default BodyApp;