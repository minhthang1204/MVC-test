import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class Review extends Component {
  render() {
    return (
      <Typography variant="subtitle1">
      ĐÂY LÀ TÀI LIỆU QUAN TRỌNG, THÔNG TIN CỦA ANH/CHỊ SẼ GIÚP CƠ
      QUAN Y TẾ LIÊN LẠC KHI CẦN THIẾT ĐỂ PHÒNG CHỐNG DỊCH BỆNH
      TRUYỀN NHIỄM
      <Typography>
        Khuyến cáo: Khai báo thông tin sai là vi phạm pháp luật Việt
        Nam và có thể xử lý hình sự
      </Typography>
      <Typography>
      Dữ liệu bạn cung cấp hoàn toàn bảo mật và chỉ phục vụ cho việc phòng chống dịch, thuộc quản lý của Ban chỉ đạo quốc gia về Phòng chống dịch Covid-19. Khi bạn nhấn nút "Gửi" là bạn đã hiểu và đồng ý.
      </Typography>
    </Typography>
    )
  }
}
