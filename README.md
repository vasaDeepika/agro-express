# Agro-Express 🌿
A premium Full-Stack E-commerce platform for fresh, chemical-free vegetables.

## 🚀 Features
- **Modern UI/UX**: Vibrant hero section with animations and glassmorphism.
- **Search & Filter**: Real-time product search on the home page.
- **User Profiles**: Custom user profiles with editable mobile numbers and shipping addresses.
- **Secure Checkout**: Animated payment flow with integrated UPI QR codes (simulated).
- **Order History**: Track all your past "completed" orders with ease.
- **Full Stack**: Express/Node.js backend with MongoDB and React frontend.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS, Bootstrap, Axios.
- **Backend**: Node.js, Express, Mongoose.
- **Database**: MongoDB (Local/Atlas).

## 🏃 Setup Instructions
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/vasaDeepika/agro-express.git
   ```
2. **Install All Dependencies**:
   Run this in the root folder to install both backend and frontend dependencies:
   ```bash
   npm run install-all
   ```
3. **Configure Environment**:
   - Create a `.env` file in the `server` folder.
   - Use `.env.example` as a template:
     ```bash
     cp server/.env.example server/.env
     ```
   - Add your `MONGO_URI` and `PORT`.

4. **Seed the Database (Optional)**:
   If you want to populate the database with fresh products:
   ```bash
   node server/seedDatabase.js
   ```

5. **Run the Application**:
   Start both Frontend and Backend with one command:
   ```bash
   npm run dev
   ```

## 🎨 Credits
Developed with a focus on "Agro-Luxe" design aesthetics and high-performance user experience.