module.exports = function (data) {
  let bottlesUsed = ''
  let diapersUsed = ''
  let napsTaken = ''
  let suppliesList = ''

  console.log(data.bottles)
  // Refactor code to OOP
  data.bottles.map((bottle, index) => {
    if (bottle.time && bottle.amount) {
      bottlesUsed += `<tr><td>Bottle #${index + 1}: ${bottle.time} - ${bottle.amount}</td></tr>`
    }
  })

  data.diapers.map((diaper, index) => {
    if (diaper.time && diaper.type) {
      diapersUsed += `<tr><td>Diaper #${index + 1}: ${diaper.time} - ${diaper.type}</td></tr>`
    }
  })

  data.infantNaps.map((nap, index) => {
    if (nap.time && nap.length) {
      napsTaken += `<tr><td>Nap #${(index + 1)}: ${nap.time} - ${nap.length}</td></tr>`
    }
  })

  data.suppliesList.map(item => {
    if (item.isChecked) {
      suppliesList += `<span> - ${item.type}</span>`
    }
  })

  if (suppliesList.length <= 0) {
    suppliesList += '<span> None</span>'
  }

  if (data.other) {
    suppliesList += `<p>Other: ${data.other}</p>`
  }

  return (
    `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Daily Log</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0;">
      <table border="1" cellpadding="0" cellspacing="0" width="100%">
        <table align="center" border="1" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse">
          <tr>
            <td align="center" bgcolor="#d57500" style="padding: 30px 30px 30px 30px; color: #ffffff;">
              <h3>${data.today}</h3>
              <h1>Daily Log for ${data.name}</h1>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
              <table border="1" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 20px 0 20px 10px;">
                    <h3>My day was:</h3>
                    <p>${data.day}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="110" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 0px 0px 0px 10px;">
                                <h3>Bottles Drank</h3>
                                <p>${bottlesUsed}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="font-size: 0; line-height: 0;">
                          &nbsp;
                        </td>
                        <td width="110" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 0px 0px 0px 10px;">
                                <h3>Diaper Changes</h3>
                                <p>${diapersUsed}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="font-size: 0; line-height: 0;">
                          &nbsp;
                        </td>
                        <td width="110" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 0px 0px 0px 10px;">
                                <h3>Naps Taken</h3>
                                <p>${napsTaken}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#668d3c" style="padding: 20px 30px 20px 30px; color: #ffffff;">
              <h2>Please bring the following tomorrow:</h2>
              <p>${suppliesList}</p>
              <h3>Thanks!</h3>
            </td>
          </tr>
        </table>
      </table>
    </body>
    </html>
    `
  )
}
