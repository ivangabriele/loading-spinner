# loading-spinner
**Loading spinner for NodeJS.**

[![NPM](https://nodei.co/npm/loading-spinner.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/loading-spinner/)

[![Build Status](https://travis-ci.org/ivangabriele/loading-spinner.svg?branch=master)](https://travis-ci.org/ivangabriele/loading-spinner)
[![dependencies Status](https://david-dm.org/ivangabriele/loading-spinner/status.svg)](https://david-dm.org/ivangabriele/loading-spinner)
[![devDependencies Status](https://david-dm.org/ivangabriele/loading-spinner/dev-status.svg)](https://david-dm.org/ivangabriele/loading-spinner?type=dev)
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
