AWS Lambda with Next.JS
===================

## Dependencies
```
npm i -g claudia
npm i --save aws-serverless-express
```

## Build Next.js app
```
npm run build
```

## Create 'lambda.js' file
```
claudia generate-serverless-express-proxy --express-module app
```

## Create AWS Lambda function and API Gateway
```
claudia create --handler lambda.handler --deploy-proxy-api --region {region_code}
```

## Deploy to AWS Lambda
```
claudia update
```
