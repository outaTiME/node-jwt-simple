'use strict';

Tinytest.add('jwt-simple.is', function (test) {
  test.isNotNull(jwt.encode && jwt.decode);
});
