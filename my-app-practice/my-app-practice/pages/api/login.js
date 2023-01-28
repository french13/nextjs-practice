export default function handler(req, res){
    if(req.method === "POST"){
        res.setHeader("set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
        res.status(200).json({ message: "ok" })
    }
}