var Observable = {
    subscribers: [],
    subscribe: function(type,cb){
        this.subscribers.push({type:type,cb:cb})
    },
    unsubscribe: function(type){
        var index = this.subscribers.findIndex(function(obj){
            return obj.type===type;
        });
        index > -1 ? this.subscribers.splice(index,1):null;
    },
    publish: function(type,data){
        this.subscribers.forEach(function(o){
            if(o.type===type){
                o.cb(data);
            }
        })
    }
}

Observable.publish('msg','this is a message.');
function cb0(data){
      console.log('sub 000:'+data)
}
Observable.subscribe('msg',cb0)
function cb1(data){
      console.log('sub 001:'+data)
}
Observable.subscribe('msg',cb1)
Observable.publish('msg','this is a message 0001.');

Observable.unsubscribe('msg',cb1)

Observable.publish('msg','this is a message 0002.');