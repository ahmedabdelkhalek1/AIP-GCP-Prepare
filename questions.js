const questions = [
    {
        "question_number": 1,
        "question": "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
        "answers": [
            "A. Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance.",
            "B. Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.",
            "C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the \u05d2\u20accompute.osAdminLogin\u05d2\u20ac role to the Google group corresponding to this team.",
            "D. Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance."
        ],
        "correct_answer": "C",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 2,
        "question": "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
        "answers": [
            "A. 0.0.0.0/0",
            "B. 10.0.0.0/8",
            "C. 172.16.0.0/12",
            "D. 192.168.0.0/16"
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 3,
        "question": "You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
        "answers": [
            "A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
            "B. Select Cloud SQL (MySQL). Select the create failover replicas option.",
            "C. Select Cloud Spanner. Set up your instance with 2 nodes.",
            "D. Select Cloud Spanner. Set up your instance as multi-regional."
        ],
        "correct_answer": "A",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 4,
        "question": "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps.You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
        "answers": [
            "A. Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)",
            "B. Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.",
            "C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)",
            "D. Create a managed instance group. Verify that the autoscaling setting is on."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 5,
        "question": "You are using multiple configurations for gcloud. You want to review the configured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?",
        "answers": [
            "A. Use gcloud config configurations describe to review the output.",
            "B. Use gcloud config configurations activate and gcloud config list to review the output.",
            "C. Use kubectl config get-contexts to review the output.",
            "D. Use kubectl config use-context and kubectl config view to review the output."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 6,
        "question": "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
        "answers": [
            "A. Multi-Regional Storage",
            "B. Regional Storage",
            "C. Nearline Storage",
            "D. Coldline Storage"
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 7,
        "question": "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
        "answers": [
            "A. Contact [email protected] with your bank account details and request a corporate billing account for your company.",
            "B. Create a ticket with Google Support and wait for their call to share your credit card details over the phone.",
            "C. In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.",
            "D. In the Google Cloud Platform Console, create a new billing account and set up a payment method."
        ],
        "correct_answer": "D",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 8,
        "question": "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
        "answers": [
            "A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.",
            "B. Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.",
            "C. Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.",
            "D. Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 9,
        "question": "You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
        "answers": [
            "A. Manual Scaling with 3 instances.",
            "B. Basic Scaling with min_instances set to 3.",
            "C. Basic Scaling with max_instances set to 3.",
            "D. Automatic Scaling with min_idle_instances set to 3."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 10,
        "question": "You have a development project with appropriate IAM roles defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
        "answers": [
            "A. Use gcloud iam roles copy and specify the production project as the destination project.",
            "B. Use gcloud iam roles copy and specify your organization as the destination organization.",
            "C. In the Google Cloud Platform Console, use the 'create role from role' functionality.",
            "D. In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 11,
        "question": "You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google's recommended practices. Which method should you use?",
        "answers": [
            "A. Deployment Manager",
            "B. Cloud Composer",
            "C. Managed Instance Group",
            "D. Unmanaged Instance Group"
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 12,
        "question": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
        "answers": [
            "A. Use kubectl app deploy <dockerfilename>.",
            "B. Use gcloud app deploy <dockerfilename>.",
            "C. Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.",
            "D. Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file."
        ],
        "correct_answer": "C",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 13,
        "question": "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
        "answers": [
            "A. Download and deploy the Jenkins Java WAR to App Engine Standard.",
            "B. Create a new Compute Engine instance and install Jenkins through the command line interface.",
            "C. Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.",
            "D. Use GCP Marketplace to launch the Jenkins solution."
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 14,
        "question": "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
        "answers": [
            "A. gcloud deployment-manager deployments create --config <deployment-config-path>",
            "B. gcloud deployment-manager deployments update --config <deployment-config-path>",
            "C. gcloud deployment-manager resources create --config <deployment-config-path>",
            "D. gcloud deployment-manager resources update --config <deployment-config-path>"
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 15,
        "question": "You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
        "answers": [
            "A. Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.",
            "B. Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.",
            "C. Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator.",
            "D. Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 16,
        "question": "You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?",
        "answers": [
            "A. Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.",
            "B. Create an instance template, and use the template in a managed instance group with autoscaling configured.",
            "C. Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day.",
            "D. Use a set of third-party tools to build automation around scaling the application up and down, based on Stackdriver CPU usage monitoring."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 17,
        "question": "You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
        "answers": [
            "A. Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.",
            "B. Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.",
            "C. Export your transactions to a local file, and perform analysis with a desktop tool.",
            "D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 18,
        "question": "You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
        "answers": [
            "A. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365 \u05d2\u20ac\" 90)",
            "B. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.",
            "C. Use gsutil rewrite and set the Delete action to 275 days (365-90).",
            "D. Use gsutil rewrite and set the Delete action to 365 days."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 19,
        "question": "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
        "answers": [
            "A. When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.",
            "B. Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service- account.",
            "C. Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine- service-account.",
            "D. Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service- account.json."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 20,
        "question": "You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
        "answers": [
            "A. Install a RDP client on your desktop. Verify that a firewall rule for port 3389 exists.",
            "B. Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.",
            "C. Set a Windows password in the GCP Console. Verify that a firewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in.",
            "D. Set a Windows username and password in the GCP Console. Verify that a firewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 21,
        "question": "You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a newCompute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
        "answers": [
            "A. Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.",
            "B. Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
            "C. Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances.",
            "D. Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 22,
        "question": "You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
        "answers": [
            "A. Use granular logging statements within a Deployment Manager template authored in Python.",
            "B. Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.",
            "C. Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.",
            "D. Execute the Deployment Manager template using the \u05d2\u20ac\"-preview option in the same project, and observe the state of interdependent resources."
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 23,
        "question": "You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4?",
        "answers": [
            "A. Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery",
            "B. Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery",
            "C. Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable",
            "D. Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery"
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 24,
        "question": "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
        "answers": [
            "A. Use gcloud to create the new project, and then deploy your application to the new project.",
            "B. Use gcloud to create the new project and to copy the deployed application to the new project.",
            "C. Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.",
            "D. Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 25,
        "question": "You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
            "B. Add the auditors group to two new custom IAM roles.",
            "C. Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
            "D. Add the auditor user accounts to two new custom IAM roles."
        ],
        "correct_answer": "A",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 26,
        "question": "You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to followGoogle-recommended practices. What should you do?",
        "answers": [
            "A. Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'.",
            "B. Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'.",
            "C. Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.",
            "D. Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket."
        ],
        "correct_answer": "C",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 27,
        "question": "You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which files have been viewed from those buckets. What should you do?",
        "answers": [
            "A. Using the GCP Console, filter the Activity log to view the information.",
            "B. Using the GCP Console, filter the Stackdriver log to view the information.",
            "C. View the bucket in the Storage section of the GCP Console.",
            "D. Create a trace in Stackdriver to view the information."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 29,
        "question": "You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specific user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?",
        "answers": [
            "A. Create a signed URL with a four-hour expiration and share the URL with the company.",
            "B. Set object access to 'public' and use object lifecycle management to remove the object after four hours.",
            "C. Configure the storage bucket as a static website and furnish the object's URL to the company. Delete the object from the storage bucket after four hours.",
            "D. Create a new Cloud Storage bucket specifically for the external company to access. Copy the object to that bucket. Delete the bucket after four hours have passed."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 30,
        "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
        "answers": [
            "A. Deploy the monitoring pod in a StatefulSet object.",
            "B. Deploy the monitoring pod in a DaemonSet object.",
            "C. Reference the monitoring pod in a Deployment object.",
            "D. Reference the monitoring pod in a cluster initializer at the GKE cluster creation time."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 31,
        "question": "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
        "answers": [
            "A. Enable the Cloud Pub/Sub API in the API Library on the GCP Console.",
            "B. Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.",
            "C. Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.",
            "D. Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the first connection to Cloud Pub/ Sub."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 32,
        "question": "You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same StackdriverMonitoring dashboard. What should you do?",
        "answers": [
            "A. Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.",
            "B. For each project, create a Stackdriver account. In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.",
            "C. Configure a single Stackdriver account, and link all projects to the same account.",
            "D. Configure a single Stackdriver account for one of the projects. In Stackdriver, create a Group and add the other project names as criteria for that Group."
        ],
        "correct_answer": "C",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 33,
        "question": "You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
        "answers": [
            "A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
            "B. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
            "C. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
            "D. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 34,
        "question": "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
        "answers": [
            "A. Run gcloud iam roles list. Review the output section.",
            "B. Run gcloud iam service-accounts list. Review the output section.",
            "C. Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.",
            "D. Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 35,
        "question": "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
        "answers": [
            "A. Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.",
            "B. Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.",
            "C. Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.",
            "D. Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account."
        ],
        "correct_answer": "B",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 36,
        "question": "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
        "answers": [
            "A. Download the private key from the service account, and add it to each VMs custom metadata.",
            "B. Download the private key from the service account, and add the private key to each VM's SSH keys.",
            "C. Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.",
            "D. When creating the VMs, set the service account's API scope for Compute Engine to read/write."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 37,
        "question": "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
        "answers": [
            "A. Change the default region property setting in the existing GCP project to asia-northeast1.",
            "B. Change the region property setting in the existing App Engine application from us-central to asia-northeast1.",
            "C. Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.",
            "D. Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 38,
        "question": "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
        "answers": [
            "A. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.",
            "B. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.",
            "C. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to the role.",
            "D. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to a new group. Add the group to the role."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 39,
        "question": "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
        "answers": [
            "A. Enable the Node Auto-Repair feature for your GKE cluster.",
            "B. Enable the Node Auto-Upgrades feature for your GKE cluster.",
            "C. Select the latest available cluster version for your GKE cluster.",
            "D. Select \u05d2\u20acContainer-Optimized OS (cos)\u05d2\u20ac as a node image for your GKE cluster."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 40,
        "question": "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Configure an HTTP(S) load balancer.",
            "B. Configure an internal TCP load balancer.",
            "C. Configure an external SSL proxy load balancer.",
            "D. Configure an external TCP proxy load balancer."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 41,
        "question": "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
        "answers": [
            "A. Use the GCP Console to transfer the file instead of gsutil.",
            "B. Enable parallel composite uploads using gsutil on the file transfer.",
            "C. Decrease the TCP window size on the machine initiating the transfer.",
            "D. Change the storage class of the bucket from Nearline to Multi-Regional."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 42,
        "question": "You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below:You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Store the database password inside the Docker image of the container, not in the YAML file.",
            "B. Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
            "C. Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.",
            "D. Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 43,
        "question": "You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds.The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
        "answers": [
            "A. Set the maximum number of instances to 1.",
            "B. Decrease the maximum number of instances to 3.",
            "C. Use a TCP health check instead of an HTTP health check.",
            "D. Increase the initial delay of the HTTP health check to 200 seconds."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 44,
        "question": "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
        "answers": [
            "A. Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.",
            "B. Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.",
            "C. Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.",
            "D. Select Compute Engine. Use VM instance types that support micro bursting."
        ],
        "correct_answer": "C",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 45,
        "question": "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
        "answers": [
            "A. Run gcloud app restore.",
            "B. On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.",
            "C. On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.",
            "D. Deploy the original version as a separate application. Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests."
        ],
        "correct_answer": "C",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 46,
        "question": "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
        "answers": [
            "A. Check the app.yaml file for your application and check project settings.",
            "B. Check the web-application.xml file for your application and check project settings.",
            "C. Go to Deployment Manager and review settings for deployment of applications.",
            "D. Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 47,
        "question": "You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
        "answers": [
            "A. Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group.",
            "B. Create an instance template for the instances. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances. Add the instance template to an instance group.",
            "C. Create an instance group for the instances. Set the 'Autohealing' health check to healthy (HTTP).",
            "D. Create an instance group for the instance. Verify that the 'Advanced creation options' setting for 'do not retry machine creation' is set to off."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 48,
        "question": "You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
        "answers": [
            "A. Enable Cloud CDN on the website frontend.",
            "B. Enable 'Share publicly' on the PDF file objects.",
            "C. Set Content-Type metadata to application/pdf on the PDF file objects.",
            "D. Add a label to the storage bucket with a key of Content-Type and value of application/pdf."
        ],
        "correct_answer": "C",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 49,
        "question": "You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
        "answers": [
            "A. Rely on live migration to move the workload to a machine with more memory.",
            "B. Use gcloud to add metadata to the VM. Set the key to required-memory-size and the value to 8 GB.",
            "C. Stop the VM, change the machine type to n1-standard-8, and start the VM.",
            "D. Stop the VM, increase the memory to 8 GB, and start the VM."
        ],
        "correct_answer": "D",
        "category": "Compute Engine"
    },
    {
        "question_number": 50,
        "question": "You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All theVMs must be able to reach each other over Internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
        "answers": [
            "A. Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.",
            "B. Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.",
            "C. Create 2 custom VPCs, each with a single subnet. Create each subnet in a different region and with a different CIDR range.",
            "D. Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 51,
        "question": "You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
        "answers": [
            "A. Create a health check on port 443 and use that when creating the Managed Instance Group.",
            "B. Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.",
            "C. In the Instance Template, add the label 'health-check'.",
            "D. In the Instance Template, add a startup script that sends a heartbeat to the metadata server."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 52,
        "question": "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members.You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.",
            "B. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.",
            "C. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.",
            "D. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group."
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 53,
        "question": "Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below.Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows:* Instances in tier #1 must communicate with tier #2.* Instances in tier #2 must communicate with tier #3.What should you do?",
        "answers": [
            "A. 1. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances \u05d2\u20ac\u00a2 Source filter: IP ranges (with the range set to 10.0.2.0/24) \u05d2\u20ac\u00a2 Protocols: allow all 2. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances \u05d2\u20ac\u00a2 Source filter: IP ranges (with the range set to 10.0.1.0/24) \u05d2\u20ac\u00a2 Protocols: allow all",
            "B. 1. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances with tier #2 service account \u05d2\u20ac\u00a2 Source filter: all instances with tier #1 service account \u05d2\u20ac\u00a2 Protocols: allow TCP:8080 2. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances with tier #3 service account \u05d2\u20ac\u00a2 Source filter: all instances with tier #2 service account \u05d2\u20ac\u00a2 Protocols: allow TCP: 8080",
            "C. 1. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances with tier #2 service account \u05d2\u20ac\u00a2 Source filter: all instances with tier #1 service account \u05d2\u20ac\u00a2 Protocols: allow all 2. Create an ingress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances with tier #3 service account \u05d2\u20ac\u00a2 Source filter: all instances with tier #2 service account \u05d2\u20ac\u00a2 Protocols: allow all",
            "D. 1. Create an egress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances \u05d2\u20ac\u00a2 Source filter: IP ranges (with the range set to 10.0.2.0/24) \u05d2\u20ac\u00a2 Protocols: allow TCP: 8080 2. Create an egress firewall rule with the following settings: \u05d2\u20ac\u00a2 Targets: all instances \u05d2\u20ac\u00a2 Source filter: IP ranges (with the range set to 10.0.1.0/24) \u05d2\u20ac\u00a2 Protocols: allow TCP: 8080"
        ],
        "correct_answer": "B",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 54,
        "question": "You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
            "B. 1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.",
            "C. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
            "D. 1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 55,
        "question": "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
        "answers": [
            "A. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
            "B. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
            "C. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.",
            "D. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 55,
        "question": "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
        "answers": [
            "A. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
            "B. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
            "C. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.",
            "D. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 56,
        "question": "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
        "answers": [
            "A. Deploy the new version in the same application and use the --migrate option.",
            "B. Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
            "C. Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.",
            "D. Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application."
        ],
        "correct_answer": "B",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 57,
        "question": "You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
        "answers": [
            "A. Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.",
            "B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
            "C. Create a new managed instance group with an updated instance template. Add the group to the backend service for the load balancer. When all instances in the new managed instance group are healthy, delete the old managed instance group.",
            "D. Create a new instance template with the new application version. Update the existing managed instance group with the new instance template. Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template."
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 58,
        "question": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
        "answers": [
            "A. Cloud SQL",
            "B. Cloud Spanner",
            "C. Cloud Firestore",
            "D. Cloud Datastore"
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 59,
        "question": "You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
        "answers": [
            "A. Assign the finance team only the Billing Account User role on the billing account.",
            "B. Assign the engineering team only the Billing Account User role on the billing account.",
            "C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
            "D. Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization."
        ],
        "correct_answer": "C",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 60,
        "question": "You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
        "answers": [
            "A. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafficPolicy to Cluster. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
            "B. 1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward traffic from gce-network to the GKE nodes. 4. Configure the Compute Engine instance to use the address of proxy in gce-network as endpoint.",
            "C. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
            "D. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 61,
        "question": "Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention. What should you do?",
        "answers": [
            "A. Create an export to the sink that saves logs from Cloud Audit to BigQuery.",
            "B. Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
            "C. Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.",
            "D. Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL."
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 62,
        "question": "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
        "answers": [
            "A. Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
            "B. Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.",
            "C. Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.",
            "D. Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 63,
        "question": "You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?",
        "answers": [
            "A. 1. Use nslookup to get the IP address for storage.googleapis.com. 2. Negotiate with the security team to be able to give a public IP address to the servers. 3. Only allow egress traffic from those servers to the IP addresses for storage.googleapis.com.",
            "B. 1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud. 2. In this VPC, create a Compute Engine instance and install the Squid proxy server on this instance. 3. Configure your servers to use that instance as a proxy to access Cloud Storage.",
            "C. 1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine. 2. Create an internal load balancer (ILB) that uses storage.googleapis.com as backend. 3. Configure your new instances to use this ILB as proxy.",
            "D. 1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com."
        ],
        "correct_answer": "D",
        "category": "Security & Encryption"
    },
    {
        "question_number": 64,
        "question": "You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. 1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic. 2. Call your application on Cloud Run from the Cloud Function for every message.",
            "B. 1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run. 2. Create a Cloud Pub/Sub subscription for that topic. 3. Make your application pull messages from that subscription.",
            "C. 1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.",
            "D. 1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal. 2. Create a Cloud Pub/Sub subscription for that topic. 3. In the same Google Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application."
        ],
        "correct_answer": "C",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 65,
        "question": "You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
        "answers": [
            "A. Deploy the container on Cloud Run.",
            "B. Deploy the container on Cloud Run on GKE.",
            "C. Deploy the container on App Engine Flexible.",
            "D. Deploy the container on GKE with cluster autoscaling and horizontal pod autoscaling enabled."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 66,
        "question": "Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
        "answers": [
            "A. Link the acquired company's projects to your company's billing account.",
            "B. Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
            "C. Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.",
            "D. Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 67,
        "question": "You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data.You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Add the support team group to the roles/monitoring.viewer role",
            "B. Add the support team group to the roles/spanner.databaseUser role.",
            "C. Add the support team group to the roles/spanner.databaseReader role.",
            "D. Add the support team group to the roles/stackdriver.accounts.viewer role."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 68,
        "question": "For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?",
        "answers": [
            "A. 1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.",
            "B. 1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
            "C. 1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
            "D. 1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Configure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp > DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day."
        ],
        "correct_answer": "C",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 70,
        "question": "You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
        "answers": [
            "A. Use service account credentials in your on-premises application.",
            "B. Use gcloud to create a key file for the service account that has appropriate permissions.",
            "C. Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.",
            "D. Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center."
        ],
        "correct_answer": "B",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 71,
        "question": "You are using Container Registry to centrally store your company's container images in a separate project. In another project, you want to create a GoogleKubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?",
        "answers": [
            "A. In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.",
            "B. When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under 'Access scopes'.",
            "C. Create a service account, and give it access to Cloud Storage. Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.",
            "D. Configure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 72,
        "question": "You deployed a new application inside your Google Kubernetes Engine cluster using the YAML file specified below.You check the status of the deployed pods and notice that one of them is still in PENDING status:You want to find out why the pod is stuck in pending status. What should you do?",
        "answers": [
            "A. Review details of the myapp-service Service object and check for error messages.",
            "B. Review details of the myapp-deployment Deployment object and check for error messages.",
            "C. Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.",
            "D. View logs of the container in myapp-deployment-58ddbbb995-lp86m pod and check for warning messages."
        ],
        "correct_answer": "C",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 73,
        "question": "You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?",
        "answers": [
            "A. After the VM has been created, use your Google Account credentials to log in into the VM.",
            "B. After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.",
            "C. When creating the VM, add metadata to the instance using 'windows-password' as the key and a password as the value.",
            "D. After the VM has been created, download the JSON private key for the default Compute Engine service account. Use the credentials in the JSON file to log in to the VM."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 74,
        "question": "You want to configure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particularGoogle Cloud Platform project that the dev1 users should be able to connect to. What should you do?",
        "answers": [
            "A. Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.",
            "B. Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.",
            "C. Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.",
            "D. Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 75,
        "question": "You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?",
        "answers": [
            "A. Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.",
            "B. Run gcloud init to set the current project to my-project, and then run gcloud services list --available.",
            "C. Run gcloud info to view the account value, and then run gcloud services list --account <Account>.",
            "D. Run gcloud projects describe <project ID> to verify the project value, and then run gcloud services list --available."
        ],
        "correct_answer": "A",
        "category": "Uncategorized"
    },
    {
        "question_number": 76,
        "question": "You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?",
        "answers": [
            "A. Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split traffic.",
            "B. Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split traffic.",
            "C. Deploy a new version as a separate app in App Engine. Then configure App Engine using GCP Console to split traffic between the two apps.",
            "D. Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 77,
        "question": "You need to provide a cost estimate for a Kubernetes cluster using the GCP pricing calculator for Kubernetes. Your workload requires high IOPs, and you will also be using disk snapshots. You start by entering the number of nodes, average hours, and average days. What should you do next?",
        "answers": [
            "A. Fill in local SSD. Fill in persistent disk storage and snapshot storage.",
            "B. Fill in local SSD. Add estimated cost for cluster management.",
            "C. Select Add GPUs. Fill in persistent disk storage and snapshot storage.",
            "D. Select Add GPUs. Add estimated cost for cluster management."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 78,
        "question": "You are running an application on Compute Engine and collecting logs through Stackdriver. You discover that some personally identifiable information (PII) is leaking into certain log entry fields. You want to prevent these fields from being written in new log entries as quickly as possible. What should you do?",
        "answers": [
            "A. Use the filter-record-transformer Fluentd filter plugin to remove the fields from the log entries in flight.",
            "B. Use the fluent-plugin-record-reformer Fluentd output plugin to remove the fields from the log entries in flight.",
            "C. Wait for the application developers to patch the application, and then verify that the log entries are no longer exposing PII.",
            "D. Stage log entries to Cloud Storage, and then trigger a Cloud Function to remove the fields and write the entries to Stackdriver via the Stackdriver Logging API."
        ],
        "correct_answer": "A",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 79,
        "question": "You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of ComputeEngine instances is running in its own VPC. What should you do?",
        "answers": [
            "A. Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.",
            "B. Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.",
            "C. Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.",
            "D. Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 79,
        "question": "You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of ComputeEngine instances is running in its own VPC. What should you do?",
        "answers": [
            "A. Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.",
            "B. Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.",
            "C. Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.",
            "D. Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 80,
        "question": "You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items.How should you configure the auditor's permissions?",
        "answers": [
            "A. Create a custom role with view-only project permissions. Add the user's account to the custom role.",
            "B. Create a custom role with view-only service permissions. Add the user's account to the custom role.",
            "C. Select the built-in IAM project Viewer role. Add the user's account to this role.",
            "D. Select the built-in IAM service Viewer role. Add the user's account to this role."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 81,
        "question": "You are operating a Google Kubernetes Engine (GKE) cluster for your company where different teams can run non-production workloads. Your Machine Learning(ML) team needs access to Nvidia Tesla P100 GPUs to train their models. You want to minimize effort and cost. What should you do?",
        "answers": [
            "A. Ask your ML team to add the \u05d2\u20acaccelerator: gpu\u05d2\u20ac annotation to their pod specification.",
            "B. Recreate all the nodes of the GKE cluster to enable GPUs on all of them.",
            "C. Create your own Kubernetes cluster on top of Compute Engine with nodes that have GPUs. Dedicate this cluster to your ML team.",
            "D. Add a new, GPU-enabled, node pool to the GKE cluster. Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specification."
        ],
        "correct_answer": "D",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 82,
        "question": "Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?",
        "answers": [
            "A. Use gcloud to expand the IP range of the current subnet.",
            "B. Delete the subnet, and recreate it using a wider range of IP addresses.",
            "C. Create a new project. Use Shared VPC to share the current network with the new project.",
            "D. Create a new subnet with the same starting IP but a wider range to overwrite the current subnet."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 83,
        "question": "Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?",
        "answers": [
            "A. Enable Cloud Identity in the GCP Console for your domain.",
            "B. Grant them the required IAM roles using their G Suite email address.",
            "C. Create a CSV sheet with all users' email addresses. Use the gcloud command line tool to convert them into Google Cloud Platform accounts.",
            "D. In the G Suite console, add the users to a special group called [email protected]. Rely on the default behavior of the Cloud Platform to grant users access if they are members of this group."
        ],
        "correct_answer": "B",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 84,
        "question": "You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?",
        "answers": [
            "A. Create two configurations using gcloud config. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.",
            "B. Create two configurations using gsutil config. Write a script that sets configurations as active, individually. For each configuration, use gsutil compute instances list to get a list of compute resources.",
            "C. Go to Cloud Shell and export this information to Cloud Storage on a daily basis.",
            "D. Go to GCP Console and export this information to Cloud SQL on a daily basis."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 85,
        "question": "You have a large 5-TB AVRO file stored in a Cloud Storage bucket. Your analysts are proficient only in SQL and need access to the data stored in this file. You want to find a cost-effective way to complete their request as soon as possible. What should you do?",
        "answers": [
            "A. Load data in Cloud Datastore and run a SQL query against it.",
            "B. Create a BigQuery table and load data in BigQuery. Run a SQL query on this table and drop this table after you complete your request.",
            "C. Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.",
            "D. Create a Hadoop cluster and copy the AVRO file to NDFS by compressing it. Load the file in a hive table and provide access to your analysts so that they can run SQL queries."
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 86,
        "question": "You need to verify that a Google Cloud Platform service account was created at a particular time. What should you do?",
        "answers": [
            "A. Filter the Activity log to view the Configuration category. Filter the Resource type to Service Account.",
            "B. Filter the Activity log to view the Configuration category. Filter the Resource type to Google Project.",
            "C. Filter the Activity log to view the Data Access category. Filter the Resource type to Service Account.",
            "D. Filter the Activity log to view the Data Access category. Filter the Resource type to Google Project."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 87,
        "question": "You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?",
        "answers": [
            "A. Add the network tag allow-udp-636 to the VM instance running the LDAP server.",
            "B. Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.",
            "C. Add a network tag of your choice to the instance. Create a firewall rule to allow ingress on UDP port 636 for that network tag.",
            "D. Add a network tag of your choice to the instance running the LDAP server. Create a firewall rule to allow egress on UDP port 636 for that network tag."
        ],
        "correct_answer": "C",
        "category": "Compute Engine"
    },
    {
        "question_number": 88,
        "question": "You need to set a budget alert for use of Compute Engineer services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?",
        "answers": [
            "A. Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.",
            "B. Verify that you are the project billing administrator. Select the associated billing account and create a budget and a custom alert.",
            "C. Verify that you are the project administrator. Select the associated billing account and create a budget for the appropriate project.",
            "D. Verify that you are project administrator. Select the associated billing account and create a budget and a custom alert."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 89,
        "question": "You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?",
        "answers": [
            "A. When creating the VM, use machine type n1-standard-96.",
            "B. When creating the VM, use Intel Skylake as the CPU platform.",
            "C. Create the VM using Compute Engine default settings. Use gcloud to modify the running instance to have 96 vCPUs.",
            "D. Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 90,
        "question": "You want to configure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?",
        "answers": [
            "A. Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.",
            "B. Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.",
            "C. Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.",
            "D. Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 91,
        "question": "Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on GoogleCloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
        "answers": [
            "A. In Google Cloud, configure the VPC as a host for Shared VPC.",
            "B. In Google Cloud, configure the VPC for VPC Network Peering.",
            "C. Create bastion hosts both in your on-premises environment and on Google Cloud. Configure both as proxy servers using their public IP addresses.",
            "D. Set up Cloud VPN between the infrastructure on-premises and Google Cloud."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 92,
        "question": "You want to select and configure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?",
        "answers": [
            "A. Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
            "B. Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
            "C. Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
            "D. Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage."
        ],
        "correct_answer": "D",
        "category": "Security & Encryption"
    },
    {
        "question_number": 93,
        "question": "Your company uses BigQuery for data warehousing. Over time, many different business units in your company have created 1000+ datasets across hundreds of projects. Your CIO wants you to examine all datasets to find tables that contain an employee_ssn column. You want to minimize effort in performing this task.What should you do?",
        "answers": [
            "A. Go to Data Catalog and search for employee_ssn in the search box.",
            "B. Write a shell script that uses the bq command line tool to loop through all the projects in your organization.",
            "C. Write a script that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find the employee_ssn column.",
            "D. Write a Cloud Dataflow job that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find employee_ssn column."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 94,
        "question": "You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status:What is the most likely cause?",
        "answers": [
            "A. The pending Pod's resource requests are too large to fit on a single node of the cluster.",
            "B. Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.",
            "C. The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.",
            "D. The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node."
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 95,
        "question": "You want to find out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?",
        "answers": [
            "A. Open the Cloud Spanner console to review configurations.",
            "B. Open the IAM & admin console to review IAM policies for Cloud Spanner roles.",
            "C. Go to the Stackdriver Monitoring console and review information for Cloud Spanner.",
            "D. Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 96,
        "question": "Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)",
        "answers": [
            "A. Split the users from business units to multiple projects.",
            "B. Apply a user- or project-level custom query quota for BigQuery data warehouse.",
            "C. Create separate copies of your BigQuery data warehouse for each business unit.",
            "D. Split your BigQuery data warehouse into multiple data warehouses for each business unit.",
            "E. Change your BigQuery query model from on-demand to flat rate. Apply the appropriate number of slots to each Project."
        ],
        "correct_answer": "BE",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 98,
        "question": "Your customer has implemented a solution that uses Cloud Spanner and notices some read latency-related performance issues on one table. This table is accessed only by their users using a primary key. The table schema is shown below.You want to resolve the issue. What should you do?",
        "answers": [
            "A. Remove the profile_picture field from the table.",
            "B. Add a secondary index on the person_id column.",
            "C. Change the primary key to not have monotonically increasing values.",
            "D. Create a secondary index using the following Data Definition Language (DDL):"
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 99,
        "question": "Your finance team wants to view the billing report for your projects. You want to make sure that the finance team does not get additional permissions to the project. What should you do?",
        "answers": [
            "A. Add the group for the finance team to roles/billing user role.",
            "B. Add the group for the finance team to roles/billing admin role.",
            "C. Add the group for the finance team to roles/billing viewer role.",
            "D. Add the group for the finance team to roles/billing project/Manager role."
        ],
        "correct_answer": "C",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 100,
        "question": "Your organization has strict requirements to control access to Google Cloud projects. You need to enable your Site Reliability Engineers (SREs) to approve requests from the Google Cloud support team when an SRE opens a support case. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Add your SREs to roles/iam.roleAdmin role.",
            "B. Add your SREs to roles/accessapproval.approver role.",
            "C. Add your SREs to a group and then add this group to roles/iam.roleAdmin.role.",
            "D. Add your SREs to a group and then add this group to roles/accessapproval.approver role."
        ],
        "correct_answer": "D",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 101,
        "question": "You need to copy millions of sensitive patient records from a relational database to BigQuery. The total size of the database is 10 TB. You need to design a solution that is secure and time-efficient. What should you do?",
        "answers": [
            "A. Export the records from the database as an Avro file. Upload the file to GCS using gsutil, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
            "B. Export the records from the database as an Avro file. Copy the file onto a Transfer Appliance and send it to Google, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
            "C. Export the records from the database into a CSV file. Create a public URL for the CSV file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the CSV file into BigQuery using the BigQuery web UI in the GCP Console.",
            "D. Export the records from the database as an Avro file. Create a public URL for the Avro file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the Avro file into BigQuery using the BigQuery web UI in the GCP Console."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 102,
        "question": "Your organization needs to grant users access to query datasets in BigQuery but prevent them from accidentally deleting the datasets. You want a solution that follows Google-recommended practices. What should you do?",
        "answers": [
            "A. Add users to roles/bigquery user role only, instead of roles/bigquery dataOwner.",
            "B. Add users to roles/bigquery dataEditor role only, instead of roles/bigquery dataOwner.",
            "C. Create a custom role by removing delete permissions, and add users to that role only.",
            "D. Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 103,
        "question": "You have a developer laptop with the Cloud SDK installed on Ubuntu. The Cloud SDK was installed from the Google Cloud Ubuntu package repository. You want to test your application locally on your laptop with Cloud Datastore. What should you do?",
        "answers": [
            "A. Export Cloud Datastore data using gcloud datastore export.",
            "B. Create a Cloud Datastore index using gcloud datastore indexes create.",
            "C. Install the google-cloud-sdk-datastore-emulator component using the apt get install command.",
            "D. Install the cloud-datastore-emulator component using the gcloud components install command."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 104,
        "question": "Your company set up a complex organizational structure on Google Cloud. The structure includes hundreds of folders and projects. Only a few team members should be able to view the hierarchical structure. You need to assign minimum permissions to these team members, and you want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Add the users to roles/browser role.",
            "B. Add the users to roles/iam.roleViewer role.",
            "C. Add the users to a group, and add this group to roles/browser.",
            "D. Add the users to a group, and add this group to roles/iam.roleViewer role."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 105,
        "question": "Your company has a single sign-on (SSO) identity provider that supports Security Assertion Markup Language (SAML) integration with service providers. Your company has users in Cloud Identity. You would like users to authenticate using your company's SSO provider. What should you do?",
        "answers": [
            "A. In Cloud Identity, set up SSO with Google as an identity provider to access custom SAML apps.",
            "B. In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.",
            "C. Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Mobile & Desktop Apps.",
            "D. Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Web Server Applications."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 106,
        "question": "Your organization has a dedicated person who creates and manages all service accounts for Google Cloud projects. You need to assign this person the minimum role for projects. What should you do?",
        "answers": [
            "A. Add the user to roles/iam.roleAdmin role.",
            "B. Add the user to roles/iam.securityAdmin role.",
            "C. Add the user to roles/iam.serviceAccountUser role.",
            "D. Add the user to roles/iam.serviceAccountAdmin role."
        ],
        "correct_answer": "D",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 107,
        "question": "You are building an archival solution for your data warehouse and have selected Cloud Storage to archive your data. Your users need to be able to access this archived data once a quarter for some regulatory requirements. You want to select a cost-efficient option. Which storage option should you use?",
        "answers": [
            "A. Cold Storage",
            "B. Nearline Storage",
            "C. Regional Storage",
            "D. Multi-Regional Storage"
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 108,
        "question": "A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long-running, non- restartable jobs. You want to minimize cost. What should you do?",
        "answers": [
            "A. Enable node auto-provisioning on the GKE cluster.",
            "B. Create a VerticalPodAutscaler for those workloads.",
            "C. Create a node pool with preemptible VMs and GPUs attached to those VMs.",
            "D. Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 109,
        "question": "Your organization has user identities in Active Directory. Your organization wants to use Active Directory as their source of truth for identities. Your organization wants to have full control over the Google accounts used by employees for all Google services, including your Google Cloud Platform (GCP) organization. What should you do?",
        "answers": [
            "A. Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity.",
            "B. Use the cloud Identity APIs and write a script to synchronize users to Cloud Identity.",
            "C. Export users from Active Directory as a CSV and import them to Cloud Identity via the Admin Console.",
            "D. Ask each employee to create a Google account using self signup. Require that each employee use their company email address and password."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 110,
        "question": "You have successfully created a development environment in a project for an application. This application uses Compute Engine and Cloud SQL. Now you need to create a production environment for this application. The security team has forbidden the existence of network routes between these 2 environments and has asked you to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development environment.",
            "B. Create a new production subnet in the existing VPC and a new production Cloud SQL instance in your existing project, and deploy your application using those resources.",
            "C. Create a new project, modify your existing VPC to be a Shared VPC, share that VPC with your new project, and replicate the setup you have in the development environment in that new project in the Shared VPC.",
            "D. Ask the security team to grant you the Project Editor role in an existing production project used by another division of your company. Once they grant you that role, replicate the setup you have in the development environment in that project."
        ],
        "correct_answer": "A",
        "category": "Security & Encryption"
    },
    {
        "question_number": 111,
        "question": "Your management has asked an external auditor to review all the resources in a specific project. The security team has enabled the Organization Policy calledDomain Restricted Sharing on the organization node by specifying only your Cloud Identity domain. You want the auditor to only be able to view, but not modify, the resources in that project. What should you do?",
        "answers": [
            "A. Ask the auditor for their Google account, and give them the Viewer role on the project.",
            "B. Ask the auditor for their Google account, and give them the Security Reviewer role on the project.",
            "C. Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project.",
            "D. Create a temporary account for the auditor in Cloud Identity, and give that account the Security Reviewer role on the project."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 112,
        "question": "You have a workload running on Compute Engine that is critical to your business. You want to ensure that the data on the boot disk of this workload is backed up regularly. You need to be able to restore a backup as quickly as possible in case of disaster. You also want older backups to be cleaned automatically to save on cost. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Create a Cloud Function to create an instance template.",
            "B. Create a snapshot schedule for the disk using the desired interval.",
            "C. Create a cron job to create a new disk from the disk using gcloud.",
            "D. Create a Cloud Task to create an image and export it to Cloud Storage."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 113,
        "question": "You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor needs to have permissions to review yourGoogle Cloud Platform (GCP) Audit Logs and also to review your Data Access logs. What should you do?",
        "answers": [
            "A. Assign the auditor the IAM role roles/logging.privateLogViewer. Perform the export of logs to Cloud Storage.",
            "B. Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy.",
            "C. Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Perform the export of logs to Cloud Storage.",
            "D. Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Direct the auditor to also review the logs for changes to Cloud IAM policy."
        ],
        "correct_answer": "B",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 114,
        "question": "You are managing several Google Cloud Platform (GCP) projects and need access to all logs for the past 60 days. You want to be able to explore and quickly analyze the log contents. You want to follow Google-recommended practices to obtain the combined logs for all projects. What should you do?",
        "answers": [
            "A. Navigate to Stackdriver Logging and select resource.labels.project_id=\"*\"",
            "B. Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Configure the table expiration to 60 days.",
            "C. Create a Stackdriver Logging Export with a Sink destination to Cloud Storage. Create a lifecycle rule to delete objects after 60 days.",
            "D. Configure a Cloud Scheduler job to read from Stackdriver and store the logs in BigQuery. Configure the table expiration to 60 days."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 115,
        "question": "You need to reduce GCP service costs for a division of your company using the fewest possible steps. You need to turn off all configured services in an existingGCP project. What should you do?",
        "answers": [
            "A. 1. Verify that you are assigned the Project Owners IAM role for this project. 2. Locate the project in the GCP console, click Shut down and then enter the project ID.",
            "B. 1. Verify that you are assigned the Project Owners IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them.",
            "C. 1. Verify that you are assigned the Organizational Administrator IAM role for this project. 2. Locate the project in the GCP console, enter the project ID and then click Shut down.",
            "D. 1. Verify that you are assigned the Organizational Administrators IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 116,
        "question": "You are configuring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in crm-databases-proj. You want to follow Google-recommended practices to give access to the service account in the web-applications project. What should you do?",
        "answers": [
            "A. Give \u05d2\u20acproject owner\u05d2\u20ac for web-applications appropriate roles to crm-databases-proj.",
            "B. Give \u05d2\u20acproject owner\u05d2\u20ac role to crm-databases-proj and the web-applications project.",
            "C. Give \u05d2\u20acproject owner\u05d2\u20ac role to crm-databases-proj and bigquery.dataViewer role to web-applications.",
            "D. Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 117,
        "question": "An employee was terminated, but their access to Google Cloud was not removed until 2 weeks later. You need to find out if this employee accessed any sensitive customer information after their termination. What should you do?",
        "answers": [
            "A. View System Event Logs in Cloud Logging. Search for the user's email as the principal.",
            "B. View System Event Logs in Cloud Logging. Search for the service account associated with the user.",
            "C. View Data Access audit logs in Cloud Logging. Search for the user's email as the principal.",
            "D. View the Admin Activity log in Cloud Logging. Search for the service account associated with the user."
        ],
        "correct_answer": "C",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 118,
        "question": "You need to create a custom IAM role for use with a GCP service. All permissions in the role must be suitable for production use. You also want to clearly share with your organization the status of the custom role. This will be the first version of the custom role. What should you do?",
        "answers": [
            "A. Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
            "B. Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to BETA while testing the role permissions.",
            "C. Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
            "D. Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to BETA while testing the role permissions."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 119,
        "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?",
        "answers": [
            "A. Upload the data to BigQuery using the bq command line tool.",
            "B. Upload the data to Cloud Storage using the gsutil command line tool.",
            "C. Upload the data into Cloud SQL using the import function in the console.",
            "D. Upload the data into Cloud Spanner using the import function in the console."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 120,
        "question": "You need to manage multiple Google Cloud projects in the fewest steps possible. You want to configure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple projects. What should you do?",
        "answers": [
            "A. 1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
            "B. 1. Create a configuration for each project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project",
            "C. 1. Use the default configuration for one project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
            "D. 1. Use the default configuration for one project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 121,
        "question": "Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to maintain the number of running instances specified by the template to be able to process expected application traffic. What should you do?",
        "answers": [
            "A. Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
            "B. Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
            "C. Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
            "D. Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 122,
        "question": "Your company is moving from an on-premises environment to Google Cloud. You have multiple development teams that use Cassandra environments as backend databases. They all need a development environment that is isolated from other Cassandra instances. You want to move to Google Cloud quickly and with minimal support effort. What should you do?",
        "answers": [
            "A. 1. Build an instruction guide to install Cassandra on Google Cloud. 2. Make the instruction guide accessible to your developers.",
            "B. 1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.",
            "C. 1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Use the snapshot to create instances for your developers.",
            "D. 1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Upload the snapshot to Cloud Storage and make it accessible to your developers. 3. Build instructions to create a Compute Engine instance from the snapshot so that developers can do it themselves."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 123,
        "question": "You have a Compute Engine instance hosting a production application. You want to receive an email if the instance consumes more than 90% of its CPU resources for more than 15 minutes. You want to use Google services. What should you do?",
        "answers": [
            "A. 1. Create a consumer Gmail account. 2. Write a script that monitors the CPU usage. 3. When the CPU usage exceeds the threshold, have that script send an email using the Gmail account and smtp.gmail.com on port 25 as SMTP server.",
            "B. 1. Create a Cloud Monitoring Workspace and associate your Google Cloud Platform (GCP) project with it. 2. Create a Cloud Monitoring Alerting Policy that uses the threshold as a trigger condition. 3. Configure your email address in the notification channel.",
            "C. 1. Create a Cloud Monitoring Workspace and associate your GCP project with it. 2. Write a script that monitors the CPU usage and sends it as a custom metric to Cloud Monitoring. 3. Create an uptime check for the instance in Cloud Monitoring.",
            "D. 1. In Cloud Logging, create a logs-based metric to extract the CPU usage by using this regular expression: CPU Usage: ([0-9] {1,3})% 2. In Cloud Monitoring, create an Alerting Policy based on this metric. 3. Configure your email address in the notification channel."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 124,
        "question": "You have an application that uses Cloud Spanner as a backend database. The application has a very predictable traffic pattern. You want to automatically scale up or down the number of Spanner nodes depending on traffic. What should you do?",
        "answers": [
            "A. Create a cron job that runs on a scheduled basis to review Cloud Monitoring metrics, and then resize the Spanner instance accordingly.",
            "B. Create a Cloud Monitoring alerting policy to send an alert to oncall SRE emails when Cloud Spanner CPU exceeds the threshold. SREs would scale resources up or down accordingly.",
            "C. Create a Cloud Monitoring alerting policy to send an alert to Google Cloud Support email when Cloud Spanner CPU exceeds your threshold. Google support would scale resources up or down accordingly.",
            "D. Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 125,
        "question": "Your company publishes large files on an Apache web server that runs on a Compute Engine instance. The Apache web server is not the only application running in the project. You want to receive an email when the egress network costs for the server exceed 100 dollars for the current month as measured by Google Cloud.What should you do?",
        "answers": [
            "A. Set up a budget alert on the project with an amount of 100 dollars, a threshold of 100%, and notification type of \u05d2\u20acemail.\u05d2\u20ac",
            "B. Set up a budget alert on the billing account with an amount of 100 dollars, a threshold of 100%, and notification type of \u05d2\u20acemail.\u05d2\u20ac",
            "C. Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and sends an email if it is over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.",
            "D. Use the Cloud Logging Agent to export the Apache web server logs to Cloud Logging. Create a Cloud Function that uses BigQuery to parse the HTTP response log data in Cloud Logging for the current month and sends an email if the size of all HTTP responses, multiplied by current Google Cloud egress prices, totals over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 126,
        "question": "You have designed a solution on Google Cloud that uses multiple Google Cloud products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
        "answers": [
            "A. For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.",
            "B. For each Google Cloud product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
            "C. Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Cloud Console. Multiply the 1 week cost to determine the monthly costs.",
            "D. Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Use Cloud Monitoring to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 127,
        "question": "You have an application that receives SSL-encrypted TCP traffic on port 443. Clients for this application are located all over the world. You want to minimize latency for the clients. Which load balancing option should you use?",
        "answers": [
            "A. HTTPS Load Balancer",
            "B. Network Load Balancer",
            "C. SSL Proxy Load Balancer",
            "D. Internal TCP/UDP Load Balancer. Add a firewall rule allowing ingress traffic from 0.0.0.0/0 on the target instances."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 128,
        "question": "You have an application on a general-purpose Compute Engine instance that is experiencing excessive disk read throttling on its Zonal SSD Persistent Disk. The application primarily reads large files from disk. The disk size is currently 350 GB. You want to provide the maximum amount of throughput while minimizing costs.What should you do?",
        "answers": [
            "A. Increase the size of the disk to 1 TB.",
            "B. Increase the allocated CPU to the instance.",
            "C. Migrate to use a Local SSD on the instance.",
            "D. Migrate to use a Regional SSD on the instance."
        ],
        "correct_answer": "C",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 129,
        "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnet with range 172.16.20.128/25. There are no private IP addresses available in the VPC network. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
        "answers": [
            "A. Modify the existing subnet range to 172.16.20.0/24.",
            "B. Create a new Secondary IP Range in the VPC and configure the VMs to use that range.",
            "C. Create a new VPC network for the VMs. Enable VPC Peering between the VMs' VPC network and the Dataproc cluster VPC network.",
            "D. Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 130,
        "question": "You manage an App Engine Service that aggregates and visualizes data from BigQuery. The application is deployed with the default App Engine Service account.The data that needs to be visualized resides in a different project managed by another team. You do not have access to this project, but you want your application to be able to read data from the BigQuery dataset. What should you do?",
        "answers": [
            "A. Ask the other team to grant your default App Engine Service account the role of BigQuery Job User.",
            "B. Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.",
            "C. In Cloud IAM of your project, ensure that the default App Engine service account has the role of BigQuery Data Viewer.",
            "D. In Cloud IAM of your project, grant a newly created service account from the other team the role of BigQuery Job User in your project."
        ],
        "correct_answer": "B",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 131,
        "question": "You need to create a copy of a custom Compute Engine virtual machine (VM) to facilitate an expected increase in application traffic due to a business acquisition.What should you do?",
        "answers": [
            "A. Create a Compute Engine snapshot of your base VM. Create your images from that snapshot.",
            "B. Create a Compute Engine snapshot of your base VM. Create your instances from that snapshot.",
            "C. Create a custom Compute Engine image from a snapshot. Create your images from that image.",
            "D. Create a custom Compute Engine image from a snapshot. Create your instances from that image."
        ],
        "correct_answer": "D",
        "category": "Compute Engine"
    },
    {
        "question_number": 132,
        "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
        "answers": [
            "A. Navigate to Cloud Logging and view the application logs.",
            "B. Connect to the instance's serial console and read the application logs.",
            "C. Configure a Health Check on the instance and set a Low Healthy Threshold value.",
            "D. Install and configure the Cloud Logging Agent and view the logs from Cloud Logging."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 133,
        "question": "An application generates daily reports in a Compute Engine virtual machine (VM). The VM is in the project corp-iot-insights. Your team operates only in the project corp-aggregate-reports and needs a copy of the daily exports in the bucket corp-aggregate-reports-storage. You want to configure access so that the daily reports from the VM are available in the bucket corp-aggregate-reports-storage and use as few steps as possible while following Google-recommended practices. What should you do?",
        "answers": [
            "A. Move both projects under the same folder.",
            "B. Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.",
            "C. Create a Shared VPC network between both projects. Grant the VM Service Account the role Storage Object Creator on corp-iot-insights.",
            "D. Make corp-aggregate-reports-storage public and create a folder with a pseudo-randomized suffix name. Share the folder with the IoT team."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 134,
        "question": "You built an application on your development laptop that uses Google Cloud services. Your application uses Application Default Credentials for authentication and works fine on your development laptop. You want to migrate this application to a Compute Engine virtual machine (VM) and set up authentication using Google- recommended practices and minimal changes. What should you do?",
        "answers": [
            "A. Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
            "B. Create a service account with appropriate access for Google services, and configure the application to use this account.",
            "C. Store credentials for service accounts with appropriate access for Google services in a config file, and deploy this config file with your application.",
            "D. Store credentials for your user account with appropriate access for Google services in a config file, and deploy this config file with your application."
        ],
        "correct_answer": "B",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 135,
        "question": "You need to create a Compute Engine instance in a new project that doesn't exist yet. What should you do?",
        "answers": [
            "A. Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.",
            "B. Enable the Compute Engine API in the Cloud Console, use the Cloud SDK to create the instance, and then use the --project flag to specify a new project.",
            "C. Using the Cloud SDK, create the new instance, and use the --project flag to specify the new project. Answer yes when prompted by Cloud SDK to enable the Compute Engine API.",
            "D. Enable the Compute Engine API in the Cloud Console. Go to the Compute Engine section of the Console to create a new instance, and look for the Create In A New Project option in the creation form."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 136,
        "question": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
        "answers": [
            "A. Migrate the workload to a Compute Engine Preemptible VM.",
            "B. Migrate the workload to a Google Kubernetes Engine cluster with Preemptible nodes.",
            "C. Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
            "D. Create an Instance Template with Preemptible VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload."
        ],
        "correct_answer": "C",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 137,
        "question": "You are developing a new application and are looking for a Jenkins installation to build and deploy your source code. You want to automate the installation as quickly and easily as possible. What should you do?",
        "answers": [
            "A. Deploy Jenkins through the Google Cloud Marketplace.",
            "B. Create a new Compute Engine instance. Run the Jenkins executable.",
            "C. Create a new Kubernetes Engine cluster. Create a deployment for the Jenkins image.",
            "D. Create an instance template with the Jenkins executable. Create a managed instance group with this template."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 138,
        "question": "You have downloaded and installed the gcloud command line interface (CLI) and have authenticated with your Google Account. Most of your Compute Engine instances in your project run in the europe-west1-d zone. You want to avoid having to specify this zone with each CLI command when managing these instances.What should you do?",
        "answers": [
            "A. Set the europe-west1-d zone as the default zone using the gcloud config subcommand.",
            "B. In the Settings page for Compute Engine under Default location, set the zone to europe\u05d2\u20ac\"west1-d.",
            "C. In the CLI installation directory, create a file called default.conf containing zone=europe\u05d2\u20ac\"west1\u05d2\u20ac\"d.",
            "D. Create a Metadata entry on the Compute Engine page with key compute/zone and value europe\u05d2\u20ac\"west1\u05d2\u20ac\"d."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 139,
        "question": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput `\" up to thousands of events per hour per device `\" and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
        "answers": [
            "A. Create a file in Cloud Storage per device and append new data to that file.",
            "B. Create a file in Cloud Filestore per device and append new data to that file.",
            "C. Ingest the data into Datastore. Store data in an entity group based on the device.",
            "D. Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 140,
        "question": "You are asked to set up application performance monitoring on Google Cloud projects A, B, and C as a single pane of glass. You want to monitor CPU, memory, and disk. What should you do?",
        "answers": [
            "A. Enable API and then share charts from project A, B, and C.",
            "B. Enable API and then give the metrics.reader role to projects A, B, and C.",
            "C. Enable API and then use default dashboards to view all projects in sequence.",
            "D. Enable API, create a workspace under project A, and then add projects B and C."
        ],
        "correct_answer": "D",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 141,
        "question": "You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
        "answers": [
            "A. Configure Billing Data Export to BigQuery and visualize the data in Data Studio.",
            "B. Visit the Cost Table page to get a CSV export and visualize it using Data Studio.",
            "C. Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
            "D. Use the Reports view in the Cloud Billing Console to view the desired cost information."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 142,
        "question": "Your company has workloads running on Compute Engine and on-premises. The Google Cloud Virtual Private Cloud (VPC) is connected to your WAN over aVirtual Private Network (VPN). You need to deploy a new Compute Engine instance and ensure that no public Internet traffic can be routed to it. What should you do?",
        "answers": [
            "A. Create the instance without a public IP address.",
            "B. Create the instance with Private Google Access enabled.",
            "C. Create a deny-all egress firewall rule on the VPC network.",
            "D. Create a route on the VPC to route all traffic to the instance over the VPN tunnel."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 143,
        "question": "Your team maintains the infrastructure for your organization. The current infrastructure requires changes. You need to share your proposed changes with the rest of the team. You want to follow Google's recommended best practices. What should you do?",
        "answers": [
            "A. Use Deployment Manager templates to describe the proposed changes and store them in a Cloud Storage bucket.",
            "B. Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
            "C. Apply the changes in a development environment, run gcloud compute instances list, and then save the output in a shared Storage bucket.",
            "D. Apply the changes in a development environment, run gcloud compute instances list, and then save the output in Cloud Source Repositories."
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 144,
        "question": "You have a Compute Engine instance hosting an application used between 9 AM and 6 PM on weekdays. You want to back up this instance daily for disaster recovery purposes. You want to keep the backups for 30 days. You want the Google-recommended solution with the least management overhead and the least number of services. What should you do?",
        "answers": [
            "A. 1. Update your instances' metadata to add the following value: snapshot\u05d2\u20ac\"schedule: 0 1 * * * 2. Update your instances' metadata to add the following value: snapshot\u05d2\u20ac\"retention: 30",
            "B. 1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. 2. In the Snapshot Schedule section, select Create Schedule and configure the following parameters: - Schedule frequency: Daily - Start time: 1:00 AM \u05d2\u20ac\" 2:00 AM - Autodelete snapshots after: 30 days",
            "C. 1. Create a Cloud Function that creates a snapshot of your instance's disk. 2. Create a Cloud Function that deletes snapshots that are older than 30 days. 3. Use Cloud Scheduler to trigger both Cloud Functions daily at 1:00 AM.",
            "D. 1. Create a bash script in the instance that copies the content of the disk to Cloud Storage. 2. Create a bash script in the instance that deletes data older than 30 days in the backup Cloud Storage bucket. 3. Configure the instance's crontab to execute these scripts daily at 1:00 AM."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 145,
        "question": "Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1`\"standard`\"2 nodes. You need to deploy additional pods requiring n2`\"highmem`\"16 nodes without any downtime. What should you do?",
        "answers": [
            "A. Use gcloud container clusters upgrade. Deploy the new services.",
            "B. Create a new Node Pool and specify machine type n2\u05d2\u20ac\"highmem\u05d2\u20ac\"16. Deploy the new pods.",
            "C. Create a new cluster with n2\u05d2\u20ac\"highmem\u05d2\u20ac\"16 nodes. Redeploy the pods and delete the old cluster.",
            "D. Create a new cluster with both n1\u05d2\u20ac\"standard\u05d2\u20ac\"2 and n2\u05d2\u20ac\"highmem\u05d2\u20ac\"16 nodes. Redeploy the pods and delete the old cluster."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 146,
        "question": "You have an application that uses Cloud Spanner as a database backend to keep current state information about users. Cloud Bigtable logs all events triggered by users. You export Cloud Spanner data to Cloud Storage during daily backups. One of your analysts asks you to join data from Cloud Spanner and CloudBigtable for specific users. You want to complete this ad hoc request as efficiently as possible. What should you do?",
        "answers": [
            "A. Create a dataflow job that copies data from Cloud Bigtable and Cloud Storage for specific users.",
            "B. Create a dataflow job that copies data from Cloud Bigtable and Cloud Spanner for specific users.",
            "C. Create a Cloud Dataproc cluster that runs a Spark job to extract data from Cloud Bigtable and Cloud Storage for specific users.",
            "D. Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables through user fields, and apply appropriate filters."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 147,
        "question": "You are hosting an application from Compute Engine virtual machines (VMs) in us`\"central1`\"a. You want to adjust your design to support the failure of a singleCompute Engine zone, eliminate downtime, and minimize cost. What should you do?",
        "answers": [
            "A. \u05d2\u20ac\" Create Compute Engine resources in us\u05d2\u20ac\"central1\u05d2\u20ac\"b. \u05d2\u20ac\" Balance the load across both us\u05d2\u20ac\"central1\u05d2\u20ac\"a and us\u05d2\u20ac\"central1\u05d2\u20ac\"b.",
            "B. \u05d2\u20ac\" Create a Managed Instance Group and specify us\u05d2\u20ac\"central1\u05d2\u20ac\"a as the zone. \u05d2\u20ac\" Configure the Health Check with a short Health Interval.",
            "C. \u05d2\u20ac\" Create an HTTP(S) Load Balancer. \u05d2\u20ac\" Create one or more global forwarding rules to direct traffic to your VMs.",
            "D. \u05d2\u20ac\" Perform regular backups of your application. \u05d2\u20ac\" Create a Cloud Monitoring Alert and be notified if your application becomes unavailable. \u05d2\u20ac\" Restore from backups when notified."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 148,
        "question": "A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the ProjectOwner role. What should you do?",
        "answers": [
            "A. In the console, validate which SSH keys have been stored as project-wide keys.",
            "B. Navigate to Identity-Aware Proxy and check the permissions for these resources.",
            "C. Enable Audit Logs on the IAM & admin page for all resources, and validate the results.",
            "D. Use the command gcloud projects get\u05d2\u20ac\"iam\u05d2\u20ac\"policy to view the current role assignments."
        ],
        "correct_answer": "D",
        "category": "Security & Encryption"
    },
    {
        "question_number": 149,
        "question": "You are running multiple VPC-native Google Kubernetes Engine clusters in the same subnet. The IPs available for the nodes are exhausted, and you want to ensure that the clusters can grow in nodes when needed. What should you do?",
        "answers": [
            "A. Create a new subnet in the same region as the subnet being used.",
            "B. Add an alias IP range to the subnet used by the GKE clusters.",
            "C. Create a new VPC, and set up VPC peering with the existing VPC.",
            "D. Expand the CIDR range of the relevant subnet for the cluster."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 150,
        "question": "You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
        "answers": [
            "A. Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs.",
            "B. Run a test using simulated maintenance events. If the test is successful, use N1 Standard VMs when running future jobs.",
            "C. Run a test using a managed instance group. If the test is successful, use N1 Standard VMs in the managed instance group when running future jobs.",
            "D. Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 151,
        "question": "You are working with a user to set up an application in a new VPC behind a firewall. The user is concerned about data egress. You want to configure the fewest open egress ports. What should you do?",
        "answers": [
            "A. Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports.",
            "B. Set up a high-priority (1000) rule that pairs both ingress and egress ports.",
            "C. Set up a high-priority (1000) rule that blocks all egress and a low-priority (65534) rule that allows only the appropriate ports.",
            "D. Set up a high-priority (1000) rule to allow the appropriate ports."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 152,
        "question": "Your company runs its Linux workloads on Compute Engine instances. Your company will be working with a new operations partner that does not use GoogleAccounts. You need to grant access to the instances to your operations partner so they can maintain the installed tooling. What should you do?",
        "answers": [
            "A. Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User.",
            "B. Tag all the instances with the same network tag. Create a firewall rule in the VPC to grant TCP access on port 22 for traffic from the operations partner to instances with the network tag.",
            "C. Set up Cloud VPN between your Google Cloud VPC and the internal network of the operations partner.",
            "D. Ask the operations partner to generate SSH key pairs, and add the public keys to the VM instances."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 153,
        "question": "You have created a code snippet that should be triggered whenever a new file is uploaded to a Cloud Storage bucket. You want to deploy this code snippet. What should you do?",
        "answers": [
            "A. Use App Engine and configure Cloud Scheduler to trigger the application using Pub/Sub.",
            "B. Use Cloud Functions and configure the bucket as a trigger resource.",
            "C. Use Google Kubernetes Engine and configure a CronJob to trigger the application using Pub/Sub.",
            "D. Use Dataflow as a batch job, and configure the bucket as a data source."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 154,
        "question": "You have been asked to set up Object Lifecycle Management for objects stored in storage buckets. The objects are written once and accessed frequently for 30 days. After 30 days, the objects are not read again unless there is a special need. The objects should be kept for three years, and you need to minimize cost.What should you do?",
        "answers": [
            "A. Set up a policy that uses Nearline storage for 30 days and then moves to Archive storage for three years.",
            "B. Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years.",
            "C. Set up a policy that uses Nearline storage for 30 days, then moves the Coldline for one year, and then moves to Archive storage for two years.",
            "D. Set up a policy that uses Standard storage for 30 days, then moves to Coldline for one year, and then moves to Archive storage for two years."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 155,
        "question": "You are storing sensitive information in a Cloud Storage bucket. For legal reasons, you need to be able to record all requests that read any of the stored data. You want to make sure you comply with these requirements. What should you do?",
        "answers": [
            "A. Enable the Identity Aware Proxy API on the project.",
            "B. Scan the bucket using the Data Loss Prevention API.",
            "C. Allow only a single Service Account access to read the data.",
            "D. Enable Data Access audit logs for the Cloud Storage API."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 156,
        "question": "You are the team lead of a group of 10 developers. You provided each developer with an individual Google Cloud Project that they can use as their personal sandbox to experiment with different Google Cloud solutions. You want to be notified if any of the developers are spending above $500 per month on their sandbox environment. What should you do?",
        "answers": [
            "A. Create a single budget for all projects and configure budget alerts on this budget.",
            "B. Create a separate billing account per sandbox project and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per billing account.",
            "C. Create a budget per project and configure budget alerts on all of these budgets.",
            "D. Create a single billing account for all sandbox projects and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per project."
        ],
        "correct_answer": "C",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 157,
        "question": "You are deploying a production application on Compute Engine. You want to prevent anyone from accidentally destroying the instance by clicking the wrong button. What should you do?",
        "answers": [
            "A. Disable the flag \u05d2\u20acDelete boot disk when instance is deleted.\u05d2\u20ac",
            "B. Enable delete protection on the instance.",
            "C. Disable Automatic restart on the instance.",
            "D. Enable Preemptibility on the instance."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 158,
        "question": "Your company uses a large number of Google Cloud services centralized in a single project. All teams have specific projects for testing and development. TheDevOps team needs access to all of the production services in order to perform their job. You want to prevent Google Cloud product changes from broadening their permissions in the future. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Grant all members of the DevOps team the role of Project Editor on the organization level.",
            "B. Grant all members of the DevOps team the role of Project Editor on the production project.",
            "C. Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.",
            "D. Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the organization level."
        ],
        "correct_answer": "C",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 159,
        "question": "You are building an application that processes data files uploaded from thousands of suppliers. Your primary goals for the application are data security and the expiration of aged data. You need to design the application to:* Restrict access so that suppliers can access only their own data.* Give suppliers write access to data only for 30 minutes.* Delete data that is over 45 days old.You have a very short development cycle, and you need to make sure that the application requires minimal maintenance. Which two strategies should you use?(Choose two.)",
        "answers": [
            "A. Build a lifecycle policy to delete Cloud Storage objects after 45 days.",
            "B. Use signed URLs to allow suppliers limited time access to store their objects.",
            "C. Set up an SFTP server for your application, and create a separate user for each supplier.",
            "D. Build a Cloud function that triggers a timer of 45 days to delete objects that have expired.",
            "E. Develop a script that loops through all Cloud Storage buckets and deletes any buckets that are older than 45 days."
        ],
        "correct_answer": "AB",
        "category": "Security & Encryption"
    },
    {
        "question_number": 160,
        "question": "Your company wants to standardize the creation and management of multiple Google Cloud resources using Infrastructure as Code. You want to minimize the amount of repetitive code needed to manage the environment. What should you do?",
        "answers": [
            "A. Develop templates for the environment using Cloud Deployment Manager.",
            "B. Use curl in a terminal to send a REST request to the relevant Google API for each individual resource.",
            "C. Use the Cloud Console interface to provision and manage all related resources.",
            "D. Create a bash script that contains all requirement steps as gcloud commands."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 161,
        "question": "You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google CloudProject. What should you do?",
        "answers": [
            "A. Enable Audit Logs for all APIs that are related to data storage.",
            "B. Review the IAM permissions for any role that allows for data access.",
            "C. Review the Identity-Aware Proxy settings for each resource.",
            "D. Create a Data Loss Prevention job."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 162,
        "question": "Your company has embraced a hybrid cloud strategy where some of the applications are deployed on Google Cloud. A Virtual Private Network (VPN) tunnel connects your Virtual Private Cloud (VPC) in Google Cloud with your company's on-premises network. Multiple applications in Google Cloud need to connect to an on-premises database server, and you want to avoid having to change the IP configuration in all of your applications when the IP of the database changes.What should you do?",
        "answers": [
            "A. Configure Cloud NAT for all subnets of your VPC to be used when egressing from the VM instances.",
            "B. Create a private zone on Cloud DNS, and configure the applications with the DNS name.",
            "C. Configure the IP of the database as custom metadata for each instance, and query the metadata server.",
            "D. Query the Compute Engine internal DNS from the applications to retrieve the IP of the database."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 163,
        "question": "You have developed a containerized web application that will serve internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?",
        "answers": [
            "A. Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero.",
            "B. Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.",
            "C. Deploy the container on App Engine flexible environment with autoscaling, and set the value min_instances to zero in the app.yaml.",
            "D. Deploy the container on App Engine flexible environment with manual scaling, and set the value instances to zero in the app.yaml."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 164,
        "question": "You have experimented with Google Cloud using your own credit card and expensed the costs to your company. Your company wants to streamline the billing process and charge the costs of your projects to their monthly invoice. What should you do?",
        "answers": [
            "A. Grant the financial team the IAM role of \u05d2\u20acBilling Account User\u05d2\u20ac on the billing account linked to your credit card.",
            "B. Set up BigQuery billing export and grant your financial department IAM access to query the data.",
            "C. Create a ticket with Google Billing Support to ask them to send the invoice to your company.",
            "D. Change the billing account of your projects to the billing account of your company."
        ],
        "correct_answer": "D",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 165,
        "question": "You are running a data warehouse on BigQuery. A partner company is offering a recommendation engine based on the data in your data warehouse. The partner company is also running their application on Google Cloud. They manage the resources in their own project, but they need access to the BigQuery dataset in your project. You want to provide the partner company with access to the dataset. What should you do?",
        "answers": [
            "A. Create a Service Account in your own project, and grant this Service Account access to BigQuery in your project.",
            "B. Create a Service Account in your own project, and ask the partner to grant this Service Account access to BigQuery in their project.",
            "C. Ask the partner to create a Service Account in their project, and have them give the Service Account access to BigQuery in their project.",
            "D. Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 166,
        "question": "Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specific percentage of your production users (canary deployment). What should you do?",
        "answers": [
            "A. Create a new service with the new version of the application. Split traffic between this version and the version that is currently running.",
            "B. Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.",
            "C. Create a new service with the new version of the application. Add an HTTP Load Balancer in front of both services.",
            "D. Create a new revision with the new version of the application. Add an HTTP Load Balancer in front of both revisions."
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 167,
        "question": "Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple virtual machines (VMs), and you want to expose the VMs over a single IP address. What should you do?",
        "answers": [
            "A. Configure an SSL Proxy load balancer in front of the application servers.",
            "B. Configure an Internal UDP load balancer in front of the application servers.",
            "C. Configure an External HTTP(s) load balancer in front of the application servers.",
            "D. Configure an External Network load balancer in front of the application servers."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 168,
        "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
        "answers": [
            "A. Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
            "B. Deploy a Dataflow job from the batch template, \u05d2\u20acDatastore to Cloud Storage.\u05d2\u20ac Schedule the batch job on the desired interval.",
            "C. Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.",
            "D. In the Cloud Console, go to Cloud Storage. Upload the relevant images to the appropriate bucket."
        ],
        "correct_answer": "C",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 169,
        "question": "Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
        "answers": [
            "A. Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage.",
            "B. Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs.",
            "C. Assign the appropriate permissions, and then use Cloud Monitoring to review metrics.",
            "D. Use the export logs API to provide the Admin Activity Audit Logs in the format they want."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 170,
        "question": "You received a JSON file that contained a private key of a Service Account in order to get access to several resources in a Google Cloud project. You downloaded and installed the Cloud SDK and want to use this private key for authentication and authorization when performing gcloud commands. What should you do?",
        "answers": [
            "A. Use the command gcloud auth login and point it to the private key.",
            "B. Use the command gcloud auth activate-service-account and point it to the private key.",
            "C. Place the private key file in the installation directory of the Cloud SDK and rename it to \u05d2\u20accredentials.json\u05d2\u20ac.",
            "D. Place the private key file in your home directory and rename it to \u05d2\u20acGOOGLE_APPLICATION_CREDENTIALS\u05d2\u20ac."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 171,
        "question": "You are working with a Cloud SQL MySQL database at your company. You need to retain a month-end copy of the database for three years for audit purposes.What should you do?",
        "answers": [
            "A. Set up an export job for the first of the month. Write the export file to an Archive class Cloud Storage bucket.",
            "B. Save the automatic first-of-the-month backup for three years. Store the backup file in an Archive class Cloud Storage bucket.",
            "C. Set up an on-demand backup for the first of the month. Write the backup to an Archive class Cloud Storage bucket.",
            "D. Convert the automatic first-of-the-month backup to an export file. Write the export file to a Coldline class Cloud Storage bucket."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 172,
        "question": "You are monitoring an application and receive user feedback that a specific error is spiking. You notice that the error is caused by a Service Account having insufficient permissions. You are able to solve the problem but want to be notified if the problem recurs. What should you do?",
        "answers": [
            "A. In the Log Viewer, filter the logs on severity 'Error' and the name of the Service Account.",
            "B. Create a sink to BigQuery to export all the logs. Create a Data Studio dashboard on the exported logs.",
            "C. Create a custom log-based metric for the specific error to be used in an Alerting Policy.",
            "D. Grant Project Owner access to the Service Account."
        ],
        "correct_answer": "C",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 173,
        "question": "You are developing a financial trading application that will be used globally. Data is stored and queried using a relational structure, and clients from all over the world should get the exact identical state of the data. The application will be deployed in multiple regions to provide the lowest latency to end users. You need to select a storage option for the application data while minimizing latency. What should you do?",
        "answers": [
            "A. Use Cloud Bigtable for data storage.",
            "B. Use Cloud SQL for data storage.",
            "C. Use Cloud Spanner for data storage.",
            "D. Use Firestore for data storage."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 174,
        "question": "You are about to deploy a new Enterprise Resource Planning (ERP) system on Google Cloud. The application holds the full database in-memory for fast data access, and you need to configure the most appropriate resources on Google Cloud for this application. What should you do?",
        "answers": [
            "A. Provision preemptible Compute Engine instances.",
            "B. Provision Compute Engine instances with GPUs attached.",
            "C. Provision Compute Engine instances with local SSDs attached.",
            "D. Provision Compute Engine instances with M1 machine type."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 175,
        "question": "You have developed an application that consists of multiple microservices, with each microservice packaged in its own Docker container image. You want to deploy the entire application on Google Kubernetes Engine so that each microservice can be scaled individually. What should you do?",
        "answers": [
            "A. Create and deploy a Custom Resource Definition per microservice.",
            "B. Create and deploy a Docker Compose File.",
            "C. Create and deploy a Job per microservice.",
            "D. Create and deploy a Deployment per microservice."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 176,
        "question": "You will have several applications running on different Compute Engine instances in the same project. You want to specify at a more granular level the service account each instance uses when calling Google Cloud APIs. What should you do?",
        "answers": [
            "A. When creating the instances, specify a Service Account for each instance.",
            "B. When creating the instances, assign the name of each Service Account as instance metadata.",
            "C. After starting the instances, use gcloud compute instances update to specify a Service Account for each instance.",
            "D. After starting the instances, use gcloud compute instances update to assign the name of the relevant Service Account as instance metadata."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 177,
        "question": "You are creating an application that will run on Google Kubernetes Engine. You have identified MongoDB as the most suitable database system for your application and want to deploy a managed MongoDB environment that provides a support SLA. What should you do?",
        "answers": [
            "A. Create a Cloud Bigtable cluster, and use the HBase API.",
            "B. Deploy MongoDB Atlas from the Google Cloud Marketplace.",
            "C. Download a MongoDB installation package, and run it on Compute Engine instances.",
            "D. Download a MongoDB installation package, and run it on a Managed Instance Group."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 178,
        "question": "You are managing a project for the Business Intelligence (BI) department in your company. A data pipeline ingests data into BigQuery via streaming. You want the users in the BI department to be able to run the custom SQL queries against the latest data in BigQuery. What should you do?",
        "answers": [
            "A. Create a Data Studio dashboard that uses the related BigQuery tables as a source and give the BI team view access to the Data Studio dashboard.",
            "B. Create a Service Account for the BI team and distribute a new private key to each member of the BI team.",
            "C. Use Cloud Scheduler to schedule a batch Dataflow job to copy the data from BigQuery to the BI team's internal data warehouse.",
            "D. Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team."
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 179,
        "question": "Your company is moving its entire workload to Compute Engine. Some servers should be accessible through the Internet, and other servers should only be accessible over the internal network. All servers need to be able to talk to each other over specific ports and protocols. The current on-premises network relies on a demilitarized zone (DMZ) for the public servers and a Local Area Network (LAN) for the private servers. You need to design the networking infrastructure onGoogle Cloud to match these requirements. What should you do?",
        "answers": [
            "A. 1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
            "B. 1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ.",
            "C. 1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
            "D. 1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 180,
        "question": "You have just created a new project which will be used to deploy a globally distributed application. You will use Cloud Spanner for data storage. You want to create a Cloud Spanner instance. You want to perform the first step in preparation of creating the instance. What should you do?",
        "answers": [
            "A. Enable the Cloud Spanner API.",
            "B. Configure your Cloud Spanner instance to be multi-regional.",
            "C. Create a new VPC network with subnetworks in all desired regions.",
            "D. Grant yourself the IAM role of Cloud Spanner Admin."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 181,
        "question": "You have created a new project in Google Cloud through the gcloud command line interface (CLI) and linked a billing account. You need to create a new ComputeEngine instance using the CLI. You need to perform the prerequisite steps. What should you do?",
        "answers": [
            "A. Create a Cloud Monitoring Workspace.",
            "B. Create a VPC network in the project.",
            "C. Enable the compute googleapis.com API.",
            "D. Grant yourself the IAM role of Computer Admin."
        ],
        "correct_answer": "C",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 182,
        "question": "Your company has developed a new application that consists of multiple microservices. You want to deploy the application to Google Kubernetes Engine (GKE), and you want to ensure that the cluster can scale as more applications are deployed in the future. You want to avoid manual intervention when each new application is deployed. What should you do?",
        "answers": [
            "A. Deploy the application on GKE, and add a HorizontalPodAutoscaler to the deployment.",
            "B. Deploy the application on GKE, and add a VerticalPodAutoscaler to the deployment.",
            "C. Create a GKE cluster with autoscaling enabled on the node pool. Set a minimum and maximum for the size of the node pool.",
            "D. Create a separate node pool for each application, and deploy each application to its dedicated node pool."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 183,
        "question": "You need to manage a third-party application that will run on a Compute Engine instance. Other Compute Engine instances are already running with default configuration. Application installation files are hosted on Cloud Storage. You need to access these files from the new instance without allowing other virtual machines (VMs) to access these files. What should you do?",
        "answers": [
            "A. Create the instance with the default Compute Engine service account. Grant the service account permissions on Cloud Storage.",
            "B. Create the instance with the default Compute Engine service account. Add metadata to the objects on Cloud Storage that matches the metadata on the new instance.",
            "C. Create a new service account and assign this service account to the new instance. Grant the service account permissions on Cloud Storage.",
            "D. Create a new service account and assign this service account to the new instance. Add metadata to the objects on Cloud Storage that matches the metadata on the new instance."
        ],
        "correct_answer": "C",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 184,
        "question": "You need to configure optimal data storage for files stored in Cloud Storage for minimal cost. The files are used in a mission-critical analytics pipeline that is used continually. The users are in Boston, MA (United States). What should you do?",
        "answers": [
            "A. Configure regional storage for the region closest to the users. Configure a Nearline storage class.",
            "B. Configure regional storage for the region closest to the users. Configure a Standard storage class.",
            "C. Configure dual-regional storage for the dual region closest to the users. Configure a Nearline storage class.",
            "D. Configure dual-regional storage for the dual region closest to the users. Configure a Standard storage class."
        ],
        "correct_answer": "B",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 185,
        "question": "You are developing a new web application that will be deployed on Google Cloud Platform. As part of your release cycle, you want to test updates to your application on a small portion of real user traffic. The majority of the users should still be directed towards a stable version of your application. What should you do?",
        "answers": [
            "A. Deploy the application on App Engine. For each update, create a new version of the same service. Configure traffic splitting to send a small percentage of traffic to the new version.",
            "B. Deploy the application on App Engine. For each update, create a new service. Configure traffic splitting to send a small percentage of traffic to the new service.",
            "C. Deploy the application on Kubernetes Engine. For a new release, update the deployment to use the new version.",
            "D. Deploy the application on Kubernetes Engine. For a new release, create a new deployment for the new version. Update the service to use the new deployment."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 186,
        "question": "You need to add a group of new users to Cloud Identity. Some of the users already have existing Google accounts. You want to follow one of Google's recommended practices and avoid conflicting accounts. What should you do?",
        "answers": [
            "A. Invite the user to transfer their existing account.",
            "B. Invite the user to use an email alias to resolve the conflict.",
            "C. Tell the user that they must delete their existing account.",
            "D. Tell the user to remove all personal email from the existing account."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 187,
        "question": "You need to manage a Cloud Spanner instance for best query performance. Your instance in production runs in a single Google Cloud region. You need to improve performance in the shortest amount of time. You want to follow Google best practices for service configuration. What should you do?",
        "answers": [
            "A. Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. If you exceed this threshold, add nodes to your instance.",
            "B. Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage.",
            "C. Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. If you exceed this threshold, add nodes to your instance.",
            "D. Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage."
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 188,
        "question": "Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The first version of the application is implemented in PostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?",
        "answers": [
            "A. BigQuery",
            "B. Cloud SQL",
            "C. Cloud Spanner",
            "D. Cloud Datastore"
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 189,
        "question": "You are assigned to maintain a Google Kubernetes Engine (GKE) cluster named 'dev' that was deployed on Google Cloud. You want to manage the GKE configuration using the command line interface (CLI). You have just downloaded and installed the Cloud SDK. You want to ensure that future CLI commands by default address this specific cluster What should you do?",
        "answers": [
            "A. Use the command gcloud config set container/cluster dev.",
            "B. Use the command gcloud container clusters update dev.",
            "C. Create a file called gke.default in the ~/.gcloud folder that contains the cluster name.",
            "D. Create a file called defaults.json in the ~/.gcloud folder that contains the cluster name."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 190,
        "question": "The sales team has a project named Sales Data Digest that has the ID acme-data-digest. You need to set up similar Google Cloud resources for the marketing team but their resources must be organized independently of the sales team. What should you do?",
        "answers": [
            "A. Grant the Project Editor role to the Marketing team for acme-data-digest.",
            "B. Create a Project Lien on acme-data-digest and then grant the Project Editor role to the Marketing team.",
            "C. Create another project with the ID acme-marketing-data-digest for the Marketing team and deploy the resources there.",
            "D. Create a new project named Marketing Data Digest and use the ID acme-data-digest. Grant the Project Editor role to the Marketing team."
        ],
        "correct_answer": "C",
        "category": "Uncategorized"
    },
    {
        "question_number": 191,
        "question": "You have deployed multiple Linux instances on Compute Engine. You plan on adding more instances in the coming weeks. You want to be able to access all of these instances through your SSH client over the internet without having to configure specific access on the existing and new instances. You do not want theCompute Engine instances to have a public IP. What should you do?",
        "answers": [
            "A. Configure Cloud Identity-Aware Proxy for HTTPS resources.",
            "B. Configure Cloud Identity-Aware Proxy for SSH and TCP resources",
            "C. Create an SSH keypair and store the public key as a project-wide SSH Key.",
            "D. Create an SSH keypair and store the private key as a project-wide SSH Key."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 192,
        "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
        "answers": [
            "A. Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
            "B. Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
            "C. Upload the image to Container Registry and create a Kubernetes Service referencing the image.",
            "D. Upload the image to Container Registry and create a Kubernetes Deployment referencing the image."
        ],
        "correct_answer": "D",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 193,
        "question": "You are using Data Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day.At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Data Studio are broken, and you want to analyze the problem. What should you do?",
        "answers": [
            "A. Review the Error Reporting page in the Cloud Console to find any errors.",
            "B. Use the BigQuery interface to review the nightly job and look for any errors.",
            "C. Use Cloud Debugger to find out why the data was not refreshed correctly.",
            "D. In Cloud Logging, create a filter for your Data Studio report."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 194,
        "question": "You have been asked to set up the billing configuration for a new Google Cloud customer. Your customer wants to group resources that share common IAM policies. What should you do?",
        "answers": [
            "A. Use labels to group resources that share common IAM policies.",
            "B. Use folders to group resources that share common IAM policies.",
            "C. Set up a proper billing account structure to group IAM policies.",
            "D. Set up a proper project naming structure to group IAM policies."
        ],
        "correct_answer": "B",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 195,
        "question": "You have been asked to create robust Virtual Private Network (VPN) connectivity between a new Virtual Private Cloud (VPC) and a remote site. Key requirements include dynamic routing, a shared address space of 10.19.0.1/22, and no overprovisioning of tunnels during a failover event. You want to follow Google- recommended practices to set up a high availability Cloud VPN. What should you do?",
        "answers": [
            "A. Use a custom mode VPC network, configure static routes, and use active/passive routing.",
            "B. Use an automatic mode VPC network, configure static routes, and use active/active routing.",
            "C. Use a custom mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and use active/passive routing.",
            "D. Use an automatic mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and configure policy-based routing."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 196,
        "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n1-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?",
        "answers": [
            "A. Assign the pods of the image rendering microservice a higher pod priority than the other microservices.",
            "B. Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.",
            "C. Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.",
            "D. Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment. Keep the resource requests for the other microservices at the default."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 197,
        "question": "Your organization has three existing Google Cloud projects. You need to bill the Marketing department for only their Google Cloud services for a new initiative within their group. What should you do?",
        "answers": [
            "A. 1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud Project for the Marketing department. 2. Link the new project to a Marketing Billing Account.",
            "B. 1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project.",
            "C. 1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Link the new project to a Marketing Billing Account.",
            "D. 1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 198,
        "question": "You deployed an application on a managed instance group in Compute Engine. The application accepts Transmission Control Protocol (TCP) traffic on port 389 and requires you to preserve the IP address of the client who is making a request. You want to expose the application to the internet by using a load balancer. What should you do?",
        "answers": [
            "A. Expose the application by using an external TCP Network Load Balancer.",
            "B. Expose the application by using a TCP Proxy Load Balancer.",
            "C. Expose the application by using an SSL Proxy Load Balancer.",
            "D. Expose the application by using an internal TCP Network Load Balancer."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 199,
        "question": "You are building a multi-player gaming application that will store game information in a database. As the popularity of the application increases, you are concerned about delivering consistent performance. You need to ensure an optimal gaming performance for global users, without increasing the management complexity. What should you do?",
        "answers": [
            "A. Use Cloud SQL database with cross-region replication to store game statistics in the EU, US, and APAC regions.",
            "B. Use Cloud Spanner to store user data mapped to the game statistics.",
            "C. Use BigQuery to store game statistics with a Redis on Memorystore instance in the front to provide global consistency.",
            "D. Store game statistics in a Bigtable database partitioned by username."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 200,
        "question": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
        "answers": [
            "A. Cloud SQL",
            "B. Firestore",
            "C. Cloud Spanner",
            "D. Bigtable"
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 201,
        "question": "Your company has multiple projects linked to a single billing account in Google Cloud. You need to visualize the costs with specific metrics that should be dynamically calculated based on company-specific criteria. You want to automate the process. What should you do?",
        "answers": [
            "A. In the Google Cloud console, visualize the costs related to the projects in the Reports section.",
            "B. In the Google Cloud console, visualize the costs related to the projects in the Cost breakdown section.",
            "C. In the Google Cloud console, use the export functionality of the Cost table. Create a Looker Studio dashboard on top of the CSV export.",
            "D. Configure Cloud Billing data export to BigQuery for the billing account. Create a Looker Studio dashboard on top of the BigQuery export."
        ],
        "correct_answer": "D",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 202,
        "question": "You have an application that runs on Compute Engine VM instances in a custom Virtual Private Cloud (VPC). Your company\u2019s security policies only allow the use of internal IP addresses on VM instances and do not let VM instances connect to the internet. You need to ensure that the application can access a file hosted in a Cloud Storage bucket within your project. What should you do?",
        "answers": [
            "A. Enable Private Service Access on the Cloud Storage Bucket.",
            "B. Add storage.googleapis.com to the list of restricted services in a VPC Service Controls perimeter and add your project to the list of protected projects.",
            "C. Enable Private Google Access on the subnet within the custom VPC.",
            "D. Deploy a Cloud NAT instance and route the traffic to the dedicated IP address of the Cloud Storage bucket."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 203,
        "question": "Your company completed the acquisition of a startup and is now merging the IT systems of both companies. The startup had a production Google Cloud project in their organization. You need to move this project into your organization and ensure that the project is billed to your organization. You want to accomplish this task with minimal effort. What should you do?",
        "answers": [
            "A. Use the projects.move method to move the project to your organization. Update the billing account of the project to that of your organization.",
            "B. Ensure that you have an Organization Administrator Identity and Access Management (IAM) role assigned to you in both organizations. Navigate to the Resource Manager in the startup\u2019s Google Cloud organization, and drag the project to your company's organization.",
            "C. Create a Private Catalog for the Google Cloud Marketplace, and upload the resources of the startup's production project to the Catalog. Share the Catalog with your organization, and deploy the resources in your company\u2019s project.",
            "D. Create an infrastructure-as-code template for all resources in the project by using Terraform, and deploy that template to a new project in your organization. Delete the project from the startup\u2019s Google Cloud organization."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 204,
        "question": "All development (dev) teams in your organization are located in the United States. Each dev team has its own Google Cloud project. You want to restrict access so that each dev team can only create cloud resources in the United States (US). What should you do?",
        "answers": [
            "A. Create a folder to contain all the dev projects. Create an organization policy to limit resources in US locations.",
            "B. Create an organization to contain all the dev projects. Create an Identity and Access Management (IAM) policy to limit the resources in US regions.",
            "C. Create an Identity and Access Management (IAM) policy to restrict the resources locations in the US. Apply the policy to all dev projects.",
            "D. Create an Identity and Access Management (IAM) policy to restrict the resources locations in all dev projects. Apply the policy to all dev roles."
        ],
        "correct_answer": "A",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 205,
        "question": "You are configuring Cloud DNS. You want to create DNS records to point home.mydomain.com, mydomain.com, and www.mydomain.com to the IP address of your Google Cloud load balancer. What should you do?",
        "answers": [
            "A. Create one CNAME record to point mydomain.com to the load balancer, and create two A records to point WWW and HOME to mydomain.com respectively.",
            "B. Create one CNAME record to point mydomain.com to the load balancer, and create two AAAA records to point WWW and HOME to mydomain.com respectively.",
            "C. Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively.",
            "D. Create one A record to point mydomain.com to the load balancer, and create two NS records to point WWW and HOME to mydomain.com respectively."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 206,
        "question": "You have two subnets (subnet-a and subnet-b) in the default VPC. Your database servers are running in subnet-a. Your application servers and web servers are running in subnet-b. You want to configure a firewall rule that only allows database traffic from the application servers to the database servers. What should you do?",
        "answers": [
            "A. \u2022 Create service accounts sa-app and sa-db.\u2022 Associate service account sa-app with the application servers and the service account sa-db with the database servers.\u2022 Create an ingress firewall rule to allow network traffic from source service account sa-app to target service account sa-db.",
            "B. \u2022 Create network tags app-server and db-server.\u2022 Add the app-server tag to the application servers and the db-server tag to the database servers.\u2022 Create an egress firewall rule to allow network traffic from source network tag app-server to target network tag db-server.",
            "C. \u2022 Create a service account sa-app and a network tag db-server.\u2022 Associate the service account sa-app with the application servers and the network tag db-server with the database servers.\u2022 Create an ingress firewall rule to allow network traffic from source VPC IP addresses and target the subnet-a IP addresses.",
            "D. \u2022 Create a network tag app-server and service account sa-db.\u2022 Add the tag to the application servers and associate the service account with the database servers.\u2022 Create an egress firewall rule to allow network traffic from source network tag app-server to target service account sa-db."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 207,
        "question": "Your team wants to deploy a specific content management system (CMS) solution to Google Cloud. You need a quick and easy way to deploy and install the solution. What should you do?",
        "answers": [
            "A. Search for the CMS solution in Google Cloud Marketplace. Use gcloud CLI to deploy the solution.",
            "B. Search for the CMS solution in Google Cloud Marketplace. Deploy the solution directly from Cloud Marketplace.",
            "C. Search for the CMS solution in Google Cloud Marketplace. Use Terraform and the Cloud Marketplace ID to deploy the solution with the appropriate parameters.",
            "D. Use the installation guide of the CMS provider. Perform the installation through your configuration management system."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 208,
        "question": "You are working for a startup that was officially registered as a business 6 months ago. As your customer base grows, your use of Google Cloud increases. You want to allow all engineers to create new projects without asking them for their credit card information. What should you do?",
        "answers": [
            "A. Create a Billing account, associate a payment method with it, and provide all project creators with permission to associate that billing account with their projects.",
            "B. Grant all engineers permission to create their own billing accounts for each new project.",
            "C. Apply for monthly invoiced billing, and have a single invoice for the project paid by the finance team.",
            "D. Create a billing account, associate it with a monthly purchase order (PO), and send the PO to Google Cloud."
        ],
        "correct_answer": "A",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 209,
        "question": "Your continuous integration and delivery (CI/CD) server can\u2019t execute Google Cloud actions in a specific project because of permission issues. You need to validate whether the used service account has the appropriate roles in the specific project.What should you do?",
        "answers": [
            "A. Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account at the project or inherited from the folder or organization levels.",
            "B. Open the Google Cloud console, and check the organization policies.",
            "C. Open the Google Cloud console, and run a query to determine which resources this service account can access.",
            "D. Open the Google Cloud console, and run a query of the audit logs to find permission denied errors for this service account."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 210,
        "question": "Your team is using Linux instances on Google Cloud. You need to ensure that your team logs in to these instances in the most secure and cost efficient way. What should you do?",
        "answers": [
            "A. Attach a public IP to the instances and allow incoming connections from the internet on port 22 for SSH.",
            "B. Use the gcloud compute ssh command with the --tunnel-through-iap flag. Allow ingress traffic from the IP range 35.235.240.0/20 on port 22.",
            "C. Use a third party tool to provide remote access to the instances.",
            "D. Create a bastion host with public internet access. Create the SSH tunnel to the instance through the bastion host."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 211,
        "question": "An external member of your team needs list access to compute images and disks in one of your projects. You want to follow Google-recommended practices when you grant the required permissions to this user. What should you do?",
        "answers": [
            "A. Create a custom role, and add all the required compute.disks.list and compute.images.list permissions as includedPermissions. Grant the custom role to the user at the project level.",
            "B. Create a custom role based on the Compute Image User role. Add the compute.disks.list to the includedPermissions field. Grant the custom role to the user at the project level.",
            "C. Create a custom role based on the Compute Storage Admin role. Exclude unnecessary permissions from the custom role. Grant the custom role to the user at the project level.",
            "D. Grant the Compute Storage Admin role at the project level."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 212,
        "question": "You are running a web application on Cloud Run for a few hundred users. Some of your users complain that the initial web page of the application takes much longer to load than the following pages. You want to follow Google\u2019s recommendations to mitigate the issue. What should you do?",
        "answers": [
            "A. Set the minimum number of instances for your Cloud Run service to 3.",
            "B. Set the concurrency number to 1 for your Cloud Run service.",
            "C. Set the maximum number of instances for your Cloud Run service to 100.",
            "D. Update your web application to use the protocol HTTP/2 instead of HTTP/1.1."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 213,
        "question": "You are building a data lake on Google Cloud for your Internet of Things (IoT) application. The IoT application has millions of sensors that are constantly streaming structured and unstructured data to your backend in the cloud. You want to build a highly available and resilient architecture based on Google-recommended practices. What should you do?",
        "answers": [
            "A. Stream data to Pub/Sub, and use Dataflow to send data to Cloud Storage.",
            "B. Stream data to Pub/Sub, and use Storage Transfer Service to send data to BigQuery.",
            "C. Stream data to Dataflow, and use Dataprep by Trifacta to send data to Bigtable.",
            "D. Stream data to Dataflow, and use Storage Transfer Service to send data to BigQuery."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 214,
        "question": "You are running out of primary internal IP addresses in a subnet for a custom mode VPC. The subnet has the IP range 10.0.0.0/20, and the IP addresses are primarily used by virtual machines in the project. You need to provide more IP addresses for the virtual machines. What should you do?",
        "answers": [
            "A. Add a secondary IP range 10.1.0.0/20 to the subnet.",
            "B. Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/18.",
            "C. Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/22.",
            "D. Convert the subnet IP range from IPv4 to IPv6."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 215,
        "question": "Your company requires all developers to have the same permissions, regardless of the Google Cloud project they are working on. Your company\u2019s security policy also restricts developer permissions to Compute Engine, Cloud Functions, and Cloud SQL. You want to implement the security policy with minimal effort. What should you do?",
        "answers": [
            "A. \u2022 Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions in one project within the Google Cloud organization.\u2022 Copy the role across all projects created within the organization with the gcloud iam roles copy command.\u2022 Assign the role to developers in those projects.",
            "B. \u2022 Add all developers to a Google group in Google Groups for Workspace.\u2022 Assign the predefined role of Compute Admin to the Google group at the Google Cloud organization level.",
            "C. \u2022 Add all developers to a Google group in Cloud Identity.\u2022 Assign predefined roles for Compute Engine, Cloud Functions, and Cloud SQL permissions to the Google group for each project in the Google Cloud organization.",
            "D. \u2022 Add all developers to a Google group in Cloud Identity.\u2022 Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions at the Google Cloud organization level.\u2022 Assign the custom role to the Google group."
        ],
        "correct_answer": "D",
        "category": "Security & Encryption"
    },
    {
        "question_number": 216,
        "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
        "answers": [
            "A. Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
            "B. Create a script that uses the gcloud storage command to synchronize the on-premises storage with Cloud Storage, Schedule the script as a cron job.",
            "C. Create a Pub/Sub topic, and create a Cloud Function connected to the topic that writes data to Cloud Storage. Create an application that sends all medical images to the Pub/Sub topic.",
            "D. In the Google Cloud console, go to Cloud Storage. Upload the relevant images to the appropriate bucket."
        ],
        "correct_answer": "B",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 217,
        "question": "Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The first version of the application is implemented in PostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?",
        "answers": [
            "A. Bigtable",
            "B. BigQuery",
            "C. Cloud SQL",
            "D. Firestore"
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 218,
        "question": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
        "answers": [
            "A. Create an Instance Template with Spot VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload.",
            "B. Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
            "C. Migrate the workload to a Google Kubernetes Engine cluster with Spot nodes.",
            "D. Migrate the workload to a Compute Engine Spot VM."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 219,
        "question": "You are planning to migrate the following on-premises data management solutions to Google Cloud:\u2022\tOne MySQL cluster for your main database\u2022\tApache Kafka for your event streaming platform\u2022\tOne Cloud SQL for PostgreSQL database for your analytical and reporting needsYou want to implement Google-recommended solutions for the migration. You need to ensure that the new solutions provide global scalability and require minimal operational and infrastructure management. What should you do?",
        "answers": [
            "A. Migrate from MySQL to Cloud SQL, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.",
            "B. Migrate from MySQL to Cloud Spanner, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.",
            "C. Migrate from MySQL to Cloud Spanner, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.",
            "D. Migrate from MySQL to Cloud SQL, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 220,
        "question": "During a recent audit of your existing Google Cloud resources, you discovered several users with email addresses outside of your Google Workspace domain. You want to ensure that your resources are only shared with users whose email addresses match your domain. You need to remove any mismatched users, and you want to avoid having to audit your resources to identify mismatched users. What should you do?",
        "answers": [
            "A. Create a Cloud Scheduler task to regularly scan your projects and delete mismatched users.",
            "B. Create a Cloud Scheduler task to regularly scan your resources and delete mismatched users.",
            "C. Set an organizational policy constraint to limit identities by domain to automatically remove mismatched users.",
            "D. Set an organizational policy constraint to limit identities by domain, and then retroactively remove the existing mismatched users"
        ],
        "correct_answer": "D",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 221,
        "question": "Your application is running on Google Cloud in a managed instance group (MIG). You see errors in Cloud Logging for one VM that one of the processes is not responsive. You want to replace this VM in the MIG quickly. What should you do?",
        "answers": [
            "A. Use the gcloud compute instances update command with a REFRESH action for the VM.",
            "B. Use the gcloud compute instance-groups managed recreate-instances command to recreate the VM.",
            "C. Select the MIG from the Compute Engine console and, in the menu, select Replace VMs.",
            "D. Update and apply the instance template of the MIG."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 222,
        "question": "You want to permanently delete a Pub/Sub topic managed by Config Connector in your Google Cloud project. What should you do?",
        "answers": [
            "A. Use kubectl to create the label deleted-by-cnrm and to change its value to true for the topic resource.",
            "B. Use kubectl to delete the topic resource.",
            "C. Use gcloud CLI to delete the topic.",
            "D. Use gcloud CLI to update the topic label managed-by-cnrm to false."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 223,
        "question": "Your company is using Google Workspace to manage employee accounts. Anticipated growth will increase the number of personnel from 100 employees to 1,000 employees within 2 years. Most employees will need access to your company\u2019s Google Cloud account. The systems and processes will need to support 10x growth without performance degradation, unnecessary complexity, or security issues. What should you do?",
        "answers": [
            "A. Migrate the users to Active Directory. Connect the Human Resources system to Active Directory. Turn on Google Cloud Directory Sync (GCDS) for Cloud Identity. Turn on Identity Federation from Cloud Identity to Active Directory.",
            "B. Organize the users in Cloud Identity into groups. Enforce multi-factor authentication in Cloud Identity.",
            "C. Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication for domain wide delegation.",
            "D. Use a third-party identity provider service through federation. Synchronize the users from Google Workplace to the third-party provider in real time."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 224,
        "question": "You want to host your video encoding software on Compute Engine. Your user base is growing rapidly, and users need to be able to encode their videos at any time without interruption or CPU limitations. You must ensure that your encoding solution is highly available, and you want to follow Google-recommended practices to automate operations. What should you do?",
        "answers": [
            "A. Deploy your solution on multiple standalone Compute Engine instances, and increase the number of existing instances when CPU utilization on Cloud Monitoring reaches a certain threshold.",
            "B. Deploy your solution on multiple standalone Compute Engine instances, and replace existing instances with high-CPU instances when CPU utilization on Cloud Monitoring reaches a certain threshold.",
            "C. Deploy your solution to an instance group, and increase the number of available instances whenever you see high CPU utilization in Cloud Monitoring.",
            "D. Deploy your solution to an instance group, and set the autoscaling based on CPU utilization."
        ],
        "correct_answer": "D",
        "category": "Compute Engine"
    },
    {
        "question_number": 225,
        "question": "Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to solve the instance creation problem. What should you do?",
        "answers": [
            "A. Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
            "B. Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
            "C. Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
            "D. Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 226,
        "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
        "answers": [
            "A. Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
            "B. Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
            "C. Upload the image to Artifact Registry and create a Kubernetes Service referencing the image.",
            "D. Upload the image to Artifact Registry and create a Kubernetes Deployment referencing the image."
        ],
        "correct_answer": "D",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 227,
        "question": "You are using Looker Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Looker Studio are broken, and you want to analyze the problem. What should you do?",
        "answers": [
            "A. In Cloud Logging, create a filter for your Looker Studio report.",
            "B. Use the open source CLI tool, Snapshot Debugger, to find out why the data was not refreshed correctly.",
            "C. Review the Error Reporting page in the Google Cloud console to find any errors.",
            "D. Use the BigQuery interface to review the nightly job and look for any errors."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 228,
        "question": "You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
        "answers": [
            "A. Run a test using simulated maintenance events. If the test is successful, use Spot N2 Standard VMs when running future jobs.",
            "B. Run a test using simulated maintenance events. If the test is successful, use N2 Standard VMs when running future jobs.",
            "C. Run a test using a managed instance group. If the test is successful, use N2 Standard VMs in the managed instance group when running future jobs.",
            "D. Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 229,
        "question": "You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
        "answers": [
            "A. Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
            "B. Use the Reports view in the Cloud Billing Console to view the desired cost information.",
            "C. Visit the Cost Table page to get a CSV export and visualize it using Looker Studio.",
            "D. Configure Billing Data Export to BigQuery and visualize the data in Looker Studio."
        ],
        "correct_answer": "D",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 230,
        "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?",
        "answers": [
            "A. Upload the data to BigQuery using the bq command line tool.",
            "B. Upload the data to Cloud Storage using the gcloud storage command.",
            "C. Upload the data into Cloud SQL using the import function in the Google Cloud console.",
            "D. Upload the data into Cloud Spanner using the import function in the Google Cloud console."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 231,
        "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
        "answers": [
            "A. Navigate to Cloud Logging and view the application logs.",
            "B. Configure a health check on the instance and set a \u201cconsecutive successes\u201d Healthy threshold value of 1.",
            "C. Connect to the instance\u2019s serial console and read the application logs.",
            "D. Install and configure the Ops agent and view the logs from Cloud Logging."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 232,
        "question": "You recently received a new Google Cloud project with an attached billing account where you will work. You need to create instances, set firewalls, and store data in Cloud Storage. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Use the gcloud CLI services enable cloudresourcemanager.googleapis.com command to enable all resources.",
            "B. Use the gcloud services enable compute.googleapis.com command to enable Compute Engine and the gcloud services enable storage-api.googleapis.com command to enable the Cloud Storage APIs.",
            "C. Open the Google Cloud console and enable all Google Cloud APIs from the API dashboard.",
            "D. Open the Google Cloud console and run gcloud init --project in a Cloud Shell."
        ],
        "correct_answer": "B",
        "category": "Pricing & Cost Optimization"
    },
    {
        "question_number": 233,
        "question": "Your application development team has created Docker images for an application that will be deployed on Google Cloud. Your team does not want to manage the infrastructure associated with this application. You need to ensure that the application can scale automatically as it gains popularity. What should you do?",
        "answers": [
            "A. Create an instance template with the container image, and deploy a Managed Instance Group with Autoscaling.",
            "B. Upload Docker images to Artifact Registry, and deploy the application on Google Kubernetes Engine using Standard mode.",
            "C. Upload Docker images to the Cloud Storage, and deploy the application on Google Kubernetes Engine using Standard mode.",
            "D. Upload Docker images to Artifact Registry, and deploy the application on Cloud Run."
        ],
        "correct_answer": "D",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 234,
        "question": "You are migrating a business critical application from your local data center into Google Cloud. As part of your high-availability strategy, you want to ensure that any data used by the application will be immediately available if a zonal failure occurs. What should you do?",
        "answers": [
            "A. Store the application data on a zonal persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.",
            "B. Store the application data on a zonal persistent disk. If an outage occurs, create an instance in another zone with this disk attached.",
            "C. Store the application data on a regional persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.",
            "D. Store the application data on a regional persistent disk. If an outage occurs, create an instance in another zone with this disk attached."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 235,
        "question": "The DevOps group in your organization needs full control of Compute Engine resources in your development project. However, they should not have permission to create or update any other resources in the project. You want to follow Google\u2019s recommendations for setting permissions for the DevOps group. What should you do?",
        "answers": [
            "A. Grant the basic role roles/viewer and the predefined role roles/compute.admin to the DevOps group.",
            "B. Create an IAM policy and grant all compute.instanceAdmin.* permissions to the policy. Attach the policy to the DevOps group.",
            "C. Create a custom role at the folder level and grant all compute.instanceAdmin.* permissions to the role. Grant the custom role to the DevOps group.",
            "D. Grant the basic role roles/editor to the DevOps group."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 236,
        "question": "Your team is running an on-premises ecommerce application. The application contains a complex set of microservices written in Python, and each microservice is running on Docker containers. Configurations are injected by using environment variables. You need to deploy your current application to a serverless Google Cloud cloud solution. What should you do?",
        "answers": [
            "A. Use your existing CI/CD pipeline. Use the generated Docker images and deploy them to Cloud Run. Update the configurations and the required endpoints.",
            "B. Use your existing continuous integration and delivery (CI/CD) pipeline. Use the generated Docker images and deploy them to Cloud Function. Use the same configuration as on-premises.",
            "C. Use the existing codebase and deploy each service as a separate Cloud Function. Update the configurations and the required endpoints.",
            "D. Use your existing codebase and deploy each service as a separate Cloud Run. Use the same configurations as on-premises."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 237,
        "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n2-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?",
        "answers": [
            "A. Assign the pods of the image rendering microservice a higher pod priority than the other microservices.",
            "B. Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.",
            "C. Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.",
            "D. Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment. Keep the resource requests for the other microservices at the default."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 238,
        "question": "You are working in a team that has developed a new application that needs to be deployed on Kubernetes. The production application is business critical and should be optimized for reliability. You need to provision a Kubernetes cluster and want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Create a GKE Autopilot cluster. Enroll the cluster in the rapid release channel.",
            "B. Create a GKE Autopilot cluster. Enroll the cluster in the stable release channel.",
            "C. Create a zonal GKE standard cluster. Enroll the cluster in the stable release channel.",
            "D. Create a regional GKE standard cluster. Enroll the cluster in the rapid release channel."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 239,
        "question": "You are responsible for a web application on Compute Engine. You want your support team to be notified automatically if users experience high latency for at least 5 minutes. You need a Google-recommended solution with no development cost. What should you do?",
        "answers": [
            "A. Export Cloud Monitoring metrics to BigQuery and use a Looker Studio dashboard to monitor your web application\u2019s latency.",
            "B. Create an alert policy to send a notification when the HTTP response latency exceeds the specified threshold.",
            "C. Implement an App Engine service which invokes the Cloud Monitoring API and sends a notification in case of anomalies.",
            "D. Use the Cloud Monitoring dashboard to observe latency and take the necessary actions when the response latency exceeds the specified threshold."
        ],
        "correct_answer": "B",
        "category": "Compute Engine"
    },
    {
        "question_number": 240,
        "question": "You have an on-premises data analytics set of binaries that processes data files in memory for about 45 minutes every midnight. The sizes of those data files range from 1 gigabyte to 16 gigabytes. You want to migrate this application to Google Cloud with minimal effort and cost. What should you do?",
        "answers": [
            "A. Create a container for the set of binaries. Use Cloud Scheduler to start a Cloud Run job for the container.",
            "B. Create a container for the set of binaries. Deploy the container to Google Kubernetes Engine (GKE) and use the Kubernetes scheduler to start the application.",
            "C. Upload the code to Cloud Functions. Use Cloud Scheduler to start the application.",
            "D. Lift and shift to a VM on Compute Engine. Use an instance schedule to start and stop the instance."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 241,
        "question": "You used the gcloud container clusters command to create two Google Cloud Kubernetes (GKE) clusters: prod-cluster and dev-cluster.\u2022\tprod-cluster is a standard cluster.\u2022\tdev-cluster is an auto-pilot cluster.When you run the kubectl get nodes command, you only see the nodes from prod-cluster. Which commands should you run to check the node status for dev-cluster?",
        "answers": [
            "A. gcloud container clusters get-credentials dev-clusterkubectl get nodes",
            "B. gcloud container clusters update -generate-password dev-cluster kubectl get nodes",
            "C. kubectl config set-context dev-clusterkubectl cluster-info",
            "D. kubectl config set-credentials dev-clusterkubectl cluster-info"
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 242,
        "question": "You recently discovered that your developers are using many service account keys during their development process. While you work on a long term improvement, you need to quickly implement a process to enforce short-lived service account credentials in your company. You have the following requirements:\u2022\tAll service accounts that require a key should be created in a centralized project called pj-sa.\u2022\tService account keys should only be valid for one day.You need a Google-recommended solution that minimizes cost. What should you do?",
        "answers": [
            "A. Implement a Cloud Run job to rotate all service account keys periodically in pj-sa. Enforce an org policy to deny service account key creation with an exception to pj-sa.",
            "B. Implement a Kubernetes CronJob to rotate all service account keys periodically. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.",
            "C. Enforce an org policy constraint allowing the lifetime of service account keys to be 24 hours. Enforce an org policy constraint denying service account key creation with an exception on pj-sa.",
            "D. Enforce a DENY org policy constraint over the lifetime of service account keys for 24 hours. Disable attachment of service accounts to resources in all projects with an exception to pj-sa."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 243,
        "question": "Your company is running a three-tier web application on virtual machines that use a MySQL database. You need to create an estimated total cost of cloud infrastructure to run this application on Google Cloud instances and Cloud SQL. What should you do?",
        "answers": [
            "A. Create a Google spreadsheet with multiple Google Cloud resource combinations. On a separate sheet, import the current Google Cloud prices and use these prices for the calculations within formulas.",
            "B. Use the Google Cloud Pricing Calculator and select the Cloud Operations template to define your web application with as much detail as possible.",
            "C. Implement a similar architecture on Google Cloud, and run a reasonable load test on a smaller scale. Check the billing information, and calculate the estimated costs based on the real load your system usually handles.",
            "D. Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use. Use similar size instances for the web server, and use your current on-premises machines as a comparison for Cloud SQL."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 244,
        "question": "You have a Bigtable instance that consists of three nodes that store personally identifiable information (PII) data. You need to log all read or write operations, including any metadata or configuration reads of this database table, in your company\u2019s Security Information and Event Management (SIEM) system. What should you do?",
        "answers": [
            "A. \u2022 Navigate to Cloud Monitoring in the Google Cloud console, and create a custom monitoring job for the Bigtable instance to track all changes.\u2022 Create an alert by using webhook endpoints, with the SIEM endpoint as a receiver.",
            "B. \u2022 Navigate to the Audit Logs page in the Google Cloud console, and enable Admin Write logs for the Bigtable instance.\u2022 Create a Cloud Functions instance to export logs from Cloud Logging to your SIEM.",
            "C. \u2022 Navigate to the Audit Logs page in the Google Cloud console, and enable Data Read, Data Write and Admin Read logs for the Bigtable instance.\u2022 Create a Pub/Sub topic as a Cloud Logging sink destination, and add your SIEM as a subscriber to the topic.",
            "D. \u2022 Install the Ops Agent on the Bigtable instance during configuration.\u2022 Create a service account with read permissions for the Bigtable instance.\u2022 Create a custom Dataflow job with this service account to export logs to the company\u2019s SIEM system."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 245,
        "question": "You want to set up a Google Kubernetes Engine cluster. Verifiable node identity and integrity are required for the cluster, and nodes cannot be accessed from the internet. You want to reduce the operational cost of managing your cluster, and you want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Deploy a private autopilot cluster.",
            "B. Deploy a public autopilot cluster.",
            "C. Deploy a standard public cluster and enable shielded nodes.",
            "D. Deploy a standard private cluster and enable shielded nodes."
        ],
        "correct_answer": "A",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 246,
        "question": "Your company wants to migrate their on-premises workloads to Google Cloud. The current on-premises workloads consist of:\u2022\tA Flask web application\u2022\tA backend API\u2022\tA scheduled long-running background job for ETL and reportingYou need to keep operational costs low. You want to follow Google-recommended practices to migrate these workloads to serverless solutions on Google Cloud. What should you do?",
        "answers": [
            "A. Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.",
            "B. Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.",
            "C. Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.",
            "D. Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Compute Engine."
        ],
        "correct_answer": "B",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 247,
        "question": "Your company is moving its continuous integration and delivery (CI/CD) pipeline to Compute Engine instances. The pipeline will manage the entire cloud infrastructure through code. How can you ensure that the pipeline has appropriate permissions while your system is following security best practices?",
        "answers": [
            "A. \u2022 Attach a single service account to the compute instances.\u2022 Add minimal rights to the service account.\u2022 Allow the service account to impersonate a Cloud Identity user with elevated permissions to create, update, or delete resources.",
            "B. \u2022 Add a step for human approval to the CI/CD pipeline before the execution of the infrastructure provisioning.\u2022 Use the human approvals IAM account for the provisioning.",
            "C. \u2022 Attach a single service account to the compute instances.\u2022 Add all required Identity and Access Management (IAM) permissions to this service account to create, update, or delete resources.",
            "D. \u2022 Create multiple service accounts, one for each pipeline with the appropriate minimal Identity and Access Management (IAM) permissions.\u2022 Use a secret manager service to store the key files of the service accounts.\u2022 Allow the CI/CD pipeline to request the appropriate secrets during the execution of the pipeline."
        ],
        "correct_answer": "D",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 248,
        "question": "Your application stores files on Cloud Storage by using the Standard Storage class. The application only requires access to files created in the last 30 days. You want to automatically save costs on files that are no longer accessed by the application. What should you do?",
        "answers": [
            "A. Create an object lifecycle on the storage bucket to change the storage class to Archive Storage for objects with an age over 30 days.",
            "B. Create a cron job in Cloud Scheduler to call a Cloud Functions instance every day to delete files older than 30 days.",
            "C. Create a retention policy on the storage bucket of 30 days, and lock the bucket by using a retention policy lock.",
            "D. Enable object versioning on the storage bucket and add lifecycle rules to expire non-current versions after 30 days."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 249,
        "question": "Your manager asks you to deploy a workload to a Kubernetes cluster. You are not sure of the workload's resource requirements or how the requirements might vary depending on usage patterns, external dependencies, or other factors. You need a solution that makes cost-effective recommendations regarding CPU and memory requirements, and allows the workload to function consistently in any situation. You want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Configure the Horizontal Pod Autoscaler for availability, and configure the cluster autoscaler for suggestions.",
            "B. Configure the Horizontal Pod Autoscaler for availability, and configure the Vertical Pod Autoscaler recommendations for suggestions.",
            "C. Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Cluster autoscaler for suggestions.",
            "D. Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Horizontal Pod Autoscaler for suggestions."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 250,
        "question": "You need to migrate invoice documents stored on-premises to Cloud Storage. The documents have the following storage requirements:\u2022\tDocuments must be kept for five years.\u2022\tUp to five revisions of the same invoice document must be stored, to allow for corrections.\u2022\tDocuments older than 365 days should be moved to lower cost storage tiers.You want to follow Google-recommended practices to minimize your operational and development costs. What should you do?",
        "answers": [
            "A. Enable retention policies on the bucket, and use Cloud Scheduler to invoke a Cloud Function to move or delete your documents based on their metadata.",
            "B. Enable retention policies on the bucket, use lifecycle rules to change the storage classes of the objects, set the number of versions, and delete old files.",
            "C. Enable object versioning on the bucket, and use Cloud Scheduler to invoke a Cloud Functions instance to move or delete your documents based on their metadata.",
            "D. Enable object versioning on the bucket, use lifecycle conditions to change the storage class of the objects, set the number of versions, and delete old files."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 251,
        "question": "You installed the Google Cloud CLI on your workstation and set the proxy configuration. However, you are worried that your proxy credentials will be recorded in the gcloud CLI logs. You want to prevent your proxy credential from being logged. What should you do?",
        "answers": [
            "A. Configure username and password by using gcloud config set proxy/username and gcloud config set proxy/password commands.",
            "B. Encode username and password in sha256 encoding, and save in to a text file. Use filename as a value in the gcloud config set core/custom_ca_certs_file command.",
            "C. Provide values for CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD in the gcloud CLI tool configuration file.",
            "D. Set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties by using environment variables in your command line tool."
        ],
        "correct_answer": "D",
        "category": "Uncategorized"
    },
    {
        "question_number": 252,
        "question": "Your company developed an application to deploy on Google Kubernetes Engine. Certain parts of the application are not fault-tolerant and are allowed to have downtime. Other parts of the application are critical and must always be available. You need to configure a Google Kubernetes Engine cluster while optimizing for cost. What should you do?",
        "answers": [
            "A. Create a cluster with a single node-pool by using standard VMs. Label he fault-tolerant Deployments as spot_true.",
            "B. Create a cluster with a single node-pool by using Spot VMs. Label the critical Deployments as spot_false.",
            "C. Create a cluster with both a Spot VM node pool and a node pool by using standard VMs. Deploy the critical deployments on the Spot VM node pool and the fault-tolerant deployments on the node pool by using standard VMs.",
            "D. Create a cluster with both a Spot VM node pool and a nods pool by using standard VMs. Deploy the critical deployments on the node pool by using standard VMs and the fault-tolerant deployments on the Spot VM node pool."
        ],
        "correct_answer": "D",
        "category": "Kubernetes Engine & Containers"
    },
    {
        "question_number": 253,
        "question": "You need to deploy an application in Google Cloud using serverless technology. You want to test a new version of the application with a small percentage of production traffic. What should you do?",
        "answers": [
            "A. Deploy the application to Cloud Run. Use gradual rollouts for traffic splitting.",
            "B. Deploy the application to Google Kubernetes Engine. Use Anthos Service Mash for traffic splitting.",
            "C. Deploy the application to Cloud Functions. Specify the version number in the functions name.",
            "D. Deploy the application to App Engine. For each new version, create a new service."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 254,
        "question": "Your company's security vulnerability management policy wants a member of the security team to have visibility into vulnerabilities and other OS metadata for a specific Compute Engine instance. This Compute Engine instance hosts a critical application in your Google Cloud project. You need to implement your company's security vulnerability management policy. What should you do?",
        "answers": [
            "A. \u2022 Ensure that the Ops Agent is installed on the Compute Engine instance.\u2022 Create a custom metric in the Cloud Monitoring dashboard.\u2022 Provide the security team member with access to this dashboard.",
            "B. \u2022 Ensure that the Ops Agent is installed on the Compute Engine instance.\u2022 Provide the security team member roles/osconfig.inventoryViewer permission.",
            "C. \u2022 Ensure that the OS Config agent is installed on the Compute Engine instance.\u2022 Provide the security team member roles/osconfig.vulnerabilityReportViewer permission.",
            "D. \u2022 Ensure that the OS Config agent is installed on the Compute Engine instance.\u2022 Create a log sink to BigQuery dataset.\u2022 Provide the security team member with access to this dataset."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 255,
        "question": "You want to enable your development team to deploy new features to an existing Cloud Run service in production. To minimize the risk associated with a new revision, you want to reduce the number of customers who might be affected by an outage without introducing any development or operational costs to your customers. You want to follow Google-recommended practices for managing revisions to a service. What should you do?",
        "answers": [
            "A. Ask your customers to retry access to your service with exponential backoff to mitigate any potential problems after the new revision is deployed.",
            "B. Gradually roll out the new revision and split customer traffic between the revisions to allow rollback in case a problem occurs.",
            "C. Send all customer traffic to the new revision, and roll back to a previous revision if you witness any problems in production.",
            "D. Deploy your application to a second Cloud Run service, and ask your customers to use the second Cloud Run service."
        ],
        "correct_answer": "B",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 256,
        "question": "You have deployed an application on a Compute Engine instance. An external consultant needs to access the Linux-based instance. The consultant is connected to your corporate network through a VPN connection, but the consultant has no Google account. What should you do?",
        "answers": [
            "A. Instruct the external consultant to use the gcloud compute ssh command line tool by using Identity-Aware Proxy to access the instance.",
            "B. Instruct the external consultant to use the gcloud compute ssh command line tool by using the public IP address of the instance to access it.",
            "C. Instruct the external consultant to generate an SSH key pair, and request the public key from the consultant. Add the public key to the instance yourself, and have the consultant access the instance through SSH with their private key.",
            "D. Instruct the external consultant to generate an SSH key pair, and request the private key from the consultant. Add the private key to the instance yourself, and have the consultant access the instance through SSH with their public key."
        ],
        "correct_answer": "C",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 257,
        "question": "After a recent security incident, your startup company wants better insight into what is happening in the Google Cloud environment. You need to monitor unexpected firewall changes and instance creation. Your company prefers simple solutions. What should you do?",
        "answers": [
            "A. Create a log sink to forward Cloud Audit Logs filtered for firewalls and compute instances to Cloud Storage. Use BigQuery to periodically analyze log events in the storage bucket.",
            "B. Use Cloud Logging filters to create log-based metrics for firewall and instance actions. Monitor the changes and set up reasonable alerts.",
            "C. Install Kibana on a compute instance. Create a log sink to forward Cloud Audit Logs filtered for firewalls and compute instances to Pub/Sub. Target the Pub/Sub topic to push messages to the Kibana instance. Analyze the logs on Kibana in real time.",
            "D. Turn on Google Cloud firewall rules logging, and set up alerts for any insert, update, or delete events."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 258,
        "question": "You are configuring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in the crm-databases project. You want to follow Google-recommended practices to grant access to the service account in the web-applications project. What should you do?",
        "answers": [
            "A. Grant \"project owner\" for web-applications appropriate roles to crm-databases.",
            "B. Grant \"project owner\" role to crm-databases and the web-applications project.",
            "C. Grant \"project owner\" role to crm-databases and roles/bigquery.dataViewer role to web-applications.",
            "D. Grant roles/bigquery.dataViewer role to crm-databases and appropriate roles to web-applications."
        ],
        "correct_answer": "D",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 259,
        "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnetwork with range 172.16.20.128/25. There are no private IP addresses available in the subnetwork. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
        "answers": [
            "A. Modify the existing subnet range to 172.16.20.0/24.",
            "B. Create a new Secondary IP Range in the VPC and configure the VMs to use that range.",
            "C. Create a new VPC network for the VMs. Enable VPC Peering between the VMs'VPC network and the Dataproc cluster VPC network.",
            "D. Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange."
        ],
        "correct_answer": "A",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 260,
        "question": "You are building a backend service for an ecommerce platform that will persist transaction data from mobile and web clients. After the platform is launched, you expect a large volume of global transactions. Your business team wants to run SQL queries to analyze the data. You need to build a highly available and scalable data store for the platform. What should you do?",
        "answers": [
            "A. Create a multi-region Cloud Spanner instance with an optimized schema.",
            "B. Create a multi-region Firestore database with aggregation query enabled.",
            "C. Create a multi-region Cloud SQL for PostgreSQL database with optimized indexes.",
            "D. Create a multi-region BigQuery dataset with optimized tables."
        ],
        "correct_answer": "A",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 261,
        "question": "You are in charge of provisioning access for all Google Cloud users in your organization. Your company recently acquired a startup company that has their own Google Cloud organization. You need to ensure that your Site Reliability Engineers (SREs) have the same project permissions in the startup company's organization as in your own organization. What should you do?",
        "answers": [
            "A. In the Google Cloud console for your organization, select Create role from selection, and choose destination as the startup company's organization.",
            "B. In the Google Cloud console for the startup company, select Create role from selection and choose source as the startup company's Google Cloud organization.",
            "C. Use the gcloud iam roles copy command, and provide the Organization ID of the startup company's Google Cloud Organization as the destination.",
            "D. Use the gcloud iam roles copy command, and provide the project IDs of all projects in the startup company's organization as the destination."
        ],
        "correct_answer": "C",
        "category": "IAM & Authentication"
    },
    {
        "question_number": 262,
        "question": "You need to extract text from audio files by using the Speech-to-Text API. The audio files are pushed to a Cloud Storage bucket. You need to implement a fully managed, serverless compute solution that requires authentication and aligns with Google-recommended practices. You want to automate the call to the API by submitting each file to the API as the audio file arrives in the bucket. What should you do?",
        "answers": [
            "A. Create an App Engine standard environment triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-TextAPI.",
            "B. Run a Kubernetes job to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.",
            "C. Run a Python script by using a Linux cron job in Compute Engine to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.",
            "D. Create a Cloud Function triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-Text API."
        ],
        "correct_answer": "D",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 263,
        "question": "Your customer wants you to create a secure website with autoscaling based on the compute instance CPU load. You want to enhance performance by storing static content in Cloud Storage. Which resources are needed to distribute the user traffic?",
        "answers": [
            "A. An external HTTP(S) load balancer with a managed SSL certificate to distribute the load and a URL map to target the requests for the static content to the Cloud Storage backend.",
            "B. An external network load balancer pointing to the backend instances to distribute the load evenly. The web servers will forward the request to the Cloud Storage as needed.",
            "C. An internal HTTP(S) load balancer together with Identity-Aware Proxy to allow only HTTPS traffic.",
            "D. An external HTTP(S) load balancer to distribute the load and a URL map to target the requests for the static content to the Cloud Storage backend. Install the HTTPS certificates on the instance."
        ],
        "correct_answer": "A",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 264,
        "question": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput \u2013 up to thousands of events per hour per device \u2013 and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
        "answers": [
            "A. Create files in Cloud Storage as data comes in.",
            "B. Create a file in Filestore per device, and append new data to that file.",
            "C. Ingest the data into Cloud SQL. Use multiple read replicas to match the throughput.",
            "D. Ingest the data into Bigtable. Create a row key based on the event timestamp."
        ],
        "correct_answer": "D",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 265,
        "question": "You just installed the Google Cloud CLI on your new corporate laptop. You need to list the existing instances of your company on Google Cloud. What must you do before you run the gcloud compute instances list command? (Choose two.)",
        "answers": [
            "A. Run gcloud auth login, enter your login credentials in the dialog window, and paste the received login token to gcloud CLI.",
            "B. Create a Google Cloud service account, and download the service account key. Place the key file in a folder on your machine where gcloud CLI can find it.",
            "C. Download your Cloud Identity user account key. Place the key file in a folder on your machine where gcloud CLI can find it.",
            "D. Run gcloud config set compute/zone $my_zone to set the default zone for gcloud CLI.",
            "E. Run gcloud config set project $my_project to set the default project for gcloud CLI."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 266,
        "question": "You are planning to migrate your on-premises data to Google Cloud. The data includes:\u2022\t200 TB of video files in SAN storage\u2022\tData warehouse data stored on Amazon Redshift\u2022\t20 GB of PNG files stored on an S3 bucketYou need to load the video files into a Cloud Storage bucket, transfer the data warehouse data into BigQuery, and load the PNG files into a second Cloud Storage bucket. You want to follow Google-recommended practices and avoid writing any code for the migration. What should you do?",
        "answers": [
            "A. Use gcloud storage for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files.",
            "B. Use Transfer Appliance for the videos, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.",
            "C. Use Storage Transfer Service for the video files, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.",
            "D. Use Cloud Data Fusion for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files."
        ],
        "correct_answer": "B",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 267,
        "question": "You want to deploy a new containerized application into Google Cloud by using a Kubernetes manifest. You want to have full control over the Kubernetes deployment, and at the same time, you want to minimize configuring infrastructure. What should you do?",
        "answers": [
            "A. Deploy the application on GKE Autopilot.",
            "B. Deploy the application on Cloud Run.",
            "C. Deploy the application on GKE Standard.",
            "D. Deploy the application on Cloud Functions."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 268,
        "question": "Your team is building a website that handles votes from a large user population. The incoming votes will arrive at various rates. You want to optimize the storage and processing of the votes. What should you do?",
        "answers": [
            "A. Save the incoming votes to Firestore. Use Cloud Scheduler to trigger a Cloud Functions instance to periodically process the votes.",
            "B. Use a dedicated instance to process the incoming votes. Send the votes directly to this instance.",
            "C. Save the incoming votes to a JSON file on Cloud Storage. Process the votes in a batch at the end of the day.",
            "D. Save the incoming votes to Pub/Sub. Use the Pub/Sub topic to trigger a Cloud Functions instance to process the votes."
        ],
        "correct_answer": "D",
        "category": "Storage (Block, File, Object)"
    },
    {
        "question_number": 269,
        "question": "You are deploying an application on Google Cloud that requires a relational database for storage. To satisfy your company\u2019s security policies, your application must connect to your database through an encrypted and authenticated connection that requires minimal management and integrates with Identity and Access Management (IAM). What should you do?",
        "answers": [
            "A. Deploy a Cloud SQL database with the SSL mode set to encrypted only, configure SSL/TLS client certificates, and configure a database user and password.",
            "B. Deploy a Cloud SQL database with the SSL mode set to encrypted only, configure SSL/TLS client certificates, and configure IAM database authentication.",
            "C. Deploy a Cloud SQL database and configure IAM database authentication. Access the database through the Cloud SQL Auth Proxy.",
            "D. Deploy a Cloud SQL database and configure a database user and password. Access the database through the Cloud SQL Auth Proxy."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 270,
        "question": "You have two Google Cloud projects: project-a with VPC vpc-a (10.0.0.0/16) and project-b with VPC vpc-b (10.8.0.0/16). Your frontend application resides in vpc-a and the backend API services are deployed in vpc-b. You need to efficiently and cost-effectively enable communication between these Google Cloud projects. You also want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Create an OpenVPN connection between vpc-a and vpc-b.",
            "B. Create VPC Network Peering between vpc-a and vpc-b.",
            "C. Configure a Cloud Router in vpc-a and another Cloud Router in vpc-b.",
            "D. Configure a Cloud Interconnect connection between vpc-a and vpc-b."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 271,
        "question": "Your company is running a critical workload on a single Compute Engine VM instance. Your company's disaster recovery policies require you to back up the entire instance\u2019s disk data every day. The backups must be retained for 7 days. You must configure a backup solution that complies with your company\u2019s security policies and requires minimal setup and configuration. What should you do?",
        "answers": [
            "A. Configure the instance to use persistent disk asynchronous replication.",
            "B. Configure daily scheduled persistent disk snapshots with a retention period of 7 days.",
            "C. Configure Cloud Scheduler to trigger a Cloud Function each day that creates a new machine image and deletes machine images that are older than 7 days.",
            "D. Configure a bash script using gsutil to run daily through a cron job. Copy the disk\u2019s files to a Cloud Storage bucket with archive storage class and an object lifecycle rule to delete the objects after 7 days."
        ],
        "correct_answer": "B",
        "category": "Security & Encryption"
    },
    {
        "question_number": 272,
        "question": "Your company requires that Google Cloud products are created with a specific configuration to comply with your company\u2019s security policies. You need to implement a mechanism that will allow software engineers at your company to deploy and update Google Cloud products in a preconfigured and approved manner. What should you do?",
        "answers": [
            "A. Create Java packages that utilize the Google Cloud Client Libraries for Java to configure Google Cloud products. Store and share the packages in a source code repository.",
            "B. Create bash scripts that utilize the Google Cloud CLI to configure Google Cloud products. Store and share the bash scripts in a source code repository.",
            "C. Use the Google Cloud APIs by using curl to configure Google Cloud products. Store and share the curl commands in a source code repository.",
            "D. Create Terraform modules that utilize the Google Cloud Terraform Provider to configure Google Cloud products. Store and share the modules in a source code repository."
        ],
        "correct_answer": "D",
        "category": "Security & Encryption"
    },
    {
        "question_number": 273,
        "question": "You are a Google Cloud organization administrator. You need to configure organization policies and log sinks on Google Cloud projects that cannot be removed by project users to comply with your company's security policies. The security policies are different for each company department. Each company department has a user with the Project Owner role assigned to their projects. What should you do?",
        "answers": [
            "A. Use a standard naming convention for projects that includes the department name. Configure organization policies on the organization and log sinks on the projects.",
            "B. Use a standard naming convention for projects that includes the department name. Configure both organization policies and log sinks on the projects.",
            "C. Organize projects under folders for each department. Configure both organization policies and log sinks on the folders.",
            "D. Organize projects under folders for each department. Configure organization policies on the organization and log sinks on the folders."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 274,
        "question": "You are deploying a web application using Compute Engine. You created a managed instance group (MIG) to host the application. You want to follow Google-recommended practices to implement a secure and highly available solution. What should you do?",
        "answers": [
            "A. Use SSL proxy load balancing for the MIG and an A record in your DNS private zone with the load balancer's IP address.",
            "B. Use SSL proxy load balancing for the MIG and a CNAME record in your DNS public zone with the load balancer\u2019s IP address.",
            "C. Use HTTP(S) load balancing for the MIG and a CNAME record in your DNS private zone with the load balancer\u2019s IP address.",
            "D. Use HTTP(S) load balancing for the MIG and an A record in your DNS public zone with the load balancer\u2019s IP address."
        ],
        "correct_answer": "D",
        "category": "Compute Engine"
    },
    {
        "question_number": 275,
        "question": "You have several hundred microservice applications running in a Google Kubernetes Engine (GKE) cluster. Each microservice is a deployment with resource limits configured for each container in the deployment. You've observed that the resource limits for memory and CPU are not appropriately set for many of the microservices. You want to ensure that each microservice has right sized limits for memory and CPU. What should you do?",
        "answers": [
            "A. Configure a Vertical Pod Autoscaler for each microservice.",
            "B. Modify the cluster's node pool machine type and choose a machine type with more memory and CPU.",
            "C. Configure a Horizontal Pod Autoscaler for each microservice.",
            "D. Configure GKE cluster autoscaling."
        ],
        "correct_answer": "A",
        "category": "CI/CD & Deployment"
    },
    {
        "question_number": 276,
        "question": "Your company uses BigQuery to store and analyze data. Upon submitting your query in BigQuery, the query fails with a quotaExceeded error. You need to diagnose the issue causing the error. What should you do? (Choose two.)",
        "answers": [
            "A. Use BigQuery BI Engine to analyze the issue.",
            "B. Use the INFORMATION_SCHEMA views to analyze the underlying issue.",
            "C. Configure Cloud Trace to analyze the issue.",
            "D. Search errors in Cloud Audit Logs to analyze the issue.",
            "E. View errors in Cloud Monitoring to analyze the issue."
        ],
        "correct_answer": "BD",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 277,
        "question": "Your team has developed a stateless application which requires it to be run directly on virtual machines. The application is expected to receive a fluctuating amount of traffic and needs to scale automatically. You need to deploy the application. What should you do?",
        "answers": [
            "A. Deploy the application on a managed instance group and configure autoscaling.",
            "B. Deploy the application on a Kubernetes Engine cluster and configure node pool autoscaling.",
            "C. Deploy the application on Cloud Functions and configure the maximum number instances.",
            "D. Deploy the application on Cloud Run and configure autoscaling."
        ],
        "correct_answer": "A",
        "category": "Compute Engine"
    },
    {
        "question_number": 278,
        "question": "Your web application is hosted on Cloud Run and needs to query a Cloud SQL database. Every morning during a traffic spike, you notice API quota errors in Cloud SQL logs. The project has already reached the maximum API quota. You want to make a configuration change to mitigate the issue. What should you do?",
        "answers": [
            "A. Modify the minimum number of Cloud Run instances.",
            "B. Use traffic splitting.",
            "C. Modify the maximum number of Cloud Run instances.",
            "D. Set a minimum concurrent requests environment variable for the application."
        ],
        "correct_answer": "A",
        "category": "Serverless (Cloud Functions, Cloud Run, App Engine)"
    },
    {
        "question_number": 279,
        "question": "You need to deploy a single stateless web application with a web interface and multiple endpoints. For security reasons, the web application must be reachable from an internal IP address from your company's private VPC and on-premises network. You also need to update the web application multiple times per day with minimal effort and want to manage a minimal amount of cloud infrastructure. What should you do?",
        "answers": [
            "A. Deploy the web application on Google Kubernetes Engine standard edition with an internal ingress.",
            "B. Deploy the web application on Cloud Run with Private Google Access configured.",
            "C. Deploy the web application on Cloud Run with Private Service Connect configured.",
            "D. Deploy the web application to GKE Autopilot with Private Google Access configured."
        ],
        "correct_answer": "C",
        "category": "Security & Encryption"
    },
    {
        "question_number": 280,
        "question": "You use Cloud Logging to capture application logs. You now need to use SQL to analyze the application logs in Cloud Logging, and you want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Develop SQL queries by using Gemini for Google Cloud.",
            "B. Enable Log Analytics for the log bucket and create a linked dataset in BigQuery.",
            "C. Create a schema for the storage bucket and run SQL queries for the data in the bucket.",
            "D. Export logs to a storage bucket and create an external view in BigQuery."
        ],
        "correct_answer": "B",
        "category": "Operations & Monitoring"
    },
    {
        "question_number": 281,
        "question": "You need to deploy a third-party software application onto a single Compute Engine VM instance. The application requires the highest speed read and write disk access for the internal database. You need to ensure the instance will recover on failure. What should you do?",
        "answers": [
            "A. Create an instance template. Set the disk type to be an SSD Persistent Disk. Launch the instance template as part of a stateful managed instance group.",
            "B. Create an instance template. Set the disk type to be an SSD Persistent Disk. Launch the instance template as part of a stateless managed instance group.",
            "C. Create an instance template. Set the disk type to be Hyperdisk Extreme. Launch the instance template as part of a stateful managed instance group.",
            "D. Create an instance template. Set the disk type to be Hyperdisk Extreme. Launch the instance template as part of a stateless managed instance group."
        ],
        "correct_answer": "C",
        "category": "Databases & Messaging"
    },
    {
        "question_number": 282,
        "question": "You have a VM instance running in a VPC with single-stack subnets. You need to ensure that the VM instance has a fixed IP address so that other services hosted in the same VPC can communicate with the VM. You want to follow Google-recommended practices while minimizing cost. What should you do?",
        "answers": [
            "A. Promote the existing IP address of the VM to become a static external IP address.",
            "B. Promote the existing IP address of the VM to become a static internal IP address.",
            "C. Reserve a new static external IPv6 address and assign the new IP address to the VM.",
            "D. Reserve a new static external IP address and assign the new IP address to the VM."
        ],
        "correct_answer": "B",
        "category": "Cloud VPC & Networking"
    },
    {
        "question_number": 283,
        "question": "Your preview application, deployed on a single-zone Google Kubernetes Engine (GKE) cluster in us-central1, has gained popularity. You are now ready to make the application generally available. You need to deploy the application to production while ensuring high availability and resilience. You also want to follow Google-recommended practices. What should you do?",
        "answers": [
            "A. Use the gcloud container clusters create command with the options --enable-multi-networking and --enable-autoscaling to create an autoscaling zonal cluster and deploy the application to it.",
            "B. Use the gcloud container clusters create-auto command to create an autopilot cluster and deploy the application to it.",
            "C. Use the gcloud container clusters update command with the option --region us-central1 to update the cluster and deploy the application to it.",
            "D. Use the gcloud container clusters update command with the option --node-locations us-central1-a,us-central1-b to update the cluster and deploy the application to the nodes."
        ],
        "correct_answer": "B",
        "category": "Kubernetes Engine & Containers"
    }
]