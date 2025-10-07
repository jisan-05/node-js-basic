const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');

        // raise event when for bellRing Evnet

        // raise an event
        setTimeout(() => {
            this.emit('bellRing', 'second period ended');
        }, 2000);
    }
}

module.exports = School;
