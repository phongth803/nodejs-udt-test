## 1. Cơ sở dữ liệu nào sẽ sử dụng để triển khai? 
Lựa chọn cơ sở dữ liệu: PostgreSQL (SQL)
Nếu có thêm thời gian, thì cart table nên được lưu ở Redis vì những lợi ích sau : 
- Tăng tốc độ truy xuất và xử lý giỏ hàng vì in-memory data store.
- Dễ dàng quản lý và loại bỏ dữ liệu tạm thời : Dữ liệu giỏ hàng thường là dữ liệu tạm thời, không cần lưu trữ lâu dài, và sẽ mất đi sau một thời gian nhất định vì có cơ chế Time to Live.
- Giảm tải cho cơ sở dữ liệu chính.
- Mở rộng hệ thống dễ dàng.

## 2. Tại sao chọn PostgreSQL? Điểm mạnh và điểm yếu của nó?
### Lý do chọn PostgreSQL:
- Phù hợp với mô hình quan hệ trong ERD: Với các thực thể như Customer, Product, Transaction, và Billing có mối quan hệ phức tạp, PostgreSQL hỗ trợ tốt việc quản lý dữ liệu theo mô hình quan hệ.
- Tuân thủ nguyên tắc ACID: PostgreSQL đảm bảo tính nhất quán, toàn vẹn dữ liệu trong giao dịch, rất quan trọng cho hệ thống thương mại điện tử khi cần xử lý nhiều giao dịch và hóa đơn.
- Hỗ trợ truy vấn phức tạp: PostgreSQL cung cấp khả năng truy vấn dữ liệu phức tạp giữa nhiều bảng, phù hợp với yêu cầu của hệ thống có nhiều thực thể liên kết với nhau.
- Mã nguồn mở và miễn phí: PostgreSQL là mã nguồn mở, không có chi phí bản quyền.
### Điểm mạnh của PostgreSQL:
- Mạnh mẽ với các truy vấn phức tạp và liên kết nhiều bảng.
- Hoàn toàn mã nguồn mở, có cộng đồng lớn và nhiều tài liệu hỗ trợ
- Hỗ trợ JSON và JSONB.
- Có thể mở rộng theo cả chiều dọc (vertical scaling) và chiều ngang (horizontal scaling) thông qua sharding và partitioning.
### Điểm yếu của PostgreSQL:
- Mặc dù hỗ trợ mở rộng ngang, nhưng việc triển khai và quản lý sharding trong PostgreSQL yêu cầu cấu hình phức tạp hơn NoSQL.
- Hiệu năng có thể giảm khi dữ liệu rất lớn: PostgreSQL cần điều chỉnh và tối ưu hóa khi dữ liệu và lượng truy vấn lớn, đặc biệt khi mở rộng ngang.
### Tại sao không chọn các cơ sở dữ liệu khác?
- MySQL: Hiệu năng thấp hơn PostgreSQL khi xử lý truy vấn phức tạp và không mạnh trong việc hỗ trợ dữ liệu JSON như PostgreSQL.
- MS SQL Server: Là một lựa chọn mạnh mẽ nhưng có chi phí rất cao và yêu cầu bản quyền, không phù hợp với các hệ thống nhỏ hoặc vừa.
NoSQL (MongoDB): Không phù hợp với hệ thống yêu cầu tính nhất quán cao và có nhiều mối quan hệ giữa các bảng, điều mà SQL xử lý tốt hơn.
