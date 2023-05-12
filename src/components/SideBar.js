import SideBar_navlist from "./SideBar_navlist";
import SideBar_subnav from "./SideBar_subnav";


function SideBar() {
    return (
        <div className='col-span-1 bg-cyan-900 text-white h-screen-sidebar flex flex-col'>
            <SideBar_navlist />
            <SideBar_subnav />
            <div className='h-[3.5rem] flex justify-center items-center relative border-t-[1px] top-0 hover:cursor-pointer'>
                <i className="bi bi-plus-circle-dotted absolute ml-[-150px]"></i>
                <h2>Tạo playlist mới</h2>
            </div>
        </div>
    );
}

export default SideBar;