import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { name, email, password, role } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    return new Response(JSON.stringify({ message: "User registered successfully!" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating user" }), { status: 500 });
  }
}
