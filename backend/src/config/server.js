module.exports = app => {
  const port = 9001

  app.listen(process.env.PORT || port, () => {
    console.log(`BACKEND IS RUNNING ON PORT ${process.env.PORT || port}`)
  })
}
