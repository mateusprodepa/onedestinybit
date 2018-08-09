const mysql = require('mysql')

let con

module.exports = {
  connect: function() {
    return con = mysql.createConnection({
      host: "104.171.122.198",
      user: "Knevari",
      password: "Ihave@done5hisbe4",
      database: "1Destiny"
    });
  },

  query: function(sql, c) {
    return con.query(sql, (err, res) => {
      if(err) return console.log(err)
      if(res) return c(res)
    });
  },

  end: function() {
    con.end()
  },
}
