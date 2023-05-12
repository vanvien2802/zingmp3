import { useContext} from 'react';
import { Songs } from '../context';

function Albums() {
    const {Albums} = useContext(Songs);

    return (
        <div className="mb-20">
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">

                    <span className='text-2xl font-[600] text-slate-100'>Album</span>

                </div>
                <div className="flex flex-wrap justify-center box-playlist">
                    {Albums.map((album, index) => (
                        <div key={index} className=''>
                            <div className='box-image-playlist w-[100%] relative'>
                                <img src={album.image} alt="" className='slide-img-playlist' />
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-heart-fill text-pink-600 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                    <i className="bi bi-three-dots text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <span className='text-slate-50 font-[600] w-[90%] text-center mr-[10%]'>{album.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Albums;