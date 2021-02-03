export default (req, res) => {
  //const pid = req.quety.pid
  const {
    query: {pid},
  } = req

  res.end(`Post: ${pid}`)
}