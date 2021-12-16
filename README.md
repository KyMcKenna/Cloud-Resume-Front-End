PROJECT:
Cloud Resume Challenge front end repository

•	Used S3 to host static resume website featuring a visitor counter. Set up HTTPS for security and enabled CloudFront for caching. Utilized Route53 for DNS operation.
•	Wrote Lambda function using Python as runtime to retrieve current visitor count, stored in DynamdoDB, and update the count for each visit.
•	Setup API Gateway to accept requests from the web app, triggering the lambda function to communicate with the database.
•	Utilized Docker for SAM build operations.
•	Converted infrastructure to code, leveraged SAM & GitHub Actions for rapid deployment and CI/CD.
