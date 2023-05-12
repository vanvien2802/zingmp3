import { useContext } from 'react';
import { Songs } from '../context';

function MVs() {
    const { MVs } = useContext(Songs);

    return (
        <div className="mb-20">
            <div className="w-[100%] flex justify-center items-center flex-col mt-10">
                <div className=" w-[90%] flex justify-between items-center mb-6">

                    <span className='text-2xl font-[600] text-slate-100'>Album</span>

                </div>
                <div className="flex flex-wrap justify-center box-MVs">
                    {MVs.map((mv, index) => (
                        <div key={index} className='relative'>
                            <div className='box-image-mv w-[100%] relative'>
                                <img src={mv.image} alt="" className='slide-img-mv' />
                                <i class="bi bi-x-octagon-fill hidden hint-action-playlist text-red-500 text-2xl hover:cursor-pointer absolute top-0 right-0 p-2"></i>
                                <div className='hint-action-playlist hidden justify-center items-center'>
                                    <i className="bi bi-caret-right-fill text-slate-50 text-2xl hover:cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='box-descript-playlist flex flex-col items-center w-[100%] mt-2'>
                                <span className='text-slate-50 font-[600] w-[90%] text-center mr-[10%]'>{mv.name}</span>
                                <span className='text-slate-600 text-sm font-[500] mr-[10%]'>{mv.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default MVs;