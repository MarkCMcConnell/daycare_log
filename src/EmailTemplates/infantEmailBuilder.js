module.exports = function (data) {
  let bottles = []
  let bottlesUsed = ''
  let diapers = []
  let diapersUsed = ''
  let naps = []
  let napsTaken = ''
  let itemsToBring = []
  let itemsToBringHtml = ''

  // Refactor code to OOP
  data.bottles.map((bottle) => {
    if (bottle.time) {
      bottles.push([bottle.time, bottle.amount])
    }
  })

  for (let i = 0; i < bottles.length; i++) {
    bottlesUsed += '<tr><td>Bottle #' + (i + 1) + ': ' + bottles[i][0] + ' - ' + bottles[i][1] + ' </td></tr>'
  }

  data.diapers.map((diaper) => {
    if (diaper.time) {
      diapers.push([diaper.time, diaper.type])
    }
  })

  for (let i = 0; i < diapers.length; i++) {
    diapersUsed += '<tr><td>Diaper #' + (i + 1) + ': ' + diapers[i][0] + ' - ' + diapers[i][1] + ' </td></tr>'
  }

  data.naps.map((nap) => {
    if (nap.time) {
      naps.push([nap.time, nap.length])
    }
  })

  for (let i = 0; i < naps.length; i++) {
    napsTaken += '<tr><td>Nap #' + (i + 1) + ': ' + naps[i][0] + ' - ' + naps[i][1] + ' </td></tr>'
  }

  data.bringItems.map((item) => {
    if (item.isChecked) {
      itemsToBringHtml += '<span> -' + item.type + '</span>'
    }
  })

  if (itemsToBring.length <= 0) {
    itemsToBringHtml += '<span> None</span>'
  }

  if (data.other) {
    itemsToBringHtml += '</tr><tr><td>Other: ' + data.other + '</td></tr>'
  }

  return (
    `<html>\n\
    <body>\n\
    <table>\n\
    <tr>\n\
    <td>Name: ` + data.name + `</td>\n\
    <td>Date: ` + data.today + `</td>\n\
    </tr>\n\
    <tr>\n\
    <td>How was my day? ` + data.day + `</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Bottles</td>
    </tr>\n\ ` + bottlesUsed + diapersUsed + napsTaken + `<tr>\n\
    <td>Please bring the follow tomorrow:</td>\n\
    </tr>\n\
    <tr>\n\
    ` + itemsToBringHtml + `\n\
    </table></body></html>`
  )
}
