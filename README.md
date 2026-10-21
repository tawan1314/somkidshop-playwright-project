# 🛒 Somkid Shop - Web & Mobile Automation Testing

โปรเจคระบบทดสอบอัตโนมัติ (Test Automation) สำหรับเว็บไซต์ **Somkid Shop** พัฒนาด้วย **Playwright** และ **TypeScript** รองรับการทำงานแบบ Dual-Environment ทั้งบนอุปกรณ์มือถือจริง (ผ่าน Chrome DevTools Protocol - CDP) และบนระบบ CI/CD (GitHub Actions)

## 📂 โครงสร้างโปรเจค (Project Structure)
```
├── fixtures/          # จัดการ Test Fixtures (เช่น baseTest.ts สำหรับสลับ Environment และเคลียร์ค่า)
├── pages/             # Page Object Model classes (BasePage, MainPage, ProductInfoPage, BasketPage, ฯลฯ)
├── test-data/         # ข้อมูลจำลองสำหรับใช้ในการทดสอบ (เช่น testData.data.ts)
├── types/             # กำหนด TypeScript Interfaces (dataType.type.ts)
├── tests/             # โฟลเดอร์เก็บ Test Scripts (.spec.ts)
├── playwright.config.ts # ไฟล์ตั้งค่าหลักของ Playwright
└── README.md          # คู่มือการใช้งานโปรเจค
```

## 🛠 เครื่องมือและเทคโนโลยีที่ใช้ (Tech Stack)
- Language: TypeScript
- Test Framework: Playwright
- Design Pattern: Page Object Model (POM)
- Environment: Node.js, GitHub Actions (CI)

## ⚙️ วิธีการติดตั้งและตั้งค่า (Setup Guide)
1. Clone Repository ลงในเครื่อง. สร้างโฟลเดอร์เก็บงาน
- `mkdir somkidshop-playwright-automation`
- `cd somkidshop-playwright-automation`
2. สร้างโฟลเดอร์เก็บงาน
- `git clone https://github.com/tawan1314/somkidshop-playwright-automation.git`
2. ติดตั้ง Package และ dependencies ที่จำเป็น
- `npm install`
3. ติดตั้ง Playwright Browsers
- `npx playwright install`

## 🚀 วิธีการใช้งานและการรันเทส (Usage & Execution)
1. เชื่อมกับโทรศัพท์
**Android**
- 1.เปิด Setting > เกี่ยวกับโทรศัพท์ > ข้อมูลซอฟต์แวร์
- 2.กดที่ "หมายเลขรุ่น. จนกว่าจะขึ้นว่า "เปิดโหมดผู้พัฒนาแล้ว"
- 3.ย้อนกลับไปหน้าแรก > ทางเลือกผู้พัฒนา > เปิด "การแก้ไขข้อบกพร่อง USB"
- 4.เชื่อมโทรศัพท์กับเครื่อง
- 5.เมื่อเชื่อมแล้วมีป็อปอัพให้ยืนยัน > กดยืนยัน
2. เช็คว่าเครื่องพร้อมแล้ว
- 1.ใช้คำสั่ง `adb devices` > เลขเครื่อง และตามด้วย device
- 2.ใช้คำสั่ง `adb forward tcp:9222 localabstract:chrome_devtools_remote`
- 3.เปิด google ในโทรศัพท์
3. ใช้คำสั่งด้านล่างนี้เพื่อรันทดสอบ (ใช้ตัวใดก็ได้)
- `npx playwright test` => รันชุดทดสอบทั้งหมดในโหมด Headless
- `npx playwright test --ui` => เปิด Playwright UI Mode สำหรับตรวจสอบและ Debug เทสแบบเห็นภาพ
- `npx playwright test --headed` => รันเทสโดยเปิดหน้าต่างเบราว์เซอร์ขึ้นมาให้เห็นการทำงานจริง
- `npx playwright codegen` => เปิดเครื่องมือช่วยอัดโค้ด Automation จากการคลิกหน้าเว็บ
- `npx playwright test SOMKID_ADD_BASKET_01.spec.ts` => รันแบบระบุไฟล์เทสเจาะจง
