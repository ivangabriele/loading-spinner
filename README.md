# loading-spinner

Loading spinner for NodeJS.

[![NPM](https://nodei.co/npm/loading-spinner.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/loading-spinner/)

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/ivangabriele/loading-spinner.svg?style=flat-square)](https://travis-ci.org/ivangabriele/loading-spinner)
[![David](https://img.shields.io/david/ivangabriele/loading-spinner.svg?style=flat-square)](https://david-dm.org/ivangabriele/loading-spinner)
[![David](https://img.shields.io/david/dev/ivangabriele/loading-spinner.svg?style=flat-square)](https://david-dm.org/ivangabriele/loading-spinner)

[![NSP Status](https://nodesecurity.io/orgs/ivan-gabriele/projects/3580757b-0c3f-443e-b4b0-f861e15d52ad/badge)](https://nodesecurity.io/orgs/ivan-gabriele/projects/3580757b-0c3f-443e-b4b0-f861e15d52ad)

---

## Installation

    npm install loading-spinner --save

## Usage

    var loadingSpinner = require('loading-spinner');

    // Start the loading spinner
    loadingSpinner.start(
      [Integer, default: 100], // Interval (in ms) between each spinner sequence element
      {
        clearChar:  [Boolean, default: false], // Clear the spinner when stop() is called
        clearLine:  [Boolean, default: false], // Clear the entire line when stop() is called
        doNotBlock: [Boolean, default: false], // Does not prevent the process from exiting
        hideCursor: [Boolean, default: false]  // Hide the cursor until stop() is called
      }
    );

    // Stop the loading spinner
    loadingSpinner.stop();

    // Customize the spinner sequence
    loadingSpinner.setSequence(
      [Array, default: ['|','/','-','\\']], // Sequence of spinner elements
    );

## Example

    var loadingSpinner = require('loading-spinner');

    var dary = function() {
      loadingSpinner.stop();

      process.stdout.write('DA-RY !');
    };

    var legend = function() {
      process.stdout.write('It\'s gonna be LE-GEN... Wait for it... ');

      loadingSpinner.start(100, {
        clearChar: true
      });

      setTimeout(dary, 1000);
    };

    legend();
