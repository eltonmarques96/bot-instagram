const readLine = require(`readline-sync`)

function start() {
  var userAccount = {}
  userAccount.params = askAndReturnCredentials()

  function askAndReturnCredentials() {
    var user = {}
    const loginTypes = [`email`, `facebook`]
    const typeIndex;
    const typeText;

    user.login = readLine.question(`Insert your login: `)
    user.pswd = readLine.question(`Insert your password: `, {
      hideEchoBack: true
    })
    typeIndex = readLine.keyInSelect(loginTypes)
    typeText = loginTypes[typeIndex]

    return userAuth
  }
}

start()
