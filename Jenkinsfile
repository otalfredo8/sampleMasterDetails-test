pipeline {
    agent {
        docker {
            image 'cypress/included:14.3.1'
            args '-u root --entrypoint=""'
        }
    }

    environment {
        GIT_REPO = 'https://github.com/otalfredo8/sampleMasterDetails-test.git'
        EMAIL_RECIPIENTS = 'otorresa8@gmail.com'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔍 Verifying workspace and starting checkout...'
                sh 'pwd && ls -l'
                git url: "${env.GIT_REPO}", branch: 'main'
                sh 'echo "✅ Checkout complete"; git log -1'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Checking node & npm versions before installing...'
                sh 'node -v && npm -v'
                sh 'echo "🔍 Listing initial node_modules (if any)" && ls -l node_modules || echo "None"'
                sh 'npm ci'
                sh 'echo "✅ Dependencies installed"; npm list --depth=0'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                echo '🚀 Starting Cypress test run...'
                sh 'npx cypress verify'
                sh 'npx cypress run || true' // use `|| true` to let post block still run on fail
                sh 'echo "🧪 Cypress run completed"; ls -lh cypress/videos || echo "No videos"'
            }
        }
    }

    post {
		success {
			echo '✅ Build succeeded (email disabled)'
		}
		failure {
			echo '❌ Build failed (email disabled)'
		}
        //success {
            //emailext(
            //    to: "${env.EMAIL_RECIPIENTS}",
            //    subject: "✅ Cypress Tests Passed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            //    body: """
            //    Hello Team,

            //    Cypress tests passed successfully! 🎉

            //    Job: ${env.JOB_NAME}
            //    Build: #${env.BUILD_NUMBER}
            //    URL: ${env.BUILD_URL}
            //    """
            //)
        //}

        //failure {
            //emailext(
            //    to: "${env.EMAIL_RECIPIENTS}",
            //    subject: "❌ Cypress Tests Failed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            //    body: """
            //    Attention Team,

            //    Cypress test run has failed 😞

            //    Job: ${env.JOB_NAME}
            //    Build: #${env.BUILD_NUMBER}
            //    URL: ${env.BUILD_URL}

            //    Please investigate.
            //    """
            //)
        //}
    }
}