"use client"

export default function SubMenu() {

    const menuItems = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'Saved'},
        {id: 3, name: 'Electronics'},
        {id: 4, name: 'Motors'},
        {id: 5, name: 'Fashion'},
        {id: 6, name: 'Collectables and Art'},
        {id: 7, name: 'Sports'},
        {id: 8, name: 'Health & Beauty'},
        {id: 9, name: 'Industrial Equipment'},
        {id: 10, name: 'Home & Garden'},
        {id: 11, name: 'Sell'},
    ]
    return (
        <div id="SubMenu" className="w-full border-10 h-auto"  >
            <div className="flex items-center justify-between mx-auto w-full h-auto">
                <ul id="TopMenuLeft"
                    className="
                        flex
                        items-center
                        flex-wrap
                        text-[13px]
                        text-[#333]
                        px-2
                        h-auto
                        mx-auto">
                    {
                        menuItems.map(item => {
                            const { id, name } = item
                            return <li key={id} className="px-3 hover:underline cursor-pointer">{name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}