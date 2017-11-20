node {
    stage("checkout"){
		 git url: 'https://github.com/rusho-shaw/policy-mgmt-ui.git',branch: 'master' 
	}
	stage("npm_install"){
		bat "npm install"
	}
	stage("build"){
		bat "ng build -prod"
	}
	stage("cloudfoundry_login"){
	    withCredentials([usernamePassword(credentialsId: 'd5ebc805-21c6-4f7b-b0b3-5a7d5372aa17', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            bat 'echo %USERNAME%'
	        bat 'cf login -a https://api.run.pivotal.io -u %USERNAME% -p %PASSWORD%'
	    }
	}
	stage("clodfoundry_push"){
	    bat "cf push"
	}
}