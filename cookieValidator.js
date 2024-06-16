 async function CookieValidator(cookies) {
    try {
      console.log("check cookie")
      await externallyValidateCookie(cookies.testCookie)
    } catch {
      console.log("error cookie")
      throw new Error('Invalid cookies')
    }
  }
exports.CookieValidator;