import { useContext } from 'react';
import { Songs } from '../context';

function Artists() {
    const { Artists } = useContext(Songs);

    return (
        <div className="mb-20">
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">

                    <span className='text-2xl font-[600] text-slate-100'>Album</span>

                </div>
                <div className="flex flex-wrap justify-center box-Artists">
                    {Artists.map((artist, index) => (
                        <div key={index} className=''>
                            <div className='box-image-artist w-[100%] relative'>
                                <img src={artist.image} alt="" className='slide-img-artist' />
                                <div className='hint-action-artist hidden justify-center items-center absolute'>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='box-descript-artist flex flex-col items-center justify-center w-[100%] mt-2'>
                                <div className='flex justify-center w-[100%]'>
                                    <span className='text-slate-50 font-[500] text-center'>{artist.name}</span>
                                    <i className="bi bi-star-fill text-yellow-300"></i>
                                </div>
                                <span className='text-slate-600 text-sm font-[500] mb-3'>{artist.followers} quan tâm</span>
                                <button className='flex w-[80%] justify-center bg-pink-600 rounded-full py-2'>
                                    <i class="bi bi-check2 text-slate-50 text-xs"></i>
                                    <span className='text-slate-50 text-xs'>ĐÃ QUAN TÂM</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Artists;