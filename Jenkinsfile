pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ritikyadav444/project2-node-app.git'
            }
        }

        stage('Build and Deploy') {
            steps {
                sh '''
                cd /home/ubuntu/project2-node-app
                docker compose down
                docker compose up --build -d
                '''
            }
        }
    }
}