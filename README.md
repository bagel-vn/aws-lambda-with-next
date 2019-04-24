AWS Lambda with Next.JS
===================

## Build Next.js app
```
npm run build
```

## Create AWS Lambda function and API Gateway
```
claudia create --handler lambda.handler --deploy-proxy-api --region {region_code}
```

## Deploy to AWS Lambda
```
claudia update
```
