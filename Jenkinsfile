pipeline {
    agent {
        docker {
            image 'alpine'
        }
    }
    stages {
        stage('Test Docker Agent') {
            steps {
				sh 'echo "HOSTNAME: $(hostname)"; cat /etc/os-release'
                sh 'echo "✅ Running inside a Docker container!"'
                sh 'cat /etc/os-release'
            }
        }
    }
}
