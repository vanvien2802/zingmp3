// import { useContext } from 'react';
// import { Songs } from '../context';

function Uploads() {
    // const { Artists } = useContext(Songs);

    return (
        <div className="mb-20 w-[100%] flex flex-col items-baseline">
            <div className="ml-14 mt-6">
                <span className='text-2xl font-[600] text-slate-100'>Danh Sách Tải Lên</span>
            </div>
            <div className="w-[90%] bg-slate-700 opacity-[0.6] rounded-lg h-[200px] mt-4 flex flex-col justify-center items-center">
                <i className="bi bi-music-note-list text-5xl text-slate-50"></i>
                <p className="text-slate-50 mt-7">Không có bài hát tải lên</p>
            </div>
        </div >
    );
}

export default Uploads;