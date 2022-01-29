import axios from "axios";

const owner = "bifacil"
const name = "Serraclara"
const token = "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"
const githubUrl = 'https://api.github.com/graphql'

export const GetGithubDiscussions = async () => {
  try {
      const newsQuery = `{
      repository(owner: "${owner}", name: "${name}") { 
          name, description,
          discussionCategories(first: 100){nodes {id,name}}, 
          discussions(last:100, categoryId: "DIC_kwDOGn2USc4CA4wr"){ nodes {id, labels(last:10) {nodes {name} } ,category {name, id}  ,title, number,url, bodyHTML, createdAt, updatedAt}}
        }
      }`
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
      
      const response = await axios.post(githubUrl, {query: newsQuery}, {headers: headers})
      console.log(response);
      return response.data.data
  } catch (error) {
    console.log(error)
  }
}