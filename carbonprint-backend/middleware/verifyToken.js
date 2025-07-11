import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if header exists and is Bearer token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the correct secret
    req.userId = decoded.userId;
    next(); // ✅ move on to the next middleware or route
  } catch (err) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default verifyToken;
