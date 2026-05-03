import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  // ===== LOAD DATA =====
  const loadData = () => {
    axios.get("http://localhost:5216/api/product")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("LỖI:", err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // ===== ADD =====
  const handleAdd = () => {
    if (!name || !price) {
      alert("Nhập đầy đủ!");
      return;
    }

    axios.post("http://localhost:5216/api/product", {
      name: name,
      price: parseFloat(price),
      image: "/images/card1.jpg"
    })
    .then(() => {
      setName("");
      setPrice("");
      loadData();
    })
    .catch(err => console.error(err));
  };

  // ===== DELETE =====
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5216/api/product/${id}`)
      .then(() => loadData())
      .catch(err => console.error(err));
  };

  // ===== UPDATE =====
  const handleUpdate = (id) => {
    if (!name || !price) {
      alert("Nhập dữ liệu trước khi sửa!");
      return;
    }

    axios.put(`http://localhost:5216/api/product/${id}`, {
      name: name,
      price: parseFloat(price),
      image: "/images/card2.jpg"
    })
    .then(() => {
      setName("");
      setPrice("");
      setEditId(null);
      loadData();
    })
    .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Trang sản phẩm</h1>

      {/* ===== FORM ===== */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <button
          onClick={editId ? () => handleUpdate(editId) : handleAdd}
        >
          {editId ? "Cập nhật" : "Thêm"}
        </button>
      </div>

      {/* ===== LIST ===== */}
      {products.length === 0 && <p>Không có sản phẩm</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px"
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover"
              }}
            />

            <h3>{p.name}</h3>
            <p>Giá: {p.price}</p>

            <button
              onClick={() => {
                setName(p.name);
                setPrice(p.price);
                setEditId(p.id);
              }}
              style={{ marginRight: "5px" }}
            >
              Sửa
            </button>

            <button onClick={() => handleDelete(p.id)}>
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;