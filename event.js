const School = require('./school');

const school = new School();

// register a listenr for bellRing event
school.on('bellRing', (period) => {
    console.log(`We need to run because ${period}`);
});

school.startPeriod();
