import { useState } from "react";
function ProductHeader(){

    const [activeTab, setActiveTab] = useState("discover");

    return(
        <section className="product-header">
            {/** chứa 3 nút tabs **/}
            <div className="tabs">
                <button className={activeTab === "new" ? "tab active" : "tab"} onClick={()=> setActiveTab("new")}>
                    New Arrivals
                </button>

                <button className={activeTab === "discover" ?"tab active" : "tab"} onClick={()=> setActiveTab("discover")}>
                    Discover
                </button>

                <button className={activeTab === "best" ?"tab active" : "tab"} onClick={()=> setActiveTab("best")}>
                    Best
                </button>
            </div> 
            
            {/** chứa thanh tiềm kiếm */}
            <div className="search-box"> 
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm, màu sắc,..."
                />
            </div>
        </section>
    );
}

export default ProductHeader;