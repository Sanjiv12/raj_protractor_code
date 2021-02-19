#!/bin/bash -x

# Use this script to execute any special steps needed before pushing your webapp to ECS.
# The actual AWS deployment logic is handled by the Jenkins slave.

# Copy from EFS

aws s3 rm s3:$1 --recursive
aws s3 sync .tmp/report s3:$1 --include "*"
echo $2
ls
if [ $2 == 'failed' ]
then
aws ses send-email --from raghunath.goteti@toyota.com --to jeff.j.johnson@toyota.com --cc raghunath.goteti@toyota.com --subject "Console BDD build failed" --html "BDD features of Managment console failed.<br/><br/><br/><i>* Do not reply to this email. Check <a href='https://mstconsolebdd.rti.dev.toyota.com/'>Console Report</a></i>"
fi