var mysql = require('mysql');
const faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'photos'
});

var getPhotos = function(restId, callback) {
  connection.query(`SELECT * FROM photos WHERE rest_id = ${restId}`, function (err, rows, fields) {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// var data = [
//     {
//         "ID": 1,
//         "url": "https://i.imgur.com/AUCn7BL.jpg"
//     },
//     {
//         "ID": 2,
//         "url": "https://i.imgur.com/wra33uM.jpg"
//     },
//     {
//         "ID": 3,
//         "url": "https://i.imgur.com/PSqijrB.jpg"
//     },
//     {
//         "ID": 4,
//         "url": "https://i.imgur.com/cwLgWDr.jpg"
//     },
//     {
//         "ID": 5,
//         "url": "https://i.imgur.com/DLwYIvs.jpg"
//     },
//     {
//         "ID": 6,
//         "url": "https://i.imgur.com/krJudcN.jpg"
//     },
//     {
//         "ID": 7,
//         "url": "https://i.imgur.com/1gZFbmc.jpg"
//     },
//     {
//         "ID": 8,
//         "url": "https://i.imgur.com/hb2XbtL.jpg"
//     },
//     {
//         "ID": 9,
//         "url": "https://i.imgur.com/pUhXjMk.jpg"
//     },
//     {
//         "ID": 10,
//         "url": "https://i.imgur.com/Ga4gfE1.jpg"
//     },
//     {
//         "ID": 11,
//         "url": "https://i.imgur.com/CLHMVcx.jpg"
//     },
//     {
//         "ID": 12,
//         "url": "https://i.imgur.com/YvxPp5h.jpg"
//     },
//     {
//         "ID": 13,
//         "url": "https://i.imgur.com/q2Jh2eq.jpg"
//     },
//     {
//         "ID": 14,
//         "url": "https://i.imgur.com/D2t3oto.jpg"
//     },
//     {
//         "ID": 15,
//         "url": "https://i.imgur.com/dzAZ4Eu.jpg"
//     },
//     {
//         "ID": 16,
//         "url": "https://i.imgur.com/YxhdGFG.jpg"
//     },
//     {
//         "ID": 17,
//         "url": "https://i.imgur.com/hJ28ldb.jpg"
//     },
//     {
//         "ID": 18,
//         "url": "https://i.imgur.com/WyFJ3Wc.jpg"
//     },
//     {
//         "ID": 19,
//         "url": "https://i.imgur.com/ueQXgVu.jpg"
//     },
//     {
//         "ID": 20,
//         "url": "https://i.imgur.com/yUsvEr8.jpg"
//     },
//     {
//         "ID": 21,
//         "url": "https://i.imgur.com/ycmA8RF.jpg"
//     },
//     {
//         "ID": 22,
//         "url": "https://i.imgur.com/OC6TNTh.jpg"
//     },
//     {
//         "ID": 23,
//         "url": "https://i.imgur.com/CpBxa6i.jpg"
//     },
//     {
//         "ID": 24,
//         "url": "https://i.imgur.com/v7fjLEg.jpg"
//     },
//     {
//         "ID": 25,
//         "url": "https://i.imgur.com/E4Cgnal.jpg"
//     },
//     {
//         "ID": 26,
//         "url": "https://i.imgur.com/SS9fN9z.jpg"
//     },
//     {
//         "ID": 27,
//         "url": "https://i.imgur.com/d2qwV15.jpg"
//     },
//     {
//         "ID": 28,
//         "url": "https://i.imgur.com/NOkSaQ5.jpg"
//     },
//     {
//         "ID": 29,
//         "url": "https://i.imgur.com/596X5Eb.jpg"
//     },
//     {
//         "ID": 30,
//         "url": "https://i.imgur.com/J14WUmC.jpg"
//     },
//     {
//         "ID": 31,
//         "url": "https://i.imgur.com/SHMDG5f.jpg"
//     },
//     {
//         "ID": 32,
//         "url": "https://i.imgur.com/XWkG5x5.jpg"
//     },
//     {
//         "ID": 33,
//         "url": "https://i.imgur.com/54hhDLb.jpg"
//     },
//     {
//         "ID": 34,
//         "url": "https://i.imgur.com/vZmlynz.jpg"
//     },
//     {
//         "ID": 35,
//         "url": "https://i.imgur.com/U3rn510.jpg"
//     },
//     {
//         "ID": 36,
//         "url": "https://i.imgur.com/wLcXvjV.jpg"
//     },
//     {
//         "ID": 37,
//         "url": "https://i.imgur.com/f7CAOav.jpg"
//     },
//     {
//         "ID": 38,
//         "url": "https://i.imgur.com/Y8pbmBL.jpg"
//     },
//     {
//         "ID": 39,
//         "url": "https://i.imgur.com/vEI7sh6.jpg"
//     },
//     {
//         "ID": 40,
//         "url": "https://i.imgur.com/dJn0yZA.jpg"
//     },
//     {
//         "ID": 41,
//         "url": "https://i.imgur.com/X5F2fG0.png"
//     },
//     {
//         "ID": 42,
//         "url": "https://i.imgur.com/JgJ98AD.png"
//     },
//     {
//         "ID": 43,
//         "url": "https://i.imgur.com/lgDcn0N.jpg"
//     },
//     {
//         "ID": 44,
//         "url": "https://i.imgur.com/rjbLP7v.jpg"
//     },
//     {
//         "ID": 45,
//         "url": "https://i.imgur.com/fr0XuQZ.jpg"
//     },
//     {
//         "ID": 46,
//         "url": "https://i.imgur.com/3ShCiZm.jpg"
//     },
//     {
//         "ID": 47,
//         "url": "https://i.imgur.com/IROr2xX.jpg"
//     },
//     {
//         "ID": 48,
//         "url": "https://i.imgur.com/mV5YJ12.jpg"
//     },
//     {
//         "ID": 49,
//         "url": "https://i.imgur.com/3fgo4MN.jpg"
//     },
//     {
//         "ID": 50,
//         "url": "https://i.imgur.com/mC748oI.jpg"
//     }
// ]

// var insertInfo = function(callback) {
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
//   }
//
//   var id = 0;
//   var location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
//   var name = faker.commerce.productName();
//   var rest_id = 0;
//   var url = data[getRandomInt(0, 49)].url;
//
//   while (id < 1000) {
//     id++;
//     url = data[getRandomInt(0, 49)].url;
//     if ((id-1) % 10 === 0) {
//       location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
//       name = faker.commerce.productName();
//       rest_id++;
//     }
//
//     connection.query(`INSERT INTO photos (url, rest_id, name, location) VALUES ("${url}", ${rest_id}, "${name}", "${location}")`, function (err, rows, fields) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null);
//       }
//     });
//   }
// }

// module.exports.insertInfo = insertInfo;
module.exports.getPhotos = getPhotos;
