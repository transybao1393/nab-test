
# NAB Testing Project
![Node.js CI](https://github.com/transybao1393/nab-test/workflows/Node.js%20CI/badge.svg?branch=master)

## Technologies
1. Babel 7
2. Node 13.14.0
3. Npm 6.14.4
4. GitHub CI
5. Dockerfile & Docker Compose
6. Nginx Reverse Proxy with cache
7. Integration test & Unit test using Jest and Sinon
8. Using Eslint to checking some basic coding convention
9. Request logging with Morgan
10. RabbitMQ

## Getting Started 
Please follow the instruction below

### Prerequisites
You will need:
1. Mac/Linux environment
2. Github
3. Docker
4. NPM version 13.14.0

### Installing (Manual)
1. Install docker on your machine or you can reference to the link to install Docker through [Homebrew](https://docs.brew.sh/Installation):
```
https://codingbee.net/docker/install-docker-for-mac-using-homebrew
```
2. Create docker network `docker network create bao_network`
3. Clone main modules:
```
git clone https://github.com/transybao1393/nab-test.git
```
4. Go to `nab-test` folder & run command `sh start.sh`
5. Clone customer activities modules:
```
git clone https://github.com/transybao1393/nab-test-customer-activities.git
```
6. Go to `nab-test-customer-activities` folder & run command `sh start.sh`

### Installing (Automatically)
...will be update soon...

### Testing
...will be update soon...

### cURL
Method | cURL
-------|-----
GET | curl --request GET `'localhost/product'` &#124; json_pp
GET | curl --request GET `'localhost/product/price/asc'` &#124; json_pp
GET | curl --request GET `'localhost/product/price/desc'` &#124; json_pp
GET | curl --request GET `'localhost/product/price/byDate'` &#124; json_pp
GET | curl --request GET `'localhost/product/i/:productId'` &#124; json_pp
GET | curl --request GET `'localhost/product/price/alphabet'` &#124; json_pp
GET | curl --request GET `'localhost/product/any?searchValue=T'` &#124; json_pp
GET | curl --request GET `'localhost/product/any?searchValue=White'` &#124; json_pp
GET | curl --request GET `'localhost/product/any?searchValue=Louis'` &#124; json_pp
GET | curl --request GET `'localhost/product/category/:categoryId'` &#124; json_pp
GET | curl --request GET `'localhost/product/branch?branchValue=Louis'` &#124; json_pp
GET | curl --request GET `'localhost/product/range?priceFrom=&priceTo='` &#124; json_pp
GET | curl --request GET `'localhost/product/range?priceFrom=100&priceTo=1000'` &#124; json_pp
GET | curl --request GET `'localhost/product/range?priceFrom=1000&priceTo=10000'` &#124; json_pp

### Architecture

#### Solution Concept Diagram
![Solution concept](./presentation/solution-concepts.png)

#### High-level Solution Diagram
...will be update soon...