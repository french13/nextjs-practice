export default function hander(req, res){
    res.setHeader("set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    res.status(200).json({ message: "ok" })
}