import angular from 'angular';

import {timeFilter} from './app/timer/timeFilter';

import {main} from './app/main';
import {timer} from './app/timer/timer';
import {caseSelector} from './app/caseSelector/caseSelector';
import {cubeImage} from './app/cubeImage/cubeImage';

import './index.scss';

angular
  .module('app', [])
  .filter('timeFilter', timeFilter)
  .component('app', main)
  .component('zbllTimer', timer)
  .component('zbllCaseSelector', caseSelector)
  .component('cubeImage', cubeImage);
