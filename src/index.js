const readLine = require(`readline-sync`)

function start() {
  var userAccount = {}
  userAccount.params = askAndReturnCredentials()

  function askAndReturnCredentials() {
    var user = {}
    const loginTypes = [`email`, `facebook`]
    var typeIndex;
    
    user.login = readLine.question(`Insert your login: `)
    user.pswd = readLine.question(`Insert your password: `, {
      hideEchoBack: true
    })
    typeIndex = readLine.keyInSelect(loginTypes)
    user.type = loginTypes[typeIndex]
    return user
  }
}

start()
