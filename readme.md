# Awesome Cloud Build [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of high-signal resources for Google Cloud Build in 2026: CI, triggers, private pools, Artifact Registry, supply chain security, and modern delivery pipelines.

![awesome-cloud-build.png](./awesome-cloud-build.png)

## What is Cloud Build?

Cloud Build is Google Cloud's managed build platform for running CI pipelines, building containers and packages, generating provenance, and shipping artifacts into services such as Artifact Registry, Cloud Run, GKE, App Engine, and Cloud Deploy.

In 2026, the Cloud Build ecosystem is materially different from the 2021 version of this list:

- Artifact Registry is the default artifact destination; Container Registry is deprecated and has been shut down in stages.
- Private pools, regional builds, and larger machine families are mainstream for enterprise workloads.
- Cloud Build repositories (2nd gen) and Developer Connect are the modern source integration model for GitHub, GitLab, and Bitbucket.
- SLSA provenance, security insights, and Software Delivery Shield have made Cloud Build part of Google Cloud's software supply chain security story.
- Cloud Deploy is now the recommended managed CD layer when you want promotion logic beyond "build and deploy in one file".

## Contents

- [Useful links](#useful-links)
- [What's new since 2021](#whats-new-since-2021)
- [Quickstarts](#quickstarts)
- [Tutorials](#tutorials)
- [Security & Supply Chain](#security--supply-chain)
- [Repositories, Triggers & Source Integrations](#repositories-triggers--source-integrations)
- [Private Pools & Regional Builds](#private-pools--regional-builds)
- [Cloud Deploy & Delivery](#cloud-deploy--delivery)
- [AI/ML & Troubleshooting](#aiml--troubleshooting)
- [Migration & Deprecations](#migration--deprecations)
- [Articles](#articles)
- [Cloud Builders](#cloud-builders)
- [Community Cloud Builders](#community-cloud-builders)
- [Cloud Build Configuration File Templates](#cloud-build-configuration-file-templates)
- [Tools](#tools)
- [Meetups](#meetups)

## Useful links

- [Cloud Build product page](https://cloud.google.com/build)
- [Cloud Build documentation](https://cloud.google.com/build/docs)
- [Cloud Build release notes](https://cloud.google.com/build/docs/release-notes)
- [Build configuration file schema](https://cloud.google.com/build/docs/build-config-file-schema)
- [Cloud Build pricing](https://cloud.google.com/build/pricing)
- [Cloud Build quotas and limits](https://cloud.google.com/build/quotas)
- [Cloud Build locations](https://cloud.google.com/build/docs/locations)
- [Cloud Build console](https://console.cloud.google.com/cloud-build)
- [CI/CD on Google Cloud](https://cloud.google.com/docs/ci-cd)
- [Artifact Registry documentation](https://cloud.google.com/artifact-registry/docs)
- [Cloud Deploy documentation](https://cloud.google.com/deploy/docs)
- [Cloud Build public issue tracker component](https://issuetracker.google.com/issues?q=componentid:190802)
- [Official builder catalog](https://github.com/GoogleCloudPlatform/cloud-builders)
- [Community builder catalog](https://github.com/GoogleCloudPlatform/cloud-builders-community)
- [Cloud Build samples](https://github.com/GoogleCloudPlatform/cloud-build-samples)
- [Cloud Build notifiers](https://github.com/GoogleCloudPlatform/cloud-build-notifiers)
- [Google Cloud buildpacks](https://github.com/GoogleCloudPlatform/buildpacks)
- [Stack Overflow: `google-cloud-build`](https://stackoverflow.com/questions/tagged/google-cloud-build)

## What's new since 2021

- `2021`: Private pools reached GA, making VPC-connected, enterprise-isolated builds a first-class option.
- `2022`: Regional builds and triggers went GA, which matters for data residency, latency, and private networking.
- `2022`: [Software Delivery Shield](https://cloud.google.com/software-delivery-shield/docs/overview) launched to connect Cloud Build, Artifact Registry, Binary Authorization, and provenance into one supply chain story.
- `2023`: Cloud Build repositories (2nd gen) entered preview and then GA, modernizing repository connections beyond the original trigger model.
- `2023`: Cloud Build added [SLSA v1.0 build provenance](https://cloud.google.com/build/docs/securing-builds/generate-validate-build-provenance) support and Google-signed OIDC identity tokens for more secure downstream integrations.
- `2023`: The free tier changed to align with the `e2-standard-2` default machine type and newer pricing tiers.
- `2024`: Bitbucket Cloud and Bitbucket Data Center support arrived for 2nd gen source integrations.
- `2024`: New-project behavior for the default Cloud Build service account changed; explicit user-managed service accounts are now the safer default pattern.
- `2024`: More organization policy controls landed, including custom constraints for Cloud Build resources.
- `2025`: Developer Connect-backed triggers reached GA, which is now the preferred route for several source providers.
- `2025`: Private pool machine families expanded again, including `c3` and `n2d`, for higher-performance builds.
- `2025`: Build graph quality-of-life features improved with custom Pub/Sub topics, build dependency support, and better log field mapping.

## Quickstarts

- [Build and push a Docker image](https://cloud.google.com/build/docs/build-push-docker-image)
- [Build Go applications](https://cloud.google.com/build/docs/building/build-go)
- [Build Java applications](https://cloud.google.com/build/docs/building/build-java)
- [Build Node.js applications](https://cloud.google.com/build/docs/building/build-nodejs)
- [Build applications with buildpacks](https://cloud.google.com/docs/buildpacks/build-application)
- [Deploy to Cloud Run with Cloud Build](https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [Create and manage build triggers](https://cloud.google.com/build/docs/triggers)
- [Store build artifacts in Artifact Registry](https://cloud.google.com/build/docs/building/store-artifacts-in-artifact-registry)
- [Create your first Cloud Deploy pipeline](https://cloud.google.com/deploy/docs/deploy-app-run)

## Tutorials

- [GitOps-style continuous delivery with Cloud Build and GKE](https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build)
- [Access private GitHub repositories from builds](https://cloud.google.com/build/docs/access-github-from-build)
- [Run builds from GitHub](https://cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [Use private pools in a private network](https://cloud.google.com/build/docs/private-pools/use-in-private-network)
- [Access private GKE clusters from private pools](https://cloud.google.com/build/docs/private-pools/access-private-gke-clusters-with-cloud-build-private-pools)
- [Configure third-party notifications](https://cloud.google.com/build/docs/configuring-notifications/configure-third-party-notifications)
- [Generate and validate build provenance](https://cloud.google.com/build/docs/securing-builds/generate-validate-build-provenance)
- [View security insights for builds](https://cloud.google.com/build/docs/securing-builds/view-build-security-insights)
- [Manage build dependencies](https://cloud.google.com/build/docs/building/manage-dependencies)
- [Speed up builds](https://cloud.google.com/build/docs/optimize-builds/speeding-up-builds)
- [Best practices for speeding up builds](https://cloud.google.com/build/docs/optimize-builds/best-practices)
- [Use manual, Pub/Sub, and webhook triggers](https://cloud.google.com/build/docs/triggers)
- [Deploy to Cloud Run using Cloud Deploy](https://cloud.google.com/deploy/docs/deploy-app-run)
- [Deploy to GKE using Cloud Deploy](https://cloud.google.com/deploy/docs/gke-deploy-app)
- [Build and deploy on GitHub with Workload Identity Federation](https://github.com/google-github-actions/auth)

## Security & Supply Chain

- [Secure your builds overview](https://cloud.google.com/build/docs/securing-builds/secure-builds-overview)
- [Generate and validate SLSA build provenance](https://cloud.google.com/build/docs/securing-builds/generate-validate-build-provenance)
- [Use Google-signed OIDC tokens](https://cloud.google.com/build/docs/securing-builds/oidc)
- [View build security insights](https://cloud.google.com/build/docs/securing-builds/view-build-security-insights)
- [Use user-specified service accounts](https://cloud.google.com/build/docs/securing-builds/configure-user-specified-service-accounts)
- [Configure private pools](https://cloud.google.com/build/docs/private-pools/private-pools-overview)
- [Software Delivery Shield overview](https://cloud.google.com/software-delivery-shield/docs/overview)
- [Artifact Analysis and SBOM guidance](https://cloud.google.com/artifact-analysis/docs)
- [Binary Authorization documentation](https://cloud.google.com/binary-authorization/docs)
- [SLSA verifier](https://github.com/slsa-framework/slsa-verifier)

## Repositories, Triggers & Source Integrations

- [Cloud Build repositories overview](https://cloud.google.com/build/docs/repositories)
- [Create and manage repositories](https://cloud.google.com/build/docs/repositories)
- [Developer Connect overview](https://cloud.google.com/developer-connect/docs/overview)
- [Create and manage triggers](https://cloud.google.com/build/docs/triggers)
- [Build repositories from GitHub](https://cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [Build repositories from GitHub Enterprise](https://cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [Build repositories from GitLab](https://cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- [Build repositories from GitLab Enterprise](https://cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- [Build repositories from Bitbucket Cloud](https://cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- [Build repositories from Bitbucket Data Center](https://cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- [Webhook triggers](https://cloud.google.com/build/docs/automating-builds/create-webhook-triggers)
- [Pub/Sub triggers](https://cloud.google.com/build/docs/automate-builds-pubsub-events)
- [Manual triggers](https://cloud.google.com/build/docs/manually-build-code-source-repos)

Architecture note:
Cloud Build still supports repository, webhook, Pub/Sub, and manual triggers. For broader event-driven automation across products, teams increasingly pair Cloud Build with Eventarc, Workflows, or Cloud Run rather than treating Cloud Build triggers as the only orchestration layer.

## Private Pools & Regional Builds

- [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview)
- [Create and manage private pools](https://cloud.google.com/build/docs/private-pools/create-manage-private-pools)
- [Use private pools in a private network](https://cloud.google.com/build/docs/private-pools/use-in-private-network)
- [Access private GKE clusters with private pools](https://cloud.google.com/build/docs/private-pools/access-private-gke-clusters-with-cloud-build-private-pools)
- [Cloud Build locations](https://cloud.google.com/build/docs/locations)
- [Cloud Build pricing](https://cloud.google.com/build/pricing)
- [Choose machine types and CPU scaling options](https://cloud.google.com/build/docs/optimize-builds/increase-vcpu-for-builds)

## Cloud Deploy & Delivery

- [Cloud Deploy overview](https://cloud.google.com/deploy/docs/overview)
- [Cloud Deploy quickstart for Cloud Run](https://cloud.google.com/deploy/docs/deploy-app-run)
- [Cloud Deploy quickstart for GKE](https://cloud.google.com/deploy/docs/gke-deploy-app)
- [Cloud Deploy delivery pipelines](https://cloud.google.com/deploy/docs/create-pipeline-targets)
- [Skaffold documentation](https://skaffold.dev/docs/)
- [Progressive delivery on Google Cloud](https://cloud.google.com/docs/ci-cd)

Why this matters:
Cloud Build remains excellent for CI and for simple "build then deploy" flows. Once you need staged promotions, approvals, rollouts, or environment-specific release controls, use Cloud Build to create artifacts and Cloud Deploy to own the CD pipeline.

## AI/ML & Troubleshooting

- [Boost your Continuous Delivery pipeline with Generative AI](https://cloud.google.com/blog/products/devops-sre/boost-your-continuous-delivery-pipeline-with-generative-ai)
- [Free to be SRE: How to use generative AI for root cause analysis and remediation](https://cloud.google.com/blog/products/devops-sre/free-to-be-sre-how-to-use-generative-ai-for-root-cause-analysis-and-remediation)
- [Gemini Cloud Assist plus Personalized Service Health](https://cloud.google.com/blog/products/ai-machine-learning/how-personalized-service-health-works-with-gemini-cloud-assist)
- [Troubleshoot build failures](https://cloud.google.com/build/docs/troubleshooting)

Cloud Build does not yet have a single "Gemini mode" that replaces build authoring. The current pattern is AI-assisted troubleshooting, release analysis, and remediation around Cloud Build logs, Cloud Deploy rollouts, and production signals.

## Migration & Deprecations

- [Transition from Container Registry to Artifact Registry](https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [Container Registry shutdown details](https://cloud.google.com/artifact-registry/docs/transition/prepare-gcr-shutdown)
- [Cloud Build service account change](https://cloud.google.com/build/docs/cloud-build-service-account-updates)
- [Create and manage repositories](https://cloud.google.com/build/docs/repositories)
- [Cloud Source Repositories notice](https://cloud.google.com/source-repositories/docs/quickstart)
- [Compute Engine container startup agent deprecation](https://cloud.google.com/compute/docs/containers/prepare-for-container-agent-shutdown)

Important migrations to plan for:

- Move all `gcr.io` and `*.gcr.io` flows to Artifact Registry-managed repositories, even when you keep the `gcr.io` hostname for compatibility.
- Prefer Cloud Build repositories (2nd gen) or Developer Connect for new SCM integrations.
- Stop relying on the legacy default Cloud Build service account behavior; pin builds to a least-privilege service account explicitly.
- Do not use deprecated Compute Engine container startup agent workflows such as `create-with-container` for new deployments.

## Articles

- [Cloud Build release notes](https://cloud.google.com/build/docs/release-notes)
- [Software Delivery Shield: secure your software supply chain](https://cloud.google.com/blog/products/application-development/introducing-software-delivery-shield)
- [DevSecOps and CI/CD using Google Cloud built-in services](https://cloud.google.com/blog/products/application-development/devsecops-and-cicd-on-google-cloud-built-in-services)
- [Boost your Continuous Delivery pipeline with Generative AI](https://cloud.google.com/blog/products/devops-sre/boost-your-continuous-delivery-pipeline-with-generative-ai)
- [Free to be SRE: generative AI for root cause analysis and remediation](https://cloud.google.com/blog/products/devops-sre/free-to-be-sre-how-to-use-generative-ai-for-root-cause-analysis-and-remediation)
- [Personalized Service Health with Gemini Cloud Assist](https://cloud.google.com/blog/products/ai-machine-learning/how-personalized-service-health-works-with-gemini-cloud-assist)
- [Deploy applications to Cloud Run with Cloud Build](https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [Best practices for building containers](https://cloud.google.com/architecture/best-practices-for-building-containers)

## Cloud Builders

Supported builder images live in the official [cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders) repository. Start there before creating a custom builder.

- [docker](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/docker)
- [gcloud](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcloud)
- [git](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/git)
- [go](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/go)
- [gke-deploy](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gke-deploy)
- [kubectl](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/kubectl)
- [mvn](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/mvn)
- [npm](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/npm)
- [yarn](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/yarn)
- [curl](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/curl)
- [wget](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/wget)
- [dotnet](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/dotnet)

Also useful:

- [Use buildpacks instead of hand-written Dockerfiles](https://cloud.google.com/docs/buildpacks/overview)
- [Create custom builders](https://cloud.google.com/build/docs/configuring-builds/use-community-and-custom-builders)

## Community Cloud Builders

Community-contributed builders live in [cloud-builders-community](https://github.com/GoogleCloudPlatform/cloud-builders-community). These are source projects, not hosted public images; build and publish the ones you trust into your own Artifact Registry repository before using them in production.

- [kaniko](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/kaniko)
- [buildah](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/buildah)
- [terraform](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/terraform)
- [terragrunt](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/terragrunt)
- [packer](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/packer)
- [pulumi](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/pulumi)
- [helm](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/helm)
- [kustomize](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/kustomize)
- [skaffold](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/skaffold)
- [firebase](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/firebase)
- [awscli](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/awscli)
- [az](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/az)
- [ansible](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/ansible)
- [shellcheck](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/shellcheck)

## Cloud Build Configuration File Templates

The templates in [`build-config-templates/`](./build-config-templates/) are modernized for Artifact Registry, regional builds, Cloud Deploy, multi-arch images, and private pools.

- [Build and push to Artifact Registry](./build-config-templates/build-and-push-to-artifact-registry/cloudbuild.yaml)
- [Deploy to Cloud Run](./build-config-templates/deploy-to-cloud-run/cloudbuild.yaml)
- [Deploy to App Engine](./build-config-templates/deploy-to-app-engine/cloudbuild.yaml)
- [Deploy to Compute Engine](./build-config-templates/deploy-to-compute-engine/cloudbuild.yaml)
- [Create a Cloud Deploy release](./build-config-templates/deploy-to-cloud-deploy/cloudbuild.yaml)
- [Build and push a multi-arch image](./build-config-templates/build-multi-arch-image/cloudbuild.yaml)
- [Run builds on a private pool](./build-config-templates/private-pool-build-and-push/cloudbuild.yaml)

## Tools

- [Cloud Build samples](https://github.com/GoogleCloudPlatform/cloud-build-samples) Reference pipelines for Docker, Cloud Run, Functions, private pools, caching, and monorepos.
- [Cloud Build notifiers](https://github.com/GoogleCloudPlatform/cloud-build-notifiers) Official Slack, SMTP, HTTP, BigQuery, Google Chat, and GitHub Issue notifier support.
- [Google Cloud buildpacks](https://github.com/GoogleCloudPlatform/buildpacks) Google-maintained buildpacks for Cloud Run, Cloud Functions, and container builds.
- [google-github-actions/auth](https://github.com/google-github-actions/auth) Workload Identity Federation from GitHub Actions into Google Cloud.
- [Skaffold](https://skaffold.dev/) Build, tag, and render support that pairs well with Cloud Build and Cloud Deploy.
- [pack](https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/) Local CLI for buildpacks workflows before moving them into Cloud Build.
- [SLSA verifier](https://github.com/slsa-framework/slsa-verifier) Verify provenance emitted by Cloud Build.
- [Terraform Google provider](https://registry.terraform.io/providers/hashicorp/google/latest/docs) Manage triggers, repositories, worker pools, Artifact Registry, and Cloud Deploy infrastructure as code.
- [buildstatus](https://github.com/mchmarny/buildstatus) Slack notifications from Cloud Build using Cloud Run.
- [buildhub.dev](https://buildhub.dev/) Hosted Slack notifications for Cloud Build.
- [cloudbuild-slack](https://github.com/onsails/cloudbuild-slack) Slack notifier for Cloud Build using Cloud Functions.
- [gcb-visualizer](https://github.com/RyanSiu1995/gcb-visualizer) Visualize Cloud Build pipelines with Graphviz.

## Meetups

- [Google Cloud events](https://cloud.google.com/events)
- [Google Cloud Tech on YouTube](https://www.youtube.com/@GoogleCloudTech)
- [Google Cloud Next](https://cloud.withgoogle.com/next)

If you want recurring, current Cloud Build content, Google Cloud events, Cloud Next sessions, and the Google Cloud Tech channel are more reliable in 2026 than older meetup pages.
