import {Card, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export default function PopPrayer() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 15,
    };
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 20,
        textAlign: "center",
    };
    const popular = [
        {title: "DẤU THÁNH GIÁ (ĐƠN/GỌN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen."},
        {title: "DẤU THÁNH GIÁ (ĐƠN/ĐẦY ĐỦ)", content: "Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (KÉP)", content: "Lạy Chúa chúng con, vì dấu + Thánh Giá, xin chữa + chúng con, cho khỏi + kẻ thù. Nhân danh Cha + và Con và Thánh Thần. Amen."},
        {title: "KINH SÁNG SOI", content: "Cúi xin Chúa sáng soi/ cho chúng con được biết việc phải làm, cùng khi làm xin Chúa giúp đỡ: cho mỗi kinh mỗi việc chúng con, từ khởi sự cho đến hoàn thành, đều nhờ bởi ơn Chúa. Amen."},
        {title: "KINH LẠY CHA", content: "Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, Nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ . Amen."},
        {title: "KINH KÍNH MỪNG", content: "Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phước lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ.  Thánh Maria, Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. Amen."},
        {title: "KINH SÁNG DANH", content: "Sáng danh Đức Chúa Cha và Đức Chúa Con và Đức Chúa Thánh Thần: Như đã có trước vô cùng, và bây giờ, và hằng có, và đời chẳng cùng. Amen."},
        {title: "KINH DÂNG ĐÊM", content: `Trời đã xế chiều, Giêsu ơi con nhờ tay Mẹ Maria mà dâng lên Chúa, dâng chúc lời cám ơn, dâng trót cả xác hồn. Các việc con làm, các lời con xin, cùng với mọi khó nguy con chịu trót một ngày qua.
                Cùng với bóng chiều tà, Giêsu Maria, con hòa ca, dâng về nơi bao la. Chúa ban phép lành, một đêm ngủ an bình, hồn trong xác tươi xinh. Amen.`},
    ]
    document.title = "Các kinh thông dụng"
    return (
        <div style={{ background: "plum" }}>
            <Row style={{ width: (width > 800) ? "75%" : "100%", padding: 10, justifyContent:'center', margin: "auto"}}>{
                    popular.map((prayer) => (
                        <Card className="mb-2" style={{margin: 5, backgroundColor: 'lemonchiffon'}}>
                            <Card.Header style={labelStyle}>{prayer.title}</Card.Header>
                            <Card.Body>
                                <Card.Text style={paragraphStyle}>{prayer.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
            }
            </Row>
        </div>
    );
};