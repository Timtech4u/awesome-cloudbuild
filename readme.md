# Awesome Cloud Build [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources about all things Google Cloud Build

## What is Cloud Build?

Cloud Build is a service that executes your builds on Google Cloud Platform infrastructure.

Cloud Build can import source code from Google Cloud Storage, Cloud Source Repositories, GitHub, or Bitbucket, execute a build to your specifications, and produce artifacts.

Cloud Build executes your build as a series of build steps, where each build step is run in a Docker container by a builder image.


## Contents

- [Useful links](#useful-links)
- [Quickstarts](#quickstarts)
- [Tutorials](#tutorials)
- [Articles](#articles)
- [Cloud Builders](#cloud-builders)
- [Community Cloud Builders](#community-cloud-builders)
- [Meetups](#meetups)


## Useful links

Useful links on Cloud Build.

- [Product Overview](https://cloud.google.com/cloud-build/)
- [Official Documentation](https://cloud.google.com/cloud-build/docs/)
- [Cloud Build  How-to guides](https://cloud.google.com/cloud-build/docs/how-to)
- [Cloud Build Console](https://console.cloud.google.com/cloud-build)
- [CI/CD on Google Cloud](https://cloud.google.com/docs/ci-cd/)
- [StackOverflow](http://stackoverflow.com/questions/tagged/google-cloud-build)
- [File bugs or feature requests](https://issuetracker.google.com/issues?q=componentid:190802)
- [Pricing](https://cloud.google.com/cloud-build/pricing)
- [Quotas & Limits](https://cloud.google.com/cloud-build/quotas)
- [Release Notes](https://cloud.google.com/cloud-build/release-notes)

## Quickstarts

Quickstarts for Cloud Build.

- [Quickstart for Docker](https://cloud.google.com/cloud-build/docs/quickstart-docker)
- [Quickstart for Go](https://cloud.google.com/cloud-build/docs/quickstart-go)
- [Quickstart for Packer](https://cloud.google.com/cloud-build/docs/quickstart-packer)


## Tutorials

Tutorials on Cloud Build.

- [GitOps-style continuous delivery with Cloud Build ](https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build)
- [Configuring notifications for third-party services ](https://cloud.google.com/cloud-build/docs/configure-third-party-notifications)
- [ Accessing private GitHub repositories ](https://cloud.google.com/cloud-build/docs/access-private-github-repos)
- [ Running builds on GitHub ](https://cloud.google.com/cloud-build/docs/run-builds-on-github)
- [Building Singularity containers using Cloud Build](https://cloud.google.com/community/tutorials/singularity-containers-with-cloud-build)
- [Perform Angular server-side (pre-)rendering with Cloud Build](https://cloud.google.com/community/tutorials/cloudbuild-angular-universal)
- [Create A Cloud Build Image Factory Using Packer](https://cloud.google.com/community/tutorials/create-cloud-build-image-factory-using-packer)
- [Automated Static Website Publishing with Cloud Build](https://cloud.google.com/community/tutorials/automated-publishing-cloud-build)
- [Using Cloud Build as a test runner](https://cloud.google.com/community/tutorials/cloudbuild-test-runner)
- [Run an Elixir Phoenix app with Cloud Run](https://cloud.google.com/community/tutorials/elixir-phoenix-on-cloud-build-cloud-run)
- [WhiteSource - Google Cloud Build Integration](https://whitesource.atlassian.net/wiki/spaces/WD/pages/544604326/Google+Cloud+Build+Integration)
- [Utilizing Caches When Building Go Projects On Google Cloud Build](https://blog.container-solutions.com/utilizing-caches-when-building-go-projects-on-google-cloud-build)
- [Automatic Builds at Your Fingertips With GCP Cloud Build](https://mydeveloperplanet.com/2019/05/08/automatic-builds-at-your-fingertips-with-gcp-cloud-build/)
- [Simplifying Continuous Deployment to Cloud Run with Cloud Build including Custom Domain Setup(SSL)](https://medium.com/google-cloud/simplifying-continuous-deployment-to-cloud-run-with-cloud-build-including-custom-domain-setup-ssl-22d23bed5cd6)
- [ Continuous Integration and Deployment with Google Cloud Build - Fireship ](https://fireship.io/lessons/ci-cd-with-google-cloud-build/)
- [Google Cloud Build with Spinnaker](https://www.spinnaker.io/setup/ci/gcb/)
- [Deploying a Gatsby Site to Firebase with Google Cloud Build (CI/CD)](https://dev.to/leomercier/deploying-a-gatsby-site-to-firebase-with-google-cloud-build-ci-cd-511c)
- [Continuous Deployment with Cloud Build](https://codelabs.developers.google.com/codelabs/cloud-builder-gke-continuous-deploy/index.html#0)

## Articles

Articles on Cloud Build.

- [ Build configuration overview ](https://cloud.google.com/cloud-build/docs/build-config)
- [CircleCI vs Google Cloud Build](https://www.praqma.com/stories/circle-ci-google-cloud-build/)
- [Google announces Cloud Build, its new continuous integration and delivery platform](https://techcrunch.com/2018/07/24/google-announces-cloud-build-its-new-continuous-integration-continuous-delivery-platform/)
- [A Better Approach to Google Cloud Continuous Deployment](https://www.toptal.com/devops/better-google-cloud-continuous-deployment)
- [GitLab- Google CloudBuild](https://about.gitlab.com/devops-tools/cloudbuild/)
- [Terraform - Google Cloud Build](https://www.terraform.io/docs/providers/google/r/cloud_build_trigger.html)

## Cloud Builders

Supported builder images for Google Cloud Build, codes on [GitHub](https://github.com/GoogleCloudPlatform/cloud-builders)

- [bazel: runs the bazel tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/bazel)
- [curl: runs the curl tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/curl)
- [docker: runs the docker tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/docker)
- [dotnet: run the dotnet tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/dotnet)
- [gcloud: runs the gcloud tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcloud)
- [git: runs the git tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/git)
- [gke-deploy: runs the gke-deployer tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gke-deploy)
- [go: runs the go tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/go)
- [gradle: runs the gradle tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gradle)
- [gsutil: runs the gsutil tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gsutil)
- [javac: runs the javac tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/javac)
- [kubectl: runs the kubectl tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/kubectl)
- [mvn: runs the maven tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/mvn)
- [npm: runs the npm tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/npm)
- [wget: runs the wget tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/wget)
- [yarn: runs the yarn tool](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/yarn)

## Community Cloud Builders

Community-contributed images for Google Cloud Build, codes on [GitHub](https://github.com/GoogleCloudPlatform/cloud-builders-community)

- [android: runs the android tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/android)
- [ansible: runs the ansible tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/ansible)
- [awscli: runs the awscli tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/awscli)
- [az-kubectl: runs the azure-kubectl tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/az-kubectl)
- [az: runs the azure cli tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/az)
- [bandit: runs the bandit tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/bandit)
- [base-image-builder:  runs the base-image-builder tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/base-image-builder)
- [binauthz-attestation: runs the Binary Authorization tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/binauthz-attestation)
- [boot: runs the boot tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/boot)
- [bq: runs the bigquery tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/bq)
- [buildah: runs the buildah tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/buildah)
- [cache: runs the cache tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/cache)
- [cargo: runs the Rust cargo tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/cargo)
- [cft: runs the cloud foundation toolkit](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/cft)
- [compodoc: runs the compodoc tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/compodoc)
- [composer: runs the composer tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/composer)
- [container-diff: runs the container-diff tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/container-diff)
- [cron-helper: runs the cron-helper tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/cron-helper)
- [dataflow-python: runs the dataflow-python tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/dataflow-python)
- [dep: runs the go dep tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/dep)
- [docker-compose: runs the docker-compose tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/docker-compose)
- [envsubst: runs the envsubst tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/envsubst)
- [esy: runs the esy tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/esy)
- [fastlane: runs the fastlane tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/fastlane)
- [firebase: runs the firebase tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/firebase)
- [flutter: runs the flutter tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/firebase)
- [fsharp: runs the fsharp tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/fsharp)
- [glide: runs the glide tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/glide)
- [google-closure-compiler: runs the google-closure-compiler tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/google-closure-compiler)
- [helm: runs the helm tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/helm)
- [hub: runs the hub tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/hub)
- [hugo: runs the hugo tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/hugo)
- [inspec: runs the inspec tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/inspec)
- [jfrog: runs the jfrog tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/jfrog)
- [jmeter: runs the jmeter tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/jmeter)
- [jsonnet: runs the jsonner tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/jsonnet)
- [kaniko: runs the kaniko tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/kaniko)
- [kubectl_wait_for_job: runs the kubectl_wait_for_job tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/kubectl_wait_for_job)
- [kustomize:: runs the kustomize tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/kustomize)
- [make: runs the make tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/make)
- [makisu: runs the makisu tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/make)
- [mortar: runs the mortar tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/mortar)
- [ng: runs the ng tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/ng)
- [nix-build: runs the nix-build tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/nix-build)
- [npm-jasmine-node: runs the npm-jasmine-node tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/npm-jasmine-node)
- [packer: runs the packer tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/packer)
- [pelican: runs the pelican tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/pelican)
- [protoc: runs the protoc tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/protoc)
- [pulumi: runs the pulumi tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/pulumi)
- [puppet-lint: runs the puppet lint tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/puppet-lint)
- [pylint: runs the pylint tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/pylint)
- [remote-builder: runs the remote-builder tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/remote-builder)
- [rocker: runs the rocker tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/rocker)
- [s2i: runs the s2i tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/s2i)
- [scala-sbt: runs the scala-sbt tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/scala-sbt)
- [shellcheck: runs the shellcheck tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/shellcheck)
- [singularity: runs the singularity tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/singularity)
- [skaffold: runs the skaffold tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/skaffold)
- [slackbot: runs the slackbot tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/slackbot)
- [sonarqube: runs the sonarqube tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/sonarqube)
- [swift: runs the swift tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/swift)
- [tar: runs the tar tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/tar)
- [terraform: runs the terraform tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/terraform)
- [terragrunt: runs the terragrunt tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/terragrunt)
- [traceroute: runs the traceroute tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/traceroute)
- [windows-builder: runs the windows-builder tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/windows-builder)
- [yarn-puppeteer: runs the yarn-puppeteer tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/yarn-puppeteer)
- [zip: runs the zip tool](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/zip)


## Meetups

Meetups on Cloud Build
