import React from 'react';
import Head from 'next/head'

import { Button } from 'reactstrap';

const Uppy = require('@uppy/core')
const Tus = require('@uppy/tus')
const { DragDrop } = require('@uppy/react')

import { Dashboard } from '@uppy/react'

const uppy = Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true
})

export default (props) => {
  return (
    <div>
      <Head>
        <title>Sample Uploader Using Uppy</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link href="https://transloadit.edgly.net/releases/uppy/v0.28.0/dist/uppy.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>
      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    <main role="main" className="container">

      <div className="starter-template">
        <h1>Bootstrap starter template</h1>
        <p className="lead">Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.</p>
        <Dashboard 
          uppy={uppy}
        />
      </div>

    </main>


    </div>
  );
};