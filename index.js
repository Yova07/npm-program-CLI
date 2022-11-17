#!/usr/bin/env node

import axios from 'axios'
import { getCode } from 'country-list';
import chalk from 'chalk'


const date = new Date();
const year = date.getFullYear();

async function getRequest(year, countryCode) {
    try {
        const response = await axios.get(`https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`);
        displayData(response.data);
    }
    catch(error) {
        console.log(error);
    }  
}

function displayData(response) {
    for(let i = 0; i < response.length; i++) {
        console.log(response[i].name);
        console.log(('-').repeat(response[i].name.length));
        console.log(chalk.cyan(response[i].date));
        console.log(`Local name : ${chalk.green(response[i].localName)}`);
        console.log('\n');
    }
}

getRequest(year, getCode(process.argv[2]));



