## Backend

### Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and restaurant data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Token-based authentication.
- **dotenv**: Manage environment variables.

### Installation & Setup

1. **Navigate to the backend directory**:
   ```bash
   cd foodzy/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the backend directory and copy the contents from `.env.sample`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/foodzy
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the backend**:
   ```bash
   npm start
   ```
