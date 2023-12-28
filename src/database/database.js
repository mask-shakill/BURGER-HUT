import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("database error");
    console.log(error);
  }
};
export default DbConnection;
