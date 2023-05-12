import { useContext} from 'react';
import { Songs } from '../context';

function Playlists() {
    const {Playlists} = useContext(Songs);

    return (
        <div className="">
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">

                    <span className='text-2xl font-[600] text-slate-100'>Playlist</span>

                </div>
                {/* background: linear-gradient(33deg, #5a1eae -7%, #ce267a 117%); */}
                <div className="flex flex-wrap justify-center box-playlist">
                    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 to-pink-500 transform rounded-xl ">
                        <i className="bi bi-plus-lg text-[80px] text-slate-50"></i>
                        <p className='text-xl text-slate-50 font-extralight'>Tạo playlist mới</p>
                    </div>
                    {Playlists.map((playlist, index) => (
                        <div className="relative" key={index} >
                            <div className='box-image-playlist w-[100%]'>
                                <img src={playlist.url_image} alt="" className='slide-img-playlist' />
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-heart-fill text-pink-600 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-three-dots text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <span className='text-slate-50 font-[600] text-center'>{playlist.name}</span>
                                <span className='text-slate-600 text-sm font-[500]'>{playlist.creator}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Playlists;