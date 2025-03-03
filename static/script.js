document.getElementById('send').addEventListener('click', async () => {
    sendData();
});

// เพิ่มการจับเหตุการณ์ keypress หรือ keydown สำหรับช่องกรอก
document.getElementById('name').addEventListener('keydown', async (event) => {
    // ตรวจสอบว่าเป็นปุ่ม Enter (key code 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // ป้องกันการส่งแบบปกติ
        sendData();
    }
});

async function sendData() {
    const name = document.getElementById('name').value; // รับค่าจากช่องกรอก
    const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }), // ส่งข้อมูลเป็น JSON
    });
    const result = await response.json();
    document.getElementById('response').innerText = result.message; // แสดงข้อความที่ได้รับ
}
