const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI
const { swaggerUi, specs } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Import Routes
const taiKhoanRoutes = require("./routes/taikhoan.routes");
const chiTietUsersRoutes = require("./routes/chitietusers.routes");
const donPhepRoutes = require("./routes/donphep.routes");
const pheDuyetDonRoutes = require("./routes/pheduyetdon.routes");
const luongNhanSuRoutes = require("./routes/luongnhansu.routes");
const gioLamNhanSuRoutes = require("./routes/giolamnhansu.routes");
const luongUserRoutes = require("./routes/luonguser.routes");
const congViecDuKienRoutes = require("./routes/congviecdukien.routes");
const luongThucTeRoutes = require("./routes/luongthucte.routes");
const lichSuChuyenLuongRoutes = require("./routes/lichsuchuyenluong.routes");
const lichSuThayDoiRoutes = require("./routes/lichsuthaydoi.routes");
const authRoutes = require("./routes/auth.routes");
const hopDongRoutes = require("./routes/hopdong.routes"); // ✅ THÊM Ở ĐÂY

// Sử dụng Routes
app.use("/api/taikhoan", taiKhoanRoutes);
app.use("/api/chitietuser", chiTietUsersRoutes);
app.use("/api/donphep", donPhepRoutes);
app.use("/api/pheduyetdon", pheDuyetDonRoutes);
app.use("/api/luongnhansu", luongNhanSuRoutes);
app.use("/api/giolamnhansu", gioLamNhanSuRoutes);
app.use("/api/luonguser", luongUserRoutes);
app.use("/api/congviecdukien", congViecDuKienRoutes);
app.use("/api/luongthucte", luongThucTeRoutes);
app.use("/api/lichsuchuyenluong", lichSuChuyenLuongRoutes);
app.use("/api/lichsuthaydoi", lichSuThayDoiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hopdong", hopDongRoutes); // ✅ THÊM Ở ĐÂY

// Swagger test
app.get("/ping", (req, res) => {
  res.send("Swagger OK");
});

// Root API
app.get("/", (req, res) => {
  res.send("✅ API Nhân Sự đang chạy!");
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📚 Swagger UI: http://localhost:${PORT}/api-docs`);
});
