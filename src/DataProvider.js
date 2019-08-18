'use strict';

/**
  * @class DataProvider abstract class,
  *         define the interface to provider data
  */
class DataProvider {
    constructor() {
    }

    /**
      * return the url of the home page background image
      */
    getHomeBackgroundImage() {
        return '';
    }
}

module.exports = DataProvider;
