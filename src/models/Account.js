export class Account {
  /**
   * @typedef AccountData
   * @property {string} id
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} bio
   * @property {string} coverImg
   * 
   * @param {AccountData} data
   */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.coverImg = data.coverImg
  }
}
