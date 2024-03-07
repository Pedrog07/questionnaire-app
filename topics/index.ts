import * as fs from "fs"
import path from "path"

export function getAllTopics(){
    let dirPath = path.resolve(__dirname, "../../../topics")

    const topics: any[] = []

    fs.readdirSync(dirPath).forEach(function (file: any) {
        let fileName = file;
        if ( fileName.includes('.json')) {
            const json = require("./"+ fileName)

            for(let topicName in json.skill){
                topics.push(json.skill[topicName])
            }
          
        }
      });

      console.log(topics)
}

getAllTopics()


// import  accessibility from './accessibility.json'
// import  angular from './angular.json'
// import  bitbucket from './bitbucket.json'
// import  css from './css.json'
// import  dom from './dom.json'
