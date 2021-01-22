'use strict';

import {IncomingMessage} from 'http';
import {environment} from "../src/environments/environment";

const fs = require('fs');
const path = require('path');
const http = require('http');
const { exec } = require("child_process");

const pathToDocs = path.resolve('api-docs.json');

(async function () {
  await downloadJson();
  exec(`ng-swagger-gen -i ${pathToDocs} -o src/app/api`);
})();


function downloadJson(): Promise<void> {
  let output = '';
  return new Promise(resolve => {
    http.request(environment.baseUrl + '/v2/api-docs', (response: IncomingMessage) => {
      response.on('data', function (chunk) {
        output += chunk.toString();
      });

      response.on('end', () => {
        fs.writeFileSync(pathToDocs, output);
        resolve();
      });
    }).end();
  });
}



