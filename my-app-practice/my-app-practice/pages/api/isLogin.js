// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.stateCode =200
  res.json({ name: req.cookies.a_name })
}
