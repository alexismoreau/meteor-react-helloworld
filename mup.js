module.exports = {
  servers: {
    one: {
      host: '137.74.175.30',
      username: 'alexis',
      // pem: '/home/user/.ssh/id_rsa', // mup doesn't support '~' alias for home directory
      password: 'Azerty1!',
      // or leave blank to authenticate using ssh-agent
      opts: {
          port: 22,
      },
    }
  },

  meteor: {
    name: 'app',
    path: '../meteor-react-helloworld', // mup doesn't support '~' alias for home directory
    // port: 000, // useful when deploying multiple instances (optional)
    docker: {
      // image: 'kadirahq/meteord', // (optional)
      image: 'abernix/meteord:base' // use this image if using Meteor 1.4+
    },
    servers: {
      one: {}, two: {}, three: {} // list of servers to deploy, from the 'servers' list
    },
    buildOptions: {
      serverOnly: true,
      debug: true,
      cleanAfterBuild: true // default
    },
    env: {
      ROOT_URL: 'http://137.74.175.30',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    deployCheckWaitTime: 60 // default 10
  },
};

