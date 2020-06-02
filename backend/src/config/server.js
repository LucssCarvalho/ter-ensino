module.exports = app => {
  const port = 9001

  app.listen(port, () => {
    console.log(`BACKEND IS RUNNING ON PORT ${port}`)
  })
}
