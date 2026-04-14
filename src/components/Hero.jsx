function Hero(){
    return(
        // Sử dụng thẻ section với semantic HTML để đánh dấu một phần độc lập của trang
        <section className="hero">
            <div className="hero-content">
                 {/* Tiêu đề chính (H1): cực kỳ quan trọng SEO, chứa từ khóa chính */}
                 <h1>Reveal The Beauty of Skin</h1>

                 {/* Đoạn văn mô tả */}
                 <p>
                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                 </p>

                 {/* Thông tin phụ nhắm kích thích chuyển đổi (giá cả) */}
                 <h3>Starting at $9.33</h3>

                 {/* Nút Call-to-Action dẫn người dùng đến trang mua sắm */}
                 <button type="button">Shop Now</button>

            </div>
        </section>
    );
}

export default Hero;