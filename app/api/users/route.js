// import connectMongoDB from "../../lib/config/mongodb";

// import User from "../../lib/models/User";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectMongoDB();
//     const { name, email, password, role } = await req.json();

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role });
//     await newUser.save();

//     return new Response(JSON.stringify({ message: "User registered successfully!" }), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Error creating user" }), { status: 500 });
//   }
// }




// import connectDB from "../../lib/config/mongodb";
// import User from "../../lib/models/User";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     console.log("entered users routes.js")
//     await connectDB();
//     console.log("db connected")
//     const { email, password , role} = await req.json();

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return Response.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({  email, password: hashedPassword });
//     await newUser.save();

//     return Response.json({ message: "User created successfully" }, { status: 201 });
//   } catch (error) {
  
//     return Response.json({ error: "Server error" }, { status: 500 });
//   }
// }
import connectDB from "../../lib/config/mongodb";
import User from "../../lib/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    console.log("entered users routes.js");
    await connectDB();
    console.log("db connected");

    const { email, password, role } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing email or password" }), { status: 400 });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
  } catch (error) {
    console.error("Error in API:", error);  // Debugging
    return new Response(JSON.stringify({ error: "Server error", details: error.message }), { status: 500 });
  }
}


