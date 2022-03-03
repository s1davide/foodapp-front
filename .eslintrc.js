module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
      ],
    settings: {      
        'import/resolver': {
            alias: {
                map: [
                    // And all your import aliases
                    ['Animations','./src/animations']
                    ['Src', './src'],
                    ['Components', './src/components'],
                    ['Pages', './src/pages'],
                    ['Store', './src/store'],
                    ['Assets', './src/assets'],
                    ['Img', './src/assets/img'],
                    ['Icons', './src/assets/icons'],
                    ["Utils", "../src/utils"],
                    ["StaticData", "../src/staticData"]
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};