import stylus from 'stylus';

export default class App {
  /**
   * 生成 CSS
   */
  public async buildCss() {
    const stylusFilePath = `./assets/styles/main.styl`;
    const cssFolderPath = `./styles`;

    // await fse.ensureDir(cssFolderPath);

    // const stylusString = await fs.readFileSync(stylusFilePath, 'utf8');

    await stylus.render('stylusString', {
      filename: `./assets/styles/main.styl`,
    }, async (err: any, cssString: string) => {
      if (err) {
        console.log(err);
      }
      // await fs.writeFileSync(`${cssFolderPath}/main.css`, cssString);
    });
  }
}
