import * as fs from 'fs'
import path from 'path'

export function getAllTopics() {
  let dirPath = path.resolve(__dirname, '../../../topics')

  const topics: any[] = []

  // const files = [
  //   'accesibility',
  //   'angular',
  //   'bitbucket',
  //   'css',
  //   'dom-manipulation',
  //   'fetch-ajax',
  //   'forms-and-validations',
  //   'git',
  //   'github',
  //   'gitlab',
  //   'html-basic',
  //   'html',
  //   'javascript',
  //   'learn-the-basics-js',
  //   'learn-the-basics',
  //   'making-layouts',
  //   'npm',
  //   'package-managers',
  //   'pick-a-framework',
  //   'pnpm',
  //   'react',
  //   'responsive-design',
  //   'seo-basics',
  //   'solid-js',
  //   'svelte',
  //   'vcs-hosting',
  //   'version-control-system',
  //   'vuejs',
  //   'writing-semantic-html',
  //   'yarn',
  // ]

  // for (let file of files) {
  //   const json = require(dirPath + '/' + file + '.json')

  //   for (let topicName in json.skill) {
  //     topics.push(json.skill[topicName])
  //   }
  // }

  fs.readdirSync(dirPath).forEach(function (file: any) {
    let fileName = file
    if (fileName.includes('.json')) {
      const json = require('./' + fileName)

      for (let topicName in json.skill) {
        topics.push(json.skill[topicName])
      }
    }
  })

  console.log(topics)

  return topics
}
