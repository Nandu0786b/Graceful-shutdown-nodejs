<h1 align="center">Graceful Shutdown</h1>

<a align="center" href="https://www.linkedin.com/in/nand-kishore-ola/">Connect me
</a>


<p align="center">
  <i>Running a server is like running a shop. Just like you close the doors to new customers when it's time to close, a server can gracefully shut down to finish processing requests while not accepting new ones.</i>
</p>

---

## Overview

This repository provides an example of how to implement graceful shutdown for a Nodejs server . Graceful shutdown ensures that the server can complete processing any outstanding requests before shutting down.
 This means that when the server is shutting down, it will stop accepting new requests, but will continue processing any requests that have already been made. This helps to prevent data loss or corruption and ensures a smooth shutdown process.

## Features

- Graceful shutdown for servers in Nodejs
- Customizable wait time for finishing processing requests
- File structure in NodeJs
- Morgan middleware to track http response
- Pool connection in the MongoDb
- Hide express server (x-powered-by) to less hacker now about backend

## Usage

To use this repository, simply clone or download the files and follow the instructions in the `README.md`. You can also integrate the code into your own server implementation.

## Installation

You can install the necessary dependencies by running : npm i

