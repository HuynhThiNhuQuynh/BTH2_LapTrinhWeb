function ProductBanner(){
    return(
        <section className="banner">
            {/*== BÊN TRÁI ẢNH LỚN ==*/}
            <div className="banner-left">
                <img src="/images/banner1.jpg" alt="Main product" />
            </div>

            <div className="banner-right">

                <div className="banner-item">
                    <img src="/images/banner2.jpg" alt="Product 1" />
                </div>

                <div className="banner-item">
                    <img src="/images/banner3.jpg" alt="Product 2" />
                </div>

                <div className="banner-item">
                    <img src="/images/banner4.jpg" alt="Product 4" />
                </div>

            </div>
        </section>
    );
}
export default ProductBanner;