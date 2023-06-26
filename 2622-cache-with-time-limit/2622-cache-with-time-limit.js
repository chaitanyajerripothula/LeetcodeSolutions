var TimeLimitedCache = function() {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key]) {
    // Key already exists, update value and duration
    this.cache[key].value = value;
    this.cache[key].expirationTime = Date.now() + duration;
    return true; // Key already existed
  } else {
    // Key doesn't exist, add new entry
    this.cache[key] = {
      value: value,
      expirationTime: Date.now() + duration
    };
    return false; // Key didn't exist
  }
};

TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].expirationTime > Date.now()) {
    return this.cache[key].value; // Return value if key is unexpired
  } else {
    return -1; // Return -1 if key doesn't exist or has expired
  }
};

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
