const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      'â'.repeat(passedProgressBarIndex) +
      'â'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

### Hi there ð


Here are some ideas to get you started:

- ð Iâm a developer and shutterbug
- ð­ Iâm currently working on a tech company in Beijing
- ð± Iâm currently learning Typescript
- ð¤ Iâm looking for help with my photo and my code
- ð¬ Ask me about everything
- ð« How to reach me: chang_zhenlin@126.com
- â¡ Fun fact: This page mustn't get more than 1k viewsð¤£

![Snake animation](https://github.com/changzhenlin/changzhenlin/blob/output/github-contribution-grid-snake.svg)

![Github Stats](https://github-readme-stats.vercel.app/api?username=changzhenlin&show_icons=true&include_all_commits=true&count_private=true)

[![changzhenlin's GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=changzhenlin&theme=xcode)](https://github.com/changzhenlin)

<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

---

â° Updated on ${new Date().toUTCString()}
`
