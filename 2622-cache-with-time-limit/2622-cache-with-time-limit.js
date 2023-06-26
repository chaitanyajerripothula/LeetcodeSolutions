
var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cache[key]) {
        this.cache[key].value = value;
        this.cache[key].expirationTime = Date.now() + duration;
        return true;
    } else {
        this.cache[key] = {
            value: value,
            expirationTime: Date.now() + duration
        };
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache[key] && this.cache[key].expirationTime > Date.now()) {
        return this.cache[key].value;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
     let count = 0;
  const currentTime = Date.now();
  for (let key in this.cache) {
    if (this.cache[key].expirationTime > currentTime) {
      count++;
    }
  }
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */