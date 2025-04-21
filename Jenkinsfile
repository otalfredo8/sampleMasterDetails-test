pipeline {
    agent {
        docker {
            image 'cypress/included:14.3.1'
            args '-u root'
        }
    }

    environment {
        GIT_REPO = 'https://github.com/otalfredo8/sampleMasterDetails-test.git'
        EMAIL_RECIPIENTS = 'otorresa8@gmail.com'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "${env.GIT_REPO}", branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        success {
            emailext(
                to: "${env.EMAIL_RECIPIENTS}",
                subject: "✅ Cypress Tests Passed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                Hello Team,

                Cypress tests passed successfully! 🎉

                Job: ${env.JOB_NAME}
                Build: #${env.BUILD_NUMBER}
                URL: ${env.BUILD_URL}
                """
            )
        }

        failure {
            emailext(
                to: "${env.EMAIL_RECIPIENTS}",
                subject: "❌ Cypress Tests Failed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                Attention Team,

                Cypress test run has failed 😞

                Job: ${env.JOB_NAME}
                Build: #${env.BUILD_NUMBER}
                URL: ${env.BUILD_URL}

                Please investigate.
                """
            )
        }
    }
}
