"use client"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const AuthDropDown = () => {
    return (
        <div
        id="AuthDropdown"
        className="hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
    > 
            <UserName />
            <div className="border-b"/>
            <ul className="bg-white"> 
                <li className="text=[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders"> My Orders</Link>
                </li>
                <li className="text=[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    Sign Out
                </li>
            </ul>
        </div>
    )
}

const UserName = () => {
    return (
        <div className="flex items-center justify-start gap-1 p-3">
            <img width={50} src="https://picsum.photos/200" />
            <div className="font-bold text-[13px]">John Weeks</div>
        </div>
    )
}

const LoginDropDown = () => {
    return (
        <li className="relative px-3">
            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                <div>Login</div>
                <BsChevronDown />
            </Link>
            <AuthDropDown />
        </li>
    )
}

const renderMenuLeft = () => {
    return (
        <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
        >
            <LoginDropDown /> 
            <li className="px-3 hover:underline cursor-pointer">
                Daily Deals
            </li>
            <li className="px-3 hover:underline cursor-pointer">
                Help & Contact
            </li>
        </ul>
    )
}

const renderMenuRight = () => {
    return (
        <ul id="TopMenuRight" className="flex item-center text=[11px] text=[#333333] px-2 h-8">
            <li className="flex item-center gap-2 px-3 hover:underline cursor-pointer">
                <img width={32} src="/images/uk.png"/>
                Ship to
            </li>
            <li className="px-3 hover:underline cursor-pointer">
                <div className="relative">
                    <AiOutlineShoppingCart size={22} />
                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                        <div className="flex items-center justify-center -mt-[1px]">
                            3
                        </div>
                    </div> 
                </div>
            </li>
        </ul>
    )
}

export default function TopMenu() {
    return (
        <>
            <div id="TopMenu" className="w-full border-10 border-blue-500" >
                <div className="flex items-center justify-between mx-auto w-full">
                    {renderMenuLeft()}
                    {renderMenuRight()}
                </div>
            </div>
        </>
    )
}