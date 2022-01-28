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
          discussions(last:100){ nodes {id, title, url, bodyHTML, createdAt, updatedAt}}
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