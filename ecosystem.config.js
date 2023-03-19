module.exports = {
    apps: [
        {
            name: 'JatriWebsite',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            port: 3021
        }
    ]
}