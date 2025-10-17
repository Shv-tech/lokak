
## 🏃‍♂️ Quick Start

First things first, get these running on your machine:

```bash
# Get all the goodies installed
npm install

# Fire up the dev server
npm run dev
```

## 🔧 Setting Up MongoDB

1. Make sure you've got MongoDB running locally
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update the values in `.env` as needed:
   - `PORT`: Your server port (default: 5000)
   - `MONGO_URI`: Your MongoDB connection string (default: mongodb://localhost:27017/lokak)
   - Add any other environment-specific values

## 🛠️ Development

Here's what you can do:

```bash
# Start the dev server with hot reload
npm run dev

# Build for production
npm run build

# Run the production build
npm start
```

## 📁 Project Structure

```
src/
├── controllers/  # Brain of the operation
├── models/       # Data structures
├── routes/       # Traffic control
├── middleware/   # Security & utilities
├── config/       # Settings & DB stuff
├── utils/        # Helpful tools
└── app.ts        # Where it all begins
```