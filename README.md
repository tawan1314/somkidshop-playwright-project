# 🛒 Somkid Shop - Web & Mobile Automation Testing

โปรเจคระบบทดสอบอัตโนมัติ (Test Automation) สำหรับเว็บไซต์ **Somkid Shop** พัฒนาด้วย **Playwright** และ **TypeScript** รองรับการทำงานแบบ Dual-Environment ทั้งบนอุปกรณ์มือถือจริง (ผ่าน Chrome DevTools Protocol - CDP) และบนระบบ CI/CD (GitHub Actions)

## 📂 โครงสร้างโปรเจค (Project Structure)
```text
├── fixtures/          # จัดการ Test Fixtures (เช่น baseTest.ts สำหรับสลับ Environment และเคลียร์ค่า)
├── pages/             # Page Object Model classes (BasePage, MainPage, ProductInfoPage, BasketPage, ฯลฯ)
├── test-data/         # ข้อมูลจำลองสำหรับใช้ในการทดสอบ (เช่น testData.data.ts)
├── types/             # กำหนด TypeScript Interfaces (dataType.type.ts)
├── tests/             # โฟลเดอร์เก็บ Test Scripts (.spec.ts)
├── playwright.config.ts # ไฟล์ตั้งค่าหลักของ Playwright
└── README.md          # คู่มือการใช้งานโปรเจค

## 🛠 เครื่องมือและเทคโนโลยีที่ใช้ (Tech Stack)
Language: TypeScript
Test Framework: Playwright
Design Pattern: Page Object Model (POM)
Environment: Node.js, GitHub Actions (CI)

## ⚙️ วิธีการติดตั้งและตั้งค่า (Setup Guide)
1. Clone Repository ลงในเครื่อ
- `git clone <url-repository-ของคุณ>`
- `cd <ชื่อโฟลเดอร์โปรเจค>`
2. ติดตั้ง Package และ dependencies ที่จำเป็น
- `npm install`
3. ติดตั้ง Playwright Browsers
- `npx playwright install`

## 🚀 วิธีการใช้งานและการรันเทส (Usage & Execution)
- `npx playwright test` => รันชุดทดสอบทั้งหมดในโหมด Headless
- `npx playwright test --ui` => เปิด Playwright UI Mode สำหรับตรวจสอบและ Debug เทสแบบเห็นภาพ
- `npx playwright test --headed` => รันเทสโดยเปิดหน้าต่างเบราว์เซอร์ขึ้นมาให้เห็นการทำงานจริง
- `npx playwright codegen` => เปิดเครื่องมือช่วยอัดโค้ด Automation จากการคลิกหน้าเว็บ
- `npx playwright test SOMKID_ADD_BASKET_01.spec.ts` => รันแบบระบุไฟล์เทสเจาะจง
