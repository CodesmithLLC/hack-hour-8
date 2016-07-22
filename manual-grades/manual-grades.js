var path = require('path')
var fs = require('fs')
var helper = require('sendgrid').mail
var from_email = new helper.Email("hello@codesmith.io")
var to_email = new helper.Email("yandri")
var subject = "Hack Hour Results"
var body = fs.readFileSync(path.join(__dirname, '../body.html'))
var content = new helper.Content("text/html", body.toString())
var mail = new helper.Mail(from_email, subject, to_email, content)
var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
var requestBody = mail.toJSON()
var request = sg.emptyRequest()
request.method = 'POST'
request.path = '/v3/mail/send'
request.body = requestBody
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.body)
  console.log(response.headers)
})
