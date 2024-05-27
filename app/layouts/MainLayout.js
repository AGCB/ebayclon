"use client"
import MainHeader from "./includes/MainHeader"
import TopMenu from "./includes/TopMenu"
export default function MainLayout({children}) {
    return (
        <>
            <div id="MainLayout" className='w-full mx-auto border-8'>
                <div>
                    <TopMenu />
                    <MainHeader />
                </div>
            </div>
        </>
    )
} 