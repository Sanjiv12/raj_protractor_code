#!/bin/bash -x

# This script should run the initial compilation of anything consumed
# by static analysis or unit tests.

sudo mkdir -p /output/mstc-bdd-framework/node_modules
ln -s /output/mstc-bdd-framework/node_modules node_modules

# Register the rti-dealer registry path
sudo npm config set @rti-dealer:registry http://jenkins-e-external-70o7nil4unkt-258609249.us-west-2.elb.amazonaws.com/

# sudo npm update

# Update all node_modules with the available latest versions 
sudo npm install

#update
# sudo webdriver-manager update

# Build the node project
sudo npm run bdd
if [ "$?" -ne "0" ]; then
  compile_message="failed"
fi
# # Generating Reports
sudo npm run report



# Copy the compiled resources to the shared EFS directory, for
# consumption by other jobs
if [[ $BUILD_TAG =~ .*-feature/dev-[0-9]+ ]] ;
then
    tar -czf compiled_sources.tar.gz .
    sudo mkdir $ARTIFACT_LOCATION
    sudo cp compiled_sources.tar.gz $ARTIFACT_LOCATION
fi
sudo mkdir -p $ARTIFACT_LOCATION && sudo cp -R build-env $ARTIFACT_LOCATION && sudo chown -R jenkins $ARTIFACT_LOCATION
chmod u+x obtain-cross-account-credentials.sh
./obtain-cross-account-credentials.sh $CROSS_ENV $1 $compile_message
