# NestJS Deployment & CI/CD

This project demonstrates how to build, lint, validate schemas, and deploy a **NestJS application** using **TypeORM (PostgreSQL)** with GitHub Actions for CI/CD.

---

## 🐳 Running with Docker

1. Clone repository:

   ```bash
   git clone https://github.com/KatiaKalynchuk/ci-cd-app
   ```

2. Start services:

   ```bash
   docker-compose up --build
   ```
   ```bash
   docker-compose exec app npm run schema:log
   ```
   ```bash
   docker-compose exec app npm run schema:check
   ```

---

## 📜 Available Scripts

```bash
# Install dependencies
npm install

# Start in dev mode
npm run start:dev

# Build
npm run build
```
---

This setup ensures consistent schema validation, clean commits, and automated container publishing.
