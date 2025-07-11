# 🌱 Carbon Footprint Tracker

A web app I’m building to help users track their carbon footprint — designed with the **Indian lifestyle** in mind.

---

## 🎯 Project Overview

This is a college project I’m working on, with the goal of making environmental awareness more accessible and actionable for Indian users. It's lightweight, simple, and focuses on everyday habits like travel, electricity use, and food choices.

---

## 💡 MVP Features (Planned)

- 🚗 **Activity Tracking** – Transportation, electricity, and food consumption
- 🇮🇳 **Indian Context** – Auto-rickshaws, metro travel, LPG usage, and more
- 📊 **Simple Dashboard** – Visualize emissions using basic charts
- 🔐 **User Authentication** – Login/Signup (JWT)
- 🎯 **Monthly Goals** – Set reduction targets and track progress

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS (CDN setup for now)
- **Backend:**
  -Express.js
  -MongoDB (via Mongoose)
  -JWT for authentication
  -Express-Validator for input validation Firebase (Auth + Firestore) _(planned)_
  -Originally used Firebase for backend, now fully migrated to Express & MongoDB.
- **Charts:** Recharts _(planned)_
- **Deployment:** Vercel _(planned)_

---

## 🧪 Features (Backend)

- 🔐 User Signup & Login with hashed passwords (bcrypt)
- 🛡️ JWT-based protected routes
- 📊 Activity tracking (Transport, Food, Water, Electricity, LPG)
- 🧠 Daily and summary emissions aggregation
- 📅 Filter data by date or date ranges (7 or 30 days)
- ✅ Input validation using express-validator

---

## 🌍 Why Focus on India?

India has a very different set of conditions:

- Auto-rickshaws, trains, metros — all used daily
- Power sources vary by state
- LPG is common for cooking
- Food patterns differ by region
- Emissions should ideally be tracked in **₹ (Rupees)** too

This app tries to reflect that reality.

---
