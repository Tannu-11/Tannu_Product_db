import app from "./src/app.js";
import connectDb from "./src/config/db.js";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDb();
        
        if (process.argv[1] === fileURLToPath(import.meta.url)) {
            app.listen(PORT, () => {
                console.log(`🚀 Server running on port ${PORT}`);
            });
        }
    } catch (error) {
        console.error("❌ Failed to start server:", error.message);
    }
};

startServer();

export default app;