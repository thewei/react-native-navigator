'use strict';

var events = {};
var _id = 0;
var SimpleEmiter = function() {};


SimpleEmiter.prototype.on = function(eventName, callback) {
    var self = this;
    callback._id = typeof callback._id == "undefined" ? _id++ : callback._id;

    eventName.replace(/\S+/g, function(name) {
        (events[name] = events[name] || []).push(callback);
    });
};

SimpleEmiter.prototype.off = function(eventName, callback) {
    var self = this;
    if (eventName == '*') events = {};
    else {
        eventName.replace(/\S+/g, function(name) {
            if (callback) {
                var ev = events[name];
                for (var i = 0, cb;
                    (cb = ev && ev[i]); ++i) {
                    if (cb._id == callback._id) {
                        ev.splice(i, 1);
                        i--;
                    }
                }
            } else {
                events[name] = {};
            }
        });
    }

};

SimpleEmiter.prototype.emit = function(eventName) {

    var args = [].slice.call(arguments, 1),
        callbacks = events[eventName] || [];
    for (var i = 0, cb;
        (cb = callbacks[i]); ++i) {
        if (!cb.busy) {
            cb.busy = 1;

            cb.apply(null, args);
            if (callbacks[i] !== cb) {
                i--;
            }

            cb.busy = 0;
        }
    }

};


module.exports = new SimpleEmiter();
