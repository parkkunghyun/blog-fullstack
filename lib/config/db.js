import mongoose from "mongoose";

const password_key = process.env.NEXT_PUBLIC_MONGO_DB_KEY;

export const ConnectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://rudgus4620:${password_key}@blog-app.gy5st.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`)
        console.log("DB Connected");
    } catch (e) {
        console.log(e.message);
    }
};
