"use client"
import MainHeader from "./includes/MainHeader"
import SubMenu from "./includes/SubMenu"
import TopMenu from "./includes/TopMenu"
export default function MainLayout({children}) {
    return (
        <>
            <div id="MainLayout" className='w-full mx-auto h-auto'>
                <div>
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                </div>
            </div>
        </>
    )
} 