/*@return {JSX.Element}
*/
function Header(){
    return(
        <header className="header">
            {/* Khu vuc hien thi ten thuong hieu hoac logo cua ung dung */}
            <div className="logo">QUYNHQUYNH</div>

            {/* Navigation bar chua ds cac lien ket dieu huong chinh */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Pages</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;