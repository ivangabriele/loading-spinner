# loading-spinner

Loading spinner for NodeJS.

[![NPM](https://nodei.co/npm/loading-spinner.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/loading-spinner/)

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/loading-spinner.svg?style=flat-square)](https://www.npmjs.com/package/loading-spinner)
[![Travis](https://img.shields.io/travis/ivangabriele/loading-spinner.svg?style=flat-square)](https://travis-ci.org/ivangabriele/loading-spinner)
[![David](https://img.shields.io/david/ivangabriele/loading-spinner.svg?style=flat-square)](https://david-dm.org/ivangabriele/loading-spinner)
[![David](https://img.shields.io/david/dev/ivangabriele/loading-spinner.svg?style=flat-square)](https://david-dm.org/ivangabriele/loading-spinner)

[![Known Vulnerabilities](https://snyk.io/test/github/ivangabriele/loading-spinner/badge.svg?style=flat-square)](https://snyk.io/test/github/ivangabriele/loading-spinner)

---

## Installation

    npm install --save loading-spinner

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

## Licenses

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fivangabriele%2Floading-spinner.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fivangabriele%2Floading-spinner?ref=badge_large)
