import ejs from 'ejs';
export const compile = (templatePath, data) =>
  // const templatePosition = `@micro-cli/cli-plugin-eslint/generator/templates/react/${templateName}`
  new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        reject(err);
      }
      return resolve(result);
    });
  });
