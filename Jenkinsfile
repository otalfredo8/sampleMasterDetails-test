pipeline {
    agent any

    stages {
        stage('Pull Cypress Image') {
            steps {
                sh 'podman pull cypress/included:14.3.1'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh '''
                podman run --rm \
                  -v $PWD:/e2e \
                  -w /e2e \
                  cypress/included:14.3.1 \
                  npx cypress run
                '''
            }
        }
    }
	post {
		always {
			echo '🧹 Cleaning up Podman containers and images...'
			sh '''
			podman container prune -f
			podman image prune -f
			'''
		}
	}
}