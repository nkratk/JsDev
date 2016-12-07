import angular from 'angular';
import sampleCtrl1 from './sampleCtrl1.js';
import sampleCtrl2 from './sampleCtrl2.js';

class TestCtrl {
  constructor() {
    this.A = "test";
  }
}

angular.module("test-app", [])
  .controller("testCtrl", TestCtrl)
  .controller("sampleCtrl1", sampleCtrl1)
  .controller("sampleCtrl2", sampleCtrl2);
