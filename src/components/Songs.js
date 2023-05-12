import { useContext, useEffect, useState } from 'react';
import { Songs } from '../context';

function ListSongs() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);

    const [idSong, setIdSong] = useState(0)

    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    }
    useEffect(() => {
        setIdSong(song.id);
    }, [song])
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    return (
        <div className="w-[100%] flex justify-center items-center flex-col mt-10">
            <div className=" w-[90%] flex justify-between items-center mb-6">
                <span className='text-2xl font-[600] text-slate-100'>Bài Hát</span>
                <div className='flex'>
                    <a href="#" className='border-[1px] rounded-full px-6 py-1'>
                        <i className="bi bi-upload text-slate-100"></i>
                        <span className='text-slate-100 ml-2 text-xs'>TẢI LÊN</span>
                    </a>
                    <button className='ml-4 rounded-full bg-emerald-500 px-6 py-1 flex items-center'>
                        <i className="bi bi-caret-right-fill text-slate-100"></i>
                        <span className='text-slate-100 text-xs ml-2'>PHÁT TẤT CẢ</span>
                    </button>
                </div>
            </div>
            <table className="table-auto w-[90%]">
                <thead className='text-white'>
                    <tr>
                        <th className='text-left pl-6 text-slate-500 text-base'>BÀI HÁT</th>
                        <th className='text-slate-500 text-base'>CA SĨ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                                className={`row-songs bg-transparent h-[50px] hover:bg-slate-900 text-emerald-500 ${idSong === song.id && 'bg-slate-600 text-teal-200'}`}
                                onClick={() => handlePlaySong(song.id)}
                            >
                                <td className="p-[10px] group">
                                    <div className="flex items-center">
                                        {/* <i className="bi bi-music-note-beamed mr-3"></i> */}
                                        {hoveredIndex === index ? (
                                            <input type="checkbox" className=' mr-3 h-[16px] w-[16px] bg-transparent' />
                                        ) : (
                                            <i className="bi bi-music-note-beamed mr-3 text-[16px]"></i>
                                        )}
                                        <img className='w-[40px] rounded-lg mr-3' src={song.links.images[1].url} alt="avatar"></img>
                                        <span>{song.name}</span>
                                    </div>
                                </td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'>
                                    <div>
                                        <i className="bi bi-mic-fill mr-3"></i>
                                        <i className="bi bi-heart-fill text-red-500 mr-3"></i>
                                        <i className="bi bi-three-dots mr-3"></i>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
}

export default ListSongs;