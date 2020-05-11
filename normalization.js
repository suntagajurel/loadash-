var _ = require('lodash');

let data = {
    sports: {
      byId: {
        1: {
          id: 1,
          name: 'Soccer',
          slug: 'soccer'
        },
        2: {
          id: 2,
          name: 'Basketball',
          slug: 'basketball'
        },
        3: {
          id: 3,
          name: 'American Football',
          slug: 'american-football'
        }
      },
      allIds: [
        '1',
        '2',
        '3'
      ]
    },
    competitions: {
      byId: {
        '1': {
          id: 1,
          name: 'Competition 1',
          short_name: 'Comp 1',
          sport: 1,
          status: {
            is_live: false
          }
        },
        '2': {
          id: 2,
          name: 'Competition 2',
          short_name: 'Comp 2',
          sport: 2,
          status: {
            is_live: true
          }
        },
        '3': {
          id: 3,
          name: 'National Basketball League',
          short_name: 'NBA',
          sport: 3,
          status: {
            is_live: true
          }
        }
      },
      allIds: [
        '1',
        '2',
        '3'
      ]
    }
  }
  
  let competitions = Object.values(data.competitions.byId)

  
  
  // _.chain(arr) keeps returning `lodash` objects
  // so I don't have to call it separately for every action
  let filteredCompetitions = _.chain(competitions)
    .groupBy(i => i.status.is_live)
    .mapValues(i => _.groupBy(i, 'sport'))
    .value() // returns the final value
    
  console.log(filteredCompetitions)

  // liveStatus = (data) => {
  // let reduceData = _.reduce(data, (result, value, key)=> {
  //   (result[value.name] = []).push(value.status.is_live);
  //   return result;
  // }, {});
  // console.log(reduceData);
  // }
  // liveStatus(competitions) ;

  console.log("after chaining")

normaliseObject = (prop) => {

 var sth = _.chain(competitions).keyBy(prop).mapValues(i=> _.omit(i,prop)).value();
 console.log(sth);
 return sth 
  }
 
console.log(normaliseObject ('name'));
  