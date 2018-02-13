module.exports = function (data) {
  const moment = require('moment')
  let mealsEaten = ''
  let napsTaken = ''
  let suppliesList = ''
  let bathroomTimes = ''

  if (data.meals) {
    data.meals.map((meal, index) => {
      if (meal.food) {
        mealsEaten += `<tr><td>${index + 1}: ${meal.time} - ${meal.food}</td></tr>`
      }
    })
  }

  if (data.bathroom) {
    data.bathroom.map((use, index) => {
      let amount = 'times'

      if (use.times && use.type) {
        if (use.times === 1) {
          amount = 'time'
        }
        bathroomTimes += `<tr><td>${use.times} ${amount} - ${use.type} consistency</td></tr>`
      }
    })
  }

  if (data.toddlerNaps) {
    data.toddlerNaps.map((nap, index) => {
      if (nap.time && nap.length) {
        napsTaken += `<tr><td>${moment(nap.time).format('h:mm a')} - ${nap.length}</td></tr>`
      }
    })
  }

  if (data.suppliesList) {
    data.suppliesList.map(item => {
      if (item.isChecked) {
        suppliesList += `<span> - ${item.type}</span>`
      }
    })
  }

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
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <table align="center" border="1" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse">
          <tr>
            <td align="center" bgcolor="#d57500" style="padding: 30px 30px 30px 30px; color: #ffffff;">
              <h3>${data.today}</h3>
              <h1>Daily Log for ${data.name}</h1>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="300" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 0px 10px 0px 10px;">
                          <h3>Daily Activities</h3>
                          <p>${data.day}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="300" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 0px 0px 0px 10px;">
                          <h3>Naps Taken</h3>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            ${napsTaken}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="300" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 0px 0px 0px 10px;">
                          <h3>Meals</h3>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            ${mealsEaten}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="300" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 0px 0px 0px 10px;">
                          <h3>Bowel Movements</h3>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            ${bathroomTimes}
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
