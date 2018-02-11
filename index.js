import data from './src/api.json'

import React from 'react';
import ReactDOM from 'react-dom';

import PlayList from './src/playlist/components/playlist';

const app = document.getElementById('app');

ReactDOM.render(<PlayList data={data}/>, app);