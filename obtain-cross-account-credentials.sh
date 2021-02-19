#!/bin/bash -x
echo $2
echo $3
ENVIRONMENT=$1
CROSS_ENV=$2
CROSS_ACCOUNT_ROLE=mst-${1}-JenkinsCrossAccountRole
case $ENVIRONMENT in
    dev|test)
        ENV_ROLE_ARN="arn:aws:iam::030361293591:role/$CROSS_ACCOUNT_ROLE"
    ;;
    qa|stage|prod)
        ENV_ROLE_ARN="arn:aws:iam::974258366369:role/$CROSS_ACCOUNT_ROLE"
    ;;
    *)
        error_exit "$ENVIRONMENT is invalid. Only dev, test, stage and prod are valid environments (CASE SENSITIVE)."
    ;;
esac

ROLE_CREDENTIALS=$(aws sts assume-role --role-arn $ENV_ROLE_ARN --role-session-name $BUILD_TAG)

aws configure set aws_access_key_id $(echo $ROLE_CREDENTIALS | jq ".Credentials.AccessKeyId" -r)
aws configure set aws_secret_access_key $(echo $ROLE_CREDENTIALS | jq ".Credentials.SecretAccessKey" -r)
aws configure set aws_session_token $(echo $ROLE_CREDENTIALS | jq ".Credentials.SessionToken" -r)

aws configure set region $ENV_REGION

for region in `aws ec2 describe-regions --output text | grep us | cut -f3`; do echo $region; aws cloudformation describe-stacks --stack-name mst-${ENVIRONMENT}-vpc-sg --region $region; if [ $? -eq 0 ]; then REGION=$region; break; fi; done

aws configure set region $REGION

build-env/jenkins-deploy.sh $2 $3