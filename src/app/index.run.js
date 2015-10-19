(function() {
  'use strict';

  angular
    .module('campernews')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
