let obj = {
    getGiantFile: function(fileId) {
      setTimeout(()=>{
      	console.log('aaaaaaaa');
      },1000*3)
     }
};
obj = new Proxy(obj, {
    get(target, key, proxy) {
        return function(...args) {
            const id = args[0];
            let isEnroute = checkEnroute(id);
            let isDownloading = checkStatus(id);
            let cached = getCached(id);
            if (isEnroute || isDownloading) {
                return false;
            }
            if (cached) {
                return cached;
            }
            return Reflect.apply(target[key], target, args);
        }
    }
});
obj.getGiantFile(1)