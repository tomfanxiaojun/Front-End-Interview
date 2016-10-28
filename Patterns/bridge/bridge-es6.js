'use strict';
class RemoteControl {
    constructor(tv) {
        this.tv = tv;
    }
    on() {
        this.tv.on();
    }
    off() {
        this.tv.off();
    };

    setChannel(ch) {
        this.tv.tuneChannel(ch);
    };
}
class PowerRemote extends RemoteControl {
    constructor(args) {
        super(args);
        this.currChannel = 0;
    }
    setChannel(ch) {
        this.currChannel = ch;
        this.tv.tuneChannel(ch);
    };

    nextChannel() {
        this.setChannel(this.currChannel + 1);
    };

    prevChannel() {
        this.setChannel(this.currChannel - 1);
    };
}

class SonyTV {
    constructor(args) {
        // code
    }
    on() {
        console.log('Sony TV is on');
    };

    off() {
        console.log('Sony TV is off');
    };
    tuneChannel(ch) {
        console.log('Sony TV tuned to channel ' + ch);
    };
}
class ToshibaTV {
    constructor(args) {
        // code
    }
    on() {
        console.log('Welcome to Toshiba entertainment');
    };

    off() {
        console.log('Goodbye Toshiba user');
    };
    tuneChannel(ch) {
        console.log('Channel ' + ch + ' is set on your Toshiba television');
    };
}
let sony = new SonyTV(),
    toshiba = new ToshibaTV(),
    std_remote = new RemoteControl(sony),
    pwr_remote = new PowerRemote(toshiba);

std_remote.on(); // prints "Sony TV is on"
std_remote.setChannel(55); // prints "Sony TV tuned to channel 55"
std_remote.setChannel(20); // prints "Sony TV tuned to channel 20"
std_remote.off(); // prints "Sony TV is off"

pwr_remote.on(); // prints "Welcome to Toshiba entertainment"
pwr_remote.setChannel(55); // prints "Channel 55 is set on your Toshiba television"
pwr_remote.nextChannel(); // prints "Channel 56 is set on your Toshiba television"
pwr_remote.prevChannel(); // prints "Channel 55 is set on your Toshiba television"
pwr_remote.off(); // prints "Goodbye Toshiba user"
