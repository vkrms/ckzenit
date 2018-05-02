export const environment = {
  production: true,
  server: "http://ckz.u2324.lime.elastictech.org",
  // resource: "http://ckz.u2324.lime.elastictech.org/wp-json/ckz/v1",
  get resource(){
    return this.server + '/wp-json/ckz/v1'
  }
};
